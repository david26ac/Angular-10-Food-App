import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SaveComponent } from './save/save.component'
import { HttpClientModule } from '@angular/common/http';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RecetasComponent } from './recetas/recetas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { VerComponent } from './ver/ver.component';
import { Page404Component } from './page404/page404.component';
import { SearchComponent } from './search/search.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SavedComponent } from './saved/saved.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    MainComponent,
    VerComponent,
    Page404Component,
    SearchComponent,
    SaveComponent,
    SavedComponent,
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
