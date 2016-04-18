/**
*
*/
define(['model/employment'], model => {
  var render = $('#Employment');

  model.subscribe(payload => {
    var html = `<h2>${payload.introduction.title}</h2>`;

    //--------------------------
    // Employment
    var employment = payload.introduction.content[0];
    html += `
      <h3>${employment.title}</h3>
      <p>${employment.description}</p>
    `
    //--------------------------
    // Employment stats
    let stats = payload.degreeStatistics.statistics;
    html += '<div id="degreeStatistics">' + stats.reduce((previous, current) => {
      return previous + `
        <div>
          <h2>${current.value}</h2>
          <p>${current.description}</p>
        </div>
      `
    }, '') + '</div>'


    //--------------------------
    // COOP
    var coop = payload.introduction.content[0];
    html += `
      <h3>${coop.title}</h3>
      <p>${coop.description}</p>
    `

    //--------------------------
    // Employers
    html += `<h2>${payload.employers.title}</h2>`;

    html += '<div >' + payload.employers.employerNames.reduce((previous, current) => {
      return previous + `
        <span>
        ${current}
        </span>
      `
    }, '') + '</div>'

    //--------------------------
    // Careers
    html += `<h2>${payload.careers.title}</h2>`;

    html += '<div>' + payload.careers.careerNames.reduce((previous, current) => {
      return previous + `
        <span>
          ${current}
        </span>
      `
    }, '') + '</div>'
    render.html(html);
  });

});
