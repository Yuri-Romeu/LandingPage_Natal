AOS.init();

const dia = document.getElementById('day');
const hora = document.getElementById('hours');
const minuto = document.getElementById('mins');
const segundo = document.getElementById('secs');

const anoAtual = new Date();

const dataDoEvento = new Date(`Dec 25, ${anoAtual.getFullYear()} 00:00:00`);
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(() => {
     const agora = new Date();
     const timeStampAtual = agora.getTime();

     const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

     const diasEmMs = 1000 * 60 * 60 * 24;
     const horasEmMs = 1000 * 60 * 60;
     const minutosEmMs = 1000 * 60;

     const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
     const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
     const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
     const segundosAteOEVento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

     dia.innerHTML = diasAteOEvento;
     hora.innerHTML = horasAteOEvento;
     minuto.innerHTML = minutosAteOEvento;
     segundo.innerHTML = segundosAteOEVento;

     if (distanciaAteOEvento < 0) {
          clearInterval(contaTempo);
          dia.innerHTML = '0';
          hora.innerHTML = '0';
          minuto.innerHTML = '0';
          segundo.innerHTML = '0';

          document.querySelector('.header__content__text__text').innerHTML =
               'O natal acabou :( aguarde o proximo ano';
     }
}, 1000);
