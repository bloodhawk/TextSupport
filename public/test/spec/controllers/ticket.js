'use strict';

describe('Controller: TicketCtrl', function () {

  // load the controller's module
  beforeEach(module('textSupportApp'));

  var TicketCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketCtrl = $controller('TicketCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
