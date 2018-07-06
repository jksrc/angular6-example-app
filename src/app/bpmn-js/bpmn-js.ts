import _Modeler from 'bpmn-js/lib/Modeler';
import _PropertiesPanelModule from 'bpmn-js-properties-panel';
import _BpmnPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/bpmn';
import _EntryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';
import _PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';

import * as _CamundaPropertiesProvider from 'bpmn-js-properties-panel/lib/provider/camunda';
import * as _ElementTemplates from 'bpmn-js-properties-panel/lib/provider/camunda/element-templates/ElementTemplates';
import _CamundaExtensionModule from 'camunda-bpmn-moddle/lib';

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
  camundaPropertiesProvider: 'camundaPropertiesProvider',
  elementTemplates: 'elementTemplates',
  camundaExtensionModule: 'camundaExtensionModule'
};

export const Modeler = _Modeler;
export const PropertiesPanelModule = require( 'bpmn-js-properties-panel'); // _PropertiesPanelModule;
export const EntryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory'); // _EntryFactory;
export const OriginalPropertiesProvider = require('bpmn-js-properties-panel/lib/provider/bpmn'); // _BpmnPropertiesProvider;
export const CamundaPropertiesProvider = require('bpmn-js-properties-panel/lib/provider/camunda'); // _BpmnPropertiesProvider;
export const OriginalPaletteProvider = _PaletteProvider;
export const ElementTemplates =  _ElementTemplates; // require('bpmn-js-properties-panel/lib/provider/camunda/element-templates/ElementTemplates');
export const _CamundaModdle = require('camunda-bpmn-moddle/resources/camunda.json');
export const CamundaExtensionModule = _CamundaExtensionModule;



export interface IPaletteProvider {
  getPaletteEntries(): any;
}

export interface IPalette {
  registerProvider(provider: IPaletteProvider): any;
}

export interface IPropertiesProvider {
  getTabs(elemnt): any;
}
