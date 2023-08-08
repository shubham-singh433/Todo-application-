import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
//for icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//forms module
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// components of application
import { AppComponent } from './app.component';
import { DisplaytaskComponent } from './displaytask/displaytask.component';
import { CompletedFilterPipe } from './pipes/completed-filter.pipe';

//material ui design module imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AppComponent, DisplaytaskComponent, CompletedFilterPipe],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
