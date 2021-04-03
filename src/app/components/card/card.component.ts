import { Component, OnInit, Input } from '@angular/core';
import { ArtService } from "../../services/art.service";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public obra:any = {};
  public number = Math.floor((Math.random() * 100) + 1);
  
  constructor(
    private _obrasServices: ArtService,
  ) { 
  }

  @Input() counter: number;

  ngOnInit() {


    console.log('number-->',this.number)
    this._obrasServices.getArtById(this.number).subscribe(respObra => {
      
      this.obra = respObra;

      console.log('ResponseID-->', respObra)
    });

  }

  getUrl()
{
  return "url(" + this.obra.primaryImageSmall + ")";
}

}
