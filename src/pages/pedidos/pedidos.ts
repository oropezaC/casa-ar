import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DetallePedidoPage} from '../detalle-pedido/detalle-pedido';

import{PedidosServiceProvider} from '../../providers/pedidos-service/pedidos-service';

import * as moment from 'moment';
import 'moment/locale/es';


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
      this.fecha = moment(this.now.fecha).format('Do MMMM YYYY')

    }

  ionViewDidLoad() {
    this.ws.getAll(this.now).subscribe(data =>{
      this.pedido = data;
    })
  }

  getPedido(d){
    this.ws.getOne(d.token).subscribe(res =>{
      this.item = res;
        this.navCtrl.push(DetallePedidoPage, {datos:d, pedidos : this.item})
    })
  }

}
