import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstPage',
  templateUrl: './firstPage.component.html',
  styleUrls: ['./firstPage.component.css']
})
export class FirstPageComponent implements OnInit {

  templateList: any;
  tempHtml: any = {};
  constructor(
    private http: HttpClient,
    private router: Router) { }

  async ngOnInit() {
    debugger;
    this.templateList = await this.http.get('https://localhost:44330/api/MRAoptions/GetTemplates').toPromise();
    console.log(this.templateList);
  }
  uploadHtml() {
    if (this.tempHtml.template != null && this.tempHtml.template != '') {
      const body = this.tempHtml;
      this.http.post('https://localhost:7101/api/MRAoptions/SaveTemplate', body).subscribe();
    }
  }
  goForm(id:any){
    debugger;
    this.router.navigate(['/activity', id]);
  }
}
