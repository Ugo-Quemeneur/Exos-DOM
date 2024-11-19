	// afficher le texte de la balise ayant l'id 'titre2'
	// afficher le nombre de balises ayant la classe 'titre'
	// afficher le texte de toutes les balises ayant la classe 'titre'
	// afficher le texte de toutes les balises 'li'
// let but1 = getElementById('dom')
// let but2 = getElementById('dom_modif')
// let but3 = getElementById('style')
// let enume = getElementById('liste')
// let titre1 = getElementById('titre1')
// let titre2 = getElementById('titre2')
// let txt = getElementById('paragraphe')
// let i = 0;

// if (i == 0){
// alert(titre2);
// }


// Lire le DOM 
let titres = document.getElementsByClassName('titre');
let textes = Array.from(titres).map(titre => titre.innerText).join(', ');
let lis = document.getElementsByTagName('li');
let textes1 = Array.from(lis).map(li => li.innerText).join(', ');
let message = document.getElementById('titre2').innerText + "\n" + document.getElementsByClassName('titre').length + textes + textes1;
document.getElementById('dom').addEventListener('click', function() {
    alert(message);
});

// Modifier le DOM 
let titre2Text = document.getElementById('titre2').innerText;
let nombreTitres = document.getElementsByClassName('titre').length;
let titres1 = document.getElementsByClassName('titre');
let textesTitres = Array.from(titres1).map(titre => titre.innerText).join(', ');
let list = document.getElementsByTagName('li');
let textesLis = Array.from(list).map(li => li.innerText).join(', ');
let message1 = `Texte de 'titre2': ${titre2Text} + "\n" + Nombre de 'titre': ${nombreTitres} + "\n" + Texte de toutes les 'titre': ${textesTitres} + "\n" + Texte de toutes les 'li': ${textesLis}`;

document.getElementById('dom_modif').addEventListener('click', function h() {
    console.log('Bouton "Afficher toutes les informations" cliqué');
    alert(message);
});

let titres2 = document.getElementsByClassName('titre');
let lisa = document.getElementsByTagName('li');

document.getElementById('dom_modif').addEventListener('click', function p() {
    document.getElementById('titre2').innerText = 'Bienvenue';
    
    if (titres2.length > 0) {
        titres2[0].innerText = 'Exo JS';
    }
    document.getElementById('paragraphe').innerText = 'Voici quelques fonctions exécutées en javascript.';

    Array.from(lisa).forEach((li, index) => {
        li.innerText = `Liste ${index + 1}`;
    });
});

// Modifier le style 

