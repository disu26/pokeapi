import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Character } from "./character";

@Injectable({
    providedIn:'root'
})

export class CharacterService {

    public baseUrl!: string;

    constructor(private _http: HttpClient){
        this.baseUrl = 'https://pokeapi.co/api/v2/pokemon'
    }


    getDetails( name : string){
        return this._http.get<Character>(this.baseUrl + '/' + name)
    }
}
