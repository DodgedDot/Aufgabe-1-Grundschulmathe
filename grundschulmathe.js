alert('Grundschulmathe')

rightAnswers = 0

const random20 = () => {return Math.floor(Math.random() * (20) + 1)}

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

if(rightAnswers > 3){
    rightAnswers = 0
    for(i = 0; i < 5; i++){
        const a = random20()
        const b = Math.floor(Math.random() * (a) + 1)

        
        let result = prompt(`Wieviel ist ${a} - ${b}?`);
        
        result = parseInt(result, 10);
        
        if(result === a - b){
            rightAnswers++
            alert(`Richtig ${rightAnswers}/5`)
            
        }else{
            alert(`Falsch ${rightAnswers}/5`)
        }
    }
}
