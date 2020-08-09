let dialog = document.getElementById('dialog');
let buttonShowModal = document.getElementById('showModal');
let disagree = document.getElementById('disagree');
let agree = document.getElementById('agree');

  showDialog = () => {
    dialog.show();
    buttonShowModal.setAttribute("class","close");
  }

  closeDialog = () => {
    dialog.close();
    disagree.removeAttribute("class", "close");
    agree.removeAttribute("class", "close");
  }