o vite é um template,
que traz o build da sua aplicação,
faz a minificação igual o babel, webpack,
traz o suporte ao typescript e jsx e etc.

cuidado com o git restore . depois de dar git add . pois voce perde tudo as alterações

O React é uma biblioteca para criação de interfaces de usuário
no React tudo é componentes
componentes são funções que retornam HTML
são criados para isolar uma parte do nosso código
ou fazer com que algo que se repete muito na nossa aplicação 
seja mais fácil de reaproveitar ou fazer manutenção

Componente: Reaproveitar / Isolar
Propriedade: Uma informação enviada pra modificar um componente visual ou comportamentalmente

o tailwindcss usa os estilos inline no html, se você não gosta de usar assim tem outras formas.

biblioteca de icones -> phosphoricons

no react o map precisa de uma key obrigatória

no react tudo é em camelCase

*Imperativa 
você dá as instruçõees passo a passo do que é preciso fazer

*Declarativa
cria uma condição e reage a ela quando ela for verdadeira ou falsa

no react sempre vamos trabalhar da forma declarativa

estados são variáveis monitoradas pelo react

radix para deixar a aplicação com mais acessibilidade (usado normalmente para modais)

o portal pode ser mostrado em qualquer parte da aplicação

os componentes do radix não tem estilização própria então vamos usar o tailwindcss

_____________________________________________________________________________________

fetch API - função nativa dos browsers fetch('http://localhost:)

vamos usar o axios para manipular as requisições http, pois diminui a quantidade de códigos

o useEffect é uma função do react que lida com efeitos colaterais

hack = se você deixar o parâmetro [] ela executa só uma vez no momento que o componente é exibido a primeira vez,
então usamos esse hack para fazer métodos http com axios dentro do componente react