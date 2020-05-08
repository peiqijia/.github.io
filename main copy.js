(function(){
    var words = [
        'a Designer',
        'a Painter',
        'a Calligrapher',
        
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
      
})();
const onNameClick = function () {
    //  console.log('got into function')
    //   $('#message').text('Welcome to the moon.')
    //   $('#message').css('background-Color', 'blue')
    //   setTimeout(() => $('#message').text(''), 3000)
    //   $('.container').addClass('animated rollOut');
    //   $('#welcomePage').addClass('animated rollIn')
    }
  
  const addHandlers = () => {
      // $('#nextView').on('click', onMoonClick)
    }
  
    $(() => {
      addHandlers()
    })
  
  
  
  
    // <!-- Button to get back to top of page -->
  /*Scroll to top when arrow up clicked BEGIN*/
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
  });
  $(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
  
  });
  /*Scroll to top when arrow up clicked END*/  
  
  
  
  var path = document.querySelector('.path');
  var length = path.getTotalLength();