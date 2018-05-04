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
    public flag : boolean;
    public res : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ws : PedidosServiceProvider) {
    this.now = { fecha : moment().toDate()}
    this.flag = false;
  }

  ionViewDidLoad() {
    this.ws.getDeliv(this.now).subscribe(data =>{
      this.res = data
        if(this.res.length == 0){
          this.flag = true;
        }else{
          this.flag = false;
          this.deliver = data;
        }
    })
  }

}
