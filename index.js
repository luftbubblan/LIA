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
    if(names.includes(name + ",")) {
        document.getElementById("logInDivMessage").innerHTML = "Välkommen tillbaka! Du är inloggad som " + name; 
    } else {
        document.getElementById("logInDivMessage").innerHTML = "Du är inloggad som " + name;
        names += name + ",";
        localStorage.setItem("names", names);
    }
    togglePopup();
    document.getElementById("logOutBtn").classList.toggle("hidden");
    document.getElementById("logInBtn").classList.toggle("hidden");
    
}

function logOut() {
    document.getElementById("logInDivMessage").innerHTML = "";
    document.getElementById("logInBtn").classList.toggle("hidden");
    document.getElementById("logOutBtn").classList.toggle("hidden");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ---UNCOMMENT TO RESET LOCAL STORAGE---
// localStorage.setItem("names", "");