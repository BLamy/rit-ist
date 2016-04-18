(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/research' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
