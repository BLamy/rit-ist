  /**
   * About controller manages the about section
   */
  define(['model/about'], model => {
    const host = $('#About');

    model.subscribe(data => {
      host.html(`
        <h1 id="AboutTitle" class='display1'>${data.title}</h1>
        <hr />
        <p id="AboutDescription">${data.description}</p>
        <span class="quoteMark">&quot;</span>
        <blockquote id="AboutQuote">${data.quote}</blockquote>
        <cite>- ${data.quoteAuthor}</cite>
      `);
    });

  });
