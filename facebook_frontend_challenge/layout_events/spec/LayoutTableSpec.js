describe("LayoutTable", function(){

  var layoutTable;

  beforeEach(function(){
    layoutTable = new LayoutTable({width: 10, height:10});
  });

  describe('fillEvent', function(){
    it("should fill the event", function(){
      var event = new Event({start:1, end:5, left:5, width: 5});
      layoutTable.fillEvent(event);
      expect(layoutTable[1][5]).toEqual(layoutTable.used);
    });
  });

});
