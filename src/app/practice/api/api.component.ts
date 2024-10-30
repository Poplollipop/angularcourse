import { Component } from '@angular/core';
import { HttpClientService } from '../../http-service/http-client.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {
constructor(private http: HttpClientService){
}
ngOnInit(): void {
  this.http.getApi('https://api.freeapi.app/api/v1/public/randomusers')
  .subscribe((res) => console.log(res))
}
}
