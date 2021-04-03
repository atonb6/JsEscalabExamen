import { Component, OnInit } from '@angular/core';
import { ArtComponent } from '../../art/components/art/art.component';
import { ArtService } from "../../services/art.service";
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public obra1:any = {};
  public obra2:any = {};
  public obra3:any = {};
  public art: ArtComponent;
  public number = Math.floor((Math.random() * 100) + 1);
  
  constructor(
    private _obrasServices: ArtService,
  ) { }

  ngOnInit() {
    this._obrasServices.getArtById(50).subscribe(respObra => {
      this.obra1 = respObra;
    });
    this._obrasServices.getArtById(140).subscribe(respObra => {
      this.obra2 = respObra;
    });
    this._obrasServices.getArtById(80).subscribe(respObra => {
      this.obra3 = respObra;
    });
  }

}
