$(document).ready(function(){
  //jquery geos here
  setTimeout(function(){
    animate()
  },1500)
});

var drawingPointerLine = false;
var drawingPointerLineTarget = '';
var galaxyScale = 1;

$(window).resize(function(){
  //rescaling the galaxy if the user resizes the window
  if($('.page.initiate').length===0){
    scaleGalaxyToScreen()
  }
});

//animation controllers
function stopAnimation(){
  $('#solarSystemWrapper').addClass('stopAnimation')
}
function startAnimation(){
  $('#solarSystemWrapper').removeClass('stopAnimation')
}
function initiate(){
  $('.initiateWrapper').addClass('initiate')
}
function animate(){
  $('.initiateWrapper').removeClass('initiate')
  
  scaleGalaxyToScreen()
  setTimeout(function(){
    // delay setting the solar system in motion
    startAnimation()
  },1000)
  
  //updates to apply when the intro animation is done
  setTimeout(function(){
    //remove the transition class from the scale div, this is needed for the intro animation but later, the scaling should happen instantly if the window gets resized by the user
    $('.scale').addClass('resizeAnim')
    $('.initiateWrapper').addClass('ready')
  },4000)
}

function scaleGalaxyToScreen(){
  const galaxyWidth = 2900
  const galaxyHeight = 1500
  const navbarHeight = 92
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight - navbarHeight
  
  const widthRatio = windowWidth/galaxyWidth
  const heightRatio = windowHeight/galaxyHeight
  
  if(widthRatio>heightRatio){
    $('.scale').css('transform', 'scale(' + heightRatio + ') translateY( '+ navbarHeight +'px)');
    galaxyScale=heightRatio;
  }else{
    $('.scale').css('transform', 'scale(' + widthRatio + ') translateY( '+ navbarHeight +'px)');
    galaxyScale=widthRatio;
  }
}

function drawPointerLine(){
  const target = drawingPointerLineTarget
  $('.pointerLine svg').empty()
  
  const targetRadius = $('.'+target).width() * galaxyScale
  const targetPosX = $('.'+target).offset().left + targetRadius;
  const targetPosY = $('.'+target).offset().top + targetRadius/6;
  
  const contentUiPosX = $('.contentWrapper .underline').offset().left
  const contentUiPosY = $('.contentWrapper .underline').offset().top + 1
  
  $(document.createElementNS('http://www.w3.org/2000/svg','polyline')).attr({
    points: targetPosX+","+targetPosY+" "+contentUiPosX+","+contentUiPosY
  }).appendTo(".pointerLine svg");
  
  //if still drawing, call itself to correct the line, this is so the line remains accurate as the animation plays
  if(drawingPointerLine){
    setTimeout(function(){
      drawPointerLine(target)
    },30)
  }else{
    // if we should stop drawing, then empty the svg containter
    $('.pointerLine svg').empty()
  }
}

// ring hover bindings
// mercury
$('#solarSystemClickTarget .ring1').on('mouseenter',function(){
  $('.mercury').addClass('showContent')
  drawingPointerLine = true;
  drawingPointerLineTarget = 'planet1'
  $('.ring.flashing').removeClass('flashing')
  drawPointerLine();
})

$('#solarSystemClickTarget .ring1').on('mouseleave',function(){
  $('.mercury').removeClass('showContent')
  drawingPointerLine = false;  
  $('.pointerLine svg').empty()
})

// venus
$('#solarSystemClickTarget .ring2').on('mouseenter',function(){
  $('.venus').addClass('showContent')
  drawingPointerLine = true;
  drawingPointerLineTarget = 'planet2'
  $('.ring.flashing').removeClass('flashing')
  drawPointerLine();
})

$('#solarSystemClickTarget .ring2').on('mouseleave',function(){
  $('.venus').removeClass('showContent')
  drawingPointerLine = false;  
  $('.pointerLine svg').empty()
})

// earth
$('#solarSystemClickTarget .ring3').on('mouseenter',function(){
  $('.earth').addClass('showContent')
  drawingPointerLine = true;
  drawingPointerLineTarget = 'planet3'
  $('.ring.flashing').removeClass('flashing')
  drawPointerLine();
})

$('#solarSystemClickTarget .ring3').on('mouseleave',function(){
  $('.earth').removeClass('showContent')
  drawingPointerLine = false;  
  $('.pointerLine svg').empty()
})

// mars
$('#solarSystemClickTarget .ring4').on('mouseenter',function(){
  $('.mars').addClass('showContent')
  drawingPointerLine = true;
  drawingPointerLineTarget = 'planet4'
  $('.ring.flashing').removeClass('flashing')
  drawPointerLine();
})

$('#solarSystemClickTarget .ring4').on('mouseleave',function(){
  $('.mars').removeClass('showContent')
  drawingPointerLine = false;  
  $('.pointerLine svg').empty()
})

// jupiter
$('#solarSystemClickTarget .ring5').on('mouseenter',function(){
  $('.jupiter').addClass('showContent')
  drawingPointerLine = true;
  drawingPointerLineTarget = 'planet5'
  $('.ring.flashing').removeClass('flashing')
  drawPointerLine();
})

$('#solarSystemClickTarget .ring5').on('mouseleave',function(){
  $('.jupiter').removeClass('showContent')
  drawingPointerLine = false;  
  $('.pointerLine svg').empty()
})

// saturn
$('#solarSystemClickTarget .ring6').on('mouseenter',function(){
  $('.saturn').addClass('showContent')
  drawingPointerLine = true;
  drawingPointerLineTarget = 'planet6'
  $('.ring.flashing').removeClass('flashing')
  drawPointerLine();
})

$('#solarSystemClickTarget .ring6').on('mouseleave',function(){
  $('.saturn').removeClass('showContent')
  drawingPointerLine = false;  
  $('.pointerLine svg').empty()
})

// uranus
$('#solarSystemClickTarget .ring7').on('mouseenter',function(){
  $('.uranus').addClass('showContent')
  drawingPointerLine = true;
  drawingPointerLineTarget = 'planet7'
  $('.ring.flashing').removeClass('flashing')
  drawPointerLine();
})

$('#solarSystemClickTarget .ring7').on('mouseleave',function(){
  $('.uranus').removeClass('showContent')
  drawingPointerLine = false;  
  $('.pointerLine svg').empty()
})

// neptune
$('#solarSystemClickTarget .ring8').on('mouseenter',function(){
  $('.neptune').addClass('showContent')
  drawingPointerLine = true;
  drawingPointerLineTarget = 'planet8'
  $('.ring.flashing').removeClass('flashing')
  drawPointerLine();
})

$('#solarSystemClickTarget .ring8').on('mouseleave',function(){
  $('.neptune').removeClass('showContent')
  drawingPointerLine = false;  
  $('.pointerLine svg').empty()
})

$('.theSun').on('mouseenter',function(){
  stopAnimation()
  $('.testing').addClass('test')
  setTimeout(function(){
    startAnimation()
  },300)
})

$('.theSun').on('mouseleave',function(){
  $('.testing').removeClass('test')
})