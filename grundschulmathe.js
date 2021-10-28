alert('Grundschulmathe')

rightAnswers = 0

//Erstellt zufällige Zahl zwischen 1 und dem übergebenen Maximum
var randomNumber = (max) => {return Math.floor(Math.random() * (max) + 1)}

var calculation = (operator) => {
    rightAnswers = 0
    for(i = 0; i < 5; i++){
        var a = randomNumber(20)
        var b = randomNumber(20)

        //Gibt das Ergebnis der jeweiligen Rechenoperation basierend auf dem String des Rechenoperators zurück
        var operationResult = () => {switch(operator){
            case "+": 
                return a + b;
            
            case "-":
                b = randomNumber(a)
                return a - b;
        
            case "*":
                return a * b;
        
            case "/":
                return a / b - ((a%b)/b);
        
            }
        }

        //operationResult muss vor prompt aufgerufen werden, da sonst bei der Subtraktion b zu spät aktualisiert wird
        rightResult = operationResult()

        //Nutzereingabe
        let result = prompt(`Wieviel ist ${a} ${operator} ${b}?`);
        result = parseInt(result, 10);

        //Überprüfung, ob Nutzereingabe gleich dem richtigen Ergebnis, und Nutzerfeedback
        if(result === rightResult){
            rightAnswers++
            alert(`Richtig ${rightAnswers}/5`)
            
        }else{
            alert(`Falsch ${rightAnswers}/5`)

        }
    }

}

//level-1: Addition
calculation("+")

//level-2: Subtraktion
if(rightAnswers > 3){
    calculation("-")    
}

//level-3: Multiplikation
if(rightAnswers > 3){
    calculation("*")
}

//level-4: Division
if(rightAnswers > 3){
    calculation("/")
}