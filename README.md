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


## Tutorial oficial para deploy en vercel
https://vercel.com/guides/using-express-with-vercel

// Uso de CLI de VERCEL
```js
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


## Uso de Express con Vite

https://vercel.community/t/express-101-everything-about-deploying-your-express-app-on-vercel/4870