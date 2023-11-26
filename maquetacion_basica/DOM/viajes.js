
const dataUserTrip = [];

function recorderTrip(){
    const person = document.getElementById("name").value;
    const origen = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const numberperson = document.getElementById("numperson").value;
    const datedeparture = document.getElementById("datedeparture").value;
    const returndate = document.getElementById("returndate").value;

    const dataTrip = {
        nombre:person,
        origen: origen,
        destino: destination,
        numeroPersonas: numberperson,
        fechaIda: datedeparture,
        fechaVuelta: returndate,
    };

    dataUserTrip.push(dataTrip);
    console.log(dataUserTrip);

}


// function filterIsland() {

//     const comparation = dataUserTrip.filter((trip) => {
        
//         const condition = trip.destino.toLowerCase() === "canarias" || trip.destino.toLowerCase() === "mallorca" || trip.destino.toLowerCase() === "galicia";
//         return condition;
// });

//     console.log(comparation);
    
// }

function filterIsland() {

    const comparation = dataUserTrip.filter((trip) => {
        
        const condition = trip.destino.toLowerCase() === "canarias" || trip.destino.toLowerCase() === "mallorca" || trip.destino.toLowerCase() === "galicia";
        return condition;
        
    });


    console.log(comparation);
    

    const printObject = document.getElementById("result");

    comparation.forEach(print => {

        printObject.innerHTML += `
        <p>Nombre: ${print.nombre}</p>
        <p>Origen: ${print.origen}</p>
        <p>Destino: ${print.destino}</p>
        <p>NºPers: ${print.numeroPersonas}</p>
        <p>Ida: ${print.fechaIda}</p>
        <p>Vuelta: ${print.fechaVuelta}</p>
        `;

    });

}



function filtrarDestinos() {
  
  
    const destinosPermitidos = ['canarias', 'mallorca', 'galicia'];
    
      const destinosFiltrados = informacionSolicitada.filter(solicitud => {
        const destinoMinuscula = solicitud.destino.toLowerCase();
        return destinosPermitidos.includes(destinoMinuscula);
      });
    
      const resultadosDiv = document.getElementById('result');
    
     
    
}


