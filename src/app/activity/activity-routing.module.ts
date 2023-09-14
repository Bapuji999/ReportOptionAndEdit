import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ChangeDisplayComponent } from '../changeDisplay/changeDisplay.component';
import { CheckOptionComponent } from '../checkOption/checkOption.component';
import { EditorPageComponent } from '../EditorPage/EditorPage.component';
import { Report_PageComponent } from '../Report_Page/Report_Page.component';

const routes: Routes = [
  {path:'', component:Report_PageComponent},
  {path:'displayForm/:id', component:ChangeDisplayComponent},
  {path:'OptionForm/:id', component:CheckOptionComponent},
  {path:'editorPage/:id', component:EditorPageComponent},
  {path:'report/:id', component:Report_PageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }