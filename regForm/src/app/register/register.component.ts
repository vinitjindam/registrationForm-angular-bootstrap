import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'src/passWordValidator.validator';
// import { RegisterModel } from './register.model';
// import { RegFormService } from './reg-form.service';
import { RegisterModel } from '../register.model';
import { RegFormService } from '../reg-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  date: any;
  
  languages=["English", "Hindi", "French"];
  gender=['male','female','other'];
  securityQuestions=['What is your school name?','What is your pets name?','What is your grandfathers name?'];
  knownLang:any[]=[]
  regForm=new FormGroup(
    {
    username:new FormControl(),
    pwd:new FormControl(),
    cnfpwd:new FormControl(),
    email:new FormControl(),
    country:new FormControl(),
    dob:new FormControl(),
    phoneNumber:new FormControl(),
    gender:new FormControl(),
    langs:new FormControl(),
    file:new FormControl(),
    securityquestion:new FormControl(),
    securityans:new FormControl()
    

    }
    );
    regsiterForm=new RegisterModel();
  
  constructor(private regFormSrv:RegFormService, private router:Router){
    // this.regForm.controls['username'].setValidators([Validators.required,Validators.minLength(4)]);
    // this.regForm.controls['pwd'].setValidators(passwordValidator());
    this.setValidations();
    
  }


  ngOnInit(){
    this.date = new Date().toISOString().slice(0, 10);
    this.setValues()
    
   
  }
  setValues(){
   // this.regForm.controls['username'].setValidators([Validators.required,Validators.minLength(4)])
        this.regForm.controls['username'].setValue('vinit')
     //   this.regForm.controls['pwd'].setValidators([Validators.required,passwordValidator()])
        this.regForm.controls['pwd'].setValue('Vinit@12345')

     //  this.regForm.controls['cnfpwd'].setValidators([Validators.required])
       this.regForm.controls['cnfpwd'].setValue('Vinit@12345')

     //   this.regForm.controls['email'].setValidators([Validators.required])
        this.regForm.controls['email'].setValue('vinit@gmail.com')

      //  this.regForm.controls['gender'].setValidators([Validators.required])
  }


  
  getDetails(){ 
   
    // Password Validation
    if(!this.regForm.controls['pwd'].valid){
      alert('Enter valid password') 
    }
    if(!(this.regForm.controls['pwd'].value == this.regForm.controls['cnfpwd'].value)){
      alert('Passwords do not match')  
    }
    
    // languages known saving
    for(let i=0;i<this.languages.length;i++)
    {
      if(this.knownLang[i]==true)
      
        this.regsiterForm.languages.push(this.languages[i])
        
    }
    
    console.log(this.regForm.valid)
    this.regsiterForm.file=this.myImg
    console.log(this.regsiterForm)
    if(this.regForm.valid){
      this.regFormSrv.saveForm(this.regsiterForm).subscribe(
        data=>{
          alert('User registered')
          this.router.navigate(['/home'])
        },
        error=>{
          alert('Unable to register user')
        }
      )
    }
    
    
    
  }
  

  //Image preview code
  myImg:any;

  onUpload(fileInput:any)
    {
  
      if(fileInput.target.files && fileInput.target.files[0])
      {
        let reader=new FileReader();
        reader.onload=(e:any)=>{
          let img=new Image();
          img.src=e.target.result;
          img.onload= rs=>{
            this.myImg=e.target.result;//imp
            this.regsiterForm.file=e.target.value
          }
        }
      reader.readAsDataURL(fileInput.target.files[0])
      }

      
  
    }
    

      setValidations(){
        this.regForm.controls['username'].setValidators([Validators.required,Validators.minLength(4)])
        this.regForm.controls['username'].setValue('vinit')
        this.regForm.controls['pwd'].setValidators([Validators.required,passwordValidator()])
        this.regForm.controls['pwd'].setValue('Vinit@12345')

       this.regForm.controls['cnfpwd'].setValidators([Validators.required])
       this.regForm.controls['cnfpwd'].setValue('Vinit@12345')

        this.regForm.controls['email'].setValidators([Validators.required])
        this.regForm.controls['email'].setValue('vinit@gmail.com')

        this.regForm.controls['gender'].setValidators([Validators.required])
        //this.regForm.controls['langs'].setValidators([Validators.requiredTrue])
        this.regForm.controls['dob'].setValidators([Validators.required])
        this.regForm.controls['country'].setValidators([Validators.required])
        //this.regForm.controls['file'].setValidators([Validators.required])
        this.regForm.controls['securityquestion'].setValidators([Validators.required])
        this.regForm.controls['securityans'].setValidators([Validators.required])
      
    }


    

}
    



