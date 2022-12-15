import { Component, OnInit,Input } from '@angular/core';
import { Usuario } from 'src/app/services/usuario';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  @Input() uid :string;
  usuario: Usuario = {
    uid :'',
    rut: '' ,
    name: '',
    lastname: '',
    gender: '',
    email: this.avatarService.getEmail(),
    age: 0,
    image:'',
    direccion:'',
    comuna:'',
    telefono:0,
    perfil: ''
  };
  profile:any=null;


  constructor(private avatarService:AvatarService, private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit() {
  }

  async addUsuario(){
    this.usuarioService.addUsuario(this.usuario);
    this.router.navigateByUrl('/home',{replaceUrl:true});
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
      const result = await Promise.resolve(this.avatarService.Getavatar(avatar));
      this.usuario.image = result;
      console.log(result);
    }
    
    loadProfile(){
      this.avatarService.getUserProfile().subscribe(respuesta => {
        this.profile = respuesta
      });
    }

}