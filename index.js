function togglePopup() {
    document.getElementById("backgroundBlocker").classList.toggle("hidden");
    document.getElementById("textbox").classList.toggle("hidden");
    document.getElementById("blurDiv").classList.toggle("blur-filter");
    document.getElementById("NameInput").value = "";
}

const names = [];
function logIn(e) {
    const name = capitalizeFirstLetter(e.children[0].value);
    let names = localStorage.getItem("names");
    if((localStorage.getItem("names") === null)) {
        document.getElementById("logInDivMessage").innerHTML = "Du är inloggad som " + name;
        names += name + ",";
        localStorage.setItem("names", names);
    } else if(names.includes(name + ",")) {
        document.getElementById("logInDivMessage").innerHTML = "Välkommen tillbaka! Du är inloggad som " + name; 
    } else {
        document.getElementById("logInDivMessage").innerHTML = "Du är inloggad som " + name;
        names += name + ",";
        localStorage.setItem("names", names);
    }

    togglePopup();

    const logInBtn = document.getElementsByClassName("logInBtn");
    for (var i = 0; i < logInBtn.length; i++) {
        logInBtn[i].classList.toggle("hidden")
    }
    const logOutBtn = document.getElementsByClassName("logOutBtn");
    for (var i = 0; i < logOutBtn.length; i++) {
        logOutBtn[i].classList.toggle("hidden")
    }
}

function logOut() {
    document.getElementById("logInDivMessage").innerHTML = "";
    
    const logInBtn = document.getElementsByClassName("logInBtn");
    for (var i = 0; i < logInBtn.length; i++) {
        logInBtn[i].classList.toggle("hidden")
    }
    const logOutBtn = document.getElementsByClassName("logOutBtn");
    for (var i = 0; i < logOutBtn.length; i++) {
        logOutBtn[i].classList.toggle("hidden")
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}