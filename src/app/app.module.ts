import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionFormComponent } from './OptionForm/OptionForm.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { M_R_AOptionPqageComponent } from './M.R.AOptionPqage/M.R.AOptionPqage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstPageComponent } from './firstPage/firstPage.component';

@NgModule({
  declarations: [								
    AppComponent,
      OptionFormComponent,
      M_R_AOptionPqageComponent,
      FirstPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
