function LayoutTable(params) {
  this.width  = params.width || 0;
  this.height = params.height || 0;
  this.unUsed = '-';
  this.used   = null;
  this.build();
}

LayoutTable.prototype = new Array();
LayoutTable.prototype.constructer = LayoutTable;
LayoutTable.prototype.parent = Array.prototype;

LayoutTable.prototype.build = function() {
  for (var i = 0, h = this.height; i < h; i ++) {
    this[i] = this[i] || [];
    for (var j = 0, w = this.width; j < w; j ++) {
      this[i][j] = this[i][j] || [];
      this[i][j] = this.unUsed;
    }
  }
}

LayoutTable.prototype.allowToFill = function(top, left, width, height) {
  try {
    if (this[top][left] &&
        this[top+height][left] &&
        this[top][left+width] &&
        this[top+height][left+width]) {
      return true;
    } else {
      return false;
    }
  } catch(err) {
    // Make the error msg more clear
    throw "Error at allowToFill with input: top: "+top+" left:"+left+" width:"+width+" height:"+height+", and table: width:"+this.width+" height:"+this.height;
  }
}

LayoutTable.prototype.markUsed = function(top, left) {
  if (this[top][left]) {
    this[top][left] = this.used;
  } else {
    throw "LayoutTable.prototype.markUsed: top: "+top+", left: "+left+" has been used at layouttable!!"
  }
}

LayoutTable.prototype.fillEvent = function(event) {
  for (var i = event.position.top, h = event.height+i; i < h; i ++) {
    for (var j = event.position.left, w = event.width+j; j < w; j ++) {
      this.markUsed(i, j);
    }
  }
}
