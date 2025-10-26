const btn = document.getElementById("new-quote");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");


const quotes = [
  {
    quote: "La vie est belle",
    author: "Albert Camus",
  },
  {
    quote: "Le seul vrai voyage, ce ne serait pas d'aller vers de nouveaux paysages, mais d'avoir d'autres yeux.",
    author: "Albert Camus",
  },
  {
    quote: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",
    author: "Nelson Mandela",
  },
  {
    quote: "Je ne perds jamais. Soit je gagne, soit j'apprends.",
    author: "Nelson Mandela",
  },
  {
    quote: "Il n'y a qu'une chose qui puisse rendre un rêve impossible, c'est la peur d'échouer.",
    author: "Paulo Coelho",
  },
  {
    quote: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
    author: "Winston Churchill",
  },
  {
    quote: "Tout est possible à qui rêve, ose, travaille et n'abandonne jamais.",
    author: "Xavier Dolan",
  },
  {
    quote: "Dans la vie, on ne regrette que ce qu'on n'a pas fait.",
    author: "Jean Cocteau",
  },
  {
    quote: "Il faut toute la vie pour apprendre à vivre.",
    author: "Sénèque",
  },
  {
    quote: "On rencontre sa destinée souvent par le chemin qu'on a pris pour l'éviter.",
    author: "Jean de la Fontaine",
  },
  {
    quote: "Je pense donc je suis.",
    author: "René Descartes",
  },
  {
    quote: "Connais-toi toi-même.",
    author: "Socrate",
  },
  {
    quote: "On ne se baigne jamais deux fois dans le même fleuve.",
    author: "Héraclite",
  },
  {
    quote: "Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.",
    author: "Voltaire",
  },
  {
    quote: "Il faut manger pour vivre, et non pas vivre pour manger.",
    author: "Molière",
  },
  {
    quote: "L'homme est un animal politique.",
    author: "Aristote",
  },
  {
    quote: "Si vous voulez vivre une vie heureuse, attachez-la à un but, non pas à des personnes ou des choses.",
    author: "Albert Einstein",
  },
  {
    quote: "N'ayez pas peur de la perfection, vous ne l'atteindrez jamais.",
    author: "Salvador Dalí",
  },
  {
    quote: "Le succès est la conséquence naturelle de l'application régulière des principes basiques et fondamentaux.",
    author: "Jim Rohn",
  },
  {
    quote: "La meilleure façon de ne pas avancer, c'est de suivre une idée fixe.",
    author: "Jacques Prévert",
  },
  {
    quote: "L'enfer, c'est les autres.",
    author: "Jean-Paul Sartre",
  },
  {
    quote: "On ne peut être vraiment soi qu'aussi longtemps qu'on est seul.",
    author: "Arthur Schopenhauer",
  },
]

btn.addEventListener("click", () => {
  displayRandomQuote();
})

function displayRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[random];
  //console.log(selectedQuote.quote);
  quoteText.textContent = selectedQuote.quote;
  quoteAuthor.textContent = `"- ${selectedQuote.author}"`;
}

displayRandomQuote();