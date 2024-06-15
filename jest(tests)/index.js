Numbers = function (number) {
  return number >= 0 ? number : -number;
};
module.exports.Numbers = Numbers;

module.exports.salom = function (name) {
  return `Hello ${name}.How are you good ?`;
};

module.exports.getCurrencies = function () {
  return ["UZS", "MYR", "TRY"];
};

module.exports.Getobjects = function (id) {
  return { id: id, price: 2, product: "banana" };
};

//Xatolarni testlash
module.exports.registeruser = function (username) {
  if (!username) throw new Error("User name is required !!!");
  return { id: 555, userName: username };
};
