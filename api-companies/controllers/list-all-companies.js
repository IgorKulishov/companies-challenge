'use strict';
const db = require('../db/init');

module.exports.list = async (event) => {
  const client = await db.init();

  const text = 'select * from companies_info';
  const results =  await client.query(text);
  if(results && results.rows) return results.rows;
};
