import { Component } from '@angular/core';
import { HttpClientService } from '../../http-service/http-client.service';
import { ProductData } from '../../api-interface/api.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent implements ProductData {
  constructor(private http: HttpClientService) {
  }
  category!: string;
  price!: number;
  thumbnail!: string;
  images!: string[];
  title!: string;
  id!: number;

  List : ProductData[] = [];



  ngOnInit(): void {
    this.http.getApi('https://api.freeapi.app/api/v1/public/randomproducts')
      .subscribe((res: any) => {
        this.List = res.data.data;
        console.log(res);
      })
  }
}
