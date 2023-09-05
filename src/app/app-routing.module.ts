import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionFormComponent } from './OptionForm/OptionForm.component';
import { AppComponent } from './app.component';
import { Report_PageComponent } from './Report_Page/Report_Page.component';
import { M_R_AOptionPqageComponent } from './M.R.AOptionPqage/M.R.AOptionPqage.component';

const routes: Routes = [
  {path:'form', component:M_R_AOptionPqageComponent},
  {path:"report", component:Report_PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
