$(document).ready(function() {
  var elems = {
    body: $('body'),
    main: $('.container-main'),
    landing: $('#landing'),
    content: {
      itAllStarted: $('#it-all-started'),
      weddingDay: $('#wedding-day'),
      accommodations: $('#accommodations'),
      gettingAround: $('#getting-around'),
      photos: $('#photos'),
      registry: $('#registry')
    },
    nav: {
      itAllStarted: $('#link-it-all-started'),
      weddingDay: $('#link-wedding-day'),
      accommodations: $('#link-accommodations'),
      gettingAround: $('#link-getting-around'),
      photos: $('#link-photos'),
      registry: $('#link-registry'),
      collapsed: $('#navbar-collapsed')
    }
  };

  var width, height;
  setTimeout(resize, 300); // mobile
  $(window).on('resize orientationChange', resize);

  function resize() {
    if($(window).width() != width && $(window).height() != height){
      // landing page is always 1 window height
      width = $(window).width(), height = $(window).height();
      var landingPageHeight = window.innerHeight - 50;
      elems.landing.height(landingPageHeight);
      $('.content').css('min-height', landingPageHeight);

    }
  }

  elems.nav.itAllStarted.on( 'click', scrollTo.bind(elems.content.itAllStarted) );
  elems.nav.weddingDay.on( 'click', scrollTo.bind(elems.content.weddingDay) );
  elems.nav.accommodations.on( 'click', scrollTo.bind(elems.content.accommodations) );
  elems.nav.gettingAround.on( 'click', scrollTo.bind(elems.content.gettingAround) );
  elems.nav.photos.on( 'click', scrollTo.bind(elems.content.photos) );
  elems.nav.registry.on( 'click', scrollTo.bind(elems.content.registry) );


  function scrollTo() {
    console.log(this, 'clicked')
    var targetTop = this.offset().top - 50;
    elems.nav.collapsed.collapse('hide');
    elems.body.animate({scrollTop: targetTop}, 750);
  }

});
