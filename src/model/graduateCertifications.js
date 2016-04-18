define(['model/degrees'], function(degrees){
  return degrees.map(function(data) {
    return data.graduate.find(function(item){
      return (item.availableCertificates !== undefined);
    });
  });
});
