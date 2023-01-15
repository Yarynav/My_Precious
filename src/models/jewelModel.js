const { pool, format } = require('../helpers/database');

const list = async (queryString) => {
  const { limits, page, order_by } = queryString;
  const [field, order] = order_by.split('_');
  const offset = (page - 1) * limits;
  const formatQuery = format(
    'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
    field,
    order,
    limits,
    offset
  );

  const { rows } = await pool.query(formatQuery);
  return rows;
};

/** @description Retorna listado filtrado de joyas, los filtros se van agregando si hay un valor en queryString, cada filtro agregado va formateado para impedir inyecciones sql */
const listFilter = async (queryString) => {
  const { precio_max, precio_min, categoria, metal, id } = queryString;
  let filters = [];
  if (id) filters.push(format(`id = %s`, id));
  if (precio_max) filters.push(format(`precio <= %s`, precio_max));
  if (precio_min) filters.push(format(`precio >= %s`, precio_min));
  if (categoria) filters.push(format(`categoria =  '%s'`, categoria));
  if (metal) filters.push(format(`metal =  '%s'`, metal));
  let query = 'SELECT * FROM inventario';

  if (filters.length > 0) {
    filters = filters.join(' AND ');
    query += ` WHERE ${filters}`;
  }

  const { rows } = await pool.query(query);
  return rows;
};

module.exports = {
  list,
  listFilter,
};
