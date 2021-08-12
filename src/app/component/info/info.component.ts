import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/model/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {

  @Input() objective = '';
  @Input() sub = ''
  @Input() infos = new Array<Info>();

  constructor() { }

  ngOnInit() {}

}
