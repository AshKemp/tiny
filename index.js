module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string! Please input only string data");
  return string.replace(/\s/g, "");
};
