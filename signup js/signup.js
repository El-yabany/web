document.getElementById("signupForm").addEventListener("submit",function(event){
    event.preventDefault();

    const name = document.getElementById("na").value;
    const email = document.getElementById("em").value;
    const password = document.getElementById("pa").value;
    const Date = document.getElementById("da").value;



    if(name && email && password && Date){
        window.open("../index.html")
    }
    else{
        window.open("../index.html")
    }
})