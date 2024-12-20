document.getElementById("login").addEventListener("submit",function(event){
    event.preventDefault();

    const name = document.getElementById("na").value;
    const email = document.getElementById("em").value;
    const password = document.getElementById("pa").value;



    if(name && email && password){
        window.open("../index.html")
    }
    else{
        window.open("../index.html")
    }
})