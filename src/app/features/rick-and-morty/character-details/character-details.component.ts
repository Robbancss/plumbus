import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() details: string;

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit: CharacterDetailsComponent');
  }

}
