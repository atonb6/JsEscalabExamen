import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private isLogged = false;

  constructor(
    
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  async login(email: string, pass: string) {
    try {
      const respAuth = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass);
      console.log('respuesta Auth-->', respAuth);
      localStorage.setItem(
        'email', respAuth.user.email
      )
      this.router.navigate(['home']);
      return respAuth;
    } catch (error) {
      this.router.navigate(['login']);
      console.error('error auth -->', error);
      alert('Contraseña o usuario incorrecto')
    }
  }

  async logout() {
    try {
      const logoutResp = await this.angularFireAuth.auth.signOut();
      console.log('logout exitoso');
      localStorage.clear();
      return logoutResp;
    } catch (error) {
      console.error('logout error -->', error);
      return error;
    }
  }

  async registerUser(email: string, pass: string) {
    try {
      const respRegister = await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, pass);
      console.log('resp registerUser -->', respRegister);
      this.router.navigate(['login']);

      
      return respRegister.user;
    } catch (error) {
      console.log('error registerUser -->', error);
      alert('Usuario ya registrado')
    }
  }

  async currentUser() {
    try {
      const currentUserResp = this.angularFireAuth.auth.currentUser;
      console.log('currentUser service -->', currentUserResp);
      return currentUserResp;
    } catch (error) {
      console.log('error current user -->', error);
    }
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('email')) {
      this.isLogged = true;
      return true;
      
    }
    this.isLogged = false;
    return false;
      
  }

}
