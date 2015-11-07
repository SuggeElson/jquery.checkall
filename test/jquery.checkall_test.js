(function ($) {
  module(':jqueryCheckall selector', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is jqueryCheckall', function () {
    expect(1);
    deepEqual(this.elems.filter(':jqueryCheckall').get(), this.elems.last().get());
  });
}(jQuery));
