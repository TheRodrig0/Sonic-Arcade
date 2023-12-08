//CARREGAR O ELEMENTOS

gameScreen = window.document.body.getElementsByClassName('game')[0];

//CARREGAR O ELEMENTOS: Carregar home (pagina inicial)

let loadingHome = [
    'home', 'textHome'
];

//CARREGAR O ELEMENTOS: Carregar cenario

let loadingScenery = [
    'fundo','terreno'
];

//CARREGAR O ELEMENTOS: Carregar personagem 

let loadingCharacter = [
    'sonic',
]

let loadingVectorElements = [loadingScenery, loadingCharacter, loadingHome];

$(document).ready(function LoadingGameElements() {

    for (let i = 0; i < loadingVectorElements.length; i++) {

        let selectedElementVector = loadingElements[i];

        for (let j = 0; j < selectedElementVector.length; j++) {

            const element = document.createElement('div');
            element.className = selectedElementVector[j];
            gameScreen.appendChild(element);

            console.log('Elemento ' + selectedElementVector[j] + ' carregado com sucesso. ');

        }


    }


});