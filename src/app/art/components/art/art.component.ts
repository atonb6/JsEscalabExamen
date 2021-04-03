import { Component, OnInit } from '@angular/core';
import { ArtService } from "../../../services/art.service";
import { ActivatedRoute } from "@angular/router";
import { Art } from "../../../interfaces/art";

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  public art: Art;

  constructor(
    private artService: ArtService,
    private activatedRoute: ActivatedRoute
  ) { 
    activatedRoute.params.subscribe(params => {
      console.log('params -->', params);
      artService.getArtById(params.id).subscribe(respArt =>{
        this.art = respArt;
      })
    })

  }

  ngOnInit() {
  }

}
