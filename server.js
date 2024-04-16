import express from 'express';
import pg from 'pg';
const app = express();

const Pool = pg.Pool;
 
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'q1w2e3r4'
});
const baseUrl = '/api';
app.use(express.static('../movies/dist/movies/browser'));

app.get(baseUrl + '/hello', (req, res) => {
    res.send('Hello World!!!!!!');
});

app.get(baseUrl + '/movies', async (req, res) => {
    try {
        const result = await pool.query('SELECT * from movies');
        res.send(result.rows);
    } catch (error) {
        console.error('Something went wrong!\n' + error);
    }
});
  
app.listen(3000, () => {
    console.log('Web server app listening on port 3000!');
});
