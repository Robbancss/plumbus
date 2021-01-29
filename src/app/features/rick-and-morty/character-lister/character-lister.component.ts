import {Component, Input, OnInit} from '@angular/core';
import {CharacterSchema} from '../../../core/models/character-schema';

@Component({
  selector: 'app-character-lister',
  templateUrl: './character-lister.component.html',
  styleUrls: ['./character-lister.component.scss']
})
export class CharacterListerComponent implements OnInit {

  @Input() characterList: CharacterSchema;

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit: CharacterListerComponent: ', this.characterList);
  }

}
