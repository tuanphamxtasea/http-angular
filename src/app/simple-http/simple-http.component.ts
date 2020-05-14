import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
data:Object;
data1:Object;
loading:boolean;
  constructor(private http:HttpClient) {


  }

  ngOnInit(): void {
  }

  makeRequest():void{
    this.loading=true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data=>{
      this.data=data;
      this.loading=false;
    });
  }

  makePost():void{
    this.loading=true;
    this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify({
      body:'bar',
      title:'foo',
      userId:1
    }))
    .subscribe(data=>{
      this.data1=data;
      this.loading=false;
    });
  }

  makeDelete(): void {
    this.loading = true;
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data =>
      {  this.data = data;
          this.loading = false;
         });

  }

  makeHeaders():void{
    const headers:HttpHeaders =new HttpHeaders({
       'X-API_TOKEN':'configure'
    });
    const req = new HttpRequest('GET','https://',{headers:headers});

    this.http.request(req).subscribe(data=>{
      this.data = data['body'];
    });

  }
}
