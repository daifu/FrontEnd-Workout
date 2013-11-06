/*global App, DS*/
'use strict';

App.Position = DS.Model.extend({
  left: DS.attr('number'),
  top:  DS.attr('number')
});
