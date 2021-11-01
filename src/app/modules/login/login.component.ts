import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthServiceService) { }
  formGroup!: FormGroup;
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authservice.login(this.formGroup.value).subscribe((res)=>{
       alert(res.responseMessage);
      })
    }
  }
}
