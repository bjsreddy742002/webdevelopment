/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activeplayer=0,cscore=0,score=[0,0],die=0,t_score=0;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
t_score=prompt("its a pig game.Please Enter The End Score You Need");
t_score=(t_score==0)?100:t_score;
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(score[activeplayer]<t_score){
    die=Math.floor((Math.random()*6) +1);

    document.querySelector('.dice').style.display ='block';
    document.querySelector('.dice').src='dice-'+die+'.png';
    if(die!=1)
    {
        cscore+=die;
        document.getElementById('current-'+activeplayer).textContent=cscore;
    }
    else{
        cscore=0;
        document.getElementById('current-'+activeplayer).textContent=cscore;
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        activeplayer=(activeplayer==0)?1:0;
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');}}    
    
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    
    score[activeplayer]+=cscore;
    cscore=0;
    document.getElementById('score-'+activeplayer).textContent=score[activeplayer];
    document.getElementById('current-'+activeplayer).textContent=cscore;
    if(score[activeplayer]>=t_score)
    {
        document.querySelector('#name-'+activeplayer).textContent='WINNER!';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
    }
    else{
    document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
    activeplayer=(activeplayer==0)?1:0;
    document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');}
    
});
document.querySelector('.btn-new').addEventListener('click',function(){
    document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('#name-'+activeplayer).textContent='PLAYER '+(activeplayer+1);
document.querySelector('.player-'+activeplayer+'-panel').classList.remove('winner');
cscore=0;
activeplayer=0;
score=[0,0];
document.querySelector('.player-'+activeplayer+'-panel').classList.add('active');
t_score=prompt("its a pig game.Please Enter The End Score You Need");
t_score=(t_score==0)?100:t_score;
});
