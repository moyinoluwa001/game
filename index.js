const boy = document.querySelector('#demo')
boy . addEventListener('click',showmegirl)


function showmegirl(){
    boy.innerHTML='girl'
}

const come = document.querySelector('#demo1')
come . addEventListener('click',showmego)


function showmego(){
    come.innerHTML='go'
}

// const he = document.querySelector('#fof')
// he 
// 0.addEventListener('click',showmeshe )


// function showmeshe(){
//     he.innerHTML='she'
// }

// const he = document.getElementById('fof')
// he . addEventListener('click',showshe)
// function showshe(){
//     he.innerHTML='she'
// }
const wow = document.getElementById('fof')
wow.addEventListener('click', showmeshe)


function showmeshe(){
    wow.innerHTML='she'
}

const male = document.querySelector('#dod')
male . addEventListener('click',showmefemale)


function showmefemale(){
    male.innerHTML='female'
}

const you = document.querySelector('#pop')
you . addEventListener('click',showmeyour)


function showmeyour(){
    you.innerHTML='your'
}

const we = document.querySelector('#olo')
we . addEventListener('click',showmethey)


function showmethey(){
    we.innerHTML='they'
}