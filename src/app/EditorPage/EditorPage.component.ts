import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-EditorPage',
  templateUrl: './EditorPage.component.html',
  styleUrls: ['./EditorPage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorPageComponent implements OnInit {

  editor: Editor = new Editor();
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){

  }
}
