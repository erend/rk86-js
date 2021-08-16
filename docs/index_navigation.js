function keyboard_navigation() {
  // document.getElementById("first").focus();
  const buttons = document.getElementsByClassName("item");
  let active = 0;

  buttons.item(active).focus();
console.log('buttons', buttons);
console.log('active', buttons.item(active));
  document.onkeydown = event => {
    const keyCode = event.keyCode;
    
    console.log('key', keyCode, event.code, event.key);

    if (keyCode == 38 && actve > 0) {      
      active = active - 1;

    }
    if (keyCode == 40 && active < buttons.length) {      
      active = active + 1;
    }

    buttons.item(active).focus();

    // if (keyCode == 38) {      
    //   document.getElementsByClassName("item").previousElementSibling.focus();

    // }
    // if (keyCode == 40) {      
    //   document.getElementsByClassName("item").previousElementSibling.focus();
    // }
  }
}