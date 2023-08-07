import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplaytaskComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
