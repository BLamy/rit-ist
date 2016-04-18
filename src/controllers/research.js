define(['model/research'], model => {
  const byInterest = model.map(item => item.byInterestArea);
  const byFaculty = model.map(item => item.byFaculty);
  const researchAreas = $('#ResearchAreas');
  const researchFaculty = $('#ResearchFaculty');

  byInterest.subscribe(payload => {
    var html = `
      <h2 class="display1">Faculty Research: Areas of Interest</h2>
      <p>Click the area you’re interested in to explore our faculty publications</p>
    `;


    html += '<div>' + payload.reduce((previous, current) => {
      let tagClass = current.areaName.replace(' ', '-').toLowerCase();
      return previous + `
        <div class="${tagClass}">
          <div class='research-wrapper'>
            <p>${current.areaName}</p>
            <i class='fa ${tagClass} fa-2x'></i>
          </div>
        </div>`;
    }, '') + '</div>';

    researchAreas.html(html);
  });

  byFaculty.subscribe(payload => {
    let html = payload.reduce((previous, current) => {
      return previous + `<img src="/img/faculty/${current.username}.jpg" alt="${current.facultyName}" />`;
    }, '');

    researchFaculty.html(html);
  });
});
