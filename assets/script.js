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
        // on mobile view, remove all elements except pop-up by setting display to none
        $('.projects').css('display', 'none');
        $('footer').css('display', 'none');
        $('.intro').css('display', 'none');
        $('.contact').css('display', 'none');
    }
    // disable scroll for smaller screen devices
    if ($(window).width() > 768) {
        $('body').css('overflow', 'hidden');
      }

        // display the pop-up
        $(popUpElem).show(400);

    // preview heading of selected project
    const projectHeading = $(e.target)
    .closest('.project-figure')
    .children('figcaption')
    .children('h2')
    .text();

    // preview description of selected project
    const projectDesc = $(e.target)
    .closest('.project-figure')
    .children('figcaption')
    .children('.popUpdesc')
    .text();

    // preview image of selected project
    const projectImg = $(e.target)
    .closest('.project-figure')
    .children('img')
    .attr('src');

    // preview repo of selected project
    const projetGithubRepo = $(e.target)
    .closest('.project-figure')
    .children('figcaption')
    .children('#githubRepo')
    .attr('href');

    // preview live link of selected project
    const projectLivePreview = $(e.target)
    .closest('.project-figure')
    .children('figcaption')
    .children('#livePreview')
    .attr('href');


};