const { Pool } = require('pg');
const format = require('pg-format');
const globalContants = require('../config/globalContants');
const pool = new Pool(globalContants);
module.exports = { pool, format };
