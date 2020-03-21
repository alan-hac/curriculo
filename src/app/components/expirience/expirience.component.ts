import { Component, Input, OnInit } from '@angular/core';
import { XpTopic } from 'src/app/model/xp-topic';

@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.scss']
})
export class ExpirienceComponent implements OnInit {
  @Input()
  public experiences: Array<XpTopic>;

  ngOnInit(): void {
    console.log(this.experiences);
  }

}
