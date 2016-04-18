define(['model/resources'], model => {
  const render = $('#Resources');

  model.subscribe(payload => {
    let html = `
      <h3>${payload.title}</h3>
      <p>${payload.subTitle}</p>
    `;
    const keys = Object.keys(payload).filter(key => (key !== 'title' && key !== 'subTitle'));

    html += keys.reduce((previous, current) => {
      const item = payload[current];
      return previous + `
        <p>${item.title}</p>
      `;
    }, '');

    render.html(html);
  })
});
