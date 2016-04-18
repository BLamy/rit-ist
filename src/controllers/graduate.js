  /**
   *
   */
  define(['model/graduateDegrees', 'model/graduateCertifications', 'util/lightbox'], (Degree, Certificate, lightbox) => {
    const graduateDegrees = $('#GraduateDegrees');
    Degree.subscribe(payload => {
      let html = `<h3 class='display1'>Our Graduate Degrees</h3>`;

      html += payload.reduce((prev, curr) => {
        return prev + `
          <a href="#${curr.degreeName}" class='lightbox-trigger'>
            <i class="fa ${curr.degreeName} fa-5x"></i>
            <h3>${curr.title}</h3>
            <p>${curr.description}</p>
          </a>
          `;
      }, '<div>') + '</div>';
      graduateDegrees.html(html);


      //---------------------------
      // Register for Click Events
      const clickables = document.querySelectorAll('#GraduateDegrees a.lightbox-trigger');
      const clickStream = Rx.Observable.fromEvent(clickables, 'click');
      clickStream.subscribe(e => {
        e.preventDefault();
        const degreeName = e.currentTarget.hash.replace('#', '');
        const degree = payload.find(item => (degreeName === item.degreeName));
        let html = `
          <h2 class='lightbox-title'>${degree.title}</h2>
          <h4 class='lightbox-description'>Concentrations</h4>
          `;
          html += degree.concentrations.reduce((previous, current) => {
            return previous + `<li>${current}</li>`;
          }, '<ul>') + '</ul>';

        lightbox.html(html);
        lightbox.show();
      });

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
