import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
declare var google;

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  @ViewChild('map') mapElement:ElementRef;
   map :any;
   user: any;
   point: any;
   hasta: any;
   fixcenter : boolean = true;
   public datos : any;
   public address: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.datos = this.navParams.get('datos')
    this.address = this.datos.datos.lat+','+this.datos.datos.lng;
    this.loadMap();
  }

  loadMap(){
    this.geolocation.getCurrentPosition()
    .then((position)=>{
      let p = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.point = p;
      let mapOptions = {
        mapTypeControl : true,
        liteMode: true,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.getRoute()
    },(err)=>{ console.log("Error")});
  }

  getRoute(){

    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);
    directionsService.route({
      origin: this.point,
      destination: this.address,
      travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
          // this.fixcenter=false;


        } else {
          window.alert('Directions request failed due to ' + status);
        }
    });

  }

}
