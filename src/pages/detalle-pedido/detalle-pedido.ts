import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-detalle-pedido',
  templateUrl: 'detalle-pedido.html',
})
export class DetallePedidoPage {
  public datos : any;
  public client : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datos = [];
    this.client = {};

  }

  ionViewDidLoad() {
    this.datos.push(this.navParams.get('pedidos'))
    this.client = this.navParams.get('datos');
  }

}
