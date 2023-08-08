import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TaskType } from './Tasktype';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  faPlus = faPlus;

  title = 'Too-Doo';
  @Input() changeid!: number;

  Tasks_array: TaskType[] = [];

  selectedValue: string = 'all';

  // initialized on first only one time
  ngOnInit(): void {
    const storedTasks = sessionStorage.getItem('tasks');
    if (storedTasks) {
      this.Tasks_array = JSON.parse(storedTasks);
    }
  }

  //reactive form
  taskform = new FormGroup({
    taskname: new FormControl(''),
  });

  // for adding new task
  Addtask(): void {
    let task: string = this.taskform.get('taskname')?.value || '';

    if (task) {
      let newTask: TaskType = {
        id: new Date().getTime(),
        newtask: task,
        completed: false,
      };
      this.Tasks_array.push(newTask);
      this.taskform.reset();
      sessionStorage.setItem('tasks', JSON.stringify(this.Tasks_array));
    } else {
      alert('Please write the task');
    }
  }

  //deleting task
  deleteTask(value: number): void {
    //filtering the array for the id
    this.Tasks_array = this.Tasks_array.filter((task) => task.id !== value);
    sessionStorage.setItem('tasks', JSON.stringify(this.Tasks_array));
  }

  // mark completed
  checkCompleted(value: number): void {
    //searching for a particular value in array
    let foundTask = this.Tasks_array.find((task) => task.id === value);
    if (foundTask) {
      foundTask.completed = true;
    }
    sessionStorage.setItem('tasks', JSON.stringify(this.Tasks_array));
  }

  //to change the name of task
  cachChange(val: number): void {
    //searching for a particular value in array
    let foundTask = this.Tasks_array.find((task) => task.id === val);
    let newname = prompt('enter new name');
    if (foundTask && newname) {
      foundTask.newtask = newname;
    }
    sessionStorage.setItem('tasks', JSON.stringify(this.Tasks_array));
  }
}
