function Event(params) {
  this.start = params.start;
  this.end   = params.end;
  this.num_of_collision = 0;
  this.position = {top: params.start, left: params.left || 0};
  this.width  = params.width || 0;
  this.height = this.end - this.start;
};

Event.prototype.hasTimeConflictWith = function(event) {
  if ((this.start > event.start && this.start < event.end) ||
       this.end > event.start && this.end < event.end) {
    return true;
  } else {
    return false;
  }
};

Event.prototype.setWidthByCollision = function(width) {
  if (this.num_of_collision == 0) {
    this.width = width;
  } else {
    // this.num_of_collision + 1 because it needs to include itself
    this.width = Math.floor(width/(this.num_of_collision+1));
  }
};
