const app = require("./src/app");
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Olha o onibus abre a porta ${PORT}`);
});