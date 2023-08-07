import { Component,Input ,OnInit} from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { TaskType } from './Tasktype';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Too-Doo';
  @Input() changeid!:number;
  // openInput:boolean=false;
  Tasks_array:TaskType[]=[];
  completed_array:TaskType[]=[];
  notCompleted_array:TaskType[]=[];
  selectedValue:string="all";

    ngOnInit(): void {
   const storedTasks = sessionStorage.getItem('tasks');
    if (storedTasks) {
      this.Tasks_array = JSON.parse(storedTasks);
    }
  }
  taskform=new FormGroup({
    taskname:new FormControl(''),
  });
  Addtask():void{
     console.log( );
    let task:string=this.taskform.get('taskname')?.value || '';
    
  let newTask: TaskType = {
        id: new Date().getTime(),
        newtask:task,
        completed: false
      };
    this.Tasks_array.push(newTask);
        this.taskform.reset();
    sessionStorage.setItem('tasks', JSON.stringify(this.Tasks_array));

  }
  deleteTask(value:number):void
  {
      this.Tasks_array=this. Tasks_array.filter(task=>
        task.id!==value);
         sessionStorage.setItem('tasks', JSON.stringify(this.Tasks_array));
  }

  checkCompleted(value:number):void{
    let foundTask =this.Tasks_array.find(task => task.id === value)
    if(foundTask)
    {
      foundTask.completed=true;
    }
     sessionStorage.setItem('tasks', JSON.stringify(this.Tasks_array));

     this.completed_array=this.Tasks_array.filter(task=>task.completed===true)
     this.notCompleted_array=this.Tasks_array.filter(task=>task.completed===false)
  }
  cachChange(val:number):void{
    let foundTask=this.Tasks_array.find(task => task.id === val)
    let newname=prompt("enter new name");
    if(foundTask&&newname)
    {
      foundTask.newtask=newname;
    }
     sessionStorage.setItem('tasks', JSON.stringify(this.Tasks_array));
  }
  // selectOption(event:Event):void{
  //  console.log(event.);
  
  //   // var selectElement =document.getElementById("multiselect");
  //   // console.log(selectElement);
  // // var selectedValue = selectElement?.value;
  
  // }
}
