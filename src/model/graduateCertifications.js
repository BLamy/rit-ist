define(['model/degrees'], degrees => degrees.map(data => {
  return data.graduate.find(item => (item.availableCertificates !== undefined));
}));
