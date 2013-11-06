/*global Ember, App*/
'use strict';

App.Router.map(function() {
  this.resource('layouted_events', {path: '/'}, function() {});
});

App.LayoutedEventsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('layouted_event');
  }
});

App.LayoutedEventsIndexRoute = Ember.Route.extend({
  setupController: function () {
  }
});
