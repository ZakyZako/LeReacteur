console.log("bienvenue dans le gestionnaire de contact");
const contact = [
  { nom: "Lesimple", prenom: "Alex" },
  { nom: "Raf", prenom: "Sam" }
];
(function start() {
  console.log("1 : Lister les contact");
  console.log("2 : Ajouter un contact");
  console.log("0 : Quitter");
  const choix = prompt("Choissisez une option");
  console.log(choix);

  if (choix === "1") {
    console.log("Voici la liste de tout vos contact :");
    contact.forEach(function(element) {
      console.log(`nom : ${element.nom}  Prenom : ${element.prenom}`);
    });
    start();
  } else if (choix === "2") {
    const nom = prompt("Entrez le nom du nouveau contact");
    const prenom = prompt("Entrez le prenom du nouveau contact");
    contact.push({ nom, prenom });
    console.log(`Vous avez bien ajouté un nouveau contact ${nom} ${prenom}`);
    start();
  } else if (choix === "0") {
    console.log("Aurevoir !!!");
    return;
  } else {
    start();
    console.log("error");
  }
})();
