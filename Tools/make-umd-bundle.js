var _ = require('lodash');

var rollup = require('rollup');
var rollupInject = require('rollup-plugin-inject');
var rollupNodeResolve = require('rollup-plugin-node-resolve');

var fs = require('fs');
var path = require('path');

rollup.rollup({
  input: 'dist/cjs/Core.js',
  plugins: [
    rollupNodeResolve({
      jsnext: true,
    }),
    rollupInject({
      exclude: [ 'node_modules/**' ]
    }),
  ],
}).then(function (bundle) {
  bundle.generate({
    format: 'umd',
    name: 'JSON Schema Core',
    sourcemap: true
  }).then(function(result) {
    fs.writeFileSync('dist/global/Core.js', result.code);
    fs.writeFileSync('dist/global/Core.js.map', result.map);
  });
});
