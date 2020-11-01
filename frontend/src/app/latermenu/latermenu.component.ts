import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import iziToast from 'izitoast'
import { RegisterData } from '../model/register_data';

@Component({
  selector: 'app-latermenu',
  templateUrl: './latermenu.component.html',
  styleUrls: ['./latermenu.component.scss']
})
export class LatermenuComponent implements OnInit {
  data: any;
  constructor(
    private logoutservice : LoginService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.data= this.route.snapshot.data;
  }
  logOuthelp(){
    return new Promise<boolean>(res =>{
      this.logoutservice.logout().subscribe(
        response=>{
          iziToast.success({
            title: 'Ok',
            message: response.Message,
          });
          res(true)
        },
        (error: HttpErrorResponse)=>{
          iziToast.error({
            title: 'Error',
            message: error.message,
          });
          res(false)
        }
      )
    })
  }
  logOut(){
    this.logOuthelp().then(value=>{
      if(value==true){
        this.router.navigate(['/zaloguj']);
      }
    });
  }

}
