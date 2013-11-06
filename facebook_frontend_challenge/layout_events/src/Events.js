function Events() {
}

// inherited from Array
Events.prototype = new Array();
// fixed the constructer to be itself
Events.prototype.constructer = Events;
// create parent method to call parents method
Events.prototype.parent = Array.prototype;

Events.prototype.buildFromArray = function(events) {
  var that = this;
  events.forEach(function(event, index){
    that.push(new Event(event));
  });
};

Events.prototype.assignWidthToEvent = function(table_width) {
  // private method
  var _assign_event_to_collision_group = function(group, event) {
    group.forEach(function(ele, index){
      if (ele.hasTimeConflictWith(event)) {
        group.push(event);
        return true;
      }
    });
    return false;
  };

  var _insert_event_to_collision_group = function(collision_group, event) {
    // assign a event to a collision group
    var inserted = false;
    for (var k = 0, g = collision_group.length; k < g; k ++) {
      var group = collision_group[k];
      inserted  = _assign_event_to_collision_group(group, rest_event);
    }
    if (!inserted) {
      collision_group.push([rest_event]);
    }
  };

  var _max_length = function(array) {
    var max = 0;
    array.forEach(function(ele, index){
      if (ele.length > max) {
        max = ele.length;
      }
    });
    return max;
  }
  // check out the event whether has collision on any event from the layout
  // if not, then it is easy.
  // if it has, insert the collided event to a collsion group, the collision cout
  // should be the max number of collision group
  //
  var collision = 0;
  for (var i = 0, h = this.length; i < h; i ++) {
    var event = this[i],
        collision_group = [];
    for (var j = 0, w = this.length; j < w; j ++) {
      var rest_event = this[j];
      if (event.hasTimeConflictWith(rest_event)) {
        _insert_event_to_collision_group(collision_group, rest_event);
        event.num_of_collision = _max_length(collision_group);
      }
    }
    event.setWidthByCollision(table_width);
  }
};
