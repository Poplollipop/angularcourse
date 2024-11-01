import { Component } from '@angular/core';
import { HttpClientService } from '../../http-service/http-client.service';
import { ObjectResult, ProductData, ResultData } from '../../api-interface/api.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {
  constructor(private http: HttpClientService) {
  }
  

  List: ProductData[] = [];



  ngOnInit(): void {
    this.http.getApi('https://api.freeapi.app/api/v1/public/randomproducts')
      .subscribe((res:ObjectResult) => {
        this.List = res.data.data;
        console.log(res);
      })
  }
}
