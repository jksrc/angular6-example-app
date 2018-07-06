import _Modeler from 'bpmn-js/lib/Modeler.js';
import _PropertiesPanelModule from 'bpmn-js-properties-panel';
import _BpmnPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/bpmn';
import _EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import _PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
// import _CamundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
declare var require: any;

export const InjectionNames = {
  eventBus: 'eventBus',
  bpmnFactory: 'bpmnFactory',
  elementRegistry: 'elementRegistry',
  translate: 'translate',
  propertiesProvider: 'propertiesProvider',
  bpmnPropertiesProvider: 'bpmnPropertiesProvider',
  paletteProvider: 'paletteProvider',
  originalPaletteProvider: 'originalPaletteProvider',
};

export const Modeler = _Modeler;
export const PropertiesPanelModule = require( 'bpmn-js-properties-panel'); // _PropertiesPanelModule;
export const EntryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory'); // _EntryFactory;
export const OriginalPropertiesProvider = require('bpmn-js-properties-panel/lib/provider/bpmn'); // _BpmnPropertiesProvider;
export const CamundaPropertiesProvider = require('bpmn-js-properties-panel/lib/provider/camunda'); // _BpmnPropertiesProvider;
export const OriginalPaletteProvider = _PaletteProvider;
export const ElementTemplates = require('bpmn-js-properties-panel/lib/provider/camunda/element-templates/ElementTemplates');

export interface IPaletteProvider {
  getPaletteEntries(): any;
}

export interface IPalette {
  registerProvider(provider: IPaletteProvider): any;
}

export interface IPropertiesProvider {
  getTabs(elemnt): any;
}
