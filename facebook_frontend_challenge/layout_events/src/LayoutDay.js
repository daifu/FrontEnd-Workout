function LayoutDay(events) {
  this.events = new Events();
  this.events.buildFromArray(events);
  this.width  = 600;
  this.height = 720;
  this.layoutTable = new LayoutTable({width: this.width, height: this.height});
}

// If I want to add another box C(collided with B) to the layout
// ------
// | A  | ------
// ------ | B  |
//        ------
// I need to try out the width same as B, so we have the largest
// solution
// ------
// | A  | ------
// ------ | B  |
// ------ ------
// | C  |
// ------
// But if it is not possible to add C (collided with A and B),
// then it needs to resize the A, B and C to get the correct
// solution:
// ----    ----
// |A |----|C |
// ----|B |----
//     ----
// 1. So the proper way to deal with this problem will be we need to
// figure the correct width for all the event.
// 2. create an 2d array to act as a layout table, and assign the event
// to the table (from this step we should know the position:{top:xx} and width
// attributes from the event). Since we are using the table, so we can easily
// detect the left postion by checking "can we allow to put this event at this?"
// pixel by pixel
//
LayoutDay.prototype.layoutedEvents = function() {
  this.events.assignWidthToEvent(this.width);
  this.assignEventsToLayoutTable();
  return this.events;
};

LayoutDay.prototype.assignEventsToLayoutTable = function() {
  for (var i = 0, l = this.events.length; i < l; i ++) {
    var event = this.events[i];
    var top    = event.position.top,
        width  = event.width - 1, // - 1 because it needs to convert length to index
        height = event.height;
    event.position.left = this.findLeftPosition(top, width, height);
    // fill out the table with position width, and height
    this.layoutTable.fillEvent(event);
  }
};

LayoutDay.prototype.findLeftPosition = function(top, width, height) {
  // 1. look for free to start
  // 2. check if it allows to fill
  // 3. return the eligible left
  var i;
  for (i = 0, l = this.width - width; i < l; i++) {
                                            // - 1 because it needs to convert length to index
    if (this.layoutTable.allowToFill(top, i, width - 1, height)) {
      return i;
    }
  }
  throw "Stop ME at LayoutDay.prototype.findLeftPosition! Cannot find a position [top:"+top+", left:"+i+", width:"+width+", height:"+height+"] for the event!!";
}
