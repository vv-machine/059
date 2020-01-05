function scrollToElement(element, parent) {
   $(parent)[0].scrollIntoView(true);
   $(parent).animate({
     scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
   }, {
     duration: 'slow',
     easing: 'swing'
   });
 }

document.getElementById("si").onclick = function(event) {
  document.body.classList.add("active");
  document.getElementById("enter").classList.remove("active");
  document.getElementById("main").classList.add("active");
}

document.fonts.check('1em tgl_0-1451_engschriftregular','Freshman', 'Roboto' );  // false

document.fonts.ready.then(function () {
  document.body.classList.remove("loading");
  document.getElementById("enter").classList.add("active");
});
