import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import {DetallePage} from '../detalle/detalle';

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  producto: string = "Mesas";
  carpa: string = "0";
  observaciones : any;


  public isToggled: boolean;

  //Mesas
  public tableTab : any;
  public tableRound : any;
  public tableCrys : any;

  //juegos
  public infCh : any;
  public infGd : any;
  public brincolin : any;

  //servicios
  public mesero: any;
  public carpaSize : any;

  public total : any;

  public cliente : any;


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public alertCtrl: AlertController) {

  	this.cliente = this.navParams.get('cliente')

    this.isToggled = false;

    this.tableTab = 0;
    this.tableRound = 0;
    this.tableCrys = 0;

    this.infCh = 0;
    this.infGd = 0;
    this.brincolin = 0;

    this.mesero = 0;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }


  add(d){
    switch (d) {
      case "tablon":
      this.tableTab += 1;
      break;
      case "redonda":
      this.tableRound += 1;
      break;
      case "cristal":
      this.tableCrys += 1;
      break;
      case "infCh":
      this.infCh += 1;
      break;
      case "infGd":
      this.infGd += 1;
      break;
      case "brincolin":
      this.brincolin += 1;
      break;
      case "mesero":
      this.mesero += 1;
      break;
      default:
        // code...
        break;
      }
    }

  remove(r){
    switch (r) {
      case "tablon":
      this.tableTab -= 1;
      break;
      case "redonda":
      this.tableRound -= 1;
      break;
      case "cristal":
      this.tableCrys -= 1;
      break;
      case "infCh":
      this.infCh -= 1;
      break;
      case "infGd":
      this.infGd -= 1;
      break;
      case "brincolin":
      this.brincolin -= 1;
      break;
      case "mesero":
      this.mesero -= 1;
      break;
      default:
        // code...
        break;
      }
    }

  cotizar(){
    let tog = this.isToggled;
    let costo ;
    if (tog == true) {
      this.carpa == '50' ? costo = 1000 : false;
      this.carpa == '100' ? costo = 1500 : false;
      this.carpa == '150' ? costo = 2000 : false;
      this.carpa == '200' ? costo = 2500 : false;
    }else{
      costo = 0;
    }
    let tCosto = this.tableTab * 75;
    let tRCosto = this.tableRound * 80;
    let tCCosto = this.tableCrys * 150;
    let iChCosto = this.infCh * 500;
    let iGdCosto = this.infGd * 800;
    let bCosto = this.brincolin * 500;
    let meseroP =  this.mesero * 350;
    this.total =  tCosto + tRCosto + tCCosto + iChCosto + iGdCosto + bCosto + meseroP + costo;

    let pedido = {
      'datos': this.cliente,
        'productos':{
          'tablon' : this.tableTab,
          'redonda' : this.tableRound,
          'cristal' : this.tableCrys,
          'inflableChico': this.infCh,
          'inflableGrande':this.infGd,
          'brincolin': this.brincolin,
          'meseros' : this.mesero,
          'carpa' : this.carpa,
        },
        'observaciones' : this.observaciones,
        'total': this.total,
    }

    this.showConfirm(pedido)
  }

  public changeTog() {
    this.carpa = '0'
  }

  showConfirm(pedido) {
    let confirm = this.alertCtrl.create({
      title: 'Cotización',
      message: 'El total es : $ ' + this.total,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
          this.navCtrl.push(DetallePage, { datosPedido: pedido})
          }
        }
      ]
    });
    confirm.present();
  }

}
