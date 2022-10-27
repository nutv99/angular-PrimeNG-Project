import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// import { AutoCompleteModule } from 'primeng/autocomplete';
// import { CalendarModule } from 'primeng/calendar';
// import { ChipsModule } from 'primeng/chips';
// import { DropdownModule } from 'primeng/dropdown';
// import { InputMaskModule } from 'primeng/inputmask';
// import { InputNumberModule } from 'primeng/inputnumber';
// import { CascadeSelectModule } from 'primeng/cascadeselect';
// import { MultiSelectModule } from 'primeng/multiselect';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { InputTextModule } from "primeng/inputtext";

import { primeModule } from './_shared/prime.module'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule,
    HttpClientModule,
    primeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
