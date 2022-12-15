import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, docData, Firestore, setDoc ,updateDoc} from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { base64 } from '@firebase/util';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore:Firestore,private storage:Storage,private auth:Auth) { }

  getUsuarios(): Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore, 'pasajero');
    return collectionData(usuariosRef, {idField:'uid'}) as Observable<Usuario[]>;
  }

  getUsuarioById(id:string): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `pasajero/${id}`);
    return docData(usuarioDocRef, { idField:'uid' }) as Observable<Usuario>;
  }

  async addUsuario(usuario: Usuario){
    const user = this.auth.currentUser;
    if (user !== null){
      try {
      if(usuario.perfil == 'conductor' && usuario!=null){
        const userDocRef = doc(this.firestore,`conductor/${user.uid}`);
        await setDoc(userDocRef,{
          rut: usuario.rut,
          name: usuario.name,
          lastname: usuario.lastname,
          gender: usuario.gender,
          email: usuario.email,
          age: usuario.age,
          image: usuario.image,
          direccion: usuario.direccion,
          comuna: usuario.comuna,
          telefono: usuario.telefono,
          perfil: usuario.perfil,
          rol: usuario.rol
        });
      }
      else if(usuario.perfil == 'pasajero'){
        const userDocRef = doc(this.firestore,`pasajero/${user.uid}`);
        await setDoc(userDocRef,{
          rut: usuario.rut,
          name: usuario.name,
          lastname: usuario.lastname,
          gender: usuario.gender,
          email: usuario.email,
          age: usuario.age,
          image: usuario.image,
          direccion: usuario.direccion,
          comuna: usuario.comuna,
          telefono: usuario.telefono,
          perfil: usuario.perfil,
          rol: usuario.rol
        });
      }


      return true;
    } catch (error) {
      return false;
    }}
    
  }

  updateUsuario(usuario: Usuario){
    const usuarioRef = doc(this.firestore, `pasajero/${usuario.uid}`);
    return updateDoc(usuarioRef, 
      {
        rut: usuario.rut,
        name: usuario.name,
        lastname: usuario.lastname,
        gender: usuario.gender,
        email: usuario.email,
        age: usuario.age,
        image: usuario.image,
        direccion: usuario.direccion,
        comuna: usuario.comuna,
        telefono: usuario.telefono,
        perfil: usuario.perfil
      });
  }
  


}