
        let score = JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            }; 
        
        updatescore();

        function playgame(playermv){
            const compmv = pickCompmove();
            let res = '';
            if(playermv === 'Scissors'){
                if(compmv === 'Rock') res = 'You Lose!';
                else if(compmv === 'Scissors') res = 'Tie';
                else if(compmv === 'Paper') res = 'You Win!';
            }
            else if(playermv === 'Rock'){
                if(compmv === 'Rock') res = 'Tie';
                else if(compmv === 'Scissors') res = 'You Win!';
                else if(compmv === 'Paper') res = 'You Lose!';
            }
            else if(playermv === 'Paper'){
                if(compmv === 'Rock') res = 'You Win!';
                else if(compmv === 'Scissors') res = 'You Lose!';
                else if(compmv === 'Paper') res = 'Tie';
            }
            if(res === 'You Win!') score.wins++;
            else if(res === 'You Lose!') score.losses++;
            else if(res === 'Tie') score.ties++;

            localStorage.setItem('score',JSON.stringify(score));

            updatescore();

            document.querySelector('.js-result').innerHTML = res;
            document.querySelector('.js-move').innerHTML = `
      You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/${playermv.toLowerCase()}-emoji.png" class="icons">
      <img src="https://supersimple.dev/projects/rock-paper-scissors/images/${compmv.toLowerCase()}-emoji.png" class="icons"> Computer`;
 
        }

        function updatescore(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function pickCompmove(){ 
            const randnum = Math.random(); 
            let compmv = '';
            if(randnum >= 0 && randnum < 1/3){ compmv = 'Rock';}
            else if(randnum >= 1/3 && randnum < 2/3){ compmv  = 'Paper';}
            else if(randnum >= 2/3 && randnum <1){ compmv = 'Scissors';}
            return compmv;
        }