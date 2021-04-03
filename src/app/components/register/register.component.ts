import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { FirebaseService } from '../../services/firebase.service';
import { FirestoreService } from '../../services/firestore.service';
import { passwordValidation } from '../../directives/validations/password.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  seletedValue = 'Comuna';

  public comunas: any[] = ["Comuna", 'Santiago Centro', 'Macúl', 'Peñalolen', 'Ñuñoa'];

  get email() { return this.registerForm.get('email') };
  get pass() { return this.registerForm.get('pass') };
  get name() { return this.registerForm.get('name') };
  get phoneNumber() { return this.registerForm.get('phoneNumber') };

  public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, passwordValidation()]),
    name: new FormControl(''),
    comuna: new FormControl(''),
    phoneNumber: new FormControl(''),
    newsletter: new FormControl(false)
  })

  constructor(
    private firebaseService: FirebaseService,
    private firestoreService: FirestoreService,
  ) { }

  ngOnInit() {
  }

  onRegister(){
    console.log('register -->', this.registerForm.value)
    this.firebaseService.registerUser(this.registerForm.value.email, this.registerForm.value.pass).then(resp => {
      console.log('ok register');
      const newUser: User = {
        email: resp.email, 
        name: this.registerForm.value.name,
        phoneNumber: this.registerForm.value.phoneNumber,
        comuna: this.registerForm.value.comuna,
        newsletter: this.registerForm.value.newsletter,
        uid: resp.uid
      }
      this.firestoreService.createUser(newUser).then(resp => {
        console.log('new user register firestore -->', resp);
        alert('Usuario creado con éxito')
        
      }).catch(error =>{
        console.log('error register firestore -->', error);

      })
    })
  }
}
