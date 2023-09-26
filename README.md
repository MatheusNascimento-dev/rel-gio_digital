## Documentação do Relógio Digital
Este é um projeto de relógio digital desenvolvido em HTML, CSS e JavaScript que exibe a hora em fusos horários diferentes selecionados pelo usuário. Abaixo, você encontrará informações sobre como o código está estruturado, suas funcionalidades e como usá-lo.
Espero que esta documentação ajude a entender o funcionamento deste projeto de relógio digital. Sinta-se à vontade para personalizar, aprimorar e compartilhar este projeto conforme suas necessidades. Se tiver alguma dúvida ou precisar de assistência adicional, não hesite em entrar em contato com o autor.

## Descrição
Este projeto consiste em um relógio digital que permite ao usuário escolher um fuso horário a partir de uma lista suspensa. O relógio exibirá a hora atual com base no fuso horário selecionado. A página da web tem um design responsivo para se adaptar a diferentes tamanhos de tela.

## Imagem do Projeto

![image](https://github.com/MatheusNascimento-dev/relogio_digital/assets/141882739/f86fc3bd-92c8-4510-b7b0-a64c3c01e572)

## Estrutura do Código
O código é dividido em três partes principais: HTML, CSS e JavaScript.

(`index.html`):
O arquivo HTML define a estrutura básica da página.
Ele inclui elementos para exibir o relógio digital e um seletor de fusos horários.
O seletor de fusos horários é uma lista suspensa (`<select>`) preenchida com opções de diferentes fusos horários.
O JavaScript é importado no final do arquivo usando `<script>` com o atributo defer para garantir que o código JavaScript seja executado após o carregamento do DOM.
<br><br>
(`style.css`):
O arquivo CSS fornece estilos visuais para a página.
Ele define a aparência do relógio digital, do seletor de fusos horários e das várias configurações de layout responsivo para diferentes tamanhos de tela.
<br><br>
(`script.js`): 
O arquivo JavaScript contém o código que faz o relógio funcionar.<br>
Ele seleciona os elementos HTML relevantes usando o document.getElementById.<br>
Define uma função atualizarRelogio que atualiza o relógio com base no fuso horário selecionado.<br>
Usa o objeto Date para obter a hora atual no fuso horário selecionado.<br>
Atualiza os elementos de hora, minutos e segundos no DOM.<br>
O relógio é atualizado a cada segundo usando setInterval.<br>
Chama atualizarRelogio imediatamente após o carregamento da página para exibir a hora correta assim que a página for carregada.


## Como Usar
Abra o arquivo index.html em um navegador da web.
Você verá um relógio digital na tela, inicialmente definido para a hora atual no fuso horário de Greenwich (GMT).
Use o seletor de fusos horários para escolher um país ou cidade da lista suspensa.
O relógio digital será atualizado automaticamente para mostrar a hora no fuso horário selecionado.
O relógio continuará a ser atualizado a cada segundo para mostrar a hora atualizada.

## Responsividade
O projeto é responsivo e se adapta a diferentes tamanhos de tela. À medida que a largura da tela diminui, o layout do relógio e do seletor de fusos horários é ajustado para garantir uma boa experiência do usuário em dispositivos móveis e desktops.

## Autor
Matheus Nascimento

