const player1 = [];
const player2 = []; 

const rollDice = () =>{
    const numOfDice = document.querySelector("#numOfDice").value;
    const diceResult = document.querySelector("#diceResult");
    const diceResult2 = document.querySelector("#diceResult2");
    const diceImages1 = document.querySelector("#diceImages");
    const diceImages2 = document.querySelector("#diceImages2");
    const P1images = [];
    const P2images = [];

    for(let i=0;i< numOfDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        player1.push(value);
        P1images.push(`<img src="image/${value}.png" alt="Dice ${value}">`);
    }


    for(let i=0;i< numOfDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        player2.push(value);
        P2images.push(`<img src="image/${value}.png" alt="Dice ${value}">`);
    }   

    diceResult.textContent = `dice: ${player1.join(', ')}`;
    diceImages1.innerHTML = P1images.join('');

    diceResult2.textContent = `dice: ${player2.join(', ')}`;
    diceImages2.innerHTML = P2images.join('');

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
    
    setTimeout(() => {
        const winner = p1_sum > p2_sum ? alert("Player 1 is the winner") :
        p2_sum > p1_sum ? alert("Player 2 is the winner") :
        alert('Tie!');
    }, 2000);

    
}


const restart = () => {

    player1.length = 0;
    player2.length = 0;


    const diceResult = document.querySelector("#diceResult");
    const diceResult2 = document.querySelector("#diceResult2");
    const diceImages1 = document.querySelector("#diceImages");
    const diceImages2 = document.querySelector("#diceImages2");

    diceResult.textContent = "";
    diceResult2.textContent = "";
    diceImages1.innerHTML = "";
    diceImages2.innerHTML = "";
};
