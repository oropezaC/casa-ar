import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{PedidosServiceProvider} from '../../providers/pedidos-service/pedidos-service';

import * as moment from 'moment';
import 'moment/locale/es';

@IonicPage()
@Component({
  selector: 'page-entregas',
  templateUrl: 'entregas.html',
})
export class EntregasPage {

    public now : any;
    public deliver : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ws : PedidosServiceProvider) {
    this.now = { fecha : moment().toDate()}
  }

  ionViewDidLoad() {
    this.ws.getDeliv(this.now).subscribe(data =>{
        this.deliver = data;
        console.log("hey",this.deliver)
    })
  }

}
