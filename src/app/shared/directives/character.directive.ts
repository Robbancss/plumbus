import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCharacter]'
})
export class CharacterDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
