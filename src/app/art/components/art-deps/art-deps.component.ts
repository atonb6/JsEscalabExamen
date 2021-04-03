import { Component, OnInit } from "@angular/core";
import { AllDeps } from "../../../interfaces/allDeps";
import { ArtService } from "../../../services/art.service";

@Component({
  selector: "app-art-deps",
  templateUrl: "./art-deps.component.html",
  styleUrls: ["./art-deps.component.scss"],
})
export class ArtDepsComponent implements OnInit {

  public allDeps: any = {};

  constructor(
    private artService: ArtService
    ) {
    artService.getAllDeparments().subscribe(respallDeps => {
      this.allDeps = respallDeps;
    });
  }

  ngOnInit() {
    console.log(this.allDeps);
  }
}
