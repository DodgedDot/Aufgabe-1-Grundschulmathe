alert('Grundschulmathe')

rightAnswers = 0

for(i = 0; i < 5; i++){
    const a = random20()
    const b = random20()
    
    let result = prompt(`Wieviel ist ${a} + ${b}?`);
    
    result = parseInt(result, 10);
    
    if(result === a + b){
        rightAnswers++
        alert(`Richtig ${rightAnswers}/5`)
        
    }else{
        alert(`Falsch ${rightAnswers}/5`)
    }
}
