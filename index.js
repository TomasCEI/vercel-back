import express from 'express';
import Router from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const NOMBRE = process.env.NOMBRE || 'Mundo';


const app = express();

app.use(express.json()); // procesa el json body para leer con req.body()
app.use(express.urlencoded({ extended: false })); // leer datos de urlEncoded de req.body()


// Nos permite acceder a los archivos de nuestro backend
app.use('/uploads', express.static('public/uploads'));

// para usar esto mejor trabajar con VITE + Express
// https://vercel.community/t/express-101-everything-about-deploying-your-express-app-on-vercel/4870
app.use('/web', express.static('public/web'));

// Rutas
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");

    const landingHTML = `
        <h1>Bienvenidos a nuestra Web de Express!</h1>
        Variables de entorno: ${NOMBRE}
    `;
    res.send(landingHTML);
})

const router = Router();
router.get('/', (req, res) => {
    res.json({ message: 'Bienvenidos a mi API!' });
});

app.use('/api/v1', router);


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}
);