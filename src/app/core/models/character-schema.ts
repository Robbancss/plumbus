import {Info} from './common';
import {Character} from './character';

export class CharacterSchema {

  info: Info;
  results: Character[];

  constructor(info: Info, results: Character[]) {
    this.info = info;
    this.results = results;
  }

}
