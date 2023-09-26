const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const seletorFusos = document.getElementById('seletor-fusos')

function atualizarRelogio() {

    const fusoSelecionado = seletorFusos.value;
    const dateToday = new Date();
    const horaAtual = new Date(dateToday.toLocaleString('en-US', { timeZone: fusoSelecionado }));

    let hora = horaAtual.getHours();
    let min = horaAtual.getMinutes();
    let seconds = horaAtual.getSeconds();

    if (hora < 10) hora = '0' + hora;
    if (min < 10) min = '0' + min;
    if (seconds < 10) seconds = '0' + seconds;

    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = seconds;

}

setInterval(atualizarRelogio, 1000); // Atualize o relógio a cada segundo

atualizarRelogio(); // Atualize imediatamente ao carregar a página
