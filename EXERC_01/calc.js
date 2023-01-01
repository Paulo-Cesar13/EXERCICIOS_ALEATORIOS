var n1 = document.querySelector('#nota1');
var n2 = document.querySelector('#nota2');
var n3 = document.querySelector('#nota3');
var n4 = document.querySelector('#nota4');
var vmedia = 4;
var media = document.querySelector('span');

function soma() {
    media.innerHTML = (parseInt(n1.value) + parseInt(n2.value) + parseInt(n3.value) + parseInt(n4.value)) / (parseInt(vmedia));
}



