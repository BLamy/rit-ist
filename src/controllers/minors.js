define(['model/minors', 'util/lightbox'], (model, lightbox) => {
  const minors = $('#Minors');

  model.subscribe(payload => {
    let html = `
      <h2 class="display1">Our Undergraduate Minors</h2>
      <p>Expand your field of study</p>
    `;

    html += payload.reduce((prev, curr) => {
      return prev + `
        <a href='#${curr.name}' class='${curr.name} hoverShadow3dp lightbox-trigger'>
          <div class='minor-wrapper'>
            <i class='fa ${curr.name} fa-3x'></i>
            <p>${curr.title}</p>
          </div>
        </a>`;
    }, '<div>') + '</div>';

    minors.html(html);

    //---------------------------
    // Register for Click Events
    const clickables = document.querySelectorAll('#Minors a.lightbox-trigger');
    const clickStream = Rx.Observable.fromEvent(clickables, 'click');
    clickStream.subscribe(e => {
      e.preventDefault();
      const name = e.currentTarget.hash.replace('#', '');
      const minor = payload.find(item => (name === item.name));
      let html = `
        <h2 class='lightbox-title'>${minor.title}</h2>
        <h4 class='lightbox-description'>Courses</h4>
        `;
        html += minor.courses.reduce((previous, current) => {
          return previous + `<li>${current}</li>`;
        }, '<ul>') + '</ul>';

      lightbox.html(html);
      lightbox.show();
    });


  });
});
