import { Component,ElementRef, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, ViewController } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';

import { Geolocation } from '@ionic-native/geolocation';
declare var google;

@IonicPage()
@Component({
  selector: 'page-direccion',
  templateUrl: 'direccion.html',
})
export class DireccionPage {

  @ViewChild('map') mapElement: ElementRef;
  // @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  // latitude: number;
  // longitude: number;
  // // autocompleteService: any;
  // placesService: any;
  // query: string = '';
   place: any;
  // searchDisabled: boolean;
  // saveDisabled: boolean;
  // location: any;
  map:any;
  GoogleAutocomplete : any;
  autocomplete : any;
  autocompleteItems : any;

  datosCliente : any;
  geocoder:any;
  markers:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public zone: NgZone,
    // public mapas: GoogleMapsProvider,
    public platform: Platform,
    public geolocation: Geolocation,
    public viewCtrl: ViewController) {
      this.datosCliente = this.navParams.get('datosCliente')
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
    }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition()
    .then((position)=>{
      let mapOptions = {
        mapTypeControl : true,
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        liteMode: true,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  })
}

searchPlace(){
  if (this.autocomplete.input == '') {
    this.autocompleteItems = [];
    return;
  }
  this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
	(predictions, status) => {
    this.autocompleteItems = [];
    this.zone.run(() => {
      if (predictions == null){
          let error = {'description':"Ubicacion no encontrada"}
        this.autocompleteItems.push(error)
      }else{
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });

      }
    });
  });
}

selectSearchResult(item){
  this.clearMarkers();
  this.autocompleteItems = [];
  this.place = ''

  this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
    if(status === 'OK' && results[0]){

      // this.place = {
      //     lat: results[0].geometry.location.lat(),
      //     lng: results[0].geometry.location.lng()
      // };

      let marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: this.map,
        draggable:true,
        animation: google.maps.Animation.DROP,
      });
      this.markers.push(marker);
      this.map.setCenter(results[0].geometry.location);
    }
  })
}

clearMarkers(){
  this.geocoder = new google.maps.Geocoder;
  this.markers = [];
}

clear(){
  for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
      }
  this.markers.length = 0;
}

save(){
  let lat = this.markers[0].position.lat()
  let lng = this.markers[0].position.lng()
  this.datosCliente.lat  = lat
  this.datosCliente.lng  = lng
  this.navCtrl.push(ProductoPage, { cliente: this.datosCliente})
}


}
