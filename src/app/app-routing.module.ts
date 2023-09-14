import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './firstPage/firstPage.component';
import { ActivityComponent } from './activity/activity/activity.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'home', component: FirstPageComponent },
  {
    path: 'activity/:id',
    component: ActivityComponent,
    loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
