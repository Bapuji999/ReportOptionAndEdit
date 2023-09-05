import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-Report_Page',
  templateUrl: './Report_Page.component.html',
  styleUrls: ['./Report_Page.component.css']
})
export class Report_PageComponent implements OnInit {
  options: any;
  decodedHTML: any;
  trustedHtml:any;
  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    this.options = await this.http.get('https://localhost:44317/api/MRAoptions/Getjson').toPromise();
    const untrustedHtml = this.options.editorContent;
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
    debugger;
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
