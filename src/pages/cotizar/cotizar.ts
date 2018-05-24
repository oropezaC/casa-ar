import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DireccionPage } from '../direccion/direccion';

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
    public formBuilder : FormBuilder) {

      this.cotiza = this.formBuilder.group({
        date: 	['', Validators.required],
        cliente: 	['', Validators.required],
        telefono: ['', Validators.required],
        email: 		[''],
        token:    [''],
      });

    }

    ionViewDidLoad() {
    }

    sendCot(){
      let tok = this.makeToken();
      this.cotiza.controls['token'].setValue( tok );
      this.navCtrl.push(DireccionPage, { datosCliente: this.cotiza.value})
    }


    makeToken() {
      let p1 =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let token = ""

      for( var i=0; i < 8; i++ )
      token += p1.charAt(Math.floor(Math.random() * p1.length));

      return token
    }



  }
