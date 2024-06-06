import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DvdComponent } from './dvd/dvd.component';

const routes: Routes = [
  {
    path: '',
    component: DvdComponent
  },
  {
    path: 'Dvd',
    component: DvdComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}