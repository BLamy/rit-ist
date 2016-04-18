define(['model/minors'], model => {
  const minors = $('#Minors');

  model.subscribe(payload => {
    let html = payload.reduce((prev, curr) => {
      return prev + `
        <div class='${curr.name} hoverShadow3dp'>
          <div class='minor-wrapper'>
            <i class='fa ${curr.name} fa-3x'></i>
            <p>${curr.title}</p>
          </div>
        </div>`;
    }, '');

    minors.html(html);
  });
});
