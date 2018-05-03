import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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
import { DetallePedidoPage } from '../pages/detalle-pedido/detalle-pedido';

import { PedidosServiceProvider } from '../providers/pedidos-service/pedidos-service';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CotizarPage,
    PedidosPage,
    EntregasPage,

    ProductoPage,
    DetallePage,
    DetallePedidoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    DetallePage,
    DetallePedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PedidosServiceProvider
  ]
})
export class AppModule {}
