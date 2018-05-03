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

      date: 	['', Validators.required],
  		cliente: 	['', Validators.required],
  		calle: 		['', Validators.required],
  		numero: 	['', Validators.required],
  		colonia: 	['', Validators.required],
  		telefono: ['', Validators.required],
  		email: 		[''],
      token:    [''],

  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CotizarPage');
  }

  sendCot(){
    let tok = this.makeToken();
    this.cotiza.controls['token'].setValue( tok );
  	this.navCtrl.push(ProductoPage, { cliente: this.cotiza.value})
  }


  makeToken() {
    let p1 =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = ""

    for( var i=0; i < 8; i++ )
    token += p1.charAt(Math.floor(Math.random() * p1.length));

    return token
  }



}
