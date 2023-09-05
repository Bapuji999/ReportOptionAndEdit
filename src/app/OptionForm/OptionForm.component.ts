import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-OptionForm',
  templateUrl: './OptionForm.component.html',
  styleUrls: ['./OptionForm.component.css']
})
export class OptionFormComponent implements OnInit {
  formData: any = {}; 

  constructor(private http:HttpClient) {  }

  async  ngOnInit() {
    this.formData = await this.http.get('https://localhost:44317/api/Data/Getjson').toPromise();
     
    console.log('Form submitted with data:', JSON.stringify(this.formData) );
  }

  onSubmit() {
    console.log('Form submitted with data:', this.formData);
    const body = this.formData;
    this.http.post('https://localhost:44317/api/Data/Putjson', body).subscribe();
  }

}
