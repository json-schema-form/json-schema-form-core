import chai from 'chai';
import { describe, it} from 'mocha';
import { JSONSchemaForm, API } from './api';

chai.should();

describe('api.js', () => {
  it('should hold an API class', () => {
    API.should.be.an('function');
    JSONSchemaForm.should.be.an('function');
  });

  describe('API', () => {
    it('should return an instance of JSONSchemaForm when form is called', () => {
      let api = new API();
      let result = api.form('test');
// console.log(result);
      result.instanceOf(JSONSchemaForm);
    });
  });

  // describe('validate', () => {
  //   const form = { 'key': [ 'hero' ], 'schema': { 'type': 'string' }};
  //   it('should return a result object {"error":null, "missing":[], "valid":true}, with valid set to true when the data is valid for the schema', () => {
  //     let value = 'Batman';
  //     let result = validate(form, value);
  //     should.not.exist(result.error);
  //     result.missing.should.be.a('array');
  //     result.missing.length.should.equal(0);
  //     result.valid.should.equal(true);
  //   });

  //   it('should return an error object with a message "Invalid type: array (expected string)" when the data is not valid', () => {
  //     let value = [0];
  //     let result = validate(form, value);
  //     result.error.message.should.eq("Invalid type: array (expected string)");
  //   });
  // });
});

/**
 *
 JsonRefs
  .resolveRefs(defRefJsonSchema, { "filter": ['relative', 'local'] })
  .then(function (res) {
  // https://github.com/whitlockjc/json-refs/blob/master/docs/API.md#module_JsonRefs.resolveRefs



jsf.form('myForm', schema, ui, model [, state]) // create, leave the bind to html to asf, rsf etc..

jsf.form('myForm').schema(schema).ui(uiSchema)
   .state('state', state)
   .render()
   .then(finished()=>{}, notify()=>{});

jsf.form('myForm').schema
jsf.form('myForm').ui.schema

jsf.form('myForm').ui.actions
jsf.form('myForm').ui.policies

jsf.form('myForm').scope
jsf.form('myForm').intermediate canonical intermediate language
jsf.form('myForm').ui.views ['default']



jsf.form('myForm').model('decision', true) // dynamic set model
jsf.form('myForm').schema('decision').readonly // access to merged form or schema object
jsf.form('myForm').schema([ "user", "age" ], schema [, form]) // perhaps replace schema definition for single field
jsf.form('myForm').schema([ "user", "age" ]).onChange((old, new) => {  }) // external listeners
jsf.form('myForm').onChange((key, old, new) => {  }) // external listeners of whole form
jsf.form('myForm').validate(schema, form, model) // access to most of the providers as api


// call jsonSchema.render(function(templates) {  }).notify() to signal completion of definition
var myForm  = jsonSchema.form('myForm')
              .schema({ 'type': 'object',
                        'properties': {},
                        'ui':{
                          [{'title': 'Administrator', 'fields':[]}, {'title': 'Data entry', 'fields':[], default: true }]}
                        })
              .model(data)
              .validate(function(schema, data) { return {"error":null, "missing":[], "valid":true} })
              .presentation('AngularBootstrap', {actions: {template: actionsTemplate, builder: jsonSchema.builders.default}})
              .composition('AngularBootstrap', {actions: {template: actionsTemplate, builder: jsonSchema.builders.default}})
              .builder('array', function(){  }, 'theme': '*')
              .templates({actions: {template: actionsTemplate, builder: jsonSchema.builders.default}})
              .builders({ 'table': function(){  }, 'condition': function(){  } })
              .rules({'policies': [{  }]})
              .actions([{  }])
              .scripts({ 'findUser': function() {} })
              .listen((event, field, key) => {})
              .listen(['onChange','onTemplateUpdate','onValidate'], (event, field, key) => {})
              .presentation('bootstrapDecorator', {
                actions: {template: actionsTemplate, builder: defaults},
                array: {template: arrayTemplate, builder: [sfField, ngModelOptions, ngModel, array, condition]},
                button: {template: submitTemplate, builder: defaults},
                checkbox: {template: checkboxTemplate, builder: defaults},
                checkboxes: {template: checkboxesTemplate, builder: [sfField, ngModelOptions, ngModel, array, condition]},
                conditional: {template: sectionTemplate, builder: [sfField, simpleTransclusion, condition]},
                'default': {template: defaultTemplate, builder: defaults},
                fieldset: {template: fieldsetTemplate, builder: [sfField, simpleTransclusion, condition]},
                help: {template: helpTemplate, builder: defaults},
                number: {template: defaultTemplate, builder: defaults.concat(numeric)},
                password: {template: defaultTemplate, builder: defaults},
                radios: {template: radiosTemplate, builder: defaults},
                'radios-inline': {template: radiosInlineTemplate, builder: defaults},
                radiobuttons: {template: radiobuttonsTemplate, builder: defaults},
                section: {template: sectionTemplate, builder: [sfField, simpleTransclusion, condition]},
                select: {template: selectTemplate, builder: defaults.concat(selectPlaceholder)},
                submit: {template: submitTemplate, builder: defaults},
                tabarray: {template: tabarrayTemplate, builder: [sfField, ngModelOptions, ngModel, array, condition]},
                tabs: {template: tabsTemplate, builder: [sfField, ngModelOptions, tabs, condition]},
                textarea: {template: textareaTemplate, builder: defaults},

                'readonly': {template: textareaTemplate, builder: defaults}
                'annotation': [ // pass the template properties to change stle of annotation based on format
                  {'format': 'blue', 'path': '/bootstrap/textarea.html', template: textareaTemplate, builder: defaults}
                ]
              }, [])

util = jsonSchema.form('myForm')
util.lookup
util.merge
util.lookup


describe('api.js', () => {
  it('should hold all the public functions of the API', () => {
    jsf.should.be.an('function');
  });
});
 */
