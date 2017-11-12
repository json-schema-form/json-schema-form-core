import { JsonSchemaUI } from '../json-schema-ui';
import * as JsonRefs from 'json-refs';

/**
 * @name jsonref
 * @param {Object} schema
 * @param {function} callBack
 */
export function jsonref(schema: JsonSchemaUI, callBack?: Function) {
  let promise: Promise<{}> = new Promise(
    function(resolve, reject) {
      JsonRefs.resolveRefs(schema, {
        'filter': [ 'relative', 'local', 'remote' ],
      })
        .then((res: any) => { resolve(res.resolved); })
        .catch((err: 'string') => { reject(new Error(err)); });
    }
  );

  if (typeof(callBack) === 'function') {
    promise
      .then((resolved) => { callBack(null, resolved); })
      .catch((error) => { callBack(error); });
  }
  return promise;
};
