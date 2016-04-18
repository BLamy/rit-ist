define(['model/research', 'util/lightbox'], (model, lightbox) => {
  const byInterest = model.map(item => item.byInterestArea);
  const byFaculty = model.map(item => item.byFaculty);
  const researchAreas = $('#ResearchAreas');
  const researchFaculty = $('#ResearchFaculty');

  byInterest.subscribe(payload => {
    let html = `
      <h2 class="display1">Faculty Research: Areas of Interest</h2>
      <p>Click the area you’re interested in to explore our faculty publications</p>
    `;

    html += payload.reduce((previous, current) => {
      const tagClass = current.areaName.replace(' ', '-').toLowerCase();
      return previous + `
        <a href='#${tagClass}' class="${tagClass} lightbox-trigger">
          <div class='research-wrapper'>
            <p>${current.areaName}</p>
            <i class='fa ${tagClass} fa-2x'></i>
          </div>
        </a>`;
    }, '<div>') + '</div>';

    researchAreas.html(html);

    //-----------------------------
    // Handle clicks
    const clickables = document.querySelectorAll('#ResearchAreas a.lightbox-trigger');
    const clickStream = Rx.Observable.fromEvent(clickables, 'click');
    clickStream.subscribe(e => {
      e.preventDefault();
      const name = e.currentTarget.hash.replace('#', '');
      const research = payload.find(item => {
        const tagClass = item.areaName.replace(' ', '-').toLowerCase();
        return (tagClass === name);
      });
      let html = `
        <h2 class='lightbox-title'>${research.areaName}</h2>
        <h4 class='lightbox-description'>Citations</h4>
        `;
      html += research.citations.reduce((previous, current) => {
        return previous + `<li>${current}</li>`;
      }, '<ul>') + '</ul>';

      lightbox.html(html);
      lightbox.show();
    });

  });

  byFaculty.subscribe(payload => {

    let html = `
      <h2 class="display1">Faculty Research: Lookup by Faculty</h2>
      <p>Click the faculty memeber to explore their recent publications</p>
    `;

    html += payload.reduce((previous, current) => {
      return previous + `
        <a href='#${current.username}' class="lightbox-trigger">
          <div class='research-wrapper'>
            <img src="/img/faculty/${current.username}.jpg" alt="${current.facultyName}" />
          </div>
        </a>`;
    }, '<div>') + '</div>';

    researchFaculty.html(html);

    //-----------------------------
    // Handle clicks
    const clickables = document.querySelectorAll('#ResearchFaculty a.lightbox-trigger');
    const clickStream = Rx.Observable.fromEvent(clickables, 'click');
    clickStream.subscribe(e => {
      e.preventDefault();
      const name = e.currentTarget.hash.replace('#', '');
      const research = payload.find(item => (item.username === name));
      let html = `
        <h2 class='lightbox-title'>${research.facultyName}</h2>
        <h4 class='lightbox-description'>Citations</h4>
        `;
      html += research.citations.reduce((previous, current) => {
        return previous + `<li>${current}</li>`;
      }, '<ul>') + '</ul>';

      lightbox.html(html);
      lightbox.show();
    });

  });

});
