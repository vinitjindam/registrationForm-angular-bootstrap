import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegFormService {
  post: any;
  //register:RegisterModel[]=[]

  
  constructor( private _http:HttpClient) { }

  saveForm(registerForm:RegisterModel)
  {
   return this._http.post('http://localhost:3000/users',registerForm);
  }

  login(email:string,password:string){
    return this._http.get<RegisterModel[]>(`http://localhost:3000/users/?email=${email}&pwd=${password}`);
  }

}
