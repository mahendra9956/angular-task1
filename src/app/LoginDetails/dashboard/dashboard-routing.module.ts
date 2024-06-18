import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DashbordChildComponent } from './dashbord-child/dashbord-child.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashbordComponent
  },
{
  path: "dashboard-child",
  component: DashbordChildComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
