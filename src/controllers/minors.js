define(['model/minors'], model => {
  const minors = $('#Minors');

  model.subscribe(payload => {
    let html = `
      <h2 class="display1">Our Undergraduate Minors</h2>
      <p>Expand your field of study</p>
    `;

    html += '<div>' + payload.reduce((prev, curr) => {
      return prev + `
        <div class='${curr.name} hoverShadow3dp'>
          <div class='minor-wrapper'>
            <i class='fa ${curr.name} fa-3x'></i>
            <p>${curr.title}</p>
          </div>
        </div>`;
    }, '') + '</div>';

    minors.html(html);
  });
});
