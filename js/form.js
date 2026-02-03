function mostrarStatus(valor) {
    const display = document.getElementById("valorStatus");
    
    const status = {
        "0": "Péssimo",
        "1": "Ruim",
        "2": "Regular",
        "3": "Boa",
        "4": "Ótima"
    };
    
    if (status[valor]) {
        display.innerText = status[valor];
    }
}