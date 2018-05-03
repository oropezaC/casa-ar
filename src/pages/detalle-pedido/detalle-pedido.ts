import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-detalle-pedido',
  templateUrl: 'detalle-pedido.html',
})
export class DetallePedidoPage {
  public datos : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datos = [];

  }

  ionViewDidLoad() {
    this.datos.push(this.navParams.get('pedidos'))
  }

}
