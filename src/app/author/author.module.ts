import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [AuthorComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class AuthorModule { }
