import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { WichtelpartnerComponent } from './wichtelpartner/wichtelpartner.component';
import { FormsModule } from '@angular/forms';
import { PersonslistComponent } from './personslist/personslist.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    WichtelpartnerComponent,
    PersonslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
