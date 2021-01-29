import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {RickAndMortyService} from '../../../core/services/rick-and-morty.service';
import {CharacterDirective} from '../../../shared/directives/character.directive';
import {CharacterListerComponent} from '../character-lister/character-lister.component';
import {CharacterDetailsComponent} from '../character-details/character-details.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  @ViewChild(CharacterDirective, {static: true}) appCharacter: CharacterDirective;

  constructor(private rickAndMortyService: RickAndMortyService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe((characters) => {
      console.log(characters);
    });

    this.loadCharacterListComponent();
  }

  loadCharacterListComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CharacterListerComponent);

    const viewContainerRef = this.appCharacter.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  loadCharacterDetailsComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CharacterDetailsComponent);

    const viewContainerRef = this.appCharacter.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.details = Date.now().toString(10);
  }

}
