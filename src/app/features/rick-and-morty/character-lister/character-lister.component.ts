import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-character-lister',
  templateUrl: './character-lister.component.html',
  styleUrls: ['./character-lister.component.scss']
})
export class CharacterListerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit: CharacterListerComponent');
  }

}
