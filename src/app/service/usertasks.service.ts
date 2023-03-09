import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsertasksService {
  
  constructor(private http:HttpClient) { }
  apiURL="http://localhost:3000";

  addtask(task:any){
    console.log('====================================');
    console.log(task);
    console.log('====================================');
    // task["taskid"]=1;
    task["dateadded"]=(new Date().getFullYear())+"-"+new Date().getMonth()+"-"+new Date().getDate();
    task["iscompleted"]=false;
    task["isimportant"]=false;
    task["userid"]=4;
    return this.http.post(this.apiURL+'/addtask',task)
  }

}
