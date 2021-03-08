import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-personslist',
  templateUrl: './personslist.component.html',
  styleUrls: ['./personslist.component.css']
})
export class PersonslistComponent {
  @Input() entry;
  @Output() delete: EventEmitter<any>;

  constructor() {
    this.delete = new EventEmitter();
  }


  erase() {
    this.delete.emit(this.entry);
  }
}
