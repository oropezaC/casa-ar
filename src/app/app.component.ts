import { Component,ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { CorizacionesPage } from '../pages/corizaciones/corizaciones';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { EntregasPage } from '../pages/entregas/entregas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav : Nav
  public rootPage : any;

  public pages: Array<{ titulo: string ,component: any, icon:string}>
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

   this.rootPage = InicioPage; 

  this.pages = [
    {titulo:"Inicio", component: InicioPage, icon:"home"},
    {titulo:"Cotizaciones", component: CorizacionesPage, icon:"construct"},
    {titulo:"Pedidos", component: PedidosPage, icon:"clipboard"},
    {titulo:"Entregas", component: EntregasPage, icon:"pin"},

  ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

}

