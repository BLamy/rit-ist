define(['model/footer'], model => {
  const render = $('#Footer')
  model.subscribe(payload => {
    let html = `
      <h2 class='display1'>${payload.social.title}</h2>
      <blockquote>${payload.social.tweet}</blockquote>
      <cite>${payload.social.by}</cite>
      <a href="${payload.social.twitter}">twitter</a>
      <a href="${payload.social.facebook}">facebook</a>
      <div id="FooterDark">
        `;

        //--------------------
        // Quicklinks
        html += payload.quickLinks.reduce((previous, current) => {
          return previous + `
            <li><a href='${current.href}'>${current.title}</a></li>
          `
        }, '<ul>') + '</ul>';
        //--------------------
        // Quicklinks

    html +=`
        ${payload.copyright.html}
      </div>
    `;
    render.html(html);
  });
});
