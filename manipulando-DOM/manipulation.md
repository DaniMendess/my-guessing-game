# Element e Node

# As tags HTML, quando usadas pela DOM, podemos chamar de node (nó) ou de element (elemento)

# 1 Pegando um elemento

const h1 = document.querySelector('h1')

# Pegando varios elementos 

const links = document.querySelectorAll('a')

# Recebendo e modificando valores

(Podemos pegar qualquer valor das tags e, tambem alterar eles.)

# innerText
console.log(h1.innerText)

# innerHTML
console.log(h1 innerHTML)

# alterando o texto (ou o HTML)
h1.innertext = "Novo titulo"

# Alterando estilos

(Podemos alterar estilos ou adicionar classes em elementos)

# alterando o estilo
h1.style.backgroundColor = "red"

# adicionando classes
h1.classList.add('hide')

# removendo classes
h1.classList.remove('hide')

# alterando entre classes
h1.classList.toggle('hide')



