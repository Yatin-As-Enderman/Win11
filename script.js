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
          elem.innerHTML = width + "%";
          rufusCompleteMsg();
        }
      }
    }
}

function rufusCompleteMsg() {
    const elem = document.getElementById("_hotBarmsg-rufus");
    elem.style.right = '10px';
    setInterval(function() {
        elem.style.right = '-300px'
    }, 10000);
}

function closeRufusMsg() {
    const elem = document.getElementById("_hotBarmsg-rufus");
    elem.style.right = '-300px'
}

function bootWindows() {
    const elem = document.getElementById('bootloader');
    elem.classList.remove('active');
    setInterval(function() {
        elem.classList.add('active');
    }, 6000);
}
