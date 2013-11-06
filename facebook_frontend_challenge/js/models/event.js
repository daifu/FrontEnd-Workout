/*global App, DS*/
'use strict';

App.Event = DS.Model.extend({
  start: DS.attr('number'),
  end:   DS.attr('number')
});
