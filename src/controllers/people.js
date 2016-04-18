define(['model/people', 'util/lightbox'], (model, lightbox) => {
  const render = $('#People');

  model.subscribe(payload => {
    let html = `
      <h2 class="display1">${payload.title}</h2>
      <p>${payload.subTitle}</p>
    `;

    html += payload.faculty.reduce((prev, curr) => {
      return prev + `<a href="#${curr.username}" class="lightbox-trigger">
        <p>${curr.name}</p>
        <p>${curr.title}</p>
        </a>
      `;
    }, '<div class="faculty"> ') + '</div>';

    render.html(html);

    //---------------------------
    // Register for Click Events
    const clickables = document.querySelectorAll('#People a.lightbox-trigger');
    const clickStream = Rx.Observable.fromEvent(clickables, 'click');
    clickStream.subscribe(e => {
      e.preventDefault();
      const name = e.currentTarget.hash.replace('#', '');
      const employee = payload.faculty.find(item => (name === item.username));
      var keysToRemove = ['name','title','imagePath']
      var keys = Object.keys(employee).filter(item => (!keysToRemove.includes(item)));

      let html = `
        <h2 class='lightbox-title'>${employee.name}</h2>
        <h4 class='lightbox-description'>${employee.title}</h4>
        <img src="${employee.imagePath}" alt="${employee.name} - ${employee.title}"/>
        `;

        html += keys.reduce((previous, current) => {
          if (!employee[current]) {
            return previous;
          }
          return previous + `<li>${current}: ${employee[current]}</li>`;
        }, '<ul>') + '</ul>';

      lightbox.html(html);
      lightbox.show();
    });

  });
});
