import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {CheckingcookieService} from '../checkingcookie.service';
import { from } from 'rxjs';
import {LoginData} from '../model/login_data';
import { HttpErrorResponse } from '@angular/common/http';
import iziToast from 'izitoast/dist/js/iziToast.min.js'
import { Router} from '@angular/router';

@Component({
  selector: 'app-zaloguj',
  templateUrl: './zaloguj.component.html',
  styleUrls: ['./zaloguj.component.scss']
})
export class ZalogujComponent implements OnInit {
  validated = 1;
  login_f = new FormGroup({
    pesel: new FormControl('',[
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.pattern("[0-9]*")
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern("[0-9a-zA-Z!@#$%^&*()]*")
    ]),
  });
  constructor(
    private login_service : LoginService,
    private logincheck_service : CheckingcookieService,
    private router: Router
  ) {}

  onSubmit(): void{

  //Walidacja pól formularza oraz zgody
  if(

  this.login_f.get('pesel').errors != null ||
  this.login_f.get('password').errors != null  ){
    this.validated = 0;
    
  }else{
    this.validated = 1;
  }

  if(this.validated == 0){
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

    let login_user_data = new LoginData();
    login_user_data.pesel = this.login_f.value.pesel;
    login_user_data.password = this.login_f.value.password;
    this.login_service.login(login_user_data).subscribe(
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
          this.router.navigate(['/profile'])
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
