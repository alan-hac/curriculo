import { Component, Input } from '@angular/core';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent { 
  
  @Input()
  public objective: string;
  @Input()
  public sub: string;
  @Input()
  public infos: Array<Info>;


}
