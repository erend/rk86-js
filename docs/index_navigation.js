function list_keyboard_navigation() {
  const buttons = document.getElementsByClassName("item");
  let active = 0;

  buttons.item(active).focus();

  document.onkeydown = event => {
    const keyCode = event.keyCode;

    if (keyCode == 38 && active > 0) {      
      active = active - 1;

    }
    if (keyCode == 40 && active < buttons.length) {      
      active = active + 1;
    }

    buttons.item(active).focus();
  }
}

function main_keyboard_navigation() {
  document.onkeydown = event => {
    const keyCode = event.keyCode;

    if (keyCode == 27) {
      window.history.back();
    }
  }
}