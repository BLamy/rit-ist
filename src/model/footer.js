(function(){
  const opts = { url: 'http://www.ist.rit.edu/api/footer' };
  define(() => $.ajaxAsObservable(opts).map(payload => payload.data));
})();
