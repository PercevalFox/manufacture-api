const app = require('./app');

const PORT = process.env.PORT || 3081;

app.listen(PORT, () => {
  console.log(`API de la manufacture sur le port ${PORT}`);
});
