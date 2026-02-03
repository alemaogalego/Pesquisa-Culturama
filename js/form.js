function mostrarStatus(valor) {
    const display = document.getElementById("valorStatus");
    
    // Objeto de mapeamento para evitar muitos if/else
    const status = {
        "0": "Péssima",
        "1": "Ruim",
        "2": "Regular",
        "3": "Boa",
        "4": "Ótima"
    };
    
    // Atualiza o texto baseado no valor do slider
    if (status[valor]) {
        display.innerText = status[valor];
    }
}