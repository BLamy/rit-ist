/**
*
*/
define(['model/undergraduate', 'util/EventLogger', 'util/lightbox'], (model, logger, lightbox) => {
  const undergraduate = $('#Undergraduate');

  model.subscribe(payload => {
    //---------------------------
    // Stamp Template
    let html = `<h3 class='display1'>Our Undergraduate Degrees</h3>`;

    html += '<div>' + payload.reduce((prev, curr, i) => {
      return prev + `
        <a href="#${curr.degreeName}" class='lightbox-trigger'>
          <i class="fa ${curr.degreeName} fa-5x"></i>
          <h3>${curr.title}</h3>
          <p>${curr.description}</p>
        </a>
      `;
    }, '') + '</div>';

    undergraduate.html(html);

    //---------------------------
    // Register for Click Events
    const clickables = document.querySelectorAll('#Undergraduate a.lightbox-trigger');
    const clickStream = Rx.Observable.fromEvent(clickables, 'click');
    clickStream.subscribe(e => {
      e.preventDefault();
      const degreeName = e.currentTarget.hash.replace('#', '');
      const degree = payload.find(item => (degreeName === item.degreeName));
      let html = `
        <h2 class='lightbox-title'>${degree.title}</h2>
        <h4 class='lightbox-description'>Concentrations</h4>
        `;
        html += degree.concentrations.reduce((previous, current) => {
          return previous + `<li>${current}</li>`;
        }, '<ul>') + '</ul>';

      lightbox.html(html);
      lightbox.show();
    });
  });

});
