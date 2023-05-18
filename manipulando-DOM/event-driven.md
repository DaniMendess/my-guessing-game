// A DOM é direcionada a eventos (Event-driven). significa que ele poderá reagir a qualquer tipo de evento relaconado

# Podemos entender em 2 fases

A ocorrência do evento e reação à ocorrência

# Eventos 

Ações que acontecem na página, site ou aplicação

- Carregamento do documento, aparição de elemento na tela 

- Modificação de propriedades da página(largura.altura,scroll)

- Cliques de mouse e digitação de teclado

- Interação com sons, imagens, videos

- Outros

# Reações 

- O sistema poderá executar reações às ações. Executar uma função sempre que determinada ação acontecer


# Exemplo 

Ao clicar em um botão, apresente em tela um elemento que estava escondido

const button = document.querySelector('button')

# Vamos registrar o evento na nossa aplicação

button.addEventListener('click', function(e)){
    console.log(e) // objeto contendo tudo sobre o evento

    document.querySelector('p').style.display ="block"
}

# addEventListener recebe 2 argumentos
# O primeio é uma String com nome do evento
# Depois , uma função callback
# que irá executar um código em reação ao evento 