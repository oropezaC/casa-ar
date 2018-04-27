import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { ProductoPage } from '../producto/producto';

@IonicPage()
@Component({
  selector: 'page-cotizar',
  templateUrl: 'cotizar.html',
})
export class CotizarPage {

  private cotiza : FormGroup;

  constructor( 
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private formBuilder: FormBuilder) {

  	this.cotiza = this.formBuilder.group({

  		cliente: 	['', Validators.required],
  		calle: 		['', Validators.required],
  		numero: 	['', Validators.required],
  		colonia: 	['', Validators.required],
  		telefono: 	['', Validators.required],
  		email: 		[''],

  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CotizarPage');
  }

  sendCot(){
  	console.log(this.cotiza.value)
    this.navCtrl.push(ProductoPage)
  }

}
