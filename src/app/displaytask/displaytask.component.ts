import { Component,Input,Output,EventEmitter} from '@angular/core';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
// import { TaskType } from '../Tasktype';
@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.component.html',
  styleUrls: ['./displaytask.component.css']
})
export class DisplaytaskComponent {

  
  @Input() showtask:any;
  @Output() changeAdd=new EventEmitter<number>();

   @Output() markcompleted=new EventEmitter<number>();

   @Output() editName=new EventEmitter<number>();
  
  
  
  changeTask(value:number):void{
    this.changeAdd.emit(value);
    // console.log(value)
  }
  
  markComoplete(value:number):void{
        this.markcompleted.emit(value);
       
  }
  changeTaskname(value:number):void{
    console.log(value);
  this.editName.emit(value);
  }
  // toggleTaskCompletion(name:string):void{

  // }

}
