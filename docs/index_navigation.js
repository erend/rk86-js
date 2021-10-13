function list_keyboard_navigation() {
  const buttons = document.getElementsByClassName("item");
  let active = 0;

  buttons.item(active).focus();

  document.onkeydown = event => {
    const keyCode = event.keyCode;
    if (keyCode == 38 && active > 0) {      
      active = active - 1;
    }
    if (keyCode == 40 && buttons.length > 1 && active < buttons.length) {      
      active = active + 1;
    }
    if (keyCode == 27) {
      console.log('esc', window.location);
      window.location.assign('http://127.0.0.1:8000/');
    }

    buttons.item(active).focus();
  }
}

function fill_brackets() {
  const bracketsBlock = document.getElementByClassName("brackets");
  
  let brackets = '';
  for (let i = 0; i < 19; i++) {
    brackets = `${brackets}()`;    
  }
  console.log('brackets', bracketsBlock, brackets);
  bracketsBlock.innerHTML = brackets;
}

function combine_navigation() {
  list_keyboard_navigation();
  fill_brackets();
}