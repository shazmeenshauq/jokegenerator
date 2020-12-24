const no_joke = document.getElementById('no-joke');
const no_joke_p = document.getElementById('no-joke_p');
const joke_p = document.getElementById('joke');
const joke_display = document.querySelector('.joke_display');
const gif = document.getElementById('gif');


document.getElementById('btn').addEventListener('click' , generateJoke) ;


function generateJoke(){


    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'https://api.chucknorris.io/jokes/random' , true) ; 

    xhr.onload = function(){
        if(this.status === 200){


            const joke = JSON.parse(this.responseText);
          
            joke_p.innerText = joke.value;
            joke_display.style.display = 'block';
            no_joke.style.display= 'none';
            no_joke_p.style.display= 'none';

            


        }
        else{
            document.body.innerHTML = 'Uh Oh! Something Went Wrong... Error :' + this.status;
        }
    }

    xhr.send();


}


no_joke.addEventListener('click' , function(){
    no_joke_p.style.display = 'block';
})