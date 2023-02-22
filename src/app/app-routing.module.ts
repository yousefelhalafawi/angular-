import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailsComponent } from './components/details/details.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component:AddComponent},
  {path:'users/:id',component:DetailsComponent},
  {path:'users/update/:id',component:UpdateComponent},
  {path:'**',component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
