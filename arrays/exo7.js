/*
  Ecrire une fonction "splitStr" qui, d'où son nom,
  sépare une chaine de caractères sur une occurence donnée,
  et renvoie un tableau contenant le résultat de la séparation des données.
  
  Prototype:
      arr splitStr(str, occurence);

  Fonctions interdites:
      - String.prototype.split
*/

//  écrire votre code sous ce commentaire

function splitStr(str, occurence) {
  result = [];
  strTemp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != occurence) {
      strTemp += str[i] 
    } else {
      result.push(strTemp);
      strTemp = "";
    }
    if (i === str.length-1) {
      result.push(strTemp);
    }
  }
  return result;
};


/*
  Test 1
  Résultat attendu : ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]
*/
splitStr("Bonjour comment tu vas ? ça va merci.", " ");

/*
  Test 2
  Résultat attendu : ["06", "20", "42", "18", "54"]
*/
splitStr("06-20-42-18-54", "-");

/* DO NOT TOUCH */
module.exports = {
  splitStr: splitStr
}
