describe("Events", function(){
  describe("assignWithToEvent", function(){
    var events;

    beforeEach(function() {
      events      = new Events();
      var eve_ary = [{start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670}];
      events.buildFromArray(eve_ary);
    });

    it("should assign correcet width to each event", function(){
      events.assignWidthToEvent(600);
      expect(events[0].width).toEqual(600);
      expect(events[1].width).toEqual(300);
      expect(events[2].width).toEqual(300);
      expect(events[3].width).toEqual(300);
    });

  });
});
