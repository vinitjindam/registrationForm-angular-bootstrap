
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator():ValidatorFn
{
    
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    return (control: AbstractControl): { [key: string]: any } | null =>
    {
        if(regex.test(control.value)==false)
        return {"":false}
        else
        return null
    } 
   

} 
