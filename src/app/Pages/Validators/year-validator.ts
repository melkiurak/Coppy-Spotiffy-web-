import { AbstractControl, ControlContainer, ValidatorFn } from "@angular/forms";

export const yearValidatorPattern = /^(19[5-9]\d|20[0-1]\d|202[0-4])$/;
export function yearValidator(): ValidatorFn{
    return(control: AbstractControl): { [key:string]: any } | null =>{
        const isValid = yearValidatorPattern.test(control.value);
        return isValid ? null : {'invalidYear': true};
    };
}