/**
 * Created by peter.maunatlala on 2017/11/28.
 */
var wsURI = "ws://" + document.location.host + document.location.pathname + "search";
var socket = new WebSocket(wsURI);

socket.onmessage = function(evt) {
    writeToPageContainer(evt);
}

function writeToPageContainer(evt) {
    var w = document.createElement("w");
    w.innerHTML = "Socket Output Message : " + evt.data;
    var container = document.getElementById("container");
    container.setAttribute("class","servermessage");
    container.appendChild(w);
}

function send() {
    var error = document.getElementById("error_info");
    var input = document.getElementById("message");

    if(input.value == ""){
        error.style.display='block';
        return
    }

    socket.send(input.value);
    input.value = "";
    error.style.display='none';
}

function returnPage(title) {

    if(title == "Sony"){
        return "products/televisions/sony.html";
    }

    if(title == "Samsung"){
        return "products/televisions/samsung.html";
    }

    if(title == "LG"){
        return "products/televisions/lg.html";
    }

    if(title == "Hisense"){
        return "products/televisions/hisense.html";
    }
}

function loadProductPage(title){
     url = "";
    var nestedDiv = document.createElement("div");
    var newIframe = document.createElement("iframe");
    var mainContainer = document.getElementById("container");
    mainContainer.innerHTML = "";
    nestedDiv.innerHTML = "";
    newIframe.innerHTML = "";

    url = returnPage(title);

    nestedDiv.id = url;

    newIframe.src = url;
    newIframe.style.border = '0';
    nestedDiv.appendChild(newIframe);

    mainContainer.appendChild(nestedDiv);
    document.getElementById("socket_driver").style.display='block';
}
