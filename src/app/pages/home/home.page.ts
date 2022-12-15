import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  todayDate= new Date()
  pageTitle='Home';
  weathertemp:any;
  cityname:any;
  weatherdetail:any;
  response:any;
  //loading:HTMLIonLoadingElement;
  constructor(
    private loadingCtrl:LoadingController,
    private WeatherService:WeatherService
  ) { }

  ngOnInit():void {/*
    this.loadingGeo('loading');*/
    this.WeatherService.getGeolocation();

  }
  obtenerClima(){
    this.WeatherService.getGeolocation().then(results => {
      this.response = results;
      this.cityname = this.response.name;
      this.weathertemp = this.response.temp;
      this.weatherdetail = this.response.weather[0].description;
    })
  }
  /*
  loadingGeo(message:string) {
    this.presentLoading(message);
    setTimeout(()=> {
      this.loading.dismiss();
    },2000);

  }
  async presentLoading(message:string){
    this.loading=await this.loadingCtrl.create({message,})
    await this.loading.present();
  }
  */
}
