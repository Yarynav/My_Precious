const hateoas = (jewels, page) => {
  const results = jewels.map((e) => {
    return {
      name: e.nombre,
      href: `http://localhost:3000/jewel/filters?id=${e.id}`,
    };
  });
  const jewelsTotal = jewels.length;
  const stockTotal = jewels
    .map((item) => item.stock)
    .reduce((prev, curr) => prev + curr, 0);
  const hateoas = {
    jewelsTotal,
    stockTotal,
    page,
    results,
  };
  return hateoas;
};

module.exports = { hateoas };
