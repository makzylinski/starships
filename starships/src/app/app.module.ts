import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from   
    '@angular/platform-browser/animations';  
import { CardComponent } from './components/card/card.component';
import { EntitySwitcherComponent } from './components/entity-switcher/entity-switcher.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

const COMPONENTS = [AppComponent, CardComponent, EntitySwitcherComponent];
const IMPORTS = [BrowserModule, HttpClientModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, BrowserAnimationsModule];

@NgModule({
  declarations: COMPONENTS,
  imports: IMPORTS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
