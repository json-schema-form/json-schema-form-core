import chai from 'chai';
import { describe, it} from 'mocha';
import * as jsonrules from './json-rules';

chai.should();

describe('json-rules.js', () => {
  const uischema = {
    ui: {
      "policy": [
        {
          "version": "0.0.3-alpha",
          "description": "I catalogue a business rule that does stuff",
          // "from" keyword defines the object(s) to append the policy to for determining relative pointer intention
          // path model[company][i0][users][i1]
          "from": "/properties/company/items/properties/users/items/properties",
          "if": [
            "allOf": [
              {
                // path model[company][i0][name]
                "when": { "$data": "3/name" },
                "is": { "pattern": "/^[A-M]/" }
              },
              {
                // path model[company][i0][allowSubscription]
                "when": { "$data": "3/allowSubscription" },
                "is": {"const":true}
              },
              {
                // path model[company][i0][users][i1][subscribe]
                "when": { "$data": "0/subscribe" },
                "is": {"const":true}
              },
              {
                // path model[company][i0][users][i1][require]
                "when": "1/require",
                "is": { "items": { "const": "email" }}
              }
            ]
          ],
          "action": [
            {
              "update": [
                // path model[company][i0][users][i1][email]
                "0/email",
                // path model[company][i0][users][i1][subscriptionTerm]
                "0/subscriptionTerm",
                // path model[company][i0][users][i1][readAgreement]
                "0/readAgreement"
              ],
              "set": { "display": true, "required": true }
            }
          ]
        }
      ]
    }
  };

  it('should contain a function for resolving relative & local references', () => {
    jsonrules.should.be.an('object');
  })

  describe('jsonrules', () => {

    it('should generate a function for evaluating rules', (done) => {
      jsonrules
        .generate(uischema)
        .then((rules) => {
console.log(rules);
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });
});
