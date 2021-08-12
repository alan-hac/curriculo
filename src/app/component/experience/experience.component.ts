import { Component, Input, OnInit } from '@angular/core';

import { XpRegistry } from 'src/app/model/xp-registry';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  @Input() experiences = new Array<XpRegistry>();

  constructor() { }

  ngOnInit(): void { }

}
