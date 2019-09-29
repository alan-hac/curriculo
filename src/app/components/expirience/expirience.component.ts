import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.scss']
})
export class ExpirienceComponent implements OnInit {

  @Input()
  public experiences: Array<{role: string, company: string, period: string, information: string}>;

  constructor() { }

  ngOnInit() {
  }

}
