import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

  public table : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.table = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

  addTable(){
  	this.table += 1;
  	console.log("hey")
  }

  removeTable(){
    this.table -= 1;
  }

}
