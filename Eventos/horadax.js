function actualizarFechaHora(){
const ahora = new Date();
// Días y meses abreviados
const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const meses = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"];
const dia = dias[ahora.getDay()];
const fecha = ahora.getDate().toString().padStart(2,'0');
const mes = meses[ahora.getMonth()];
const anio = ahora.getFullYear();
// Formato final
const fechaFinal = `${dia}, ${fecha}. ${mes} ${anio}`;
// Hora
const hora = ahora.toLocaleTimeString("es-CO",{
timeZone:"America/Bogota",
hour12:false,
hour:"2-digit",
minute:"2-digit",
second:"2-digit"});
document.getElementById("fecha").textContent = fechaFinal;
document.getElementById("hora").textContent = hora;}
setInterval(actualizarFechaHora,1000);
actualizarFechaHora();

