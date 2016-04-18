(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/degrees' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
