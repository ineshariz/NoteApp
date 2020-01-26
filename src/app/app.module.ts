import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import {AppRoutingModule} from './app-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NoteCardComponent } from './note-card/note-card.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    MainLayoutComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
