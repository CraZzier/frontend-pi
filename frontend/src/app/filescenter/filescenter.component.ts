import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddFilesService } from '../addfiles.service';
import { GettingDataService } from '../getting-data.service';
import iziToast from 'izitoast/dist/js/iziToast.min.js'
import { DicomHeaders } from '../model/image_headers';

@Component({
  selector: 'app-filescenter',
  templateUrl: './filescenter.component.html',
  styleUrls: ['./filescenter.component.scss']
})
export class FilescenterComponent implements OnInit {

  title = 'dropzone'
  files: File[] = [];
  fileHeaders: DicomHeaders[];
  constructor(
    private http: HttpClient,
    private sendservice: AddFilesService,
    private getdata: GettingDataService)
     { }

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event){
    this.files.splice(this.files.indexOf(event), 1);
  }
  onSubmit(){
    const formData = new FormData();
    for (var i = 0; i < this.files.length; i++) { 
      formData.append("fileval", this.files[i]);
    }
    iziToast.success({
      title: 'Wysłano do serwera',
      message: "Oczekiwanie na odpowiedź serwer",
    });
    this.sendservice.submitFiles(formData).subscribe(
      response =>{
        if (response.Score == 2){
          iziToast.error({
            title: 'Duplikat',
            message: response.Message,
          });
        }else{
          this.files.splice(0,this.files.length);
          iziToast.success({
          title: 'Ok',
          message: response.Message,
        });
        }
        this.getdata.getIamgeHeaders().subscribe(
          response=>{
              this.fileHeaders = response
          },
          (error: HttpErrorResponse)=>{
            iziToast.error({
              title: 'Nie pobrano',
              message: error.message,
            });
          }
        )
      },
      (error: HttpErrorResponse)=>{
        this.files.splice(0,this.files.length);
        iziToast.error({
          title: 'Ok',
          message: error.message,
        });
      }
    )
  }

  ngOnInit(): void {
    this.getdata.getIamgeHeaders().subscribe(
      response=>{
          this.fileHeaders = response
      },
      (error: HttpErrorResponse)=>{
        iziToast.error({
          title: 'Nie pobrano',
          message: error.message,
        });
      }
    )

  }

}
