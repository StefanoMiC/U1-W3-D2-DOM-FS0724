// DOM (Document Object Model) serve a leggere e modificare il contenuto della pagina dopo il caricamento iniziale tramite JavaScript
// potremo quindi RICAVARE un elemento esistente
// CREARE-INSERIRE/MODIFICARE/ELIMINARE elementi dalla pagina

// il processo si compone solitamente in due fasi:

// 1) SELEZIONE (DOM Traversing) - seleziono l'elemento che mi interessa utilizzare/modificare
// 2) MANIPOLAZIONE (DOM Manipulation) - modifico effettivamente l'elemento per stile/contenuto/presenza nella pagina

// _________________________________ SELEZIONE __________________________________

// Per SELEZIONARE i nostri elementi faremo SEMPRE riferimento al nostro "document",
// è un oggetto reso disponibile dal browser (rappresenta la nostra alberatura di NODI del DOM)

// il document ci rappresenta l'intera pagina!

// tutti i metodi che useremo partiranno dal document

// console.log(document);
// ci ritorna una rappresentazione fatta a TAG HTML, non è veritiera

console.dir(document); // ci visualizza l'oggetto document nelle sue proprietà

// _________________________________ SELEZIONE PER ID ____________________________

const menu = document.getElementById("inner-list");
console.dir(menu); // mi viene tornato il singolo elemento (nodo)

// _________________________________ SELEZIONE PER CLASSE _________________________

// questo metodo ritorna una COLLECTION (HTMLCollection) di elementi

const articles = document.getElementsByClassName("my-article");
// ⚠️ BISOGNA ricordarsi che gli array VANNO CICLATI per ottenere accesso agli elementi interni prima di usarli/manipolarli

// solamente in questo
console.log("FIRST ARTICLE", articles[0]);
const lastArticle = articles[articles.length - 1];
console.log("LAST ARTICLE", lastArticle);

// o in questo modo possiamo ottenere accesso al SINGOLO ELEMENTO DELLA COLLEZIONE
for (let i = 0; i < articles.length; i++) {
  console.log("ARTICLE " + (i + 1), articles[i]);
}

// _________________________________ SELEZIONE PER TAG NAME _________________________
// abbiamo sempre a che fare con una COLLECTION quindi bisogna eventualmente selezionare la prima posizione se sappiamo che di header ce n'è uno per pagina (così come main, footer, ecc...)
const headerCollection = document.getElementsByTagName("header"); // NOTA BENE: abbiamo ricevuto una collezione
console.log("HEADER COLLECTION", headerCollection);

const header = headerCollection[0]; // dobbiamo selezionare la prima e unica posizione che ha!
console.dir(header);

const articlesByTag = document.getElementsByTagName("article");
console.log("ARTICLES BY TAG", articlesByTag);

// TRASFORMARE UNA HTMLCollection in VERO ARRAY
const articlesByTagArray = Array.from(articlesByTag);
console.log(articlesByTagArray);

// questo metodo forEach ora ci è permesso perché la collection è diventata un vero array
articlesByTagArray.forEach(node => console.dir(node));

// __________________ METODI DI SELEZIONE MODERNI: querySelector / querySelectorAll _______________

// querySelector - serve a selezionare un singolo elemento tramite selettore CSS

const main = document.querySelector("main");
console.log("MAIN", main);

// nel caso di classi dovrò OBBLIGATORIAMENTE ricordarmi il punto (proprio come si farebbe la selezione in un file CSS)
const firstArticle = document.querySelector(".my-article");
console.log(firstArticle);
// querySelector torna SEMPRE IL PRIMO ELEMENTO trovato
// se non tova nulla ritorna null

const firstLiOfUl = document.querySelector("#inner-list li");
console.log("first li of selected ul", firstLiOfUl);

// querySelectorAll - ritorna tutte le occorrenze di una casistica particolare determinata da un selettore CSS semplice o più avanzato
const allLiOfUl = document.querySelectorAll("#inner-list li:nth-of-type(even)");
console.log(allLiOfUl);

const allImages = document.querySelectorAll("img");
console.log(allImages);

// RISALIRE L'ALBERATURA DI NODI: da un figlio ad un padre o più antenati

// tramite proprietà dei nodi: .parentNode
const father = menu.parentNode; // 1 livello
console.log(father);
const grandFather = menu.parentNode.parentNode; // 2 livelli
console.log(grandFather);

// tramite .closest("CSS Selector")

// const main2 = firstLiOfUl.closest("main");
const mainElement = firstLiOfUl.closest(".main-element");
// const mainElement = firstLiOfUl.parentNode.parentNode.parentNode;
console.log(mainElement);

// partire da un punto diverso rispetto al document, ricercando elementi al di sotto di uno già selezionato
const allLisFromMenu = menu.querySelectorAll("li");
console.log(allLisFromMenu);

// MANIPOLAZIONE DEGLI ELEMENTI DOPO AVERLI SELEZIONATI
const h1 = document.querySelector("h1");
console.dir(h1);
// modifica del testo di un nodo
h1.innerText = "Stefano was here...";

// modifica del contenuto

// svuoto la lista nel footer
const footerList = document.querySelector("footer ul");
console.log(footerList);

footerList.innerHTML = "";

// creo elementi tramite stringa contenente sintassi HTML

const emptyContainer = document.getElementById("empty-container");
console.log(emptyContainer);

emptyContainer.innerHTML = `<div>
                                <p>CIAO RAGAZZI... siamo a <span>lezione</span></p>
                            </div>`;

// modificare lo stile di un elemento tramite l'attributo style
h1.style.backgroundColor = "purple";
h1.style.color = "rgb(255,255,255)";

mainElement.style = "border: 1px solid blue; box-shadow: 0 10px 20px rgb( 0 0 0 / 10% )";

// modificare lo stile tramite l'applicazione di una classe
firstArticle.classList.add("bg-orange"); // aggiunge una classe che non c'era

mainElement.classList.remove("main-element"); // rimuove una classe esistente

// dopo className avremmo perso la classe my-article sull'ultimo articolo
lastArticle.className = "topogigio paperino"; // attenzione perché questo metodo rimuove tutto quello che c'era già all'interno di una classe
lastArticle.classList.add("pluto", "pippo"); // attenzione perché questo metodo rimuove tutto quello che c'era già all'interno di una classe

// ___________________________ CREARE NUOVI ELEMENTI _________________________________
// .createElement("nomeTag")

const footer = document.querySelector("footer");

// ho creato un nuovo div in memoria!
const newDiv = document.createElement("div");
newDiv.className = "footer-div";
newDiv.innerText = "Nuovo testo di questo div";

// una volta attribuiti tutti i valori che vogliamo dare a questo div possiamo inserirlo finalmente nella pagina

// con parent.appendChild(node) devo inserire il nodo del nuovo elemento
// document.body.appendChild(newDiv);

footer.appendChild(newDiv);
console.log(newDiv);

const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

newImg.style.width = "300px";
newImg.style.border = "1px solid red";

header.appendChild(newImg);
console.log(newImg);

// metodo per agganciare una funzionalità che si attiverà solo al click
header.onclick = function () {
  // metodo per rimuovere un qualsisi nodo dal DOM
  newImg.remove(); // questo lo farà scomparire completamente dall'albero dei nostri nodi (non sarà più reperibile in alcun modo)
};
