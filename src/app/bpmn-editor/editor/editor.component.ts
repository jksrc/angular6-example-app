import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Modeler, OriginalPropertiesProvider, PropertiesPanelModule, InjectionNames, OriginalPaletteProvider} from '../../bpmn-js/bpmn-js';
import {CamundaPropertiesProvider} from '../../bpmn-js/bpmn-js'; // '../../props-provider/CustomPropsProvider';
import {CustomPaletteProvider} from '../../props-provider/CustomPaletteProvider';
import {ElementTemplates} from '../../bpmn-js/bpmn-js';
// import {CamundaModdleDescriptor} from '../../bpmn-js/bpmn-js';

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
      "name": "Priority Task",
      "id": "com.mycompany.whateverdomain.PriorityTask",
      "appliesTo": [
        "bpmn:UserTask"
      ],
      "properties": [
        {
          "label": "Priority",
          "description": "The priority assigned to this task",
          "type": "Dropdown",
          "choices": [
            { "name": "low", "value": "50" },
            { "name": "medium", "value": "100" },
            { "name": "high", "value": "150" }
          ],
          "value": "50",
          "binding": {
            "type": "property",
            "name": "camunda:priority"
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

        // Re-use original bpmn-properties-module, see CustomPropsProvider
        {[InjectionNames.bpmnPropertiesProvider]: ['type', OriginalPropertiesProvider.propertiesProvider[1]]},
        {[InjectionNames.propertiesProvider]: ['type', CamundaPropertiesProvider.propertiesProvider[1]]},

        // Re-use original palette, see CustomPaletteProvider
        {[InjectionNames.originalPaletteProvider]: ['type', OriginalPaletteProvider]},
        {[InjectionNames.paletteProvider]: ['type', CustomPaletteProvider]},
        {['elementTemplates']: ['type', ElementTemplates]},
      ],
      elementTemplates: this.etl
      ,
      propertiesPanel: {
        parent: '#properties1'
      },
      moddleExtension: {
        custom: customModdle
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





