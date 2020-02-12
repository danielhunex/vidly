import 'module-alias/register';
import dotenv from 'dotenv';
dotenv.config();
import app from './src/App';

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`Lisenting at Port ${port}`);
});
