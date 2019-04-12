import { Component, OnInit } from '@angular/core';

import {ProductoService} from '../../../services/producto.service';

import{Producto} from '../../../models/producto';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  productoList: Producto[];

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    this.productoService.getProductos()
    .snapshotChanges()
    .subscribe(item=>
      {
      this.productoList = [];
      item.forEach (element => {
        let X = element.payload.toJSON();
        X["$key"] = element.key;
        this.productoList.push(X as Producto);
      });
    })
  }

  onEdit(producto: Producto){
    this.productoService.selectedProducto = Object.assign({}, producto);
  }

  onDelete($key: string){
    this.productoService.deleteProducto($key);
  }

}

