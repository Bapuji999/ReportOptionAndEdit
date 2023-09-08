import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Report_Page',
  templateUrl: './Report_Page.component.html',
  styleUrls: ['./Report_Page.component.css']
})
export class Report_PageComponent implements OnInit {
  options: any;
  decodedHTML: any;
  trustedHtml: any;
  reportList: any;
  reportHtml: any;
  reportId: any;
  studentList: any = [];
  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.reportId = this.route.snapshot.paramMap.get('id');
    this.reportList = await this.http.get('https://localhost:44317/api/MRAoptions/GetTemplate').toPromise();
    var report = this.reportList.find((element: any) =>{
      return element.templateName == this.reportId;
    })
    var unstructureReport = report.template;
    this.reportHtml = this.sanitizer.bypassSecurityTrustHtml(unstructureReport);
  }

  printTable() {
    var printContent = document.getElementById('bodyDiv');
    if (printContent != null) {
      var windowUrl = '';
      var uniqueName = new Date();
      var windowName = 'Print' + uniqueName.getTime();
      var printWindow = window.open(windowUrl, windowName);
      if (printWindow !== null) {
        var css = 'td{font-size:large;} @page{size: auto;margin: 10mm;}',
          head = printWindow.document.head || printWindow.document.getElementsByTagName('head')[0],
          style = printWindow.document.createElement('style');
        style.media = 'print';
        if ((style as any).styleSheet) {
          (style as any).styleSheet.cssText = css;
        } else {
          style.appendChild(printWindow.document.createTextNode(css));
        }
        head.appendChild(style);
        printWindow.document.body.innerHTML = printContent.innerHTML;
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
      } else {
        alert("Failed to open a new window for printing.");
      }
    }
    else {
      alert("id not found");
    }
  }
}
