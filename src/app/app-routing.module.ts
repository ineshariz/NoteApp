import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NoteListComponent} from './note-list/note-list.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';

const routes:Routes=[
  {path:'', component: MainLayoutComponent,children:[
      {path:'',component:NoteListComponent}
    ]}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
}
