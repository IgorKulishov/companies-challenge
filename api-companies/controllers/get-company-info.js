'use strict';
const db = require('../db/init');

module.exports.getByCompanyId = async (event) => {
  const client = await db.init();

  const companyId = event.path.id;
  if(!companyId) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please specify all parameters of request',
    };
  }
  /** Find company **/
  const query = {
    name: 'fetch-company',
    text: 'SELECT * FROM companies_info WHERE id = $1',
    values: [companyId],
  }
  const results = await client.query(query);
  if(results && results.rows) return results.rows;
};
