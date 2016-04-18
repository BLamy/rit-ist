/**
 * Toolbar controller handles the toolbar and all button actions
 */
define(['util/EventLogger', 'util/lightbox', 'model/currentNews'], (logger, lightbox, news) => {

  $('#OpenNews').clickAsObservable().flatMapLatest(e => news).subscribe(payload => {
    let html = payload.reduce((previous, current) => {
      const desc = current.description || '';
      const date = new Date(current.date);
      return previous + `
        <h1 class='display1'>${current.title}</h1>
        <p>${date.getMonth()+1}/${date.getDay()}</p>
        <p>${desc}</p>
        <hr />
      `;
    }, '<div>') + '</div>';

    lightbox.html(html);
    lightbox.show();
  });

  $('#OpenContact').clickAsObservable().subscribe(payload => {
    lightbox.html(`
      <iframe src="http://ist.rit.edu/assets/includes/contact/contact.php"></iframe>
      `);
      lightbox.show();
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
