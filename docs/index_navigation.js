function keyboard_navigation() {
  const buttons = document.getElementsByClassName("item");
  const textBlock = document.getElementById("text");
  let active = 0;

  if (buttons.length) buttons.item(active).focus();

  document.onkeyup = event => {
    const keyCode = event.keyCode;

    if (keyCode == 38) {      
      if (buttons.length && active > 0) {      
        active = active - 1;
      } else if (textBlock) {
        textBlock.scrollBy({
          top: -50,
          behavior: 'smooth'
        });
      }
    }
    if (keyCode == 40) {      
      if (buttons.length && active < buttons.length) {      
        active = active + 1;
      } else if (textBlock) {
        textBlock.scrollBy({
          top: 50,
          behavior: 'smooth'
        });
      }
    }
    if (keyCode == 27) {
      window.location = '../index.html';
    }

    if (buttons.length) buttons.item(active).focus();
  }
}

function fill_brackets() {
  const bracketsNumber = 18;
  const bracketsBlock = document.getElementById("brackets");
  
  let brackets = '';
  for (let i = 0; i < bracketsNumber; i++) {
    brackets = `${brackets}<div class="bracket">()</div>`;    
  }

  bracketsBlock.innerHTML = brackets;

  const textBlock = document.getElementById("text");
  const heightFraction = (textBlock.scrollHeight - textBlock.clientHeight) / (bracketsNumber + 1);
  const bracketElems = document.getElementsByClassName("bracket");

  bracketElems[0].style.setProperty('--opacity', 1);

  textBlock.addEventListener('scroll', function () {    
    const position = parseInt(textBlock.scrollTop / heightFraction, 10);

    for (let i = 0; i < bracketsNumber; i++) {
      if (position < bracketsNumber) bracketElems[i].style.setProperty('--opacity', i === position ? 1 : 0);      
    }
  });
}



function about_project() {
  keyboard_navigation();
  fill_brackets();
}