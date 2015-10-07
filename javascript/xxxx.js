var titleText = new SplitText(".wrapper h2", {
    type: "chars"
  }),
  numTitleChars = titleText.chars.length,
  tl = new TimelineMax({
    delay: 1,
    repeat: -1
  });

TweenLite.set(".wrapper", {
  visibility: "visible"
});
tl.staggerFrom(titleText.chars, 0.8, {
    ease: Back.easeOut,
    x: 100,
    cycle: {
      y: curvea
    },
    opacity: 0
  }, 0.02)
  .staggerTo(titleText.chars, 0.8, {
      ease: Back.easeOut,
      cycle: {
        y: curveb
      },
      rotation: [-120, 120]
    }, opacity: 0
  }, 0.03, "+=1")

//position starting y of each letter on a cos curve;
function curvea(i){
  var n = i / numTitleChars * 120.24;
  return (Math.cos(n)) * -120;
}

function curveb(i){
  var n = i / numTitleChars * 120.24;
  return (Math.cos(n)) * 120;
}

/*
See http://www.greensock.com/splittext/ for details. 
This demo uses SplitText which is a membership benefit of Club GreenSock, http://www.greensock.com/club/
*/
$("#restart").click(function() {
  tl.restart();
})