import { Injectable } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  APIKEY ='0aa6843d1f55b40dda06f591036e2ff9';
  lat:any;
  lon:any;
  response:any;

  constructor(
    private httpClient:HttpClient,
    private geolocation:Geolocation

  ) {  }
  getLocation () {
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.lat = resp.coords.latitude
      this.lon = resp.coords.longitude
    }).catch((error)=>{
      console.log('error', error);
    });
  }
  getGeolocation(): Promise<any>{
    return new Promise((resolve,reject)=>{
      this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.APIKEY}&units=metric`).subscribe(results=>{
        console.log(this.response);
        resolve(results);
      },
      (err)=>{
        reject(err);
      })
    })
  }
}
