$(document).ready(function() {
  var elems = {
    body: $('body'),
    main: $('.container-main'),
    landing: $('#landing'),
    content: {
      ourWedding: $('#our-wedding'),
      ourStory: $('#our-story'),
      accommodations: $('#accommodations'),
      registry: $('#registry')
    },
    nav: {
      ourWedding: $('#link-our-wedding'),
      ourStory: $('#link-our-story'),
      accommodations: $('#link-accommodations'),
      registry: $('#link-registry')
    }
  };

  resize();
  window.onresize = resize;

  function resize() {
    // landing page is always 1 window height
    var landingPageHeight = window.innerHeight - 50;
    elems.landing.height(landingPageHeight);
  }

  elems.nav.ourWedding.on( 'click', scrollTo.bind(elems.content.ourWedding) );
  elems.nav.ourStory.on( 'click', scrollTo.bind(elems.content.ourStory) );
  elems.nav.accommodations.on( 'click', scrollTo.bind(elems.content.accommodations) );
  elems.nav.registry.on( 'click', scrollTo.bind(elems.content.registry) );

  function scrollTo() {
    console.log(this, 'clicked')
    var targetTop = this.offset().top - 50;
    elems.body.animate({scrollTop: targetTop}, 750);
  }

});
