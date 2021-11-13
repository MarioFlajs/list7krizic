//grab all
let x_text ='X';
let o_text = 'O';
let dataBoxElement = document.querySelectorAll('[data-box]');
let turn = x_text;
let textPlay = document.getElementById('textTo')
const allId = document.getElementById("one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine");
const winWin = [[0, 1, 2], [3, 4, 5],[6, 7, 8],[0, 3, 6],
    [1, 4, 7],[2, 5, 8],[0, 4, 8], [2, 4, 6]];



dataBoxElement.forEach(box => {
box.addEventListener('click', clicked, {once: true})    
});

function clicked(e) {
    const id = e.target.id;
    console.log(id); 
    if(id !== '') {
        e.target.innerText = turn; 
    };
   
    
    turn = turn === x_text ? o_text : x_text;
  
   
};

function winCom () {

    if(winWin !== allId) {
        
    }
console.log('www')
}






    








// for(const combination of winWin) {
//     
//    }

//     if(this.dataBoxElement[a] && (this.dataBoxElement[a] === this.dataBoxElement[b] && this.dataBoxElement[a] === this.dataBoxElement[c])){
        
//     }

