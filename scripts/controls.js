chao = [];
const ground = $('.ground');

// movimentação frente e trás

$(document).ready(() => {

    let dx = 0;
    let px = 0;

    const velocity = 1.5;

    // verificar teclas

    $(document).keydown((event) => {
        const key = event.keyCode;

        if (key === 68) {
            dx = -1;
        }

        if (key === 65) {
            dx = 1;

        }




    // iniciar animação

    function enterframe(timestamp) {

        px += dx * velocity;

        ground.css('left', px + '%');



        requestAnimationFrame(enterframe);

        // verficar teclas só que soltas

        $(document).keyup((event) => {
            const key = event.keyCode;

            if (key === 68 || key === 65) {
                dx = 0;

            }
        });
    }

    requestAnimationFrame(enterframe);
});


});


const sonic = $('.sonic');


$(document).ready(function () {
    if (sonic.length) {

        let isJumping = false;

        // Função para fazer o Sonic pular
        function jump() {

            if (!isJumping) {
                isJumping = true;

                // Ajuste da altura inicial para a posição do topo do chão

                const groundHeight = ground.height();  // Obtém a altura do chão
                let initialHeight = groundHeight - 30;

                // Resto do código para o salto

                const alturaMaxima = 60; // Altura máxima do pulo
                const duracaoPulo = 400; // Tempo de duração do pulo em milissegundos



                sonic.animate({ bottom: alturaMaxima + '%' }, {
                    duration: duracaoPulo,

                    step: function (now, fx) {
                        // Atualiza a posição vertical durante o pulo
                        sonic.css('bottom', now);
                    },
                    complete: function () {

                        // Quando o pulo terminar, volta à posição inicial
                        sonic.animate({ bottom: initialHeight }, {
                            duration: duracaoPulo,
                            step: function (now, fx) {
                                sonic.css('bottom', now);
                            },
                            complete: function () {

                                isJumping = false;
                            }
                        });
                    }
                });
            }

        }

        // Evento de tecla pressionada para iniciar o pulo (tecla W ou espaço)
        $(document).keydown(function (event) {
            if ((event.keyCode === 87 || event.keyCode === 32) && !isJumping) {
                jump();
            }
        });




    } else {
        console.log('Elemento .sonic não encontrado');
    }
});

