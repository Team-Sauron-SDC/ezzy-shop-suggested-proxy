const getRandomPage = (userContext, events, done) => {
  const id = Math.floor(Math.random() * (10000000 - 9000000)) + 9000000;
  userContext.vars.id = id;
  return done();
};

const randomImg = () => {
  const id = Math.floor(Math.random() * 1000);
  return `https://i.picsum.photos/id/${id}/300/300.jpg`;
};

const randomDataGen = (userContext, events, done) => {
  const shopID = Math.floor(Math.random() * (200000000 - 10000001)) + 10000001;
  const shopName = 'HieuTest';
  const shopDate = 'May 22, 1995';
  const shopSales = 42;
  const shopLoc = 'Neo-Tokyo';
  const shopURL = randomImg();
  const shopItems = 99;
  const productID = shopID;
  const productName = 'Bubbles';
  const productPrice = '2.99';
  const productShipping = 'FREE Shipping';
  const productURL = randomImg();

  userContext.vars.shopID = shopID;
  userContext.vars.shopName = shopName;
  userContext.vars.shopDate = shopDate;
  userContext.vars.shopSales = shopSales;
  userContext.vars.shopLoc = shopLoc;
  userContext.vars.shopURL = shopURL;
  userContext.vars.shopItems = shopItems;
  userContext.vars.productID = productID;
  userContext.vars.productName = productName;
  userContext.vars.productPrice = productPrice;
  userContext.vars.productShipping = productShipping;
  userContext.vars.productURL = productURL;

  return done();
};
module.exports = {
  getRandomPage,
  randomDataGen,
};
