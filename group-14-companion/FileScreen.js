/*========================*/
/*Skins and Styles*/
/*========================*/

let whiteSkin = new Skin ({fill: 'white'});
let blackSkin = new Skin ({fill: 'black'});
let blue = '#2F80ED';
let blueSkin = new Skin ({fill: blue});
let boraderSkin = new Skin ({fill: 'white', stroke:'black', left: 1, right: 1, top: 1, bottom: 1});

let buttonStyle = new Style({font: '15px', color: blue});
let WbuttonStyle = new Style({font: '15px', color: 'white'});
let textStyle = new Style({font: '15px', color: 'black',  horizontal:'left'});



/*========================*/
/*Buttons*/
/*========================*/

var BackButton = new Line({
   height: 39, width: 50, right:  270,
   contents: [
      new Picture({height: 20, align:'middle', url:'./assets/left.png'}),
      new Label({height:39, left: 5, align:'middle', string:'Back', style: buttonStyle, skin: whiteSkin})
   ]
});

var OpenButton = new Container({
   height: 30, width: 110, right: 5, top: 10, skin: blueSkin,
   contents :[
      new Label({string:'OPEN', align: 'middle', style: WbuttonStyle}),
   ]
});

var HistoryButton = new Container({
   height: 30, width: 110, left: 5, top: 10, skin: blueSkin,
   contents :[
      new Label({string:'FILE HISTORY', align: 'middle', style: WbuttonStyle}),
   ]
});

/*========================*/
/*Label Template*/
/*========================*/
var LabelTemp = Column.template($ =>({
   height: 40, width: 320, skin: whiteSkin,
   contents: [
      Line($, {height: 39, contents:[$[0], $[1]]}),
      new Container({height:1, width: 280, skin: blackSkin}),
   ]
}));

var LeftTitle = Label.template($ =>({
   height: 39, width: 80, left: 55, skin: whiteSkin, string: $, style: textStyle,
}));

var RightTitle = Label.template($ =>({
   height: 39, width: 220, left: 20, horizontal:'left', skin: whiteSkin, string: $, style: textStyle,
}));

var Description = Container.template($ => ({
   height: 90, width: 200, skin: boraderSkin,
   contents:[
      Label($, {string: $, style: new Style({font: '15px', color: 'black',  horizontal:'left,top'})}),
   ]
}));

let FileTitle = new LabelTemp([new LeftTitle('Tag'),  
                               new RightTitle('T1, T2')]);
let LastUsed = new LabelTemp([new LeftTitle('Last Used'), 
                              new RightTitle('Feb. 29 2016 by Gabrielle')]);
let DateCreated = new LabelTemp([new LeftTitle('Date Created'), 
                              new RightTitle('Sep 15th 2014')]);
let AccessTier = new LabelTemp([new LeftTitle('Access Tier'), 
                              new RightTitle('Tier 1')]);
let Des = new LabelTemp([new LeftTitle('Description'), 
                              new RightTitle('')]);
let DetailDes = new Description('This is the Description for file #1');
/*========================*/
/*Scetions*/
/*========================*/
var TopNavi = Column.template($ => ({
   height: 50, width: 320, skin: whiteSkin,
   contents:[
      new Container({height:10, width: 320, skin:blackSkin}),
      new Line({height: 39, contents:[BackButton]}),
      new Container({height:1, width: 320, skin:blackSkin})
   ]
}));

var Intro = Line.template($ => ({
   height: 80, width: 320, skin: whiteSkin,
   contents:[
      new Picture({height: 50, width: 80, align:'middle', url:'./assets/circle_doc.png'}),
      new Column({height: 80, width: 240, 
         contents:[
            //Label($, {height: 29, top: 25, width: 240, string: $[0], style: textStyle, skin:whiteSkin}),
            new Text({height: 29, top: 25, width: 240, left: 25, string: 'Document #1', style: textStyle}),
            new Container({height: 1, width: 200, align: 'middle', skin: blackSkin}),
         ]
      })
   ]
}));

var FileContent = Column.template($ =>({
   height: 250, width: 320, skin: whiteSkin,
   contents:[
      FileTitle,
      LastUsed,
      DateCreated,
      AccessTier,
      Des,
      DetailDes,
      new Line({contents: [OpenButton, HistoryButton]}),
   ]
}));


/*========================*/
/*Exports*/
/*========================*/
export var FileScreenTemplate = Column.template($ => ({
   left: 0, right: 0, top: 0, bottom: 0,
   skin: whiteSkin,
   contents: [
      TopNavi(),
      Intro(),
      FileContent(),
   ]
}));

/*========================*/
/*Test*/
/*========================*/
var TestScreen = new Column({
left: 0, right: 0, top: 0, bottom: 0,
   skin: whiteSkin,
   contents: [
      TopNavi(),
      Intro(),
      FileContent(),
   ]  
});

application.add(TestScreen)