import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtDepsComponent } from './components/art-deps/art-deps.component';
import { ArtComponent } from './components/art/art.component';
import { ArtallListComponent } from "./components/art-allList/art-allList.component";

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ArtDepsComponent, 
    ArtComponent,
    ArtallListComponent
  ],
  imports: [
    CommonModule,
    ArtRoutingModule,
    MatCardModule
  ]
})
export class ArtModule { }
