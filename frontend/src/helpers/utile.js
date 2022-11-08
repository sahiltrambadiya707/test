export const isEmpty = (value) => {
  if (value == null || value == "null") {
    return true;
  }
  if (typeof value == "object") {
    return Object.keys(value).length == 0;
  }
  return (
    value.length == 0 || value == undefined || value == "undefined" || value == null || value == ""
  );
};
