"use strict";
/*
* Datos de cabecera de tabla
*/
const citaHead = ["HORA","ESPECIALISTA","PACIENTE","RUT","PREVISION"]
/*
* Datos de citas
*/
const citaRayos = [
    {
        hora:"11:00",
        especialista:"Ignacio Schulz",
        paciente:"Francisca Rojas",
        rut:"9878782-1",
        prevision:"Fonasa"
    },
    {
        hora:"11:30",
        especialista:"Federico Subercaseaux",
        paciente:"Pamela Estrada",
        rut:"15345241-3",
        prevision:"Isapre"
    },
    {
        hora:"15:00",
        especialista:"Fernando Wurthz",
        paciente:"Armando Luna",
        rut:"16445345-9",
        prevision:"Isapre"
    },
    {
        hora:"15:30",
        especialista:"Ana María Godoy",
        paciente:"Manuel Godoy",
        rut:"17666419-0",
        prevision:"Fonasa"
    },
    {
        hora:"16:00",
        especialista:"Patricia Suazo",
        paciente:"Ramón Ulloa",
        rut:"14989389-K",
        prevision:"Fonasa"
    },
]
const citaTrauma = [
    {
        hora:"08:00",
        especialista:"María Paz Altuzarra",
        paciente:"Paula Sánchez",
        rut:"15554774-5",
        prevision:"Fonasa"
    },
    {
        hora:"10:00",
        especialista:"Raúl Araya",
        paciente:"Angélica Navas",
        rut:"15444147-9",
        prevision:"Isapre"
    },
    {
        hora:"10:30",
        especialista:"María Arriagada",
        paciente:"Ana Klapp",
        rut:"17879423-9",
        prevision:"Isapre"
    },
    {
        hora:"11:00",
        especialista:"Alejandro Badilla",
        paciente:"Felipe Mardones",
        rut:"15475523-6",
        prevision:"Isapre"
    },
    {
        hora:"11:30",
        especialista:"Cecilia Budnik",
        paciente:"Diego Marre",
        rut:"16554741-K",
        prevision:"Fonasa"
    },
    {
        hora:"12:00",
        especialista:"Arturo Cavagnaro",
        paciente:"Cecilia Méndez",
        rut:"9747535-8",
        prevision:"Isapre"
    },
    {
        hora:"12:30",
        especialista:"Andrés Kanacri",
        paciente:"Marcial Suazo",
        rut:"11254785-5",
        prevision:"Isapre"
    },
]
const citaDental = [
    {
        hora:"08:30",
        especialista:"Andrea Zúñiga",
        paciente:"Marcela Retamal",
        rut:"11123425-6",
        prevision:"Isapre"
    },
    {
        hora:"11:00",
        especialista:"María Paz Zañartu",
        paciente:"Angel Muñoz",
        rut:"9878789-2",
        prevision:"Isapre"
    },
    {
        hora:"11:30",
        especialista:"Scarlett Witting",
        paciente:"Mario Kast",
        rut:"7998789-5",
        prevision:"Fonasa"
    },
    {
        hora:"13:00",
        especialista:"Francisco Von Teuber",
        paciente:"Karin Fernandez",
        rut:"18887662-K",
        prevision:"Fonasa"
    },
    {
        hora:"13:30",
        especialista:"Eduardo Viñuela",
        paciente:"Hugo Sánchez",
        rut:"17665461-4",
        prevision:"Fonasa"
    },
    {
        hora:"14:00",
        especialista:"Raquel Villaseca",
        paciente:"Ana Sepúlveda",
        rut:"14441281-0",
        prevision:"Isapre"
    },
]
/*
* Constructor de cabecera de tabla
*/
function tableHeader() {                
    let citasHoy = `<table><thead><tr>`
    for(let item of citaHead){
        citasHoy += `<th>${item}</th>`
    }
    citasHoy += `<tr></thead><tbody>`
    return citasHoy
}
/*
* Constructor de tablas de citas
*/
function listaRayos(citasHoy){
    citasHoy += `<br><tr><strong>RADIOLOGÍA</strong></tr>`
    for(let item in citaRayos){
        citasHoy += 
            `<tr>
            <td>${citaRayos[item].hora}</td>
            <td>${citaRayos[item].especialista}</td>
            <td>${citaRayos[item].paciente}</td>
            <td>${citaRayos[item].rut}</td>
            <td>${citaRayos[item].prevision}</td>
            </tr>`
    }
    return citasHoy
}
function listaTrauma(citasHoy){
    citasHoy += `<br><tr><strong>TRAUMATOLOGÍA</strong></tr>`
    for(let item in citaTrauma){
        citasHoy += 
            `<tr>
            <td>${citaTrauma[item].hora}</td>
            <td>${citaTrauma[item].especialista}</td>
            <td>${citaTrauma[item].paciente}</td>
            <td>${citaTrauma[item].rut}</td>
            <td>${citaTrauma[item].prevision}</td>
            </tr>`
    }
    return citasHoy
}
function listaDental(citasHoy) {  
    citasHoy += `<br><tr><strong>DENTAL</strong></tr>`
    for(let item in citaDental){
        citasHoy += 
            `<tr>
            <td>${citaDental[item].hora}</td>
            <td>${citaDental[item].especialista}</td>
            <td>${citaDental[item].paciente}</td>
            <td>${citaDental[item].rut}</td>
            <td>${citaDental[item].prevision}</td>
            </tr>`
    }
    return citasHoy
}
/*
* Constructor de Primera y ültima cita
*/
function firstLastRayos(citasHoy){
    citasHoy += `<table><tbody>
                <tr>
                <td><strong>Primera cita: </strong></td> 
                <td>${citaRayos[0].paciente} - ${citaRayos[0].prevision}</td>
                </tr>
                <tr>
                <td><strong>Última cita: </strong></td>
                <td>${citaRayos[citaRayos.length - 1].paciente} - ${citaRayos[citaRayos.length - 1].prevision}</td>
                </tr></tbody></table>`
    return citasHoy
}
function firstLastTrauma(citasHoy){
    citasHoy += `<table><tbody>
                <tr>
                <td><strong>Primera cita: </strong></td> 
                <td>${citaTrauma[0].paciente} - ${citaTrauma[0].prevision}</td>
                </tr>
                <tr>
                <td><strong>Última cita: </strong></td>
                <td>${citaTrauma[citaTrauma.length - 1].paciente} - ${citaTrauma[citaTrauma.length - 1].prevision}</td>
                </tr></tbody></table>`
    return citasHoy
}
function firstLastDental(citasHoy){
    citasHoy += `<table><tbody>
                <tr>
                <td><strong>Primera cita: </strong></td> 
                <td>${citaDental[0].paciente} - ${citaDental[0].prevision}</td>
                </tr>
                <tr>
                <td><strong>Última cita: </strong></td>
                <td>${citaDental[citaDental.length - 1].paciente} - ${citaDental[citaDental.length - 1].prevision}</td>
                </tr></tbody></table>`
    return citasHoy
}
/*
* Mostrar listados en el HTML
*/
document.write(`<strong>Estadísticas Centro Médico Ñuñoa</strong>`)
document.write(`
                ${tableHeader()}
                ${listaRayos()}
                ${firstLastRayos()}
                `)            
document.write(`
                ${tableHeader()}   
                ${listaTrauma()}
                ${firstLastTrauma()}
                `)
document.write(`
                ${tableHeader()}
                ${listaDental()} 
                ${firstLastDental()}
                `)