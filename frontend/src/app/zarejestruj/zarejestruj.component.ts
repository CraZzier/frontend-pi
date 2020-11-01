import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../register.service';
import {CheckingcookieService} from  '../checkingcookie.service'
import { from, Observable } from 'rxjs';
import {RegisterData} from '../model/register_data';
import { HttpErrorResponse } from '@angular/common/http';
import {passwordCheck} from '../shared/passwordCheck.directive';
import iziToast from 'izitoast/dist/js/iziToast.min.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-zarejestruj',
  templateUrl: './zarejestruj.component.html',
  styleUrls: ['./zarejestruj.component.scss']
})
export class ZarejestrujComponent implements OnInit {
  default_value = 'woman';
  agreement = 1;
  validated = 1;
  register_f = new FormGroup({
    name : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern("[a-zA-Z]*")
    ]),
    surname : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern("[a-zA-Z]*")
    ]),
    pesel: new FormControl('',[
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.pattern("[0-9]*")
    ]),
    sex: new FormControl('',[
      Validators.required,
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.email
    ]),
    date: new FormControl('',[
      Validators.required,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern("[0-9a-zA-Z!@#$%^&*()]*")
    ]),
    passwordR: new FormControl('',[
      Validators.required,
    ]),
    agree: new FormControl('',[
      Validators.requiredTrue,
    ]),
  },{ validators : passwordCheck });


  constructor(
    private register_service : RegisterService,
    private logincheck_service : CheckingcookieService,
    private router: Router,
  ) {}
  
  onSubmit(): void{

    //Walidacja pól formularza oraz zgody
    if (this.register_f.get('agree').errors != null){
      this.agreement = 0;
    }else{
      this.agreement = 1;
    }
    if(
    this.register_f.get('name').errors != null ||
    this.register_f.get('surname').errors != null ||
    this.register_f.get('pesel').errors != null ||
    this.register_f.get('sex').errors != null ||
    this.register_f.get('email').errors != null || 
    this.register_f.get('date').errors != null ||
    this.register_f.get('password').errors != null || 
    this.register_f.get('passwordR').errors != null ||
    this.register_f.errors != null){
      this.validated = 0;
      
    }else{
      this.validated = 1;
    }
  
    if(this.agreement == 0 || this.validated == 0){
      iziToast.error({
        title: 'Error',
        message: 'Błąd w formularzu',
      });
      return;
    }
    iziToast.success({
      title: 'Ok',
      message: 'Oczekiwanie na odpowiedź serwera',
    });

    //Dane wstepne zaakcpetowane - wysyłanie do serwera
    let register_user_data = new RegisterData();
    register_user_data.name = this.register_f.value.name;
    register_user_data.surname = this.register_f.value.surname;
    register_user_data.pesel = this.register_f.value.pesel;
    register_user_data.sex = this.register_f.value.sex;
    register_user_data.email = this.register_f.value.email;
    register_user_data.date = this.register_f.value.date;
    register_user_data.password = this.register_f.value.password;
    register_user_data.passwordR = this.register_f.value.passwordR;
    register_user_data.agree = this.register_f.value.agree;
    this.register_service.register(register_user_data).subscribe(
      response=>{
        if (response.Score==0){
          iziToast.error({
            title: 'Error',
            message: response.Message,
          });
        }else{
          iziToast.success({
            title: 'Ok',
            message: response.Message,
          });
        }
      },
      (error: HttpErrorResponse)=>{
        iziToast.error({
          title: 'Error',
          message: error.message,
        });
      }
    )
  }
  
  ngOnInit(): void {

  }

}
