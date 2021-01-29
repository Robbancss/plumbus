import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CharacterSchema} from '../models/character-schema';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterSchema> {
    return this.http.get<any>(
      `https://rickandmortyapi.com/api/character`
    );
  }

}
