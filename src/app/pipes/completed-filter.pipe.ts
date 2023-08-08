import { Pipe, PipeTransform } from '@angular/core';
import { TaskType } from '../Tasktype';

@Pipe({
  name: 'completedFilter',
})
export class CompletedFilterPipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    // console.log(filterString);

    //  let foundTask:TaskType;
    if (filterString === 'all') {
      return value;
    } else if (filterString === 'completed') {
      value = value.filter(
        (task: { id: number; taskname: string; completed: boolean }) =>
          task.completed === true
      );

      return value;
    } 

    else if (filterString === 'not') {
      
       value = value.filter(
         (task: { id: number; taskname: string; completed: boolean }) =>
           task.completed === false
       );
      return value;
    }
  }
}
