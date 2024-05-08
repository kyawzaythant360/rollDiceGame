const player1 = [];
const player2 = []; 
const numOfDice = document.querySelector("#numOfDice").value;
let p2_sum = 0;
let p1_sum = 0;

const playerOne = () =>{
    btn.classList.add('disabled');
    const p2btn = document.getElementById("p2");
    p2btn.disabled = true;
    const diceResult = document.querySelector("#diceResult");
    const diceImages1 = document.querySelector("#diceImages"); 
    const P1images = [];
   

    for(let i=0;i< numOfDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        player1.push(value);
        P1images.push(`<img src="image/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${player1.join(', ')}`;
    diceImages1.innerHTML = P1images.join('');
    
    const p1 = Object.values(player1);
    
    
    for (const i of p1) {
        p1_sum += i;
    }
    console.log(p1_sum)
    
    
}


const playerTwo = () =>{
    const p2btn = document.getElementById("p2");
    p2btn.disabled = false;
    btn.classList.add('disabled');
    const p1btn = document.getElementById("p1");
    p1btn.disabled = true;
    const diceResult2 = document.querySelector("#diceResult2");
    const diceImages2 = document.querySelector("#diceImages2");
    const P2images = [];
    const p2 = Object.values(player2);

    for(let i=0;i< numOfDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        player2.push(value);
        P2images.push(`<img src="image/${value}.png" alt="Dice ${value}">`);
    }   

    diceResult2.textContent = `dice: ${player2.join(', ')}`;
    diceImages2.innerHTML = P2images.join('');
    

    for (const i of p2) {
        p2_sum += i;
    }
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

 const  result = () => {

        const winner = p1_sum > p2_sum ? Swal.fire("Player 1 is winner!") :
        p2_sum > p1_sum ? Swal.fire("Player 2 is winner!"):
        Swal.fire("Tie");
}
