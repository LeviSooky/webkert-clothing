import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForintPipe} from "../../pipes/forint-pipe.pipe";



@NgModule({
  declarations: [ForintPipe],
  imports: [
    CommonModule
  ],
  exports: [ForintPipe]
})
export class ApplicationPipesModule { }
