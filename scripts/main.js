//CARREGAR O ELEMENTOS

gameScreen = window.document.body.getElementsByClassName('game')[0];

//CARREGAR O ELEMENTOS: Carregar home (pagina inicial)

let loadingHome = [
    'home', 'textHome'
];

//CARREGAR O ELEMENTOS: Carregar cenario

let loadingScenery = [
    'gameBackground','ground'
];

//CARREGAR O ELEMENTOS: Carregar personagem 

let loadingCharacter = [
    'sonic',
]

let loadingVectorElements = [loadingScenery, loadingCharacter, loadingHome];

$(document).ready(function LoadingGameElements() {

    for (let i = 0; i < loadingVectorElements.length; i++) {

        let selectedElementVector = loadingVectorElements[i];

        for (let j = 0; j < selectedElementVector.length; j++) {

            const element = document.createElement('div');
            element.className = selectedElementVector[j];
            gameScreen.appendChild(element);

            console.log('Elemento ' + selectedElementVector[j] + ' carregado com sucesso. ');

        }


    }


});

//GERADOR DE TERRENO

// Gerador de terreno mecanica

$(document).ready(function groundGenerator() {
    let groundLimit = gameScreen.getElementsByClassName('ground')[0];
    let spaceForNextElement  = 0;

    setInterval(
        () => {
            // Cria uma nova div
            let groundElement = document.createElement('div');

            groundElement.className = 'floor';
            groundElement.style.bottom = Math.floor(Math.random() * -3.5) + '%';

            spaceForNextElement += 4.65;
            groundElement.style.left = spaceForNextElement + '%';

            groundLimit.appendChild(groundElement);

            // Verifica se a div saiu da tela
        }        
        , 100);
});



// HOME: iniciar o jogo

$(document).ready(() => {
    setTimeout(() => {
        $('.home').click(() => {

            console.log('Jogo iniciado');

            $('.textHome').remove();
            $('.home').hide('slow');
            $('.chao').show();
            $('.sonic').show();

            setTimeout(() => {
                $('.home').remove();
            }, 5000);


            $(document).ready(function play() {


                console.log('deu play');

            });


        })
    }, 5000)
});



