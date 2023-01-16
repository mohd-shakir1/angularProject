import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-training';
  products = [
    {
      id:1,
      title: 'product title',
      description: 'product description'
    },
    {
      id:1,
      title: 'product title',
      description: 'product description'
    },
    {
      id:1,
      title: 'product title',
      description: 'product description'
    },
    {
      id:1,
      title: 'product title',
      description: 'product description'
    }
  ]
  productdetail :any =null;
  constructor(){

  }
  assignData(event:any){
    console.log(event,"events")
    this.productdetail = event;
  }
}
