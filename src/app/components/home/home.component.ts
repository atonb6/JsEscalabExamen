import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { User } from "src/app/interfaces/user";
import { FirebaseService } from "../../services/firebase.service";
import { FirestoreService } from "../../services/firestore.service";
import { ArtService } from "../../services/art.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  public myUser: User = {
    email: '',
    name: '',
    phoneNumber: '',
    newsletter: false,
    comuna: '',
    uid: ''
  };
  public uid: string;
  public serviceSuscription: Subject<boolean> = new Subject();
  public imagesResults:string;


  constructor(
    private firebaseS: FirebaseService,
    private firestoreService: FirestoreService,
    private _obrasServices: ArtService,
    
  ) {
    this.firebaseS.currentUser().then(async resp => {
      console.log('usuario actual -->', resp);
      this.uid = resp.uid;
    }).catch(error => {
      console.log('error calbackhell -->', error);
    })


    this._obrasServices.getRandombras()
      .subscribe((results: any) => {

        this.imagesResults = results;
        console.log(this.imagesResults );
      });
  }
  

  async ngOnInit() {
   this.firestoreService.getUser(this.uid)
   .pipe(takeUntil(this.serviceSuscription))
   .subscribe(data => {
        console.log('firestore data home -->', data);
        this.myUser = {
          email: data.email,
          name: data.name,
          phoneNumber: data.phoneNumber,
          newsletter: data.newsletter,
          comuna: data.comuna,
          uid: data.uid,
        };
        console.log('myuser data -->', this.myUser);
      });
    
    console.log('localstorage email -->', localStorage.getItem('email'));


    
    
  }

  ngOnDestroy() {
    console.log('servicio desconectado -->', this.serviceSuscription);
    this.serviceSuscription.next(false);
    this.serviceSuscription.complete();
  }


}
