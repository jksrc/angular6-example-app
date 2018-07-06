import { EditorComponent } from './editor/editor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

const heroesRoutes: Routes = [
  {
    path: 'editor',
    component: EditorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BpmnEditorRoutingModule { }
