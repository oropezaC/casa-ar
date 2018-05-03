import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   //CameraPosition,
//   //MarkerOptions,
//   //Marker
// } from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

	public datos : any;
	// map: GoogleMap;

  constructor(
  	public navCtrl: NavController,
   	public navParams: NavParams) {

  	this.datos = this.navParams.get('datosPedido');
  	console.log(this.datos)
  }

  ionViewDidLoad() {
    // this.loadMap();
  }


//   loadMap(){
//   	let mapOptions: GoogleMapOptions = {
// 		  		camera: {
// 		  			target: {
// 				        lat: 43.0741904,
// 				        lng: -89.3809802
// 				    },
// 			    zoom: 18,
// 			    tilt: 30
// 				}
// 		};
//
// 	this.map = GoogleMaps.create('map_canvas', mapOptions);
//
// 	  // Wait the MAP_READY before using any methods.
// 	  this.map.one(GoogleMapsEvent.MAP_READY)
// 	  .then(() => {
// 	    // Now you can use all methods safely.
// 	    this.getPosition();
// 	})
// 	  .catch(error =>{
// 	  	console.log(error);
// 	  });
//
// 	}
//
// getPosition(): void{
//   this.map.getMyLocation()
//   .then(response => {
//     this.map.moveCamera({
//       target: response.latLng
//     });
//     this.map.addMarker({
//       title: 'My Position',
//       icon: 'blue',
//       animation: 'DROP',
//       position: response.latLng
//     });
//   })
//   .catch(error =>{
//     console.log(error);
//   });
// }

}
