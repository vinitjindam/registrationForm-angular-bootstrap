import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegFormService } from '../reg-form.service';
import { RegisterModel } from '../register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private registerSrv:RegFormService, private router:Router){}


  ngOnInit(){

  }
  email='';
  password=''
  registerModel=new RegisterModel();
  

  validateLogin(){

  this.registerSrv.login(this.email,this.password).subscribe(
    data=>{
      this.registerModel=data[0]
      // console.log(data)
      // console.log(this.email)
      // console.log(this.password)
      if(this.registerModel==null){
        alert("Invalid email or password")
      }
      else if(this.registerModel.email==this.email && this.registerModel.pwd==this.password){
        alert('User logged in')
        this.router.navigate(['/home'])
        
      }
    },
    error=>{
      alert('Invalid credentials')
    }
    
  )

}
}
