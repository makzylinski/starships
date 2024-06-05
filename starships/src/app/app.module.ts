import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { EntitySwitcherComponent } from './components/entity-switcher/entity-switcher.component';

const COMPONENTS = [AppComponent, CardComponent, EntitySwitcherComponent];
const IMPORTS = [BrowserModule, HttpClientModule, MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: COMPONENTS,
  imports: IMPORTS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
