import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PedidosServiceProvider {

  constructor(public http: HttpClient) {
  }

  getAll(fecha){
    return this.http.post('http://localhost:3000/pedidos',fecha)
  }


  getDeliv(fecha){
    return this.http.post('http://localhost:3000/entregas',fecha)
  }

  saveCot(datos){
    return this.http.post('http://localhost:3000/cotizacion',datos)
  }

  getOne(token){
    return this.http.get('http://localhost:3000/pedidos' + '/' +token)
  }
  changeSt(token){
    return this.http.put('http://localhost:3000/pedidos' + '/' +token)
  }
}
