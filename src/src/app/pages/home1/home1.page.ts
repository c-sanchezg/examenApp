import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { WeatherService } from 'src/app/services/weather.service';
import { Usuario } from 'src/app/services/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class Home1Page implements OnInit {

  todayDate = new Date()
  pageTitle = 'home';
  weathertemp: any;
  cityname: any;
  weatherdetail: any;
  response: any;
  usuario: Usuario={
    uid:'',
    rut:'',
    name:'',
    lastname:'',
    gender:'',
    email:'',
    age:0,
    image:'',
    direccion: '',
    comuna: '',
    telefono: 0,
    perfil:'',
    rol:'',
  };
  

  constructor(private loadingCtrl: LoadingController, private WeatherService:WeatherService, private router:Router) {}

  ngOnInit(){
    this.WeatherService.getLocation();
    this.getRol();
  }

  obtenerClima(){
    this.WeatherService.getGeolocation().then(results => {
      this.response = results;
      this.cityname = this.response.name;
      this.weathertemp = this.response.main.temp;
      this.weatherdetail = this.response.weather[0].description;
    })
  }

  getUsuario(){
    this.usuario.getUsuarioById().subscribe(response => {
      this.usuario = response;
    });
    
  }

  getRol(){
    this.usuario.getUsuarioById().subscribe(response => {
      this.rol = response.perfil;
      console.log(this.rol);
    });
  }
  
}
