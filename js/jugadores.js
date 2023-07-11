const cerrarSesion = () => {
  localStorage.clear();
  window.location.href = "index.html";
};

if (!localStorage.getItem("logged")) {
  window.location.href = "index.html";
}

fetch("https://639a535a3a5fbccb5264b073.mockapi.io/jugadores")
  .then((response) => response.json())
  .then((data) => {
    let jugadores = data.map(
      (jugadores) => `<div class="col-12 col-md-4 p-3 float-start">
            <div class="card" >
               <div class="img-wrapper"> 
                 <span class="numCamisetas">${jugadores.dorsal}</span>
                 <img class="imagenJugadores"src="https://julioavantt.github.io/guayerd-project-images/img/${jugadores.dorsal}.jpg" alt="${jugadores.name}">
               </div>
            <div class="card-body">
               <h5 class="card-title" >${jugadores.name}</h5>
               <p>Edad: ${jugadores.edad} años </p>
               <p>Posicion: ${jugadores.posicion} </p>
               <p>Peso: ${jugadores["stats-fisico"].peso} </p>
               <p>Altura: ${jugadores["stats-fisico"].altura}</p>
               <p>Equipo Actual: ${jugadores["equipo-actual"]} </p>
               <p>Fecha de Nacimiento: ${jugadores["fecha-nacimiento"]} </p>
            </div>
          </div>
       </div>`
    );
    let section = document.querySelector("section");
    section.innerHTML = jugadores.join().replaceAll(",", "");
  })
  .catch((error) => console.log(error));
