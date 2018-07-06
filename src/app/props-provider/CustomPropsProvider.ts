import {EntryFactory, IPropertiesProvider} from '../bpmn-js/bpmn-js';

export class CustomPropsProvider  {

// Note that names of arguments must match injected modules, see InjectionNames.
  constructor(private translate, private camundaPropertiesProvider) {
  }

  getTabs(element) {
    return this.camundaPropertiesProvider.getTabs(element);
  }
}
