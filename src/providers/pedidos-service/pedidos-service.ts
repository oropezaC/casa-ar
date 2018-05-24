import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PedidosServiceProvider {
  public url : string;
  constructor(public http: HttpClient) {
    this.url = 'https://backcasa.herokuapp.com';
    // this.url = 'http://localhost:4000';

  }

  getDeliv(fecha){
    return this.http.post(this.url+ '/entregas',fecha);
  }

  saveCot(datos){
    return this.http.post(this.url+ '/cotizacion',datos);
  }

  getOne(token){
    return this.http.get(this.url+ '/pedidos/' + token);
  }

  changeSt(token){
    return this.http.get(this.url+ '/pedidos/upt/' + token);
  }

  getAll(fecha){
    return this.http.post(this.url+ '/pedidos',fecha);
  }





}
