import { Component, OnInit } from '@angular/core';
import { Products } from "../../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = Products;

  constructor() { }

  ngOnInit(): void {
  }

  shared(){
    window.alert('El producto ha sido compartido exitosamente.')
  }
}
