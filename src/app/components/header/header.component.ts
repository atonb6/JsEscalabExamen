import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../../services/firebase.service";
import { AuthentificationComponent  } from "../authentification/authentification.component";

import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  private isLogged = false;

  constructor(private firebaseS: FirebaseService, private router: Router) {
    this.isLogged = this.firebaseS.isAuthenticated();
  }

  ngOnInit() {
  }

  ngDoCheck(){
    this.isLogged = this.firebaseS.isAuthenticated();
  }


  toLogout() {
    this.firebaseS
      .logout()
      .then((resp) => {
        console.log("logout exitoso -->", resp);
        this.isLogged = false;
        alert("Has cerrado sesión con éxito");
        this.router.navigate(["home"]);
      })
      .catch((error) => {
        console.log("error logout -->", error);
      });
  }
}
