/*jshint node:true*/
module.exports = {
  description: 'ember-apollo',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }
  normalizeEntityName: function() { },

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }

  afterInstall: function() {
    this.addPackagesToProject([
      { name: 'apollo-client', target: '^0.4.22'},
      { name: 'ember-browserify', taget: '^1.1.13'}
    ]);
  }
};
