'use strict';
const db = require('../db/init');

module.exports.list = async (event, context, callback) => {
  const client = await db.init();

  if(!client && !client.query) {
    callback({
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Something went wrong',
    }, null);
  }
  const text = 'select * from companies_info';
  const results =  await client.query(text);
  if(results && results.rows) return results.rows;
};
