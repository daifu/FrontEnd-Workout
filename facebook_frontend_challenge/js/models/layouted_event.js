/*global App*/
'use strict';

App.LayoutedEvent = App.Event.extend({
  width: DS.attr('number'),
  position: DS.belongsTo('position')
});
