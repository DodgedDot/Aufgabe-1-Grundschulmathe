alert('Grundschulmathe');

const random20 = () => {return Math.floor(Math.random() * (20) + 1)}

const a = random20();
const b = random20();

let result = prompt(`Wieviel ist ${a} + ${b}?`);

result = parseInt(result, 10);

if(result === a + b){
    alert('Richtig');
}else{
    alert('Falsch');
}