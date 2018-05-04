import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController ,AlertController } from 'ionic-angular';

import{PedidosServiceProvider} from '../../providers/pedidos-service/pedidos-service';
import {InicioPage} from '../inicio/inicio';

@IonicPage()
@Component({
  selector: 'page-detalle-pedido',
  templateUrl: 'detalle-pedido.html',
})
export class DetallePedidoPage {
  public datos : any;
  public client : any;
  public res : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ws : PedidosServiceProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
    this.datos = [];
    this.client = {};

  }

  ionViewDidLoad() {
    this.datos.push(this.navParams.get('pedidos'))
    this.client = this.navParams.get('datos');
  }

  charge(d){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      });
    loader.present();
    this.ws.changeSt(d.token).subscribe(data=>{
      this.res = data
      if(this.res.status == 1){
        loader.dismiss()
        this.navCtrl.setRoot(InicioPage)

      }else{
        console.log("no")
      }

    })
  }

}
