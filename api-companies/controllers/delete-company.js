'use strict';
const db = require('../db/init');

module.exports.delete = async (event) => {
  const client = await db.init();

  const companyId = event.path.id;
  if(!companyId) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please specify all parameters of request',
    };
  }
  /** Delete company **/
  const text = 'delete from companies_info where id = $1 RETURNING *';
  const results = await client.query(text, [companyId]);
  if(results && results.rows) return results.rows;
};
