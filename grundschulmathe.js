alert('Grundschulmathe');

const a = random20();
const b = random20();

let result = prompt(`Wieviel ist ${a} + ${b}?`);

result = parseInt(result, 10);

if(result === a + b){
    alert('Richtig');
}else{
    alert('Falsch');
}