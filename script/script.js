game=["Rock","Paper","Scissor"]
let humanScore=0
let cpuScore=0
function cpu_chosen(){
    return game[Math.floor(Math.random()*Math.floor(game.length))].toString();
}

function rock_clicked(){
    let para=document.getElementById("chosenValues");
    let cpu=cpu_chosen();
    para.innerHTML="You have chosen: Rock</br>CPU has chosen: "+cpu
    computeResult("Rock",cpu);
}
function paper_clicked(){
    let para=document.getElementById("chosenValues");
    let cpu=cpu_chosen();
    para.innerHTML="You have chosen: Paper</br>CPU has chosen: "+cpu
    computeResult("Paper",cpu);
}
function scissor_clicked(){
    let para=document.getElementById("chosenValues");
    let cpu=cpu_chosen();
    para.innerHTML="You have chosen: Scissor</br>CPU has chosen: "+cpu
    computeResult("Scissor",cpu);
}
function computeResult(human,cpu){
    let win=''
    switch(human){
        case "Rock":
            switch(cpu){
                case "Rock":
                    win="It's a tie";
                    break;
                case "Paper":
                    win="CPU Won";
                    cpuScore++;
                    break;
                case "Scissor":
                    win="You Won";
                    humanScore++;
                    break;
            }
            break;
            case "Paper":
                switch(cpu){
                    case "Rock":
                        win="You Won";
                        humanScore++;
                        break;
                    case "Paper":
                        win="It's a Tie";
                        break;
                    case "Scissor":
                        win="Cpu Won";
                        cpuScore++;
                        break;
                }
                break;
                case "Scissor":
                    switch(cpu){
                        case "Rock":
                            win="CPU Won";
                            cpuScore++;
                            break;
                        case "Paper":
                            win="You Won";
                            humanScore++;
                            break;
                        case "Scissor":
                            win="It's a Tie";
                            break;
                    }
                    break;
    }
    let result=document.getElementById("finalResult");
    result.innerHTML=win;
    let scorList=document.getElementById("scoreList");
    scorList.innerHTML="<b>Score</b>: You: "+humanScore.toString()+"<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCpu: "+cpuScore.toString();

}