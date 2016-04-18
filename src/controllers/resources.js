define(['model/resources', 'util/lightbox'], (model, lightbox) => {
  const render = $('#Resources');

  //------------------
  // Organize streams
  const studyAbroad = $('#studyAbroad').clickAsObservable().flatMapLatest(e => {
    return model.map((item) => item.studyAbroad);
  });

  const studentServices = $('#studentServices').clickAsObservable().flatMapLatest(e => {
    return model.map((item) => item.studentServices);
  });

  const tutorsAndLabInformation = $('#tutorsAndLabInformation').clickAsObservable().flatMapLatest(e => {
    return model.map((item) => item.tutorsAndLabInformation);
  });

  const studentAmbassadors = $('#studentAmbassadors').clickAsObservable().flatMapLatest(e => {
    return model.map((item) => item.studentAmbassadors);
  });

  const forms = $('#forms').clickAsObservable().flatMapLatest(e => {
    return model.map((item) => item.forms);
  });

  const coopEnrollment = $('#coopEnrollment').clickAsObservable().flatMapLatest(e => {
    return model.map((item) => item.coopEnrollment);
  });

  //------------------
  // Render templates
  studyAbroad.subscribe(payload => {
    let html =`
      <h2>${payload.title}</h2>
      <p>${payload.description}</p>
      `;
      html += payload.places.reduce((previous, current) => {
        return previous + `
        <li>
          <p>${current.nameOfPlace}</p>
          <p>${current.description}</p>
        </li>`
      }, '<ul>')+'</ul>';

    lightbox.html(html);
    lightbox.show();
  });

  studentServices.subscribe(payload => {
    let html =`
      <h2>${payload.title}</h2>
      <h4>${payload.academicAdvisors.title}</h4>
      <p>${payload.academicAdvisors.description}</p>
      <h4>${payload.professonalAdvisors.title}</h4>
      `;
      html += payload.professonalAdvisors.advisorInformation.reduce((previous, current) => {
        return previous + `
        <li>
          <span>${current.name}</span>
          <span>${current.department}</span>
          <span>${current.email}</span>
        </li>`
      }, '<ul>')+'</ul>';
      html += `
        <h4>${payload.facultyAdvisors.title}</h4>
        <p>${payload.facultyAdvisors.description}</p>
      `;

      html += payload.istMinorAdvising.minorAdvisorInformation.reduce((previous, current) => {
        return previous + `
        <li>
          <span>${current.title}</span>
          <span>${current.advisor}</span>
          <span>${current.email}</span>
        </li>`
      }, '<ul>')+'</ul>';
      
      lightbox.html(html);
      lightbox.show();
  })

  tutorsAndLabInformation.subscribe(payload => {
    let html =`
      <h2>${payload.title}</h2>
      <p>${payload.description}</p>
      <a href="${payload.tutoringLabHoursLink}"></a>
      `;
    lightbox.html(html);
    lightbox.show();
  });

  studentAmbassadors.subscribe(payload => {
    let html =`
      <h2>${payload.title}</h2>
      <img src="${payload.ambassadorsImageSource}" />
      `;

      html += payload.subSectionContent.reduce((previous, current) => {
        return previous + `
        <li>
          <p>${current.title}</p>
          <p>${current.description}</p>
        </li>`
      }, '<ul>')+'</ul>';

    lightbox.html(html);
    lightbox.show();
  });

  forms.subscribe(payload => {
    let html = '';

    html += payload.graduateForms.reduce((previous, current) => {
      return previous + `
      <li>
        <a href="${current.href}"">${current.formName}</a>
      </li>`
    }, '<ul>')+'</ul>';

    html += payload.undergraduateForms.reduce((previous, current) => {
      return previous + `
      <li>
        <a href="${current.href}"">${current.formName}</a>
      </li>`
    }, '<ul>')+'</ul>';
    lightbox.html(html);
    lightbox.show();
  })

  coopEnrollment.subscribe(payload => {
    let html =`
      <h2>${payload.title}</h2>
      `;
      html += payload.enrollmentInformationContent.reduce((previous, current) => {
        return previous + `
        <li>
          <p>${current.title}</p>
          <p>${current.description}</p>
        </li>`
      }, '<ul>')+'</ul>';

    lightbox.html(html);
    lightbox.show();
  });

});
