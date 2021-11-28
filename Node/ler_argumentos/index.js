// Passaremos um argumento chamado nome


// Aqui pega-se apenas o argumento com o nome
const args = process.argv.slice(2)


//Aqui pegaremos apenas o nome do array
const nome = args[0].split('=')[1]

console.log(nome)