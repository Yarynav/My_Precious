/** @description Esta funcion se encarga de validar que vengan los parametros por URL, si no existen asignamos un valor por defecto para evitar errores */
const validateQueryString = (req, res) => {
  const { query } = req;
  let error = null;

  if (query.precio_max && isNaN(query.precio_max)) {
    error = { status: 400, msj: 'El valor "precio_max" debe ser un número' };
  }

  if (query.precio_min && isNaN(query.precio_min)) {
    error = { status: 400, msj: 'El valor "precio_min" debe ser un número' };
  }
  const limits = query.limits ? Number(query.limits) : 10;
  const page = query.page ? Number(query.page) : 1;
  const order_by = query.order_by ? query.order_by : 'id_ASC';
  const precio_max = query.precio_max ? Number(query.precio_max) : '';
  const precio_min = query.precio_min ? Number(query.precio_min) : '';
  const categoria = query.categoria ? query.categoria : '';
  const metal = query.metal ? query.metal : '';
  const id = query.id ? query.id : '';

  return {
    limits,
    page,
    order_by,
    precio_max,
    precio_min,
    categoria,
    metal,
    id,
    error,
  };
};

module.exports = {
  validateQueryString,
};
