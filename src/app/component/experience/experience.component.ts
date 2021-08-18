import { Component, Input, OnInit } from '@angular/core';
import { XpTopic } from 'src/app/model/xp-topic';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  @Input() experiences = {} as XpTopic;

  constructor() { }

  ngOnInit(): void { }

}
