const toQueryString = (obj) => {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p) && obj[p]) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.length > 0 ? `?${str.join('&')}` : '';
};
export default toQueryString;
