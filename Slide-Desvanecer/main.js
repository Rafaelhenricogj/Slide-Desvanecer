const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
let cont = 0;

function slide(){
    if (cont === 0){
        img1.style.opacity = '0%';
        cont++;
    } else if (cont === 1){
        img2.style.opacity = '0%';
        cont++;
    } else if (cont === 2){
        img1.style.opacity = '100%';
        img2.style.opacity = '100%';
        cont = 0;
    } else if(cont === 3){
        img1.style.opacity = '100%';
    }
}

setInterval(slide, 5000);
