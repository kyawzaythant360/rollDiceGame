const player1 = [];
const player2 = [];

const rollDice = ()=>{
    const numOfDice = document.querySelector("#numOfDice").value;
    const diceResult = document.querySelector("#diceResult");
    const diceImages = document.querySelector("#diceImages");
    const images = [];

    for(let i=0;i< numOfDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        player1.push(value);
    }


    for(let i=0;i< numOfDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        player2.push(value);
    }   

    const p1 = Object.values(player1);
    const p2 = Object.values(player2);
    
    let p1_sum = 0;
    let p2_sum = 0;
    
    for (const i of p1) {
        p1_sum += i;
    }
    
    for (const i of p2) {
        p2_sum += i;
    }
    
    const winner = p1_sum > p2_sum ? console.log("Player 1 is the winner") :
    p2_sum > p1_sum ? console.log("Player 2 is the winner") :
    console.log("It's a Tie");

    
}

const restart = () =>{
    player1.slice(0,player1.length)
    player2.slice(0,player1.length)
    console.log(player1);
    console.log(player2);
}

