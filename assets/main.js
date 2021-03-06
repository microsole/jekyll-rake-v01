var currentHeroPostIndex = 0;
var scrollDelta = 0;
var scrollThreshold = 3;
var lastAnimation = 0;
var lastAnimationRequest = 0;
var quietPeriod = 500;
var animationTime = 1000;
var mobScrollStart = 0;
var mobScrollDelta = 0;
var currentSVGWordIndex = 1;

$(document).ready(function() {
    $('#fullpage').fullpage({
      scrollingSpeed: 1000,
      scrollOverflow: true,
      css3: true,
      easingcss3: 'ease-in-out',
      navigation: true,
      navigationPosition: 'right',

      onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);
        var nextSection = $('.section:nth-child(' + nextIndex + ')');


        if(nextIndex == 6){
          $('#fp-nav').hide();
          $('.scroll-overlay').fadeOut(500,'swing');
        }
        else {
          $('#fp-nav').show();
          $('.scroll-overlay').fadeOut(500,'swing');
          $('.scroll-overlay').fadeIn(1500,'swing');
        };

        if(nextIndex == 3) {
          $('#masonry-work').masonry();
        };

        if(nextIndex == 5) {
          $('#masonry-articles').masonry();
        };

        if (nextSection.hasClass('dark')) {
          $('.masthead .logo').addClass('light');
          $('.masthead .logo').removeClass('dark');
          $('.masthead .menu-image').addClass('light');
          $('.masthead .menu-image').removeClass('dark');
          $('.scroll-overlay').addClass('light');
          $('.scroll-overlay').removeClass('dark');
        }
        else {
          $('.masthead .logo').addClass('dark');
          $('.masthead .logo').removeClass('light');
          $('.masthead .menu-image').addClass('dark');
          $('.masthead .menu-image').removeClass('light');
          $('.scroll-overlay').addClass('dark');
          $('.scroll-overlay').removeClass('light');
        }

      }

    });

    $('.scroll-overlay').addClass('light');

    $('.scroll-overlay').on('click',function() {
      $.fn.fullpage.moveSectionDown();
    });

    $('button.menuTrigger').on('click',function() {

        if ($('div.menu-overlay').hasClass('open')) {
          $('div.menu-overlay').toggleClass('open',false);
          $('div.menu-overlay').toggleClass('close',true);
          $('.logo-image').toggleClass('white',false);
          $('.menu-image').toggleClass('white',false);
          $('.menu-image').toggleClass('active',false);
          $.fn.fullpage.setAllowScrolling(true);
        }
        else {
          $('div.menu-overlay').toggleClass('open',true);
          $('div.menu-overlay').toggleClass('close',false);
          $('.logo-image').toggleClass('white',true);
          $('.menu-image').toggleClass('white',true);
          $('.menu-image').toggleClass('active',true);
          $.fn.fullpage.setAllowScrolling(false);
        }

    });

    $('#masonry-work-gallery').masonry();
/*
    $('#section-post-1').mousemove(function(event) {
        $('#logo-animate').css('animation','stroke-offset 6s linear infinite');
        $('#logo-animate').css('animation-play-state','running');
        $('#section-post-1 .section-title a').css('visibility','visible');
    });
*/

    var wordScroll = setInterval(function() {

      $('.svg-word:nth-of-type(' + currentSVGWordIndex + ')').css('opacity',0);

      if ( currentSVGWordIndex == 5 ) {
        currentSVGWordIndex = 1;
      }
      else {
        currentSVGWordIndex = currentSVGWordIndex + 1;
      };

      $('.svg-word:nth-of-type(' + currentSVGWordIndex + ')').css('opacity',1);

    }, 400);

});

/*
(function (mouseStopDelay) {
    var timeout;
    document.addEventListener('mousemove', function (e) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            var event = new CustomEvent("mousestop", {
                detail: {
                    clientX: e.clientX,
                    clientY: e.clientY
                },
                bubbles: true,
                cancelable: true
            });
            e.target.dispatchEvent(event);
        }, mouseStopDelay);
    });
}(250));


document.getElementById('section-post-1').addEventListener('mousestop', function(e) {
    console.log('You stopped your mouse');
    console.log('Mouse coordinates are: ', e.detail.clientX, e.detail.clientY);
    $('#logo-animate').css('animation-play-state','paused');
    $('#section-post-1 .section-title a').css('visibility','hidden');

});

*/
