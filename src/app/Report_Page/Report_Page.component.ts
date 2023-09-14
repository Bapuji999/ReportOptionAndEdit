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
  id: any;
  options: any;
  html: any;
  optionsList: any;
  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.html = await this.http.get('https://localhost:44330/api/MRAoptions/GetTemplateById?templateId=' + this.id).toPromise();
    var unstructureReport = this.html[0].TemplateHtml;
    this.html = this.sanitizer.bypassSecurityTrustHtml(unstructureReport);
    await this.removeOptionals();
    await this.removeSpecialCases();
  }

  async removeOptionals() {
    this.optionsList = await this.http.get('https://localhost:44330/api/MRAoptions/GetOptionsByTemplateId?templateId=' + this.id).toPromise();
    const idsToRemove = this.optionsList.filter((option: any) => option.OptionValue == 0);
    debugger;
    console.log(idsToRemove);
    idsToRemove.forEach((Obj: any) => {
      var elementToRemove = document.getElementById(Obj.AssociatedHtmlId);
      if (elementToRemove) {
        elementToRemove.parentNode?.removeChild(elementToRemove);
      }
      var elements = document.getElementsByClassName(Obj.AssociatedHtmlId);
      while (elements.length > 0) {
        elements[0].parentNode?.removeChild(elements[0]);
      }
    });
  }

  async removeSpecialCases(){
    debugger;
    this.optionsList = await this.http.get('https://localhost:44330/api/MRAoptions/GetOptionsByTemplateId?templateId=' + this.id).toPromise();
    const schoolLogoId = this.optionsList.find((item:any) => item.AssociatedHtmlId == "schoolLogo");
    const boardlogoId = this.optionsList.find((item:any) => item.AssociatedHtmlId == "boardlogo");
    const parentId = this.optionsList.find((item:any) => item.AssociatedHtmlId == "parent");
    const educatorId = this.optionsList.find((item:any) => item.AssociatedHtmlId == "educator");
    if(schoolLogoId.OptionValue || boardlogoId.OptionValue){
      var elementToRemove = document.getElementById("headWithNoLogo");
      if (elementToRemove) {
        elementToRemove.parentNode?.removeChild(elementToRemove);
      }
    }
    else{
      var elementToRemove = document.getElementById("headWithLogo");
      if (elementToRemove) {
        elementToRemove.parentNode?.removeChild(elementToRemove);
      }
    }
    if(parentId.OptionValue || educatorId.OptionValue){
      var elementToRemove = document.getElementById("onlyPrincipal");
      if (elementToRemove) {
        elementToRemove.parentNode?.removeChild(elementToRemove);
      }
    }
    else{
      var elementToRemove = document.getElementById("allSignature");
      if (elementToRemove) {
        elementToRemove.parentNode?.removeChild(elementToRemove);
      }
    }
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
