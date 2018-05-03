import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DetallePedidoPage} from '../detalle-pedido/detalle-pedido';

import{PedidosServiceProvider} from '../../providers/pedidos-service/pedidos-service';

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  public pedido : any;
  public item : any;
  public now : any;
  public fecha : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ws : PedidosServiceProvider
    ) {
      this.now = { fecha : moment().toDate()}
      this.fecha = moment(this.now.fecha).format('DD-MM-YYYY')
    }

  ionViewDidLoad() {
    this.ws.getAll(this.now).subscribe(data =>{
      this.pedido = data;
      console.log(this.pedido)
    })
  }

  getPedido(d){
    this.ws.getOne(d).subscribe(res =>{
      this.item = res;
      this.navCtrl.push(DetallePedidoPage, { pedidos : this.item})
    })
  }

}
