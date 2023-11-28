$(function () {
  $("header button").on("click", function () {
    $("form").slideDown();
  });

  $("#botao-cancela").on("click", function (e) {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoImagem = $("#endereco-imagem-nova").val();
    const novoItem = $(`<li style="display:none"></li>`);

    $(`<img src="${enderecoImagem}">`).appendTo(novoItem);
    $(`
        <div class="overlay-imagem-link">
          <a href="${enderecoImagem}" target="_blank" tittle="Ver imagem em tamanho real">
            Ver imagem em tamanho real.
          </a>
        </div>
      `).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000);
    $("#endereco-imagem-nova").val("");
  });
});
