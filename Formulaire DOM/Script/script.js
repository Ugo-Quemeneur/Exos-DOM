let sen = getElementById("send")
let sup = getElementById("delete")

function checkSend(sen_, sup_) {
    if (sen_ == true) {
        alert("Votre formulaire a bien été envoyé");
        return true;
    }
    else if (sup_ == true) {

        return false; // do not submit the form
    }
}
let res = checkSend(sen,sup);

// function checkDelete(sub) {
//     if (sub == true) {
        
//         return true;
//     }
//     else {
//         return false; // do not submit the form
//     }
// }


let voila =  new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[az0-9])?");
let verif = voila.test(getElementById("mai"));

