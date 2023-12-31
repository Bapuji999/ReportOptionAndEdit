import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ActivityRoutingModule } from './activity-routing.module';
import { ChangeDisplayComponent } from '../changeDisplay/changeDisplay.component';
import { CheckOptionComponent } from '../checkOption/checkOption.component';
import { EditorPageComponent } from '../EditorPage/EditorPage.component';
import { Report_PageComponent } from '../Report_Page/Report_Page.component';

import { NgxEditorModule, schema } from 'ngx-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [
    ChangeDisplayComponent,
    CheckOptionComponent,
    EditorPageComponent,
    Report_PageComponent,
    ActivityComponent
  ],
  imports: [
    ActivityRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
  ]
})
export class ActivityModule { }
