var inputNome = document.querySelector(".nome");
var inputIdade = document.querySelector(".idade");
var placar = document.querySelector(".placar");
var botao = document.querySelector(".botão");

botao.addEventListener('click', calcular)

function calcular(){
    var nome = inputNome.value;
    var idade = inputIdade.value;

    if(inputNome.value === "" || inputIdade.value === ""){
        alert('PREENCHA TODOS OS CAMPOS');
        return;
    }

    if(idade >= 60){
        placar.innerHTML = `<h3> Olá ${nome}, sua idade é ${idade}!</h3> <br>
    <h3> Vc é muito velho </h3><br>
    <img class="velho" src="imagem/muito velho.jpg" alt="pessoa velha">
    `;
    
    }if(idade <= 59){
        placar.innerHTML = `<h3> Olá ${nome}, sua idade é ${idade}!</h3> <br>
        <h3> Vc é adulto </h3><br>
        <img class="jovem" src="imagem/adulto.avif" alt="pessoa jovem">
        `;
    }if(idade <= 20){
        placar.innerHTML = `<h3> Olá ${nome}, sua idade é ${idade}!</h3> <br>
        <h3> Vc é muito jovem </h3><br>
        <img class="jovem" src="imagem/muito jovem.jpg" alt="pessoa jovem">
        `;
    }

    inputNome.value = "";
    inputIdade.value = "";

}