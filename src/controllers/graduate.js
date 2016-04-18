  /**
   *
   */
  define(['model/graduateDegrees', 'model/graduateCertifications'], (Degree, Certificate) => {
    const graduateDegrees = $('#GraduateDegrees');
    Degree.subscribe(payload => {
      let html = `<h3 class='display1'>Our Graduate Degrees</h3>`;

      html += '<div>' + payload.reduce((prev, curr) => {
        return prev + `
            <div>
              <i class="fa ${curr.degreeName} fa-5x"></i>
              <h3>${curr.title}</h3>
              <p>${curr.description}</p>
            </div>
          `;
      }, '') + '</div>';
      graduateDegrees.html(html);
    });

    const graduateCertifications = $('#GraduateCertifications');
    Certificate.subscribe(payload => {

      let html = payload.availableCertificates.reduce((prev, curr) => {

        return prev + `
          <i class="fa fa-5x"></i>
          <h4>${curr}</h4>
        `;
      }, '');

      graduateCertifications.html(html);
    });
  });
