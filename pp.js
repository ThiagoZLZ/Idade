const inputNome = document.querySelector(".nome");
const inputIdade = document.querySelector(".idade");
const placar = document.querySelector(".placar");
const botao = document.querySelector(".botão");

botao.addEventListener('click', calcular);

function calcular() {
    const nome = inputNome.value;
    const idade = inputIdade.value;

    if (nome === "" || idade === "") {
        alert('PREENCHA TODOS OS CAMPOS');
        return;
    }

    let mensagem = `<h3> Olá ${nome}, sua idade é ${idade}!</h3> <br>`;
    let imagem = '';

    if (idade >= 60) {
        mensagem += `<h3> Vc é muito velho </h3><br>`;
        imagem = 'imagem/muito velho.jpg';
    } else if (idade <= 59 && idade > 20) {
        mensagem += `<h3> Vc é adulto </h3><br>`;
        imagem = 'imagem/adulto.avif';
    } else if (idade <= 20) {
        mensagem += `<h3> Vc é muito jovem </h3><br>`;
        imagem = 'imagem/muito jovem.jpg';
    } 

    placar.innerHTML = mensagem + `<img class="jovem" src="${imagem}" alt="pessoa">`;

    inputNome.value = "";
    inputIdade.value = "";
}
