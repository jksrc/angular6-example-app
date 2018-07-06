import { CamundaPropertiesProvider, CamundaExtensionModule, _CamundaModdle } from './../../bpmn-js/bpmn-js';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modeler, OriginalPropertiesProvider, PropertiesPanelModule, InjectionNames, OriginalPaletteProvider} from '../../bpmn-js/bpmn-js';
import {CustomPropsProvider} from '../../props-provider/CustomPropsProvider';
import {CustomPaletteProvider} from '../../props-provider/CustomPaletteProvider';
import {ElementTemplates} from '../../bpmn-js/bpmn-js';

// import * as data from './el.json';

declare var require: any;

const customModdle = {
  name: 'customModdle',
  uri: 'http://example.com/custom-moddle',
  prefix: 'custom',
  xml: {
    tagAlias: 'lowerCase'
  },
  associations: [],
  types: [
    {
      'name': 'ExtUserTask',
      'extends': [
        'bpmn:UserTask'
      ],
      'properties': [
        {
          'name': 'worklist',
          'isAttr': true,
          'type': 'String'
        }
      ]
    },
  ]
};


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  title = 'Angular/BPMN';
  modeler;


  etl = [
    {
      'name': 'Priority Task',
      'id': 'com.mycompany.whateverdomain.PriorityTask',
      'appliesTo': [
        'bpmn:UserTask'
      ],
      'properties': [
        {
          'label': 'Priority',
          'description': 'The priority assigned to this task',
          'type': 'Dropdown',
          'choices': [
            { 'name': 'low', 'value': '50' },
            { 'name': 'medium', 'value': '100' },
            { 'name': 'high', 'value': '150' }
          ],
          'value': '50',
          'binding': {
            'type': 'property',
            'name': 'camunda:priority'
          }
        }
      ]
    }
  ];



  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.modeler = new Modeler({
      container: '#canvas1',
      width: '100%',
      height: '400px',
      additionalModules: [
        PropertiesPanelModule,
        ElementTemplates,
        // CamundaExtensionModule,
        // {['CamundaExtensionModule']: ['type', CamundaExtensionModule]},
        // {[InjectionNames.camundaExtensionModule]: ['type', CamundaExtensionModule]},
        {[InjectionNames.camundaPropertiesProvider]: ['type', CamundaPropertiesProvider.propertiesProvider[1]]},
        {[InjectionNames.propertiesProvider]: ['type', CustomPropsProvider]},
        // {[InjectionNames.elementTemplates]: ['type', ElementTemplates]},
        {[InjectionNames.originalPaletteProvider]: ['type', OriginalPaletteProvider]},
        {[InjectionNames.paletteProvider]: ['type', CustomPaletteProvider]},
        // {['customElementsPropertiesActivator']: ['type', require('bpmn-js-properties-panel/lib/provider/camunda/element-templates/CustomElementsPropertiesActivator')]},
        // {['elementTemplatesLoader']: ['type', require('bpmn-js-properties-panel/lib/provider/camunda/element-templates/elementTemplatesLoader')]}
      ],
      elementTemplates: this.etl
      ,
      propertiesPanel: {
        parent: '#properties1'
      },
      moddleExtensions: {
        camunda: _CamundaModdle
      }
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  load(): void {
    const url = '/assets/bpmn/initial.bpmn';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
      (x: any) => {
        console.log('Fetched XML, now importing: ', x);
        this.modeler.importXML(x, this.handleError);
      },
      this.handleError
    );
  }

  save(): void {
    this.modeler.saveXML((err: any, xml: any) => console.log('Result of saving XML: ', err, xml));
  }

}





