alert('Grundschulmathe')

const randomNumber = (max) => {return Math.floor(Math.random() * (max) + 1)}

rightAnswers = 0

const calculation = (maxA, maxB, operator) => {
    for(i = 0; i < 5; i++){
        const a = randomNumber(maxA)
        const b = randomNumber(maxB)
        
        let result = prompt(`Wieviel ist ${a} ${operator} ${b}?`);
        
        result = parseInt(result, 10);
        
        if(result === a $operator b){
            rightAnswers++
            alert(`Richtig ${rightAnswers}/5`)
            
        }else{
            alert(`Falsch ${rightAnswers}/5`)
        }
    }

}



if(rightAnswers > 3){
    rightAnswers = 0
    for(i = 0; i < 5; i++){
        const a = randomNumber(20)
        const b = randomNumber(a)

        
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
