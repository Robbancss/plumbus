import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListerComponent } from './character-lister/character-lister.component';
import {SharedModule} from '../../shared/shared.module';
import { CharactersComponent } from './characters/characters.component';


@NgModule({
  declarations: [CharacterDetailsComponent, CharacterListerComponent, CharactersComponent],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    SharedModule
  ]
})
export class RickAndMortyModule { }
