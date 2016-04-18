(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/employment' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
