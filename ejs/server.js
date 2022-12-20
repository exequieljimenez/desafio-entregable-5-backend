const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'))

app.set("view engine", "ejs");
app.set("views", "./views");

const productos = [{id: 1, titulo: "superunknown", banda: "soundgarden", anio: 1994, tapa: "https://i.discogs.com/lFAGK_chTYoTOgODCiCBmuxWXEH3zpefxqE9kXbvvHI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwOTM0/OC0xMTUwNTY3MjY2/LmpwZWc.jpeg"}, {id: 2, titulo: "ten", banda: "pearl jam", anio: 1991, tapa: "https://c-fa.cdn.smule.com/rs-s24/arr/e7/53/533871cf-5fd1-43d8-a439-0a1f84916576.jpg"}, {id: 3, titulo: "dirt", banda: "alice in chains", anio: 1992, tapa: "https://c-fa.cdn.smule.com/rs-s24/arr/74/43/b9c9b4a0-c594-46c6-aa53-57f329ac07f0.jpg"}]

app.get('/productos', (req, res) => {
    res.render('pages/lista', {productos})
})

app.get('/', (req, res) => {
    res.render('pages/formulario', {productos})
})

app.post('/', (req, res) => {
    const producto = req.body;
    const id = productos.length + 1;
    const nuevoProducto = {id, ...producto};
    productos.push(nuevoProducto)
    res.redirect('/')
})

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${server.address().port}`)
});

server.on('error', (error) => console.log(`An error occured on server ${error.message}`))