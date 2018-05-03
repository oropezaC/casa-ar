import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CotizarPage } from '../cotizar/cotizar';
import { PedidosPage } from '../pedidos/pedidos';
import { EntregasPage } from '../entregas/entregas'

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  public views: Array<{ title: string ,component: any, img:string}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.views = [
      {title:"Cotizador", component: CotizarPage, img:"/assets/imgs/goal.png"},
      {title:"Pedidos", component: PedidosPage, img:"/assets/imgs/order.png"},
      {title:"Entregas", component: EntregasPage, img:"/assets/imgs/delivery-truck.png"},
    ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  goToPage(v){
    this.navCtrl.push(v)
  }

}
