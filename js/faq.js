var prozor;
opn = document.getElementsByClassName("dugme")[0]
opn.addEventListener('click', openWin);

cls = document.getElementsByClassName("close")[0]
cls.addEventListener('click', closeWin);

function openWin() {
    var text;
    text = "<p>E-mail: " + document.getElementsByClassName("email")[0].value + "</p><p>Pitanje: "
     + document.getElementsByClassName("pitanje")[0].value;
  prozor = window.open("", "myWindow", "width=400,height=200, top=100,left=500, color:red");
  prozor.document.write("<p><b>Thanks! We will reply you soon:  </b></p>" + text);
}

function closeWin() {
  prozor.close();
}