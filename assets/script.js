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

};