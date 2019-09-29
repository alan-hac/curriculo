import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {

  @Input()
  public abilities: Array<{name: string, level: number}>;

  constructor() { }

  ngOnInit() {
  }

}
