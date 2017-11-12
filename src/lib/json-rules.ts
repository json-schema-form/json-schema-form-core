/* tslint:disable */
const generate = function (schema, callBack) {
  let promise = new Promise((resolve, reject) => {
    let policies = [];
    let out = '';
    if(!!schema.ui && !!schema.ui.policy) {
      policies = schema.ui.policy;
    };
console.log('policies', policies);
    for (let policy of policies) {
console.log('policy', policy);
      // if(!!policy.if) {
      //   out += 'if(';
      //   out += ') {';
      //   out += 'update("' + path + '", )';
      //   out += '}';
      // }
    }

    resolve('(scope) => { '+out+' }');
  });

  if(typeof(callBack) === 'function') {
    promise
      .then((resolved) => { callBack(null, resolved); })
      .catch((error) => { callBack(error); });
  }
  else {
    return promise;
  }
};

const jsonrules = function (schema, uischema, callBack) {
  let promise = new Promise(
    function(resolve, reject) {
      //
    }
  );

  // let generate = new Promise(
  //   function(resolve, reject) {
  //     //
  //   }
  // );

  if(typeof(callBack) === 'function') {
    promise
      .then((resolved) => { callBack(null, resolved); })
      .catch((error) => { callBack(error); });
  }
  else {
    return promise;
  }
};

export { generate, jsonrules };
