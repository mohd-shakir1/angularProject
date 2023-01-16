import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  @Input() productDetail:any;
  @Output() removeValue: EventEmitter<null> = new EventEmitter<null>();

  back(){
    this.removeValue.emit(null);
  }

}
