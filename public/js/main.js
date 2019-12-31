let mot = ['hello', 'Molengeek', 'coding', 'sushi', 'javascript'];

let r = Math.floor(Math.random() * mot.length);

let solution = mot[r];

solution = solution.toLowerCase();
let lettreSol = solution.split('');

let utilise = [];
let essais = 6;
let rep = [];

let trouve = document.getElementById('trouve');
let essai = document.getElementById('essai');
let membre = document.getElementsByClassName('membre');
let util = document.getElementById('utilise');
let input = document.getElementsByTagName('input')[0];
console.log(input);

// Va créer un tableau qui contiendra le mot
lettreSol.forEach(e => {
    if (e != ' ') {
        rep.push('-');
    } else {
        rep.push(' ');
    }
});

// Cache le bonhomme de base

for (let i = 0; i < membre.length; i++) {
    membre[i].classList.add('d-none');
}


// le jeu qui va boucler tant qu'on a pas la bonne réponse ou qu'on a des essais
do {
    afficher();
    input.addEventListener('keypress', event => {
        if (event.key == 'Enter') {
            let propo = event.target;
            placer(propo);
        }
    });
} while (essais > 0 && lettreSol.join('') != rep.join(''));

afficher();
if (lettreSol.join('') == rep.join('')) {
    alert('Bravo! Vous avez réussi');
} else {
    alert('Dommage! Vous avez raté');

}

// Va afficher le mot et les lettres utilisées et le nombre d'essais

function afficher() {
    trouve.innerText = rep.join(' ') + '\n';
    essai.innerText = `Nombre d'essais restant : ${essais}` + '\n';
    util.innerText = 'Lettre déjà utilisées : ' + utilise.join(' ') + '\n';

}

function placer(lettre) {
    if (lettre != '' && !utilise.includes(lettre)) {


        if (lettreSol.includes(lettre)) {
            lettreSol.forEach((e, index) => {
                if (e == lettre) {
                    rep.splice(index, 1, lettre);
                }
            });
        } else {
            essais--;
            membre[essais - 2].classList.remove('d-none');
        }
        utilise.push(lettre);
    } else {
        console.log('Vous avez déjà utilisé cette lettre.');
    }
}