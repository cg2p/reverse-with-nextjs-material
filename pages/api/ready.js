import { db } from './db';

export default function handler(req, res) {
  console.log('db called');
    
  const text = 'SELECT NOW() AS NOWDATA;';
  const values = '';

  return new Promise((resolve, reject) => {
    db
    .query(text, values)
    .then(result => {
        const nowdata = result.rows[0].nowdata;
        console.log(nowdata);
        res.status(200).json({ status: "UP", checks: nowdata, text: "hello" });
    })
    .catch(e => {
        console.log('db error');
        console.error(e.stack)
        }
        );
  });

}