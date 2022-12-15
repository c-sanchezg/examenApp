import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, docData,Firestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth, private firestore:Firestore) { }

  async register(email:string,password:string) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth,email,password);
      return user;
    } catch (error) {
      return null;
    }
  }

  async login(email:string, password:string){
    try {
      const user = await signInWithEmailAndPassword(this.auth,email,password);
      return user;
    } catch (error) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
