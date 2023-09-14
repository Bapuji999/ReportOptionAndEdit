import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options } from '../Interfaces/Options';

@Component({
  selector: 'app-checkOption',
  templateUrl: './checkOption.component.html',
  styleUrls: ['./checkOption.component.css']
})
export class CheckOptionComponent implements OnInit {

  formData: Options = {
    totalPerSub: true,
    gradePerSub: true,
    overalTotal: true,
    schoolLogo: true,
    boardlogo: true,
    fatherName: true,
    motherName: true,
    dob: true,
    parent: true,
    educator: true,
    overalPercentage: true
  }
  id: any;
  optionsList: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    debugger;
    this.optionsList = await this.http.get('https://localhost:44330/api/MRAoptions/GetOptionsByTemplateId?templateId=' + this.id).toPromise();
    const optionKeys: (keyof Options)[] = Object.keys(this.formData) as (keyof Options)[];
    optionKeys.forEach(key => {
      const option = this.optionsList.find((item: any) => item.AssociatedHtmlId == key);
      this.formData[key] = option.OptionValue;
    });
  }
  onSubmit() {
    const optionKeys: (keyof Options)[] = Object.keys(this.formData) as (keyof Options)[];
    optionKeys.forEach(key => {
      this.optionsList.map((option:any) => {
        if((option.AssociatedHtmlId == key && option.OptionValue != this.formData[key]) ){
          option.OptionValue = this.formData[key];
        }
      });
    });
    debugger;
    var body = JSON.stringify(this.optionsList);
    var msg = this.http.get('https://localhost:44330/api/MRAoptions/UpdateOptions?json=' + body).toPromise();
    console.log(msg);
  }
}