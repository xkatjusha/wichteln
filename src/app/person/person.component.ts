import { Component, ElementRef, OnInit } from '@angular/core';
import { SecretsantaService } from '../secretsanta.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: string[];
  firstname: string;
  lastname: string;
  names: string;
  num: number;

  constructor(public elementRef: ElementRef, public secretsanta: SecretsantaService) {
    this.person = [];
    this.secretsanta.person = this.person;
    this.num = 0;
  }

  ngOnInit() {
    this.names = localStorage.getItem(JSON.stringify(this.num));
  }

  add() {
    this.num = this.num + 1;
    this.names = this.firstname + " " + this.lastname;
    this.secretsanta.person.push(this.names);
    localStorage.setItem(JSON.stringify(this.num), this.names);
    this.empty();
  }

  empty() {
    this.firstname = "";
    this.lastname = "";
  }

  delete(x: any) {
    console.log(x);
    var position: number = this.secretsanta.person.indexOf(x);
    this.secretsanta.person.splice(position, 1);
    console.log(position, this.secretsanta.person);
  }

}
