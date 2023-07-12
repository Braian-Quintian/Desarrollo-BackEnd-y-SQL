import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import express from 'express';
import dotenv from 'dotenv';
import bodegasRouter from '../routers/bodegas.js';
import productosRouter from '../routers/produtos.js';
import inventariosRouter from '../routers/inventarios.js';
import trasladarRouter from '../routers/trasladar.js';
import { handleInternalServerError, handleForbiddenError } from '../errors/errors.js';
import { user } from '../controller/user.js';

dotenv.config();
const { MY_CONFIG } = process.env;
const { port, hostname } = JSON.parse(MY_CONFIG);
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    try {
        let data = plainToClass(user, req.body, { excludeExtraneousValues: true });
        console.log(data);
        res.send();
    }catch (error) {
        res.send(error);
    }
});

// Middleware para verificar la autenticación del usuario
function authenticate(req, res, next) {
    const isAuthenticated = true; // Lógica de autenticación aquí
    if (!isAuthenticated) {
        return res.redirect('/login');
    }
    next();
}

// Middleware para verificar los permisos del usuario
function authorize(req, res, next) {
    const hasPermission = true; // Lógica de verificación de permisos aquí
    if (!hasPermission) {
        return handleForbiddenError(res);
    }
    next();
}

app.use('/bodegas', authenticate, authorize, bodegasRouter);
app.use('/productos', authenticate, authorize, productosRouter);
app.use('/inventarios', authenticate, authorize, inventariosRouter);
app.use('/trasladar', authenticate, authorize, trasladarRouter);
app.use((err, req, res, next) => {
    handleInternalServerError(err, res);
});

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`);
});