# vercel-back

## Tutorial deploy CEI

Agregar este archivo .JSON

```js
{ 
    "version": 2, 
    "builds": [{ "src": "index.js", "use": "@vercel/node" }], 
    "rewrites": [{ "source": "/(.*)", "destination": "/index.js" }] 
}
```

Ejemplo para incluir contenido estático:

```js
{ 
    "version": 2, 
    "builds": [
        { "src": "index.js", "use": "@vercel/node" },
        { "src": "public/**", "use": "@vercel/static" }
    ], 
    "rewrites": [
        { "source": "/uploads/(.*)", "destination": "/public/uploads/$1" },
        { "source": "/web/(.*)", "destination": "/public/$1" },
        { "source": "/(.*)", "destination": "/index.js" }
    ] 
}
```

## Tutorial oficial para deploy en vercel
https://vercel.com/guides/using-express-with-vercel



// Uso de CLI de VERCEL
```bash
npm i vercel -D
```

En Package.json
```js
"scripts": {
    "dev": "node index.js",
    "start": "node index.js",
    "build": "vercel",
    "deploy": "vercel --prod"
}
```

```js
{ 
    "version": 2, 
    "rewrites": [{ "source": "/(.*)", "destination": "/api" }] 
}
```

## Uso de Express con Vite

https://vercel.community/t/express-101-everything-about-deploying-your-express-app-on-vercel/4870

- Instalación de express dentro de un VITE
- Poner el script en una subcarpeta "/api"
- Crear un archivo vercel.json
