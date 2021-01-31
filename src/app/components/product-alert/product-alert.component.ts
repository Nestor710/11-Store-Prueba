import { Component, OnInit, Input, Output} from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() products:any;
  @Output() notify:any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  notifica(){
    window.alert('Se le notificará cuando el producto salga a la venta')
  }
}
