
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtComponent } from './components/art/art.component';
import { ArtDepsComponent } from './components/art-deps/art-deps.component';
import { ArtallListComponent } from "./components/art-allList/art-allList.component";

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'art-deps', component: ArtDepsComponent,
        children: [
          { path: 'artSingle/:id', component: ArtComponent },
        ]
      }
    ],
  },
  {
    path: '', children: [
      {
        path: 'art-list', component: ArtallListComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule { }
