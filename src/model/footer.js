define(function(){
  return $.ajaxAsObservable({
    url: 'http://www.ist.rit.edu/api/footer'
  }).map(function(payload) {
    return payload.data;
  });
});
