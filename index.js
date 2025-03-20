import express from 'express';
import Router from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json()); // procesa el json body para leer con req.body()
app.use(express.urlencoded({ extended: false })); // leer datos de urlEncoded de req.body()


// Nos permite acceder a los archivos de nuestro backend
app.use('/uploads', express.static('public/uploads'));
app.use('/web', express.static('public/web'));

// Rutas
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");

    const nombre = process.env.NOMBRE || "Mundo";
    const landingHTML = `
        <h1>Bienvenidos a nuestra Web de Express!</h1>
        Variables de entorno: ${nombre}
    `;
    res.send(landingHTML);
})

const router = Router();
router.get('/', (req, res) => {
    res.json({ message: 'Bienvenidos a mi API!' });
});

app.use('/api/v1', router);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);