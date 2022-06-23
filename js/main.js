const carteleraCine=[
    {
         nombre: "Jurassic park dominion",
         genero:"accion/ciencia ficcion",
         precio:800,
         duracion:"2h 27m",
         estreno:"02/06/2022",
         id:1
    },
    {

        nombre: "lightyear",
        genero:"aventura/infantil",
        precio:800,
        duracion:"1h 45m",
        estreno:"16/06/2022",
        id:2
    },
    {
        nombre: "doctor strange multiverso",
        genero:"accion/aventura",
        duracion:"2h 06m",
        precio:500,
        estreno:"02/05/2022",
        id:3
    },
    {

        nombre: "top gun maverick",
        genero:"accion/aventura",
        duracion:"2h 11m",
        precio:600,
        estreno:"26/05/2022",
        id:4
    },
    {

        nombre: "gemelo siniestro",
        genero:"terror/suspenso",
        duracion:"1h 49m",
        estreno:"16/06/2022",
        precio:700,
        id:5
    },
    {

        nombre: "the northman",
        genero:"aventura/accion",
        duracion:"2h 17m",
        estreno:"21/04/2022",
        precio:200,
        id:6
    },
    {
        nombre: "sonic 2",
        genero:"accion/ciencia ficcion",
        duracion:"2h 2m",
        estreno:"07/04/2022",
        precio:400,
        id:7
    }
    ]

    function mostrarPeliculas(){
        for(let pelicula of carteleraCine) {
            document.querySelector("#cartelera").innerHTML+=`
                                <li class="cards">
                                <p class="card"> id: ${pelicula.id}</p>
                                 <h2 class="card"> Nombre: ${pelicula.nombre}</h2>
                                 <p class="card> genero:${pelicula.genero}<p>
                               <p class="card" > Duracion:  ${pelicula.duracion}<p>
                                <p class="card" ><strong> precio: $${pelicula.precio}</strong></p>
                                <button id="button">Agregar al Carro</button>  
                                </li>`
             
        }
    }
    mostrarPeliculas()

const button=document.querySelector("#button")
button.addEventListener("click",()=>{
    alert("hiciste click");
});

const carro=[];

function agregarAlCarrito () {
   
}

function mostrarCarrito() {

}

