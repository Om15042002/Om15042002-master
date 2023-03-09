import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent {
  tasks = [{
    id: 1,
    title: "make a note dfgfdgdfgfg fgfgfgffgfgfgfg",
    description: "asdfadsf",
    deadline: "sdfdas",
    dateAdded: "dasfdasf",
    priority: true,
    isCompleted: false
  },
  {
    id: 2,
    title: "go to bank",
    description: "",
    dateAdded: "",
    deadline: "",
    priority: true,
    isCompleted: false
  },
  {
    id: 3,
    title: "meeting with team",
    description: "",
    deadline: "",
    dateAdded: "",
    priority: true,
    isCompleted: false
  },
  {
    id: 4,
    title: "complete a front end",
    description: "",
    dateAdded: "",
    deadline: "",
    priority: true,
    isCompleted: false
  },
  ]
  closeResult: string | undefined;
  model: NgbDateStruct | undefined;
  // date: { year: number; month: number; } | undefined;

  // constructor(private calendar: NgbCalendar) {}
  constructor(private modalService: NgbModal) { }
  // selectToday() {
  // 	this.model = this.calendar.getToday();
  // }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => {
      return (task.id !== taskId) ? task : null;
    })
  }
  // constructor(private modalService: NgbModal) {}

  //   openVerticallyCentered(content: any) {
  // 		this.modalService.open(content, { centered: true });
  // 	}

}
