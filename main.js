$(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
    arrows: false,
  });

  $(".menu-hamburger").on("click", function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000", { placeholder: "(00) 00000-0000" });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      veiculoDeInteresse: {
        required: false,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira seu nome",
      telefone: "Por favor, insira seu telefone",
      email: "Por favor, insira seu email",
      veiculoDeInteresse: "Por favor, insira um veículo de interesse",
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });

  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");
    const nomeVeiculo = $(this).parent().find("h3").text;

    $("veiculoDeInteresse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
