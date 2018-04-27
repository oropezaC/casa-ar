import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  producto: string = "Mesas";
  
  //Mesas
  public tableTab : any;
  public tableRound : any;
  public tableCrys : any;

  //
  public infCh : any;
  public infGd : any;
  public brincolin : any;


  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public alertCtrl: AlertController) {
  	
    this.tableTab = 0;
    this.tableRound = 0;
    this.tableCrys = 0;

    this.infCh = 0;
    this.infGd = 0;
    this.brincolin = 0;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

  addTableTab(){
  	this.tableTab += 1;
  }

  removeTableTab(){
    this.tableTab -= 1;
  }

  addTableRound(){
    this.tableRound += 1;
  }

  removeTableRound(){
    this.tableRound -= 1;
  }

  addTableCrys(){
    this.tableCrys += 1;
  }

  removeTableCrys(){
    this.tableCrys -= 1;
  }

  addInfCh(){
    this.infCh += 1;
  }

  removeInfCh(){
    this.infCh -= 1;
  } 

  addInfGd(){
    this.infGd += 1;
  }

  removeInfGd(){
    this.infGd -= 1;
  }

  addBrin(){
    this.brincolin += 1;
  }

  removeBrin(){
    this.brincolin -= 1;
  }

  cotizar(){
    console.log(this.tableTab)
    console.log(this.tableRound)
    console.log(this.tableCrys)
    console.log(this.infCh)
    console.log(this.infGd)
    console.log(this.brincolin)

    this.showConfirm()
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'La Cotizacion Es:',
      message: 'Disfruta Tu Fiesta',
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
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
