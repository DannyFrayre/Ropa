import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Producto} from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoList: AngularFireList<any>;
  selectedProducto: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase) { }

  getProductos()
  {
   return this.productoList = this.firebase.list('productos');
  }
  insertProducto(producto: Producto)
  {
    this.productoList.push({
      nombre: producto.nombre,
      codigo: producto.codigo,
      categoria: producto.categoria,
      material: producto.material,
      precio: producto.precio
    });
  }
updateProducto(producto: Producto)
{
  this.productoList.update(producto.$key,{
    nombre: producto.nombre,
    codigo: producto.codigo,
    categoria: producto.categoria,
    material: producto.material,
    precio: producto.precio
  });
}
deleteProducto($key: string)
{
  this.productoList.remove($key); 
}
}

