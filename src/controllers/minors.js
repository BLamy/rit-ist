define(['model/minors'], function(model) {
  var minors = $('#Minors');

  model.subscribe(function(payload) {
    var html = payload.reduce(function(prev, curr) {
      return prev + `
        <div class='${curr.name}'>
          <i class='fa ${curr.name} fa-3x'></i>
          <p>${curr.title}</p>
        </div>`;
    }, '');

    minors.html(html);
  });
});
