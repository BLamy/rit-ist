(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/minors' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
