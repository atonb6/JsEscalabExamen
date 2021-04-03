import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { HeaderComponent } from './components/header/header.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { RegisterComponent } from './components/register/register.component';
import { SpinnerComponent } from "./animations/spinner/spinner.component";

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordDirective } from './directives/validations/password.directive';

import { HttpClientModule } from '@angular/common/http';
import { NamePipe } from "./pipes/name.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SearchComponent,
    CardComponent,
    FormComponent,
    AuthentificationComponent,
    ContactComponent,
    HomeComponent,
    NopageComponent,
    RegisterComponent,
    PasswordDirective,
    SpinnerComponent,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
