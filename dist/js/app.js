$(document).ready(function(){function n(){var n=window.innerHeight-50;i.landing.height(n)}function o(){console.log(this,"clicked");var n=this.offset().top-50;i.body.animate({scrollTop:n},750)}var i={body:$("body"),main:$(".container-main"),landing:$("#landing"),content:{ourWedding:$("#our-wedding"),ourStory:$("#our-story"),accommodations:$("#accommodations"),registry:$("#registry")},nav:{ourWedding:$("#link-our-wedding"),ourStory:$("#link-our-story"),accommodations:$("#link-accommodations"),registry:$("#link-registry")}};n();window.onresize=n;i.nav.ourWedding.on("click",o.bind(i.content.ourWedding));i.nav.ourStory.on("click",o.bind(i.content.ourStory));i.nav.accommodations.on("click",o.bind(i.content.accommodations));i.nav.registry.on("click",o.bind(i.content.registry))});
//# sourceMappingURL=app.js.map