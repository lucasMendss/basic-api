// URL da API de exemplo
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const response = await fetch(apiUrl);
if (!response.ok) {
 throw new Error(`Erro HTTP! Status: ${response.status}`);
}
const dados = await response.json();
console.log(dados)

for(let dado of dados){
    console.log(dado)
}