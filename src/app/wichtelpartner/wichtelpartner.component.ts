import { Component, OnInit } from '@angular/core';
import { SecretsantaService } from '../secretsanta.service';

@Component({
  selector: 'app-wichtelpartner',
  templateUrl: './wichtelpartner.component.html',
  styleUrls: ['./wichtelpartner.component.css']
})
export class WichtelpartnerComponent {
  randomItemA: string;
  randomItemB: string;
  draw: string[];
  i: number;
  j: number;

  constructor(public secretsanta: SecretsantaService) {
    this.draw = [];
  }


  ssd() {
    this.j = this.secretsanta.person.length;
    for (this.i = 0; this.i < this.secretsanta.person.length; this.i++) {
      this.j = this.j - 1;
      if (this.secretsanta.person[this.i] == this.secretsanta.person[this.j]) {
        this.draw.push(this.secretsanta.person[this.i] + " wird von allen beschenken.");
      }
      else {
        this.draw.push(this.secretsanta.person[this.i] + " muss " + this.secretsanta.person[this.j] + " beschenken.");
      }
    }
  }

  delete() {
    this.draw.length = 0;
  }

}
