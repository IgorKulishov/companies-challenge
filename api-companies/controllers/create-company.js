'use strict';
const db = require('../db/init');

module.exports.create = async (event) => {
  const client = await db.init();
  let data;

  if(typeof event.body === 'string') {
    data = JSON.parse(event.body);
  } else {
    data = event.body;
  }
  if (!data || !data.name || !data.locationCity || !data.locationState || !data.foundedDate || !data.founderFullName || !data.founderPosition || !data.description) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: 'Couldn\'t create the company item. Insufficient data',
    };
  }
  /** Save company **/
  const text = 'insert into companies_info(name, location_city, location_state, founded_date, founder_full_name, founder_position, description) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  const values = [
    data.name,
    data.locationCity,
    data.locationState,
    data.foundedDate,
    data.founderFullName,
    data.founderPosition,
    data.description
  ];
  const results = await client.query(text, values);
  if(results && results.rows) return results.rows;
};
