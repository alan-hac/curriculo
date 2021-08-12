import { Component, Input, OnInit } from '@angular/core';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';


import { SkillPoint } from 'src/app/model/skill-point';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.sass']
})
export class AbilityComponent implements OnInit {

  @Input() abilities = new Array<SkillPoint>();
  fasCircle = fasCircle
  farCircle = farCircle

  constructor() { }

  ngOnInit(): void { }

}
