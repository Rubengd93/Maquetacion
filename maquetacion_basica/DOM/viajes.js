
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
    printObject.style.padding = "20px";

    comparation.forEach(print => {

        printObject.innerHTML += `
        <div>Nombre: ${print.nombre} <br>
        Origen: ${print.origen}<br>
        Destino: ${print.destino}<br>
        NºPers: ${print.numeroPersonas}<br>
        Ida: ${print.fechaIda}<br>
        Vuelta: ${print.fechaVuelta}<br>
        </div>
        `;

    });

}


