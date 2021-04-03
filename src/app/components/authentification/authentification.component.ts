import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { passwordValidation } from '../../directives/validations/password.directive';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  public animation: boolean = false;

  get email() { return this.authForm.get('email') };
  get pass() { return this.authForm.get('pass') };

  public authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, passwordValidation()])
  })
  constructor(
    private firebaseService: FirebaseService,
  ) { }
  
  ngOnInit() {
  }

  onLogin() {
    this.animation = true;
    console.log('submit -->', this.authForm.value);
    this.firebaseService.login(this.authForm.value.email, this.authForm.value.pass).then(resp => {
      console.log('response login -->', resp);
      this.animation = false;
    }).catch(error => {
      console.error('error login -->', error);
      this.animation = false;
    })
  }

}
