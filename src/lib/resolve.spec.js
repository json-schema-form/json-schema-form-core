import chai from 'chai';
import { describe, it} from 'mocha';
import { jsonref } from './resolve';

chai.should();

describe('resolve.js', () => {
  const schema = {
    "id": "http://some.site.somewhere/entry-schema#",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "schema for an fstab entry",
    "type": "object",
    "required": [ "storage" ],
    "properties": {
      "storage": {
        "type": "object",
        "oneOf": [
          { "$ref": "#/definitions/diskDevice" },
          { "$ref": "#/definitions/diskUUID" },
          { "$ref": "#/definitions/nfs" },
          { "$ref": "#/definitions/tmpfs" }
        ]
      }
    },
    "definitions": {
      "diskDevice": {
        "properties": {
          "type": { "enum": [ "disk" ] },
          "device": {
            "type": "string",
            "pattern": "^/dev/[^/]+(/[^/]+)*$"
          }
        },
        "required": [ "type", "device" ],
        "additionalProperties": false
      },
      "diskUUID": {
        "properties": {
          "type": { "enum": [ "disk" ] },
          "label": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
          }
        },
        "required": [ "type", "label" ],
        "additionalProperties": false
      },
      "nfs": {
        "properties": {
          "type": { "enum": [ "nfs" ] },
          "remotePath": {
            "type": "string",
            "pattern": "^(/[^/]+)+$"
          },
          "server": {
            "type": "string",
            "oneOf": [
              { "format": "host-name" },
              { "format": "ipv4" },
              { "format": "ipv6" }
            ]
          }
        },
        "required": [ "type", "server", "remotePath" ],
        "additionalProperties": false
      },
      "tmpfs": {
        "properties": {
          "type": { "enum": [ "tmpfs" ] },
          "sizeInMB": {
            "type": "integer",
            "minimum": 16,
            "maximum": 512
          }
        },
        "required": [ "type", "sizeInMB" ],
        "additionalProperties": false
      }
    }
  };

  it('should contain a function for resolving relative & local references', () => {
    jsonref.should.be.an('function');
  })

  describe('jsonref', () => {

    it('should resolve json-ref via promise', (done) => {
      jsonref(schema)
        .then((resolved) => {
          resolved.properties.storage.oneOf[0].properties.should.have.property('device');
          resolved.properties.storage.oneOf[0].properties.should.equal(
            resolved.definitions.diskDevice.properties
          );
          resolved.properties.storage.oneOf[3].properties.should.equal(
            resolved.definitions.tmpfs.properties
          );
          done();
        })
        .catch((error) => {
          done(error);
        });
    });

    it('should resolve json-ref via callback', (done) => {
      jsonref(schema, function(error, resolved) {
        if (error) done(error);
        resolved.properties.storage.oneOf[0].properties.should.have.property('device');
        done();
      });
    });
  });
});
