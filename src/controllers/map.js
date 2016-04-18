define(['model/employment', 'util/lightbox'], (model, lightbox) => {
  const coop = $("#coop");
  const pet = $("#pet");

  const coopStream = coop.clickAsObservable().flatMapLatest(e => {
    return model.map(item => item.coopTable)
  });

  const employmentStream = pet.clickAsObservable().flatMapLatest(e => {
    return model.map(item => item.employmentTable)
  });

  coopStream.subscribe(payload => {
    lightbox.html(`
    <table id="datatable">
      <thead>
        <tr>
          <th>City</th>
          <th>Degree</th>
          <th>Employeer</th>
          <th>term</th>
        </tr>
      </thead>
    </table>`);
    $('#datatable').DataTable({
      data: payload.coopInformation,
      columns: [
        {data: 'city'},
        {data: 'degree'},
        {data: 'employer'},
        {data: 'term'}
      ]
    });
    lightbox.show();
  });

  employmentStream.subscribe(payload => {
    lightbox.html(`
    <table id="datatable">
      <thead>
        <tr>
          <th>City</th>
          <th>Degree</th>
          <th>Employeer</th>
          <th>Start Date</th>
          <th>title</th>
        </tr>
      </thead>
    </table>`);
    debugger;
    $('#datatable').DataTable({
      data: payload.professionalEmploymentInformation,
      columns: [
        {data: 'city'},
        {data: 'degree'},
        {data: 'employer'},
        {data: 'startDate'},
        {data: 'title'}
      ]
    });
    lightbox.show();
  });

});
