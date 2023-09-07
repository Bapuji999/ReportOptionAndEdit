import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionFormComponent } from './OptionForm/OptionForm.component';
import { AppComponent } from './app.component';
import { Report_PageComponent } from './Report_Page/Report_Page.component';
import { M_R_AOptionPqageComponent } from './M.R.AOptionPqage/M.R.AOptionPqage.component';
import { FirstPageComponent } from './firstPage/firstPage.component';

const routes: Routes = [
  {path:'', component:FirstPageComponent},
  {path:'home', component:FirstPageComponent},
  {path:'form', component:M_R_AOptionPqageComponent},
  {path:"report/:id", component:Report_PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
