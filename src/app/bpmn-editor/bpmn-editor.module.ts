import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BpmnEditorRoutingModule } from './bpmn-editor-routing.module';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    BpmnEditorRoutingModule
  ],
  declarations: [EditorComponent]
})





export class BpmnEditorModule { }
