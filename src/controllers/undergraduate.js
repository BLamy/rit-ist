/**
*
*/
define(['model/undergraduate', 'util/EventLogger'], (model, logger) => {
  const undergraduate = $('#Undergraduate');

  model.subscribe(payload => {
    let html = `<h3 class='display1'>Our Undergraduate Degrees</h3>`;

    html += '<div>' + payload.reduce((prev, curr) => {
      return prev + `
        <a href="#${curr.degreeName}" class='clickable'>
          <i class="fa ${curr.degreeName} fa-5x"></i>
          <h3>${curr.title}</h3>
          <p>${curr.description}</p>
        </a>
      `;
    }, '') + '</div>';

    undergraduate.html(html);

    var clickables = document.querySelector('#Undergraduate a.clickable');
    var clickStream = Rx.Observable.fromEvent(clickables, 'click');
    clickStream.subscribe(e => {
      e.preventDefault();
      let degreeName = e.currentTarget.hash.replace('#', '');
      let degree = payload.find(item => (degreeName === item.degreeName));
      logger.log('Did Open Undergrad');
      payload;
      debugger;
    });
  });

});
