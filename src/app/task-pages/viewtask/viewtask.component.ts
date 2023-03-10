import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { UsertasksService } from 'src/app/service/usertasks.service';

interface task {
  taskid: number;
  title: string;
  description: string;
  duedate: string;
  dateadded: string;
  isImportant: boolean;
  isCompleted: boolean;
  userid: number;
}

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent {
  tasks: task[]=[] ;
  // tasks:any=[]
  closeResult: string | undefined;
  model: NgbDateStruct | undefined;
  filtermodel: NgbDateStruct | undefined;
  // isTaskImportant:boolean=flase
  markasdone=new FormControl()
  importanttask=new FormControl()

  filterbyduedate=new FormControl()
  filterbycompletion=new FormControl()
  filterbyimportant=new FormControl()

  modifiedtitle=new FormControl();
  modifieddescritption=new FormControl();
  modifieddate=new FormControl();

  
  constructor(private modalService: NgbModal, private UsertasksService: UsertasksService,
    private toastr: ToastrService,private builder: FormBuilder) {

    this.getTask()
   }
   edittaskform = this.builder.group({
    title: this.builder.control('', Validators.required),
    description: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(20)])
    ),
    duedate: this.builder.control('', Validators.required),
  });
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openVerticallyFilterCentered(filtercontent: any) {
    this.modalService.open(filtercontent, { centered: true });
  }
  edittaskdetails(){
    let partialtask={title:this.modifiedtitle.value,description:this.modifieddescritption.value,duedate:this.modifieddate.value}
  }
  applyfilters(){
    if(this.filterbyduedate.value){
      this.tasks=this.tasks.filter((task)=>{
        
      })
    }
    else if(this.filterbycompletion.value){
      this.tasks=this.tasks.filter((task)=>{
        return task.isCompleted==true;
      })
    }
    else if(this.filterbyimportant.value){
      this.tasks=this.tasks.filter((task)=>{
        return task.isImportant==true;
      })
    }
  }
  // changetaskstate(){
  //   console.log(this.markasdone.value);
  // }
  // changeimportancestate(){
  //   console.log(this.importanttask.value);
  // }
  deleteTask(taskid: number, userid: number) {
    this.tasks = this.tasks.filter((task) => {
      return (task.taskid !== taskid) ? task : null;
    })
    this.UsertasksService.deletetask({ taskid: taskid, userid: userid }).subscribe((res:any) => {
      if(res.msg=='success'){
        console.log("task deleted successfully");
        this.toastr.success('Success', 'task deleted sucessfully');
      }
      else if(res.msg=='error'){
        this.toastr.warning('Could not delete the task!!');
      }
    })
  }
  getTask() {
    const userid: number = 4;
    this.UsertasksService.gettasks(userid).subscribe((res:any) => {
      console.log('====================================');
      console.log(res.data);
      console.log('====================================');
      this.tasks=res.data
    })
  }

  edittask(task:task) {
    task["isImportant"]=(this.importanttask.value==undefined || this.importanttask.value==null)?false:true;
    task["isCompleted"]=this.markasdone.value;
    console.log(task);
    
      this.UsertasksService.edittask(task).subscribe((res) => {
        // this.tasks=res;
      })
  }

}
