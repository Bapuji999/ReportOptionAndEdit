import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FileUploadService } from 'src/app/Servise/file-upload.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-M.R.AOptionPqage',
  templateUrl: './M.R.AOptionPqage.component.html',
  styleUrls: ['./M.R.AOptionPqage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class M_R_AOptionPqageComponent implements OnInit, OnDestroy {
  formData: any = {};
  editor: Editor = new Editor();
  trustedHtml: any;
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
  constructor(
    private http: HttpClient,
    private fileUploadService: FileUploadService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  async ngOnInit() {
    debugger;
    this.formData = await this.http.get('https://localhost:44317/api/MRAoptions/Getjson').toPromise();
    this.editor = new Editor();
    this.form.get('editorContent')?.patchValue(this.formData.editorContent);
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  onSubmit() {
    debugger;
    this.formData.editorContent = this.form.controls.editorContent.value;
    console.log('Form submitted with data:', this.form.controls.editorContent.value);
    const body = this.formData;
    this.http.post('https://localhost:44317/api/MRAoptions/Putjson', body).subscribe();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileUploadService.uploadFile(file).subscribe(
        (response) => {
          this.formData.educatorSignature = response.data;
        },
        (error) => {
          alert(error);
        }
      );
    }
  }
}
