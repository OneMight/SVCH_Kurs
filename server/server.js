require('dotenv').config();
const cors = require('cors');
const express = require('express')
const sequelize = require('./db.js');
const routes = require('./routes/index.js')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT;
const groupRouter = require('./routes/GoupRouter.js');
const PilotRouter = require('./routes/PilotsRouter.js');
const TeamsRouter = require('./routes/TeamsRouter.js');
const TrophiesRouter = require('./routes/TrophiesRouter.js');



const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', // Замените на адрес вашего фронтенда
    credentials: true //  Важно! Разрешает отправку кук
}));
app.use('/api', routes);

app.use('/api/groups',groupRouter);
app.use('/api/pilots',PilotRouter);
app.use('/api/trophies',TrophiesRouter);
app.use('/api/teams',TeamsRouter);

app.use(express.static('public/images'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Что-то пошло не так!');
});

const start = async () => {
  try {
      await sequelize.authenticate();
      console.log('Соединение с базой данных успешно!');
      
      app.listen(PORT, () => {
          console.log(`Server running at http://localhost:${PORT}`);
      });
  } catch (e) {
      console.error('Ошибка при подключении к базе данных:', e);
  }
};
start();