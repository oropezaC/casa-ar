import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { GoogleMaps } from '@ionic-native/google-maps';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { CotizarPage } from '../pages/cotizar/cotizar';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { EntregasPage } from '../pages/entregas/entregas';
import { ProductoPage } from '../pages/producto/producto';
import { DetallePage } from '../pages/detalle/detalle';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CotizarPage,
    PedidosPage,
    EntregasPage,

    ProductoPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CotizarPage,
    PedidosPage,
    EntregasPage,

    ProductoPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
