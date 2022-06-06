import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  id: number = 0;
  name: string = '';
  image: string = '';
  ability: string = '';
  found: boolean = false;
  arr:any[] = [];

  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
  }

  getPokemon() {
    try {
      this.characterService.getDetails(this.name).subscribe((data:any) => { 
      
        this.name = data.name;
        this.id = data.id;
        this.image = data.sprites.front_default;
        this.ability = data.ability.name;
        this.found = true;
        
        this.arr = [this.id, this.name, this.image, this.ability];
        
        });
    } catch (e) {
      this.name = "No se encontró pokémon"
    }
  }

}
