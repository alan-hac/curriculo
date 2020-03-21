import { Component, OnInit, Input } from '@angular/core';
import { SkillTopic } from 'src/app/model/skill-topic';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent {

  @Input()
  public abilities: Array<SkillTopic>;

}
