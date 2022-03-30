
// Head con el token de autorizacion para hacer un recuest de la api y la url principal que estaremos usando

const head = {
    "Accept": "aplication/jason",
    "Authorization": "Bearer DZPD3yrWo3FW9aAqH-dt"
}

const url = "https://the-one-api.dev/v2/quote"

// Funcion para tener nueva quote 
const getquote = () => {
    let num = Math.floor(Math.random()*1000 );
    console.log(num)
    fetch(url, {
        headers: head
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var newQute = data.docs[num];
        const url2 = `https://the-one-api.dev/v2/character?_id=${newQute.character}`
        fetch(url2, {
            headers: head
        })
        .then(res => res.json())
        .then(data =>{
            setQuote(newQute.dialog, data.docs[0].name);
            
        })

    })
}

// Funcione de escritura para desplegar la informacion
const setQuote = (dialog, author) => {
    const quote = document.getElementById("quote");
    quote.innerHTML = dialog
    const character = document.getElementById("charater");
    character.innerHTML = author
}




