import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, BrowserModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
