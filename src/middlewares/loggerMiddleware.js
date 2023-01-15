const loggerMiddleware = async (req, res, next) => {
  const params = req.params;
  const query = req.query;
  const body = req.body;
  const url = req.url;
  console.log(
    `Fecha petición: ${new Date()} Se ha recibido una consulta en la ruta ${url}`
  );
  console.log('params:');
  console.table(params);
  console.log('query:');
  console.table(query);
  console.log('body:');
  console.table(body);
  next();
};

module.exports = { loggerMiddleware };
