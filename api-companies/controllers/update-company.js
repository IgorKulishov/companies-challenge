'use strict';
const db = require('../db/init');

module.exports.update = async (event, context, callback) => {
  const client = await db.init();
  let data;

  const companyId = event.path.id;
  if(typeof event.body === 'string') {
    data = JSON.parse(event.body);
  } else {
    data = event.body;
  }
  if (!companyId || !data || !data.name || !data.locationCity || !data.locationState || !data.foundedDate || !data.founderFullName || !data.founderPosition || !data.description) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Please specify all parameters of request',
    };
  }
  /** Update company **/
  const text = `update companies_info set
  name = ($1), 
  location_city = ($2), 
  location_state = ($3), 
  founded_date = ($4), 
  founder_full_name = ($5), 
  founder_position = ($6), 
  description = ($7)
  where id = $8
  RETURNING *`;
  const values = [
    data.name,
    data.locationCity,
    data.locationState,
    data.foundedDate,
    data.founderFullName,
    data.founderPosition,
    data.description,
    companyId
  ];
  const results = await client.query(text, values);
  if(results && results.rows) return result.rows;
};
