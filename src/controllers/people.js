define(['model/people'], model => {
  var render = $('#People');

  model.subscribe(payload => {
    var html = `
      <h2>${payload.title}</h2>
      <p>${payload.subTitle}</p>
    `;

    html += '<div class="faculty"> ' + payload.faculty.reduce((prev, curr) => {
      return prev + `<div>
        <p>${curr.name}</p>
        <p>${curr.title}</p>
        </div>
      `;
    }, '') + '</div>';

    render.html(html);
  });
});
