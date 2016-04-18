/**
 * Toolbar controller handles the toolbar and all button actions
 */
define(['util/EventLogger'], logger => {

  $('#MenuButton').click(e => {
    logger.log('MenuButton Clicked', e);
  });

  $('#SearchButton').click(e => {
    logger.log('Search Clicked', e);
  });

  $('#MoreButton').click(e => {
    logger.log('MoreButton Clicked', e);
  });

  const header = $('header');
  $(window).scroll(e => {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      header.addClass('shadow3dp');
    } else {
      header.removeClass('shadow3dp');
    }
  });

});
