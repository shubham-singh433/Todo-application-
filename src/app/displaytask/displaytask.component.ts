import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { TaskType } from '../Tasktype';
@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css'],
})
export class DisplaytaskComponent {
  trash = faTrash;

  @Input() showtask: any;
  @Output() changeAdd = new EventEmitter<number>();

  @Output() markcompleted = new EventEmitter<number>();

  @Output() editName = new EventEmitter<number>();

  // delete  task
  changeTask(value: number): void {
    this.changeAdd.emit(value);
    // console.log(value)
  }

  // mark task completed
  markComoplete(value: number): void {
    this.markcompleted.emit(value);
  }

  // change task name function
  changeTaskname(value: number): void {
    // console.log(value);
    this.editName.emit(value);
  }
}
