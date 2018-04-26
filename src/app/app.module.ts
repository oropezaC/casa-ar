import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { CotizarPage } from '../pages/cotizar/cotizar';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { EntregasPage } from '../pages/entregas/entregas';


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CotizarPage,
    PedidosPage,
    EntregasPage
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
    EntregasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
