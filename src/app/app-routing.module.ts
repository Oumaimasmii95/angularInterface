import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
const Routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {path:'home',component:HomeComponent}
]; 
@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }