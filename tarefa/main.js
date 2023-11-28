$(function () {
  let arrayTask = [];

  function addList(e) {
    e.preventDefault();
    const newTask = $("#input-task").val();
    arrayTask.push(newTask);

    $(`<li id="item-${arrayTask.indexOf(newTask)}">${newTask}</li>`).appendTo(
      "ul"
    );
    $("#input-task").val("");
  }

  $("form").on("submit", addList);

  function findID() {
    const idItem = $(event.target).attr("id");
    return idItem;
  }

  function actualTextDecorationPropriety(idItem) {
    const proprietyOfItem = $(`#${idItem}`).css("text-decoration");
    let arrayPropriety = proprietyOfItem.split(" ");
    return arrayPropriety;
  }

  function verifyTextDecoration(actualTextDecorationTask) {
    if (actualTextDecorationTask[0] == "line-through") {
      return true;
    } else {
      return false;
    }
  }

  function drawLine() {
    const idItem = findID();
    const actualTextDecorationTask = actualTextDecorationPropriety(idItem);
    const boolTextDecorationTask = verifyTextDecoration(
      actualTextDecorationTask
    );
    if (boolTextDecorationTask == true) {
      $(`#${idItem}`).css("text-decoration", "none");
    } else {
      $(`#${idItem}`).css("text-decoration", "line-through");
    }
  }

  $("ul").on("click", drawLine);
});
