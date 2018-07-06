import { BpmnEditorModule } from './bpmn-editor.module';

describe('BpmnEditorModule', () => {
  let bpmnEditorModule: BpmnEditorModule;

  beforeEach(() => {
    bpmnEditorModule = new BpmnEditorModule();
  });

  it('should create an instance', () => {
    expect(bpmnEditorModule).toBeTruthy();
  });
});
