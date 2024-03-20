import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { yearValidator } from '../Validators/year-validator';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';
import { SidebarComponent } from '../../Components/sidebar/sidebar.component';
import { HomeComponent } from '../../Home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  //Иконки
  arrowleft = faChevronLeft
  //Скрываем элементы
  hideElement: boolean = false;
  //Шаг
  CurrentStep = 1;
  totalStep = 3;//Общее количество шагов
  //Формы
  registerForm: FormGroup;
  //Прогрес бар
  progress: number = 0;

  constructor( private snackBar:MatSnackBar, private route: Router, private fb: FormBuilder){
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
      userDay: ['', [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      userMonth: ['', Validators.required],
      userYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      userGender: ['', Validators.required]
    });
  } 
  ngOnInit(): void {
    //Создаём логику для прогресса
    this.progress = (this.CurrentStep / this.totalStep) * 50;
  }
  //Создаём переходы 
  NextStep(){
  //Добавляем шаги
  this.CurrentStep++;
  //Устанавливаем значения в зависимости от шага
  this.progress = (this.CurrentStep / this.totalStep) * 100;
  //Устаналвием значение и убираем элементы
  this.hideElement = true;
  }
  BackStep(){
    this.CurrentStep--;
    // Устанавливаем значение прогресса в зависимости от текущего шага
    this.progress = ((this.CurrentStep - 1) / this.totalStep) * 150;
    //Устаналвием значение и убираем элементы
    if (this.CurrentStep == 1){
      this.hideElement = false;
    }
  }
  
//Создаём валидаторы проверки
  //Валидатор на проверку большой буквы
  isUppercasePresent(){
    const Password = this.registerForm.get('userPassword')?.value;
    return /[A-Z]/.test(Password);
  }
  //Проверка цыфры
  isNumberPresent(){
    const Password = this.registerForm.get('userPassword')?.value;
    return /\d/.test(Password);
  }
  //Проверка количества
  isLengthPresent(){
    const Password = this.registerForm.get('userPassword')?.value;
    return Password.length >= 8;
  }
  //Кнопка регестрации
  submitForm(){ 
    //Вывод сообщения
    this.snackBar.open('Регестрация прошла успешно', 'Закрыть',{
      duration: 3000
    });
    //Перенаправляем на главную страницу
    this.route.navigate(['/'])
    console.log('dsadsa')
  }
}
