/**
*
*/
define(['model/undergraduate'], model => {
  var undergraduate = $('#Undergraduate');

  model.subscribe(payload => {
    var html = payload.reduce((prev, curr) => {
      return prev + `
        <div>
          <i class="fa ${curr.degreeName} fa-5x"></i>
          <h3>${curr.title}</h3>
          <p>${curr.description}</p>
        </div>
      `;
    }, '');
    undergraduate.html(html);
  });

});
