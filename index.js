
const head = {
    "Accept": "aplication/jason",
    "Authorization": "Bearer DZPD3yrWo3FW9aAqH-dt"
}

const url = "https://the-one-api.dev/v2/quote"


const getquote = () => {
    let num = Math.floor(Math.random()*1000 );
    console.log(num)
    fetch(url, {
        headers: head
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var newQute = data.docs[num]
        console.log(newQute.dialog)
        console.log(newQute.character)
        setQuote(newQute.dialog);
        const url2 = `https://the-one-api.dev/v2/character?_id=${newQute.character}`
        fetch(url2, {
            headers: head
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data.docs[0].name)
            setCharacter(data.docs[0].name)
        })

    })
}
const setQuote = (text) => {
    const quote = document.getElementById("quote");
    quote.innerHTML = text
}
const setCharacter = (text) => {
    const character = document.getElementById("charater");
    character.innerHTML = text
}
  


getquote();
