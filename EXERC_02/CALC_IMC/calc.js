function calcularImc() {
    var altura = (document.querySelector('#altura').value) / 100;
    var peso = document.querySelector('#peso').value;

    var imc = peso / altura ** 2;
    if(imc<18.5) {
        window.alert('Você esta Magro!!')
    } else if(imc<24.9) {
        window.alert('Você estar Normal!!')
    } else if(imc<29.9) {
        window.alert('Você esta com sobre peso!!')
    } else if(imc<39.9) {
        window.alert('Você esta com obesidade!!')
    } else if(imc>39.9) {
        window.alert('Você esta com obesidade morbida!!')
    }
}