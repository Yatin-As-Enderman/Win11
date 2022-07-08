function rufusStatus() {
    const rufus = document.getElementById('rufus_crash_shellwinclassic_runmode-invoker');
    rufus.classList.toggle('active');
}

function menuStatus() {
    const menu = document.getElementById('_uwpshell_StartMenuExperience');
    menu.classList.toggle('active');
}

function rufusProgressbarStart() {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("rufus-status-pBarMain");
      var width = 1;
      var id = setInterval(frame, 0.1);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
