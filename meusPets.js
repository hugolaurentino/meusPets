const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu", 'puta'],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let item = 0; item < usuarios.length; item++) {
    usuarios[item].pets.length === 1 ?
        console.log(`Sou ${usuarios[item].nome} e tenho ${usuarios[item].pets.length} pet`) :
        usuarios[item].pets.length > 1 ?
            console.log(`Sou ${usuarios[item].nome} e tenho ${usuarios[item].pets.length} pets`) :
            console.log(`Sou ${usuarios[item].nome} e não tenho pets`)
}