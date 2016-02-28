document.addEventListener("DOMContentLoaded", function(){
  var draw = SVG('drawing').size('100%', '100%');
  var moving = false;
  var genesis  = draw.use('Layer_1', '../svg/Genesis.svg').move(400,500);
  var genesisCartridge  = draw.use('Layer_1', '../svg/Genesis cartridge.svg').move(400,300);
  var SNES  = draw.use('Layer_1', '../svg/SNES.svg').move(0,500);
  var SNESCartridge  = draw.use('Layer_1', '../svg/SNES cartridge.svg').move(0,100);

  // var distanceArray = [0, 100, 100, 300];

  var startPositionX = 915;
  var center = (document.body.clientWidth - 100) / 2;
  var timelineIndex = 0;
  var timelineSet = draw.set();
  // var begin = true;

  var gameData = [
    {name: 'Welcome to 90\'s', releaseDate: '01-01-1990', distance: 300},
    {name: 'Sonic The Hedgehog', releaseDate: '06-23-1991', distance: 100},
    {name: 'Super Mario World', releaseDate: '08-28-1991', distance: 100},
    {name: 'F-Zero', releaseDate: '10-28-1991', distance: 300},
    {name: 'Sonic Spinball', releaseDate: '02-21-1992'}
  ];

  document.querySelector('#title').innerText = gameData[0].name;
  document.querySelector('#date').innerText = gameData[0].releaseDate;
  document.querySelector('#title').className += ' fadeIn ';

  function calculateXToCenter(x){
    if (x >= center){
      return (x - center) * -1;
    }
    else{
      return x * -1
    }
  }

  // NOT WORKING ON FIREFOX, VERIFY!
  function scrollPage(event){
    if (!moving){
      if (event.wheelDelta > 0){
        //scrolling up
        //FAZER PROTECAO
        if (timelineIndex > 0){
          moving = true;
          timelineIndex--;

          timelineSet.animate(1000, SVG.easing.elastic).dx(gameData[timelineIndex].distance).after(function(){
            moving = false;
          }); 


          document.querySelector('#title').innerText = gameData[timelineIndex].name;
          document.querySelector('#date').innerText = gameData[timelineIndex].releaseDate;
          document.querySelector('#title').className += ' fadeIn ';
        }


      }
      else{
        //scrolling down
        if (timelineIndex < gameData.length - 1){
          moving = true;
          timelineIndex++;


          timelineSet.animate(1000, SVG.easing.elastic).dx(gameData[timelineIndex-1].distance * -1).after(function(){
            moving = false;
          });  
          

          document.querySelector('#title').innerText = gameData[timelineIndex].name;
          document.querySelector('#date').innerText = gameData[timelineIndex].releaseDate;
          document.querySelector('#title').className += ' fadeIn';
        }
      }
    }
  }

  document.addEventListener('mousewheel', scrollPage, false);


  // var timelineLineSet = draw.set();
  
  var line = draw.line(0, 10, "100%", 10).stroke({ width: 2, color: '#d5d5d5' });

  // var line2 = draw.line(830, 10, 900, 10).stroke({ width: 2, color: '#d5d5d5' });

  // var line3 = draw.line(930, 10, 1000, 10).stroke({ width: 2, color: '#d5d5d5' });

  // var circle2 = draw.circle(15);

  // circle2.attr({fill: '#d5d5d5', cx: 815, cy: 10});

  // var circle = draw.circle(10);

  // circle.attr({fill: '#fff', cx: 815, cy: 10});

  // var circle3 = draw.circle(15);

  // circle3.attr({fill: '#d5d5d5', cx: 915, cy: 10});

  // var circle4 = draw.circle(10);

  // circle4.attr({fill: '#fff', cx: 915, cy: 10});  

  // var circle5 = draw.circle(15);

  // circle5.attr({fill: '#d5d5d5', cx: 945, cy: 10});

  // var circle6 = draw.circle(10);

  // circle6.attr({fill: '#fff', cx: 945, cy: 10});  

  // timelineSet.add(circle, circle2, circle3, circle4, circle5, circle6);

  for (var i = 0; i < gameData.length; i++) {
    // if (i > 0){
      startPositionX = i == 0 ? center : startPositionX + gameData[i-1].distance;
      var biggerCircle = draw.circle(15).attr({fill: '#d5d5d5', cx: startPositionX, cy: 10});
      var smallerCircle = draw.circle(10).attr({fill: '#d5d5d5', cx: startPositionX, cy: 10});

      timelineSet.add(biggerCircle, smallerCircle);
    // }
  };
  // timelineLineSet.add(line, line2, line3);
}, false);