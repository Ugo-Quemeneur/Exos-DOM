let tab = new Array();
let val;
let i = parseInt(0);
let som = parseFloat(0);

while (val != 0) {
    val = parseFloat(window.prompt("Entrez une valeur"));
    if (val != 0) {
        tab[i] = val;
        som += val;
        i++;
    }
}
let moy = som / i;

alert("Il y a " + i +  " valeurs, la somme est : " + som + ", la moyenne est : " + moy + ".");
// alert(tab);