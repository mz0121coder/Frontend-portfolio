// window load function
$(window).load(() => {
    windowLoaded();
  });

// add preloader and slow fadeout
const windowLoaded = () => {
    $('.preloader')
      .delay(400)
      .fadeOut('slow');

// set pop-up state to false
      const popUpElem = $('.popUp');
      const mainElem = $('main');
      let popUpState = false;
      const closePopUpBtn = $('#cancelBtn');  
      const projectElem = $('.project-item');

    // hide pop-up element, only show it when a project is selected
    $(popUpElem).hide(1);
    mainElem.on('click', e => {
      if ($(e.target).closest('.project-item').length > 0) {
     // check if pop-up is already up
        if (popUpState === false) {
    // set pop-up state to true
          popUpState = true;
          if ($(window).width() >= 768) {
    // blur out main element & make it unscrollable on tablet and desktop view
        $('.projects').css('filter', 'blur(7px)');
        } else {
            
};