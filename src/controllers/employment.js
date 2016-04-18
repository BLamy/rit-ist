/**
*
*/
define(['model/employment'], model => {
  const render = $('#Employment');

  model.subscribe(payload => {
    let html = `<h2>${payload.introduction.title}</h2>`;

    //--------------------------
    // Employment
    const employment = payload.introduction.content[0];
    html += `
      <h3>${employment.title}</h3>
      <p>${employment.description}</p>
    `;

    //--------------------------
    // Employment stats
    const stats = payload.degreeStatistics.statistics;
    html += stats.reduce((previous, current) => {
      return previous + `
        <div>
          <div class="stat-wrapper">
            <h4>${current.value}</h4>
            <p>${current.description}</p>
          </div>
        </div>
      `;
    }, '<div id="degreeStatistics">') + '</div>';

    //--------------------------
    // COOP
    const coop = payload.introduction.content[1];
    html += `
      <h3>${coop.title}</h3>
      <p>${coop.description}</p>
    `;

    //--------------------------
    // Employers
    html += `<h4>${payload.employers.title}</h4>`;

    html +=  payload.employers.employerNames.reduce((previous, current) => {
      return previous + `
        <span>
          ${current}
        </span> -
      `;
    }, '<div>-') + '</div>';

    //--------------------------
    // Careers
    html += `<h4>${payload.careers.title}</h4>`;

    html += payload.careers.careerNames.reduce((previous, current) => {
      return previous + `
        <span>
          ${current}
        </span> -
      `;
    }, '<div>-') + '</div>';
    render.html(html);
  });

});
