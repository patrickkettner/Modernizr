describe('testStyles', function() {
  var injectElementWithStyles;
  var ModernizrProto;
  var cleanup;
  var testStyles;


  before(function(done) {

    define('ModernizrProto', [], function(){return {};});

    requirejs.config({
      baseUrl: '/src',
      paths: { cleanup: '/test/cleanup' }
    });

    requirejs(['ModernizrProto', 'testStyles', 'injectElementWithStyles', 'cleanup'], function(_ModernizrProto, _testStyles, _injectElementWithStyles, _cleanup) {
      injectElementWithStyles = _injectElementWithStyles;
      ModernizrProto = _ModernizrProto;
      testStyles = _testStyles;
      cleanup = _cleanup;
      done();
    });
  });

  it('creates a reference on `ModernizrProto`', function() {
    expect(ModernizrProto.testStyles).to.be.a('function');
  });

  it('is just an alias to injectElementWithStyles', function() {
    expect(ModernizrProto.testStyles).to.equal(injectElementWithStyles);
  });

  after(function() {
    cleanup();
  });
});
