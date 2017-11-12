import * as schemaDefaultsImp from './lib/schema-defaults';
import * as sfPathImp from './lib/sf-path';
import canonicalTitleMapImp from './lib/canonical-title-map';

import { merge } from './lib/merge';
import { select }  from './lib/select';
import { traverseSchema, traverseForm } from './lib/traverse';
import { validate } from './lib/validate';

// export const sfPath = sfPathImp;
// export const schemaDefaults = schemaDefaultsImp;
// export const canonicalTitleMap = canonicalTitleMapImp;

var form = [];
var builder = [];
var ui = [];
var action = [];
var presentation = [];
var template = [];
var global = {};

/**
 * 
 */
export class JSONSchemaForm {
  constructor(name: string, globalReset: object) {
    this.name = name;

    global = globalReset || global;
  }
}

export class API {
  constructor() {
    form = [];

    this.global = {
      ui:[],
      builder:[],
      action:[],
      presentation:[],
      template:[]
    };
  }

  form(name: string) {
    let test = form[name];

    if(!test) {
      let jsf = new JSONSchemaForm(name, global);
      form[name] = jsf;
    };

    return form[name];
  }

  schema(schema: object) {
    let test = form[name];
    if(!test) {
      form[name];
    };
    return this;
  }

  model(data: object) {
    let test = form[name];
    if(!test) {
      form[name];
    };
    return this;
  }

  presentation(name: string, spec: object) {
    let test = this.presentation[name];
    if(!test) {
      this.presentation[name] = spec;
    };
    return this;
  }
}

