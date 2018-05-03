import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PedidosServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PedidosServiceProvider Provider');
  }

  getAll(fecha){
    return this.http.post('http://localhost:3000/pedidos',fecha)
  }

  getOne(token){
    return this.http.get('http://localhost:3000/pedidos' + '/' +token)
  }
}
