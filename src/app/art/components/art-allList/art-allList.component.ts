import { Component, OnInit } from '@angular/core';
import { ArtService } from "../../../services/art.service";
import { AllList } from "../../../interfaces/allList";

@Component({
  selector: 'app-art-allList',
  templateUrl: './art-allList.component.html',
  styleUrls: ['./art-allList.component.scss']
})
export class ArtallListComponent implements OnInit {
  public artList: AllList[];

  constructor(
    private artService: ArtService
  ) { 
    artService.getAllArt().subscribe(respallList => {
      this.artList = respallList;
    })

  }

  ngOnInit() {
  }

}
