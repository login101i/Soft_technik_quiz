export const shuffledQuestions = 8;

// Decide how many question you want to see in a game.
export const numberOfQuestion = 10;
const qBank = [
  {
    question: "Przy wdrożeniu o co mam zapytać Adama?",
    answers: ["Jakie moduły zostały sprzedane", ],
    correct: "Jakie moduły zostały sprzedane",
    questionId: Math.random(),
  },
  {
    question: "Jeśli został sprzedany tylko Order Manager to co wystarczy? ",
    answers: ["Piszemy do Pytla aby założył dane do bazy danych i SQL", "Trzeba zrobić kawę", "", ""],
    correct: "Piszemy do Pytla aby założył dane do bazy danych i SQL",
    questionId: Math.random(),
  },
  {
    question: "Jesli został sprzedany oprócz OM również FC to:",
    answers: ["Trzeba założyć url, skrypty, logo Klienta", "Trzeba tylko założyć url", "", ""],
    correct: "Trzeba założyć url, skrypty, logo Klienta",
    questionId: Math.random(),
  },
  {
    question: "Kiedy potrzebne sa dane do FC i FTP",
    answers: ["Kiedy będziemy musieli powrzucać obrazki", "Kiedy chcemy wejść na 9gag.com", "", ""],
    correct: "",
    questionId: Math.random(),
  },
  {
    question: "Najważniejszą informacją jest przy zakładaniu projektu jest:",
    answers: ["Kto będzie prowadził projekt ze strony Klienta", "Kto zrobi rano kawę", "", ""],
    correct: "Kto będzie prowadził projekt ze strony Klienta",
    questionId: Math.random(),
  },
  {
    question: "Zakładanie pustej bazy danych realizujemy w programie?",
    answers: ["Heidi SQL", "My SQL", "", ""],
    correct: "Heidi SQL",
    questionId: Math.random(),
  },
  {
    question: "Plan wdrożenia obejmuje: ",
    answers: ["Tworzenie bazy pod Klienta, edutujac baze wejsciową,", "", "", ""],
    correct: "Tworzenie bazy pod Klienta, edutujac baze wejsciową",
    questionId: Math.random(),
  },
  {
    question: "Czy ustawienie nowej bazy dla Klienta to to samo co ustawienie bazy materiałowej?",
    answers: ["TAK", "NIE", "", ""],
    correct: "NIE",
    questionId: Math.random(),
  },
  {
    question: "Co to replikacja materiałów z imosa",
    answers: ["Powinno to być ustalone z Adamem przez Klienta i potwierdzone przeze mnie", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },
  {
    question: "Przed tworzeniem bazy do Klienta należy:",
    answers: ["Zrobić ANALIZĘ replikacji materiałowej", "", "", ""],
    correct: "Zrobić ANALIZĘ replikacji materiałowej",
    questionId: Math.random(),
  },
  {
    question: "Co to znaczy robić ANALIZĘ reaplikacji materiałowej?",
    answers: ["", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },
  {
    question: "----------------------Co to jest baza danych imos u Klienta/  Czemu nie nazwać tego bazą danych po prostu??",
    answers: ["Danych klienta w jego bazie imos", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },
  {
    question: "Na czym polega replikacja ?",
    answers: ["Tworzymy zapytanie, w którym pokazujemy OM z jakich folderów w imosie ma wziąć informacje.", "", "", ""],
    correct: "Tworzymy zapytanie, w którym pokazujemy OM z jakich folderów w imosie ma wziąć informacje.",
    questionId: Math.random(),
  },
  {
    question: "Co musi być sprecyzowane odnośnie folderów i replikacji?",
    answers: ["Muszą być sprecyzowane z których folderów będzie robiona ta replikacja. Klient ma przygotować folder", "", "", ""],
    correct: "Muszą być sprecyzowane z których folderów będzie robiona ta replikacja. Klient ma przygotować folder",
    questionId: Math.random(),
  },

  {
    question: "Jak już mam osobę do kontaktu od strony Klienta to?",
    answers: ["Weryfikujesz z nią ustalenia z Adamem", "Przechodzisz do działania", "", ""],
    correct: "Weryfikujesz z nią ustalenia z Adamem",
    questionId: Math.random(),
  },
  {
    question: "Czy każdy folder w imosie ma swój numer?",
    answers: ["TAK", "NIE", "", ""],
    correct: "TAK",
    questionId: Math.random(),
  },
  {
    question: "Musimy zweryfikować, czy na podstawie danych, które są w imosie jesteśmy w stanie przenieść wszystkie niezbędne do założenia funkcjonalny zasobu w OM",
    answers: ["", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },
  {
    question: "Co musi zadeklarować Klient odnośnie materiałów w OM? ",
    answers: ["Jak będą nazywać się materiały w OM oraz muszą być wpisane wymiary płyty.", "Jak będą nazywać się materiały w OM.", "", ""],
    correct: "Jak będą nazywać się materiały w OM oraz musża być wpisane wymiary płyty.",
    questionId: Math.random(),
  },
  {
    question: "Co jest bardzo ważną częścią analizy replikacji",
    answers: ["Robienie kawy przed replikacją", "Aby wszystkie materialy miały zunifikowany sposób wprowadzonych danych, żeby można było uniwersalne zapytanie zrobić.", "", ""],
    correct: "Aby wszystkie materialy miały zunifikowany sposób wprowadzonych danych, żeby można było uniwersalne zapytanie zrobić.",
    questionId: Math.random(),
  },
 
  {
    question: "Co pierwsze? Replikacja czy założenie bazy danych?",
    answers: ["Jeśli da się zrobić najpierw replikację to replikację", "Zawsze najpierw Baza Danych", "", ""],
    correct: "Jeśli da się zrobić najpierw replikację to replikację",
    questionId: Math.random(),
  },

  {
    question: "Jak działa replikacja materiałowa?",
    answers: ["", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },
  {
    question: "Co to jest płyta no grain?",
    answers: ["Płyta nie ma usłojenia", "Strzelaj", "", ""],
    correct: "Płyta nie ma usłojenia",
    questionId: Math.random(),
  },

  {
    question: "Nie daj sobie wcisnąć, że to ja mam zakładać zasoby klientów.",
    answers: ["Oczywiście", "Nie, nie to Twoja działka", "", ""],
    correct: "Oczywiście",
    questionId: Math.random(),
  },

  {
    question: "Wprowadzanie materiałów dać później i testować wdrożenie na tych dwóch założonych testowych materiałach. Why?",
    answers: ["Nie musimy czekać aż oni dorobią te materiały.", "", "", ""],
    correct: "Nie musimy czekać aż oni dorobią te materiały.",
    questionId: Math.random(),
  },

  {
    question: "Jakie rozszerzenie ma szablon pliku importu materiałów/zasobów?",
    answers: ["CSV pliki CSV", "XML", "JS", "TSX"],
    correct: "CSV pliki CSV",
    questionId: Math.random(),
  },


  {
    question: "Czemu problematyczne jest wrzucanie obrazów przy? ",
    answers: ["Duzo roboty z tym", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },

  {
    question: "W drugim punkcie .... najlepiej zrobić?",
    answers: ["Przeczytaj o co chodzi sam :)", "Kawę i to mocną", "", ""],
    correct: "Analizę produkcji i produkcję",
    questionId: Math.random(),
  },
  {
    question: "Co należy zrobić szczegóło z Klientem dot. aspektów produkcyjnych?",
    answers: ["Szczegółowo wypytać Klinta dot. aspektów produkcyjnych", "Szczegółowo wypytać Klinta dot. aspektów produkcyjnych oraz aby ŁK był obecny w tej rozmowie", "", ""],
    correct: "Szczegółowo wypytać Klinta dot. aspektów produkcyjnych oraz aby ŁK był obecny w tej rozmowie",
    questionId: Math.random(),
  },

  {
    question: "MES to ?",
    answers: ["Zakładka planowanie w OM", "", "", ""],
    correct: "Zakładka planowanie w OM",
    questionId: Math.random(),
  },
  {
    question: "IMOS to",
    answers: ["CAD, Tam gdzie robi się te projekty szafek. Olga pracuje w IMOS", "", "", ""],
    correct: "CAD, Tam gdzie robi się te projekty szafek. Olga pracuje w IMOS",
    questionId: Math.random(),
  },

  {
    question: "Na czym polegają testy kuchni?",
    answers: ["", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },

   {
    question: "Za fronty akrylowe z FC płacimy tylko za zamówiony materiał",
    answers: ["TAK", "NIE", "", ""],
    correct: "TAK",
    questionId: Math.random(),
  },
  {
    question: "Zmiennne systemowe to to samo co zmiennne tłumaczeniowe",
    answers: ["NIE", "", "", ""],
    correct: "NIE",
    questionId: Math.random(),
  },
  {
    question: `Czy Aventosy są zwizualizowane ale niedziałają jak okucia „fizyczne" `,
    answers: ["TAK", "NIE", "", ""],
    correct: "TAK",
    questionId: Math.random(),
  },
  {
    question: "Zmienne globalne wyszukujemy poprzez 'x' w programie HeidiSQL",
    answers: ["name", "value", "", ""],
    correct: "name",
    questionId: Math.random(),
  },
  {
    question: "------------",
    answers: ["", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },
  {
    question: "------------",
    answers: ["", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },
  {
    question: "------------",
    answers: ["", "", "", ""],
    correct: "",
    questionId: Math.random(),
  },



  
  
  {
    question: "",
    src: require("../assets/images/Radstal_program_exclamation_mark.png"),
    answers: [
      "",
      "",
    ],
    correct:
      "",
    questionId: Math.random(),
  },
  
];
// jak wygląda uchwyt do rury fi 160 przegugowy,
// https://www.europanels.pl/wp-content/uploads/Dwuteowniki-rownolegloscienne.jpg

export default (shuffledQuestions = numberOfQuestion) =>
  Promise.resolve(
    qBank.sort(() => 0.5 - Math.random()).slice(0, shuffledQuestions)
  );

const string = " Plaża jest super!";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const word = "plaż";
const wordCapitalized = capitalizeFirstLetter(word);

const findWordInDesc = (word) => {
  if (string.includes(word) || string.includes(wordCapitalized)) {
    console.log("Tak, jest takie słow/część słowa");
    return true;
  } else {
    console.log("Brak takiego słow/część słowa");
    return false;
  }
};
console.log(findWordInDesc(word));
