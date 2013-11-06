describe("LayoutDay", function() {
  var layoutDay;

  beforeEach(function(){
    var events = [{start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670}];
                //9:30am - 11:30am        6:00pm - 7:00pm         6:20pm - 7:20pm         7:10pm - 8:10pm
    layoutDay = new LayoutDay(events);
  });

  it("should return layouted events", function(){
    var res = [{start: 30, end: 150, width: 600, position: {left: 0, top:30}},
              {start: 540, end: 600, width: 300, position: {left: 0, top: 540}},
              {start: 560, end: 620, width: 300, position: {left: 300, top: 560}},
              {start: 610, end: 670, width: 300, position: {left: 0, top: 610}}];
    layoutDay.layoutedEvents();
    expect(layoutDay.events[0].position.left).toEqual(0);
    expect(layoutDay.events[0].position.top).toEqual(30);

    expect(layoutDay.events[1].position.left).toEqual(0);
    expect(layoutDay.events[1].position.top).toEqual(540);

    expect(layoutDay.events[2].position.left).toEqual(300);
    expect(layoutDay.events[2].position.top).toEqual(560);

    expect(layoutDay.events[3].position.left).toEqual(0);
    expect(layoutDay.events[3].position.top).toEqual(610);
  });

  it("should return the correct layouted events 2", function(){
    var events = [{start: 30, end:90},{start:100,end:160},{start:170,end:230},{start:50,end:110},{start:120,end:190},{start:60,end:200},{start:400,end:500}]
    layoutDay = new LayoutDay(events);
    layoutDay.layoutedEvents();

    expect(layoutDay.events[0].position.left).toEqual(0);
    expect(layoutDay.events[0].position.top).toEqual(30);

    expect(layoutDay.events[1].position.left).toEqual(0);
    expect(layoutDay.events[1].position.top).toEqual(100);

    expect(layoutDay.events[2].position.left).toEqual(0);
    expect(layoutDay.events[2].position.top).toEqual(170);

    expect(layoutDay.events[3].position.left).toEqual(200);
    expect(layoutDay.events[3].position.top).toEqual(50);

    expect(layoutDay.events[4].position.left).toEqual(200);
    expect(layoutDay.events[4].position.top).toEqual(120);

    expect(layoutDay.events[5].position.left).toEqual(400);
    expect(layoutDay.events[5].position.top).toEqual(60);

    expect(layoutDay.events[6].position.left).toEqual(0);
    expect(layoutDay.events[6].position.top).toEqual(400);

    console.log(layoutDay.events);
  });

  it("should find the correct left position", function(){
    layoutDay.layoutTable = new LayoutTable({width: 3, height: 5});
    expect(layoutDay.findLeftPosition(1,2,2)).toEqual(0);

    layoutDay.layoutTable[1][0] = layoutDay.layoutTable.used;
    expect(layoutDay.findLeftPosition(1,2,2)).toEqual(1);
  });

});
