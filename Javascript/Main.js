const WHITEICONS='../Assets/WhiteIcons/';
const BODY=document.querySelector('body');
const DISPLAY=(Element,Data)=>{if (Element) {Element.innerHTML=Data;} else {document.querySelector('body').innerHTML=Data;}};
const ROUTE=(NEWPAGE, FUNCTION, FUNCTIONBACK)=>{sessionStorage.setItem("PreviousPage", FUNCTIONBACK);if (localStorage.getItem("Environment") === "Production") {if (NEWPAGE) {history.pushState({ data: FUNCTION() }, "", "file:///android_res/");} else {history.replaceState({ data: FUNCTION() }, "", "file:///android_res/");};} else {if (NEWPAGE) {history.pushState({ data: FUNCTION() }, "", "");} else {history.replaceState({ data: FUNCTION() }, "", "");};};window.addEventListener("popstate", function (event) {const previousPageFunction = sessionStorage.getItem("PreviousPage");if (previousPageFunction) {const func = new Function("return " + previousPageFunction)();func();};});};