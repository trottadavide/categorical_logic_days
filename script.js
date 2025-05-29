
var open = false;

function change ()
{
  if (!open)
  {
    document.getElementById('sym').innerHTML='╳';
    document.getElementById('rest').style.display='block';
    pmenu.style.background = "rgba(0,0,0,0.7)";
    pmenu.style.borderBottom = "1px solid black";
  }
  else
  {
    document.getElementById('sym').innerHTML='≡';
    document.getElementById('rest').style.display='none';
    changeCss();
  }

  open = !open;
}

function changeCss ()
{
  /*  var bodyElement = document.querySelector("body");
    var menu = document.getElementById("menu");
    var pmenu = document.getElementById("pmenu");

    if (this.scrollY > window.innerHeight-100)
    {
      menu.style.background = "rgba(0,0,0,0.7)";
      menu.style.borderBottom = "1px solid black";
      pmenu.style.background = "rgba(0,0,0,0.7)";
      pmenu.style.borderBottom = "1px solid black";
    }
    else
    {
      menu.style.background = "rgba(255,255,255,0.2)";
      menu.style.borderBottom = "1px solid white";
      pmenu.style.background = "rgba(255,255,255,0.2)";
      pmenu.style.borderBottom = "1px solid white";
    } */
}
window.addEventListener("scroll", changeCss , false);
