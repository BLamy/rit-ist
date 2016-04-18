  /**
   *
   */
  define(['model/graduateDegrees', 'model/graduateCertifications'], (Degree, Certificate) => {

    Degree.subscribe(payload => {
      var render = $('#GraduateDegrees');
      var html = payload.reduce((prev, curr) => {
        return prev + `
            <div>
              <i class="fa ${curr.degreeName} fa-5x"></i>
              <h3>${curr.title}</h3>
              <p>${curr.description}</p>
            </div>
          `;
      }, '');
      render.html(html);
    });

    Certificate.subscribe(payload => {
      var render = $('#GraduateCertifications');

      var html = payload.availableCertificates.reduce((prev, curr) => {
        return prev + `<h4>${curr}</h4>`;
      }, '');

      render.html(html);
    });
  });
