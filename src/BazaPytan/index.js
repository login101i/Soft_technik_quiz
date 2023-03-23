export const shuffledQuestions = 20;

// Decide how many question you want to see in a game.
export const numberOfQuestion = 20;
const qBank = [
	{
		question: 'Przy wdrożeniu o co mam zapytać Adama?',
		answers: ['Jakie moduły zostały sprzedane', 'Czy kupić mleko do kuchni'],
		correct: 'Jakie moduły zostały sprzedane',
		questionId: Math.random()
	},
	{
		question: 'Jeśli został sprzedany tylko Order Manager to co wystarczy? ',
		answers: ['Piszemy do Pytla aby założył dane do bazy danych i SQL', 'Trzeba zrobić koniecznie kawę'],
		correct: 'Piszemy do Pytla aby założył dane do bazy danych i SQL',
		questionId: Math.random()
	},
	{
		question: 'Jesli został sprzedany oprócz OM również FC to:',
		answers: ['Trzeba założyć url, skrypty, logo Klienta', 'Trzeba tylko założyć url'],
		correct: 'Trzeba założyć url, skrypty, logo Klienta',
		questionId: Math.random()
	},
	{
		question: 'Co oznacza, że trzeba założyć skrypty u Klienta:',
		answers: ['To powie Ci Sławek', 'Trzeba tylko założyć skrypty i nie pytaj się.. '],
		correct: 'To powie Ci Sławek',
		questionId: Math.random()
	},
	{
		question: 'Kiedy potrzebne sa dane do FC i FTP',
		answers: ['Kiedy będziemy musieli powrzucać obrazki', 'Kiedy chcemy wejść na 9gag.com'],
		correct: 'Kiedy będziemy musieli powrzucać obrazki',
		questionId: Math.random()
	},
	{
		question: 'Najważniejszą informacją jest przy zakładaniu projektu jest:',
		answers: ['Kto będzie prowadził projekt ze strony Klienta', 'Ile jest stopni na zewnątrz'],
		correct: 'Kto będzie prowadził projekt ze strony Klienta',
		questionId: Math.random()
	},
	{
		question: 'Zakładanie pustej bazy danych realizujemy w programie?',
		answers: ['Heidi SQL', 'My SQL', 'VSC', 'ChatGTP'],
		correct: 'Heidi SQL',
		questionId: Math.random()
	},
	{
		question: 'Plan wdrożenia obejmuje: ',
		answers: ['Tworzenie bazy pod Klienta, edutujac baze wejsciową', 'Tworzenie bazy pod Klienta bazując od zera'],
		correct: 'Tworzenie bazy pod Klienta, edutujac baze wejsciową',
		questionId: Math.random()
	},
	{
		question: 'Czy ustawienie nowej bazy dla Klienta to to samo co ustawienie bazy materiałowej?',
		answers: ['TAK', 'NIE', 'NIE ale czasem tak', 'Zależy od pogody'],
		correct: 'NIE',
		questionId: Math.random()
	},
	{
		question: 'Co to replikacja materiałów z imosa',
		answers: ['Powinno to być ustalone z Adamem przez Klienta i potwierdzone przeze mnie', 'To inaczej nazwa zorzy polarnej'],
		correct: 'Powinno to być ustalone z Adamem przez Klienta i potwierdzone przeze mnie',
		questionId: Math.random()
	},
	{
		question: 'Przed tworzeniem bazy do Klienta należy:',
		answers: ['Zrobić ANALIZĘ replikacji materiałowej', 'Zrobić backup bazy danych na, której bedzie się bazować'],
		correct: 'Zrobić ANALIZĘ replikacji materiałowej',
		questionId: Math.random()
	},
	{
		question: 'Co to znaczy robić ANALIZĘ replikacji materiałowej?',
		answers: ['Odpowiedź do wpisania'],
		correct: 'Odpowiedź do wpisania',
		questionId: Math.random()
	},
	{
		question: 'Co to jest baza danych imos u Klienta/  Czemu nie nazwać tego bazą danych po prostu??',
		answers: ['To dane w jego jego bazie imos', 'Możemy nazwać to bazą danych po prostu'],
		correct: 'To dane w jego jego bazie imos',
		questionId: Math.random()
	},
	{
		question: 'Na czym polega replikacja?',
		answers: [
			'Tworzymy zapytanie, w którym pokazujemy OM z jakich folderów w imosie ma wziąć informacje.',
			'To proces dzielenia się jednokomórkowców'
		],
		correct: 'Tworzymy zapytanie, w którym pokazujemy OM z jakich folderów w imosie ma wziąć informacje.',
		questionId: Math.random()
	},
	{
		question: 'Co musi być sprecyzowane odnośnie folderów i replikacji?',
		answers: [
			'Muszą być sprecyzowane z których folderów będzie robiona ta replikacja. Klient ma przygotować folder',
			'Muszą być sprecyzowane z których folderów będzie robiona ta replikacja. Klient nie musi przygotowywać folderu'
		],
		correct: 'Muszą być sprecyzowane z których folderów będzie robiona ta replikacja. Klient ma przygotować folder',
		questionId: Math.random()
	},

	{
		question: 'Jak już mam osobę do kontaktu od strony Klienta to?',
		answers: ['Weryfikujemy z nią ustalenia z Adamem', 'Przechodzisz do działania'],
		correct: 'Weryfikujemy z nią ustalenia oraz z Adamem',
		questionId: Math.random()
	},
	{
		question: 'Czy każdy folder w imosie ma swój numer?',
		answers: ['TAK', 'NIE', 'Nie, każdy folder ma swój unikalny paramert.', 'Nie, każdy folder ma swoje unikalne id'],
		correct: 'TAK',
		questionId: Math.random()
	},
	{
		question: 'Co musimy zweryfikować przy replikacji gdy mamy już dane od Klienta?',
		answers: [
			'Musimy zweryfikować, czy na podstawie danych, które są w imosie jesteśmy w stanie przenieść wszystkie niezbędne do założenia zasobów w OM',
			'Nic, nie trzeba sprawdzać, jedziemy z koksem'
		],
		correct:
			'Musimy zweryfikować, czy na podstawie danych, które są w imosie jesteśmy w stanie przenieść wszystkie niezbędne do założenia zasobów w OM',
		questionId: Math.random()
	},
	{
		question: 'Jak weryfikujemy czy możemy przenieść wszystkie niezbędne dane z imos Klienta do założenia zasobów w OM',
		answers: ['To już tylko Sławek wie', 'Nic, nie trzeba weryfikować, jedziemy z koksem'],
		correct: 'To już tylko Sławek wie',
		questionId: Math.random()
	},
	{
		question: 'Co musi zadeklarować Klient odnośnie materiałów w OM? ',
		answers: ['Jak będą nazywać się materiały w OM oraz muszą być wpisane wymiary płyty.', 'Jak będą nazywać się materiały w OM.'],
		correct: 'Jak będą nazywać się materiały w OM oraz muszą być wpisane wymiary płyty.',
		questionId: Math.random()
	},
	{
		question: 'Co jest bardzo ważną częścią analizy replikacji',
		answers: [
			'Robienie kawy przed replikacją',
			'Aby wszystkie materialy miały zunifikowany sposób wprowadzonych danych, żeby można było uniwersalne zapytanie zrobić.'
		],
		correct: 'Aby wszystkie materialy miały zunifikowany sposób wprowadzonych danych, żeby można było robićniwersalne zapytania.',
		questionId: Math.random()
	},

	{
		question: 'Co pierwsze? Replikacja czy założenie bazy danych?',
		answers: ['Jeśli da się zrobić najpierw replikację to replikację', 'Zawsze najpierw Baza Danych'],
		correct: 'Jeśli da się zrobić najpierw replikację to replikację',
		questionId: Math.random()
	},

	{
		question: 'Jak działa replikacja materiałowa?',
		answers: ['No właśnie, jak?', 'Hmm'],
		correct: 'No właśnie, jak?',
		questionId: Math.random()
	},
	{
		question: 'Co to jest płyta no grain?',
		answers: ['Płyta nie ma usłojenia', 'Strzelaj', 'Gładka płyta'],
		correct: 'Płyta nie ma usłojenia',
		questionId: Math.random()
	},

	{
		question: 'Nie daj sobie wcisnąć, że to ja mam zakładać zasoby klientów? Prawda czy fałsz?',
		answers: ['Oczywiście, to zadanie Klienta.', 'Nie nie, to Twoja działka', 'Negocjuj z Klientem'],
		correct: 'Oczywiście, to zadanie Klienta.',
		questionId: Math.random()
	},

	{
		question: 'Należy wprowadzanie materiałów dać później i testować wdrożenie na tych dwóch założonych testowych materiałach. Why?',
		answers: ['Nie musimy czekać aż Klient dorobią te materiały.', 'Nie, to podejście nie jest wykorzystywane.'],
		correct: 'Nie musimy czekać aż Klient dorobi materiały.',
		questionId: Math.random()
	},

	{
		question: 'Jakie rozszerzenie ma szablon pliku importu materiałów/zasobów?',
		answers: ['CSV', 'XML', 'JS', 'TSX'],
		correct: 'CSV',
		questionId: Math.random()
	},

	{
		question: 'Czemu problematyczne jest wrzucanie obrazów? ',
		answers: ['Dużo roboty z tym', 'Trzeba za każdym razem podawać FTP'],
		correct: 'Dużo roboty z tym',
		questionId: Math.random()
	},

	{
		question: 'W drugim punkcie .... najlepiej zrobić?',
		answers: ['Analizę produkcji i produkcję', 'Kawę i to mocną'],
		correct: 'Analizę produkcji i produkcję',
		questionId: Math.random()
	},
	{
		question: 'Co należy zrobić szczegółowo z Klientem jeśli chodzi o aspekty produkcyjne?',
		answers: [
			'Szczegółowo wypytać Klinta dot. aspektów produkcyjnych',
			'Szczegółowo wypytać Klinta dot. aspektów produkcyjnych oraz aby ŁK był obecny w tej rozmowie'
		],
		correct: 'Szczegółowo wypytać Klinta dot. aspektów produkcyjnych oraz aby ŁK był obecny w tej rozmowie',
		questionId: Math.random()
	},

	{
		question: 'MES to ?',
		answers: ['Zakładka planowanie w OM', 'Inaczej CRM', 'Inaczej IMOS'],
		correct: 'Zakładka planowanie w OM',
		questionId: Math.random()
	},
	{
		question: 'IMOS to',
		answers: [
			'CAD, Tam gdzie robi się te projekty szafek. Olga pracuje w IMOS',
			'To inaczej Order Manager',
			'To ogół produktów soft-technik'
		],
		correct: 'CAD, Tam gdzie robi się te projekty szafek. Olga pracuje w IMOS',
		questionId: Math.random()
	},

	{
		question: 'Na czym polegają testy kuchni?',
		answers: ['Testowanie na rzeczywistych, wyprodukowanych korpusach', 'Testy modeli w K3D', 'Testy na produckji u Klienta'],
		correct: 'Testy na produckji u Klienta',
		questionId: Math.random()
	},

	{
		question: 'Za fronty akrylowe z Fast Cut płacimy tylko za zamówiony materiał',
		answers: ['TAK', 'NIE'],
		correct: 'TAK',
		questionId: Math.random()
	},
	{
		question: 'Zmienne systemowe to to samo co zmienne tłumaczeniowe',
		answers: ['NIE', 'TAK'],
		correct: 'NIE',
		questionId: Math.random()
	},
	{
		question: `Czy Aventosy są zwizualizowane ale niedziałają jak okucia „fizyczne" `,
		answers: ['TAK', 'NIE'],
		correct: 'TAK',
		questionId: Math.random()
	},
	{
		question: "Zmienne globalne wyszukujemy poprzez 'x' w programie HeidiSQL",
		answers: ['name', 'value'],
		correct: 'name',
		questionId: Math.random()
	},
	{
		question: 'Co jest niepoprawne w tym zapisie python?',
		src: require('../assets/images/MicrosoftTeams-image_1.png'),
		answers: [
			'Należy zamienić == na ===',
			'należy zamienić nawiasy [ ] na { }',
			"Należałoby usunać:   item['visible'] == 'AdvancedConfigurationCorpus'",
			'Jest wszystko ok'
		],
		correct: 'Jest wszystko ok',
		questionId: Math.random()
	},
	{
		question: 'Symbole BP, FS, PA, TS, BRA odnoszą się odpowiednio do:',
		answers: [
			'ściana tylna, przegroda pozioma, przegroda pionowa, wieniec górny, trawers tylny',
			'ściana tylna, przegroda pionowa, przegroda pozioma, wieniec górny, trawers tylny',
			'ściana tylna, przegroda pozioma, przegroda pozioma, wieniec górny, trawers tylny'
		],
		correct: 'ściana tylna, przegroda pozioma, przegroda pionowa, wieniec górny, trawers tylny',
		questionId: Math.random()
	},
	{
		question: 'Symbole FRL1 i DRFR1 odnoszą się odpowiednio do:',
		answers: ['front lewy, front szuflady', 'front szuflady, front lewy'],
		correct: 'front lewy, front szuflady',
		questionId: Math.random()
	},
	{
		question: 'Trzeci wers odnosi się do :',
		src: require('../assets/images/MicrosoftTeams-image_2.png'),
		answers: ['Szafki z dwoma głęboki szufladami i jedna niską', 'Szafki z dwoma niskimi szufladami i jedna głęboką'],
		correct: 'Szafki z dwoma głęboki szufladami i jedna niską',
		questionId: Math.random()
	},
	{
		question: 'Co oznacza symbol DRBS:',
		src: require('../assets/images/MicrosoftTeams-image_3.png'),
		answers: ['-------', '-------'],
		correct: '-------',
		questionId: Math.random()
	},

	{
		question: 'Ścianka tylna szuflady ma grubość :',
		answers: ['16mm', ' tak jak front: 18mm', '22mm'],
		correct: '16mm',
		questionId: Math.random()
	},
	{
		question: 'Ścianka tylna szuflady ma grubość :',
		answers: ['16mm', ' tak jak front: 18mm', '22mm'],
		correct: '16mm',
		questionId: Math.random()
	},
	{
		question: 'Oznaczenie 11246013001 mówi nam, że jest to szuflada:',
		answers: [
			'Systemowa Blum TBX, mówią nam o tym pierwsze cyfry 112',
			'Systemowa Hettich',
			'Systemowa Blum LBX, mówią nam o tym pierwsze cyfry 112'
		],
		correct: 'Systemowa Blum TBX, mówią nam o tym pierwsze cyfry 112',
		questionId: Math.random()
	},
	{
		question: 'Konfiguracja standardowa szuflad zawiera',
		answers: [
			'System szuflad Blum TANDEMBOX antaro, maksymalne obciążenie szuflad 30kg',
			'System szuflad Blum LEGRABOX antaro, maksymalne obciążenie szuflad 30kg'
		],
		correct: 'System szuflad Blum TANDEMBOX antaro, maksymalne obciążenie szuflad 30kg',
		questionId: Math.random()
	},

	{
		question: 'Czym charakteryzuje się szuflada LegraBox?',
		answers: [
			'Legrabox to prostokątny cienki bok zaledwie 12 mm. LEGRABOX może być wyposażony w system TIP-ON BLUMOTION pozwalające na otwieranie szuflad bez uchwytów i ich ciche domykanie. '
		],
		correct:
			'Legrabox to prostokątny cienki bok zaledwie 12 mm. LEGRABOX może być wyposażony w system TIP-ON BLUMOTION pozwalające na otwieranie szuflad bez uchwytów i ich ciche domykanie. ',
		questionId: Math.random()
	},
	{
		question: 'Czym charakteryzuje się szuflada TandemBox',
		answers: ['TANDEMBOX posiada dużą nośność – do 65 kg, w połączeniu z relingami pozwala na zastosowanie wysokich frontów.'],
		correct: 'TANDEMBOX posiada dużą nośność – do 65 kg, w połączeniu z relingami pozwala na zastosowanie wysokich frontów.',
		questionId: Math.random()
	},
	{
		question: 'Tylko w szufladach LegraBox można dostosować kolor boków.',
		answers: [
			'Tak, to prawda. TandemBox nie ma takiej możilwości.',
			'Nie, to TandemBox ma taką możliwość',
			'Nie, obie szuflady mają opcję wyboru koloru'
		],
		correct: 'Nie, obie szuflady mają opcję wyboru koloru',
		questionId: Math.random()
	},
	{
		question: 'FrontVerticalOffsetTop wynosi:',
		answers: ['4mm', '2mm', '7mm'],
		correct: '4mm',
		questionId: Math.random()
	},
	{
		question: 'System Blumotion dotyczy:',
		answers: [
			'Dopasowania prędkości zamykania frontu',
			'Dopasowania prędkości otwierania frontu',
			'Automatycznego bezdotykowego otwierania frontów'
		],
		correct: 'Dopasowania prędkości zamykania frontu',
		questionId: Math.random()
	},
	{
		question: 'System Blumotion może dotyczyć:',
		answers: ['Frontów szuflad', 'Frontów otwieranych lewo/prawo ', 'Zarówno frontów szuflad jak i frontów lewych i prawych'],
		correct: 'Zarówno frontów szuflad jak i frontów lewych i prawych',
		questionId: Math.random()
	},
	{
		question: 'System Blumotion może dotyczyć:',
		answers: ['Frontów szuflad', 'Frontów otwieranych lewo/prawo ', 'Zarówno frontów szuflad jak i frontów lewych i prawych'],
		correct: 'Zarówno frontów szuflad jak i frontów lewych i prawych',
		questionId: Math.random()
	},
	{
		question: 'Wysokość szuflady standardowej N oznacza minimalny zakres przestrzeni od : ',
		answers: ['82.5mm', '92.5mm'],
		correct: '82.5mm',
		questionId: Math.random()
	},

   {
    question: "Większe obciążenie przyjmuje szuflada:",
    answers: [ "Blum LBX, odpowiednio 40/70kg", "Blum TBX, odpowiednio 40/70kg", "Blum TBX, odpowiednio 30/65kg"  ],
    correct: "Blum LBX, odpowiednio 40/70kg",
    questionId: Math.random(),
  },
   {
    question: "Czym jest Order Manager?",
    answers: [ "Stanowi platformę zarządzającą, do której podłączone są kolejne moduły, dzięki czemu pozwala na wgląd, zarządzanie i realizację zleceń w czasie rzeczywistym.", "Stanowi platformę zarządzającą optymalizacją rozkroju płyt, wykorzystując do tego najnowocześniejsze algorytmy"  ],
    correct: "Stanowi platformę zarządzającą, do której podłączone są kolejne moduły, dzięki czemu pozwala na wgląd, zarządzanie i realizację zleceń w czasie rzeczywistym.",
    questionId: Math.random(),
  },
  {
    question: "Co to jest szerokość rzazu?",
    answers: [ "Szerokość zęba piły tarczowerj wyznaczająca szerokośc rowka wycinanego przez tarczę pilarska w obrabianym materiale.", "Szerokość zastosowanej okleiny."  ],
    correct: "Szerokość zęba piły tarczowerj wyznaczająca szerokośc rowka wycinanego przez tarczę pilarska w obrabianym materiale.",
    questionId: Math.random(),
  },
  {
    question: "Co to jest brzegowanie krawędzi płyty?",
    answers: [ "Ilość milimetrów, o które zmniejszony będzie docelowy wymiar płyty na szerokość.", "Oklejanie płyty"  ],
    correct: "Ilość milimetrów, o które zmniejszony będzie docelowy wymiar płyty na szerokość.",
    questionId: Math.random(),
  },
  {
    question: " Czy wprowadzone wartości brzegowań  uwzględniają szerokości rzazu?",
    answers: [ "Wprowadzone wartości brzegowań nie uwzględniają szerokości rzazu", "TAk, uwzględniają ją."  ],
    correct: "Wprowadzone wartości brzegowań nie uwzględniają szerokości rzazu",
    questionId: Math.random(),
  },
  {
    question: "Czy wartości brzegowań uwzglęniają szerokość rzazu.",
    answers: [ "Wprowadzone wartości brzegowań nie uwzględniają szerokości rzazu", "TAk, uwzględniają ją."  ],
    correct: "Wprowadzone wartości brzegowań nie uwzględniają szerokości rzazu",
    questionId: Math.random(),
  },
  {
    question: "Do czego służy klauzula SQL WHERE IN?",
    answers: [
    "Do łączenia dwóch lub więcej tabel.",
    "Do sortowania wyniku zapytania.",
    "Do filtrowania danych na podstawie określonej listy wartości."
    ],
    correct: "Do filtrowania danych na podstawie określonej listy wartości.",
    questionId: Math.random(),
    },
    {
      question: "Co oznacza akronim SQL?",
      answers: ["Standard Query Language", "Structured Question Language", "Simple Query Language"],
      correct: "Standard Query Language",
      questionId: Math.random(),
      },
      
      {
      question: "Co oznacza skrót DDL w SQL?",
      answers: ["Data Definition Language", "Database Design Language", "Data Description Language"],
      correct: "Data Definition Language",
      questionId: Math.random(),
      },
      
      {
      question: "Co to jest klauzula GROUP BY w SQL?",
      answers: ["Służy do łączenia dwóch lub więcej tabel.", "Służy do sortowania wyniku zapytania.", "Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów."],
      correct: "Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów.",
      questionId: Math.random(),
      },
      
      {
      question: "Co to jest klauzula ORDER BY w SQL?",
      answers: ["Służy do łączenia dwóch lub więcej tabel.", "Służy do sortowania wyniku zapytania.", "Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów."],
      correct: "Służy do sortowania wyniku zapytania.",
      questionId: Math.random(),
      },
      
      {
      question: "Co to jest zapytanie SQL?",
      answers: ["Zestaw instrukcji, które służą do tworzenia bazy danych.", "Komenda służąca do uruchamiania aplikacji bazodanowej.", "Zestaw instrukcji służących do pobierania, dodawania, modyfikowania i usuwania danych z bazy danych."],
      correct: "Zestaw instrukcji służących do pobierania, dodawania, modyfikowania i usuwania danych z bazy danych.",
      questionId: Math.random(),
      }
      ,
      {
      question: "Co to jest klauzula WHERE w SQL?",
      answers: ["Służy do łączenia dwóch lub więcej tabel.", "Służy do sortowania wyniku zapytania.", "Służy do filtrowania wyników zapytania na podstawie określonego warunku."],
      correct: "Służy do filtrowania wyników zapytania na podstawie określonego warunku.",
      questionId: Math.random(),
      },
      
      {
      question: "Co oznacza akronim CRUD w SQL?",
      answers: ["Create, Read, Update, Delete", "Combine, Repeat, Use, Delete", "Change, Refresh, Update, Drop"],
      correct: "Create, Read, Update, Delete",
      questionId: Math.random(),
      },
      {
      question: "Co to jest instrukcja SELECT w SQL?",
      answers: ["Służy do tworzenia tabel w bazie danych.", "Służy do wyświetlania danych z bazy danych.", "Służy do modyfikowania danych w bazie danych."],
      correct: "Służy do wyświetlania danych z bazy danych."
      },
      {
        question: "Co to jest instrukcja SELECT w SQL?",
        answers: ["Służy do tworzenia tabel w bazie danych.", "Służy do wyświetlania danych z bazy danych.", "Służy do modyfikowania danych w bazie danych."],
        correct: "Służy do wyświetlania danych z bazy danych."
        },
        {
          question: "Co to jest SIM",
          answers: ["Generuje zlecenia w IMOS z pliku XML np z konfiguratora kiedy klient generuje zamówienie w OM.", ],
          correct: "Generuje zlecenia w IMOS z pliku XML np z konfiguratora kiedy klient generuje zamówienie w OM."
   },
   {
            question: "Gdzie można wygenerować szybko layout na stronę główną",
            answers: ["Np w www.mobirise.com/pl", "Np w www.google.pl", ],
            correct: "Np w www.mobirise.com/pl"
    },
    {
      question: "Jak w FC2 dodać kolejny kafelek na stronie głównej?",
      answers: ["Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w OM", "Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w HEIDI", ],
      correct: "Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w OM"
},
{
  question: "Co to jest MPR?",
  answers: ["Program na maszynę, na centrum Homag'a, inaczej rozszerzenie pliku", "System zarzadzania zamówieniami podobny do CRM", ],
  correct: "Program na maszynę, na centrum Homag'a, inaczej rozszerzenie pliku"
},
{
  question: "Czym są MPM, CIT, PGMX, TCN ?",
  answers: ["Rozszerzenia plików na maszyny", "Roszszerzenia plików w Bazie danych", "Roszerzenia plików na maszyny ale nie ma CIT tylko CIX" ],
  correct: "Roszerzenia plików na maszyny ale nie ma CIT tylko CIX"
},
{
  question: "Czy w OM powinniśmy klikać najpierw button XML Czy CNC ?",
  answers: ["CNC", "XML" ],
  correct: "XML"
},
{
  question: "Do jakiej maszyny przypisane jest rozszerzenie NPR ?",
  answers: ["Homag", "Biesse" ],
  correct: "Homag"
},
{
  question: "Do jakiej maszyny przypisane jest rozszerzenie CIX ?",
  answers: ["Homag", "Biesse", "Biesse bo druga litera to 'i'" ],
  correct: "Biesse bo druga litera to 'i'"
},
{
  question: "Do jakiej maszyny przypisane jest rozszerzenie PGMX ?",
  answers: ["SCMMM", "Biesse", "SCM bo trzecia litera to M a S jest blisko P w alfabecie" ],
  correct: "SCM bo trzecia litera to M a S jest blisko P w alfabecie"
},
{
  question: "Co to jest TCN",
  answers: ["To jest roszszerzenie na maszynę Felder, To Ci No Felder", "Do maszyny Homag, Homag oprócz NPR ma również TCN" ],
  correct: "To jest roszszerzenie na maszynę Felder, To Ci No Felder"
},

	{
		question: 'Wysokość szuflady N, M, K oznaczają szuflady: ',
		answers: ['standardowe', 'z wysokim frontem', 'z wysokim frontem i relingiem'],
		correct: 'standardowe',
		questionId: Math.random()
	},
	{
		question: 'System servo drive przeznaczony jest do : ',
		answers: [
			'Do łatwego otwierania oraz zamykania nie tylko mniejszych czy średnich, ale też dużych szuflad.',
			'Do łatwego otwierania oraz zamykania nie tylko mniejszych czy średnich, ale nie dużych szuflad.'
		],
		correct: 'Do łatwego otwierania oraz zamykania nie tylko mniejszych czy średnich, ale też dużych szuflad.',
		questionId: Math.random()
	},


{
  question: "Czym charakteryzuje się AVENTOS HS",
  answers: [
  "To front uchylno-nachodzacy jednoczęściowy zachodzacy na korpus",
  "Do frontów nad korpusem, który unosi się równolegle do szafki (HL)",
  "Front składany, dwuczęściowy  (HF uck is that ?)"
  ],
  correct: "To front uchylno-nachodzacy jednoczęściowy zachodzacy na korpus",
  questionId: Math.random(),
  },
  {
    question: "Który z symboli oznacza otwieranie na TIP-ON",
    answers: ["10", "20", "30" ],
    correct: "10",
  },
  {
    question: "Filtr oznaczający cyfrę  1,2.3 oznaczają?",
    answers: ["Brunatnoszary, Jedwabiście Biały, Szary", "Jedwabiście Biały, Brunatnoszary, Szary"],
    correct: "Brunatnoszary, Jedwabiście Biały, Szary",
  },
  {
    question: "Nazwa 578.5501B oznacza ? ",
    answers: ["Prowadnicę szuflady otwieraną uchwytem", "Prowadnicę szuflady otwieraną Tip-onem"],
    correct: "Prowadnicę szuflady otwieraną uchwytem",
  },
  {
    question: "Co oznacza symbol B w nazwie prowadnicy 578.4001B? ",
    answers: ["Że jest wraz z systemem Bluemotion","Że jest wraz z systemem Tip-On"],
    correct: "Że jest wraz z systemem Bluemotion",
  },
  {
    question: "Okleiniarka nie oklei formatki o wymiarze?",
    answers: ["39mm", "70mm", "60mm"],
    correct: "39mm",
  },
  {
    question: "Czym rózni się łącznik mimośrodowy od kołkowego? ",
    answers: [],
    correct: "",
  },
  {
    question: "Co znajduje się w bazie podstawowej potrzebnej w drożeniu? ",
    answers: ["5 podstawowych zasobów, ustawienia maszyn, podstawowe raporty", "Baza podstawowa z Soft-technik"],
    correct: "5 podstawowych zasobów, ustawienia maszyn, podstawowe raporty",
  },
  {
    question: "Co oznacza symbol ZRG.437R.SEIW?? ",
    answers: ["Jest to  TANDEMBOX antaro/reling ZRG.437 l=500 biały", "Jest to bok Baiły Lewy"],
    src: require("../assets/images/MicrosoftTeams-image_8.png"),

    correct: "Jest to  TANDEMBOX antaro/reling ZRG.437 l=500 biały",
  },
  {
    question: "Przy analizie produkcji warto zapytać np o: ",
    answers: ["Parametry piły i inne pierdy", "Jakie w firmie X mają miesięczne zapotrzebowanie na cukier do kawy."],
    correct: "Parametry piły i inne pierdy",
  },
  {
    question: "Czego tyczy poniższe zdjęcie? ",
    answers: ["Zakładki Admin i Integracji danych Klienta z Imosa potrzebnych do integracji", "To jest randomowy jpeg z długowłosa blondynką"],
    src: require("../assets/images/MicrosoftTeams-image_9.png"),

    correct: "Zakładki Admin i Integracji danych Klienta z Imosa potrzebnych do integracji",
  },
  {
    question: "Symbol '22K2900' to ?",
    answers: ["22K2900 zestaw siłow.o mocy 3200-9000 Siłownik do Aventosa HK", "JProwadnica szualfady BLUM."],
    correct: "22K2900 zestaw siłow.o mocy 3200-9000 Siłownik do Aventosa HK",
  },
  {
    question: "Gdzie szukać danych do logowania u Kilenta do FTP ?",
    answers: ["W CRM w zakładce pliki", "W K#D w zakładce ustawienia"],
    correct: "W CRM w zakładce pliki",
  },
  

	{
		question: 'Blumotion to: ',
		answers: ['Delikatne i ciche zamykanie frontu.', 'Elektryczne wspomaganie otwierania.'],
		correct: 'Delikatne i ciche zamykanie frontu.',
		questionId: Math.random()
	},

	{
		question: 'Większe obciążenie przyjmuje szuflada:',
		answers: ['Blum LBX, odpowiednio 40/70kg', 'Blum TBX, odpowiednio 40/70kg', 'Blum TBX, odpowiednio 30/65kg'],
		correct: 'Blum LBX, odpowiednio 40/70kg',
		questionId: Math.random()
	},
	{
		question: 'Czym jest Order Manager?',
		answers: [
			'Stanowi platformę zarządzającą, do której podłączone są kolejne moduły, dzięki czemu pozwala na wgląd, zarządzanie i realizację zleceń w czasie rzeczywistym.',
			'Stanowi platformę zarządzającą optymalizacją rozkroju płyt, wykorzystując do tego najnowocześniejsze algorytmy'
		],
		correct:
			'Stanowi platformę zarządzającą, do której podłączone są kolejne moduły, dzięki czemu pozwala na wgląd, zarządzanie i realizację zleceń w czasie rzeczywistym.',
		questionId: Math.random()
	},
	{
		question: 'Co to jest szerokość rzazu?',
		answers: [
			'Szerokość zęba piły tarczowerj wyznaczająca szerokośc rowka wycinanego przez tarczę pilarska w obrabianym materiale.',
			'Szerokość zastosowanej okleiny.'
		],
		correct: 'Szerokość zęba piły tarczowej wyznaczająca szerokośc rowka wycinanego przez tarczę pilarska w obrabianym materiale.',
		questionId: Math.random()
	},
	{
		question: 'Co to jest brzegowanie krawędzi płyty?',
		answers: ['Ilość milimetrów, o które zmniejszony będzie docelowy wymiar płyty na szerokość.', 'Oklejanie płyty'],
		correct: 'Ilość milimetrów, o które zmniejszony będzie docelowy wymiar płyty na szerokość.',
		questionId: Math.random()
	},
	{
		question: 'Czy wprowadzone wartości brzegowań uwzględniają szerokości rzazu?',
		answers: ['Wprowadzone wartości brzegowań nie uwzględniają szerokości rzazu', 'TAk, uwzględniają ją.'],
		correct: 'Wprowadzone wartości brzegowań nie uwzględniają szerokości rzazu',
		questionId: Math.random()
	},

	{
		question: 'Do czego służy klauzula SQL WHERE IN?',
		answers: [
			'Do łączenia dwóch lub więcej tabel.',
			'Do sortowania wyniku zapytania.',
			'Do filtrowania danych na podstawie określonej listy wartości.'
		],
		correct: 'Do filtrowania danych na podstawie określonej listy wartości.',
		questionId: Math.random()
	},
	{
		question: 'Co oznacza akronim SQL?',
		answers: ['Standard Query Language', 'Structured Question Language', 'Simple Query Language'],
		correct: 'Standard Query Language',
		questionId: Math.random()
	},

	{
		question: 'Co oznacza skrót DDL w SQL?',
		answers: ['Data Definition Language', 'Database Design Language', 'Data Description Language'],
		correct: 'Data Definition Language',
		questionId: Math.random()
	},

	{
		question: 'Co to jest klauzula GROUP BY w SQL?',
		answers: [
			'Służy do łączenia dwóch lub więcej tabel.',
			'Służy do sortowania wyniku zapytania.',
			'Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów.'
		],
		correct: 'Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów.',
		questionId: Math.random()
	},

	{
		question: 'Co to jest klauzula ORDER BY w SQL?',
		answers: [
			'Służy do łączenia dwóch lub więcej tabel.',
			'Służy do sortowania wyniku zapytania.',
			'Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów.'
		],
		correct: 'Służy do sortowania wyniku zapytania.',
		questionId: Math.random()
	},

	{
		question: 'Co to jest zapytanie SQL?',
		answers: [
			'Zestaw instrukcji, które służą do tworzenia bazy danych.',
			'Komenda służąca do uruchamiania aplikacji bazodanowej.',
			'Zestaw instrukcji służących do pobierania, dodawania, modyfikowania i usuwania danych z bazy danych.'
		],
		correct: 'Zestaw instrukcji służących do pobierania, dodawania, modyfikowania i usuwania danych z bazy danych.',
		questionId: Math.random()
	},
	{
		question: 'Co to jest klauzula WHERE w SQL?',
		answers: [
			'Służy do łączenia dwóch lub więcej tabel.',
			'Służy do sortowania wyniku zapytania.',
			'Służy do filtrowania wyników zapytania na podstawie określonego warunku.'
		],
		correct: 'Służy do filtrowania wyników zapytania na podstawie określonego warunku.',
		questionId: Math.random()
	},

	{
		question: 'Co oznacza akronim CRUD w SQL?',
		answers: ['Create, Read, Update, Delete', 'Combine, Repeat, Use, Delete', 'Change, Refresh, Update, Drop'],
		correct: 'Create, Read, Update, Delete',
		questionId: Math.random()
	},
	{
		question: 'Co to jest instrukcja SELECT w SQL?',
		answers: [
			'Służy do tworzenia tabel w bazie danych.',
			'Służy do wyświetlania danych z bazy danych.',
			'Służy do modyfikowania danych w bazie danych.'
		],
		correct: 'Służy do wyświetlania danych z bazy danych.'
	},

	{
		question: 'Co to jest SIM',
		answers: ['Generuje zlecenia w IMOS z pliku XML np. z konfiguratora kiedy klient generuje zamówienie w OM.'],
		correct: 'Generuje zlecenia w IMOS z pliku XML np. z konfiguratora kiedy klient generuje zamówienie w OM.'
	},
	{
		question: 'Gdzie można wygenerować szybko layout na stronę główną',
		answers: ['Np w www.mobirise.com/pl', 'Np w www.google.pl'],
		correct: 'Np w www.mobirise.com/pl'
	},
	{
		question: 'Jak w FC2 dodać kolejny kafelek na stronie głównej?',
		answers: [
			'Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w OM',
			'Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w HEIDI'
		],
		correct: 'Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w OM'
	},
	{
		question: 'Co to jest NPR?',
		answers: ["Program na maszynę, na centrum Homag'a, inaczej rozszerzenie pliku", 'System zarzadzania zamówieniami podobny do CRM'],
		correct: "Program na maszynę, na centrum Homag'a, inaczej rozszerzenie pliku"
	},
	{
		question: 'Czym są NPM, CIT, PGMX, TCN ?',
		answers: [
			'Rozszerzenia plików na maszyny',
			'Roszszerzenia plików w Bazie danych',
			'Roszerzenia plików na maszyny ale nie ma CIT tylko CIX'
		],
		correct: 'Roszerzenia plików na maszyny ale nie ma CIT tylko CIX'
	},
	{
		question: 'Czy w OM powinniśmy klikać najpierw button XML Czy CNC ?',
		answers: ['CNC', 'XML'],
		correct: 'XML'
	},
	{
		question: 'Do jakiej maszyny przypisane jest rozszerzenie NPR ?',
		answers: ['Homag', 'Biesse'],
		correct: 'Homag'
	},
	{
		question: 'Do jakiej maszyny przypisane jest rozszerzenie CIX ?',
		answers: ['Homag', 'Biesse', "Biesse bo druga litera to 'i'"],
		correct: "Biesse bo druga litera to 'i'"
	},
	{
		question: 'Do jakiej maszyny przypisane jest rozszerzenie PGMX ?',
		answers: ['SCMMM', 'Biesse', 'SCM bo trzecia litera to M a S jest blisko P w alfabecie'],
		correct: 'SCM bo trzecia litera to M a S jest blisko P w alfabecie'
	},
	{
		question: 'Co to jest TCN',
		answers: ['To jest roszszerzenie na maszynę Felder, To Ci No Felder', 'Do maszyny Homag, Homag oprócz NPR ma również TCN'],
		correct: 'To jest roszszerzenie na maszynę Felder, To Ci No Felder'
	},

	{
		question: 'W OM co znaczy oznaczenie K w kolumnie T?',
		answers: ['Zamówienie z Konfiguratora', 'Zamówienie z Formatek'],
		correct: 'Zamówienie z Konfiguratora'
	},
	{
		question: 'W OM co znaczy oznaczenie P W kolumnie T?',
		answers: ['Zamówienie z Konfiguratora', 'Zamówienie z Formatek'],
		correct: 'Zamówienie z Formatek'
	},
	{
		question: 'Typ zasobu 0 to ?',
		answers: ['Płyty', 'Blaty na pewno mają 0 nie 4'],
		correct: 'Płyty'
	},

	{
		question: 'Czym charakteryzuje się AVENTOS HS',
		src: require('../assets/images/MicrosoftTeams-image_6.png'),
		answers: [
			'To front uchylno-nachodzacy jednoczęściowy zachodzacy na korpus',
			'Do frontów nad korpusem, który unosi się równolegle do szafki (HL)',
			'Front składany, dwuczęściowy  (HF uck is that ?)'
		],
		correct: 'To front uchylno-nachodzacy jednoczęściowy zachodzacy na korpus',
		questionId: Math.random()
	},
	{
		question: 'Który z symboli oznacza otwieranie na TIP-ON',
		answers: ['10', '20', '30'],
		correct: '10'
	},
	{
		question: 'Filtr oznaczający kolejno cyfrę 1,2,3 oznaczają?',
		answers: ['Brunatnoszary, Jedwabiście Biały, Szary', 'Jedwabiście Biały, Brunatnoszary, Szary'],
		correct: 'Brunatnoszary, Jedwabiście Biały, Szary'
	},
	{
		question: 'Nazwa 578.5501B oznacza ? ',
		answers: ['Prowadnicę szuflady otwieraną uchwytem', 'Prowadnicę szuflady otwieraną Tip-onem'],
		correct: 'Prowadnicę szuflady otwieraną uchwytem'
	},
	{
		question: 'Czym rózni się łącznik mimośrodowy od kołkowego? ',
		answers: [],
		correct: ''
	},
	{
    question: "Co oznacza symbol B w nazwie prowadnicy 578.4001B? ",
    answers: ["Że jest wraz z systemem Bluemotion","Że jest wraz z systemem Tip-On"],
    correct: "Że jest wraz z systemem Bluemotion",
  },
  {
    question: "Okleiniarka nie oklei formatki o wymiarze?",
    answers: ["39mm", "70mm", "60mm"],
    correct: "39mm",
  },
  {
    question: "Czym rózni się łącznik mimośrodowy od kołkowego? ",
    answers: [],
    correct: "",
  },
  {
    question: "Co znajduje się w bazie podstawowej potrzebnej w drożeniu? ",
    answers: ["5 podstawowych zasobów, ustawienia maszyn, podstawowe raporty", "Baza podstawowa z Soft-technik"],
    correct: "5 podstawowych zasobów, ustawienia maszyn, podstawowe raporty",
  },
  {
    question: "Co oznacza symbol ZRG.437R.SEIW?? ",
    answers: ["Jest to  TANDEMBOX antaro/reling ZRG.437 l=500 biały", "Jest to bok Baiły Lewy"],
    src: require("../assets/images/MicrosoftTeams-image_8.png"),

    correct: "Jest to  TANDEMBOX antaro/reling ZRG.437 l=500 biały",
  },
  {
    question: "Przy analizie produkcji warto zapytać np o: ",
    answers: ["Parametry piły i inne pierdy", "Jakie w firmie X mają miesięczne zapotrzebowanie na cukier do kawy."],
    correct: "Parametry piły i inne pierdy",
  },
  {
    question: "Czego tyczy poniższe zdjęcie? ",
    answers: ["Zakładki Admin i Integracji danych Klienta z Imosa potrzebnych do integracji", "To jest randomowy jpeg z długowłosa blondynką"],
    src: require("../assets/images/MicrosoftTeams-image_9.png"),

    correct: "Zakładki Admin i Integracji danych Klienta z Imosa potrzebnych do integracji",
  },
  {
    question: "Symbol '22K2900' to ?",
    answers: ["22K2900 zestaw siłow.o mocy 3200-9000 Siłownik do Aventosa HK", "JProwadnica szualfady BLUM."],
    correct: "22K2900 zestaw siłow.o mocy 3200-9000 Siłownik do Aventosa HK",
  },
  {
    question: "Gdzie szukać danych do logowania u Kilenta do FTP ?",
    answers: ["W CRM w zakładce pliki", "W K#D w zakładce ustawienia"],
    correct: "W CRM w zakładce pliki",
  },
  {
		question: 'Blumotion to: ',
		answers: ['Delikatne i ciche zamykanie frontu.', 'Elektryczne wspomaganie otwierania.'],
		correct: 'Delikatne i ciche zamykanie frontu.',
		questionId: Math.random()
	},

	{
		question: 'Większe obciążenie przyjmuje szuflada:',
		answers: ['Blum LBX, odpowiednio 40/70kg', 'Blum TBX, odpowiednio 40/70kg', 'Blum TBX, odpowiednio 30/65kg'],
		correct: 'Blum LBX, odpowiednio 40/70kg',
		questionId: Math.random()
	},
	{
		question: 'Czym jest Order Manager?',
		answers: [
			'Stanowi platformę zarządzającą, do której podłączone są kolejne moduły, dzięki czemu pozwala na wgląd, zarządzanie i realizację zleceń w czasie rzeczywistym.',
			'Stanowi platformę zarządzającą optymalizacją rozkroju płyt, wykorzystując do tego najnowocześniejsze algorytmy'
		],
		correct:
			'Stanowi platformę zarządzającą, do której podłączone są kolejne moduły, dzięki czemu pozwala na wgląd, zarządzanie i realizację zleceń w czasie rzeczywistym.',
		questionId: Math.random()
	},
	{
		question: 'Co to jest szerokość rzazu?',
		answers: [
			'Szerokość zęba piły tarczowerj wyznaczająca szerokośc rowka wycinanego przez tarczę pilarska w obrabianym materiale.',
			'Szerokość zastosowanej okleiny.'
		],
		correct: 'Szerokość zęba piły tarczowej wyznaczająca szerokośc rowka wycinanego przez tarczę pilarska w obrabianym materiale.',
		questionId: Math.random()
	},
	{
		question: 'Co to jest brzegowanie krawędzi płyty?',
		answers: ['Ilość milimetrów, o które zmniejszony będzie docelowy wymiar płyty na szerokość.', 'Oklejanie płyty'],
		correct: 'Ilość milimetrów, o które zmniejszony będzie docelowy wymiar płyty na szerokość.',
		questionId: Math.random()
	},
	{
		question: 'Czy wprowadzone wartości brzegowań uwzględniają szerokości rzazu?',
		answers: ['Wprowadzone wartości brzegowań nie uwzględniają szerokości rzazu', 'TAk, uwzględniają ją.'],
		correct: 'Wprowadzone wartości brzegowań nie uwzględniają szerokości rzazu',
		questionId: Math.random()
	},

	{
		question: 'Do czego służy klauzula SQL WHERE IN?',
		answers: [
			'Do łączenia dwóch lub więcej tabel.',
			'Do sortowania wyniku zapytania.',
			'Do filtrowania danych na podstawie określonej listy wartości.'
		],
		correct: 'Do filtrowania danych na podstawie określonej listy wartości.',
		questionId: Math.random()
	},
	{
		question: 'Co oznacza akronim SQL?',
		answers: ['Standard Query Language', 'Structured Question Language', 'Simple Query Language'],
		correct: 'Standard Query Language',
		questionId: Math.random()
	},

	{
		question: 'Co oznacza skrót DDL w SQL?',
		answers: ['Data Definition Language', 'Database Design Language', 'Data Description Language'],
		correct: 'Data Definition Language',
		questionId: Math.random()
	},

	{
		question: 'Co to jest klauzula GROUP BY w SQL?',
		answers: [
			'Służy do łączenia dwóch lub więcej tabel.',
			'Służy do sortowania wyniku zapytania.',
			'Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów.'
		],
		correct: 'Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów.',
		questionId: Math.random()
	},

	{
		question: 'Co to jest klauzula ORDER BY w SQL?',
		answers: [
			'Służy do łączenia dwóch lub więcej tabel.',
			'Służy do sortowania wyniku zapytania.',
			'Służy do grupowania wyników zapytania na podstawie jednego lub więcej kryteriów.'
		],
		correct: 'Służy do sortowania wyniku zapytania.',
		questionId: Math.random()
	},

	{
		question: 'Co to jest zapytanie SQL?',
		answers: [
			'Zestaw instrukcji, które służą do tworzenia bazy danych.',
			'Komenda służąca do uruchamiania aplikacji bazodanowej.',
			'Zestaw instrukcji służących do pobierania, dodawania, modyfikowania i usuwania danych z bazy danych.'
		],
		correct: 'Zestaw instrukcji służących do pobierania, dodawania, modyfikowania i usuwania danych z bazy danych.',
		questionId: Math.random()
	},
	{
		question: 'Co to jest klauzula WHERE w SQL?',
		answers: [
			'Służy do łączenia dwóch lub więcej tabel.',
			'Służy do sortowania wyniku zapytania.',
			'Służy do filtrowania wyników zapytania na podstawie określonego warunku.'
		],
		correct: 'Służy do filtrowania wyników zapytania na podstawie określonego warunku.',
		questionId: Math.random()
	},

	{
		question: 'Co oznacza akronim CRUD w SQL?',
		answers: ['Create, Read, Update, Delete', 'Combine, Repeat, Use, Delete', 'Change, Refresh, Update, Drop'],
		correct: 'Create, Read, Update, Delete',
		questionId: Math.random()
	},
	{
		question: 'Co to jest instrukcja SELECT w SQL?',
		answers: [
			'Służy do tworzenia tabel w bazie danych.',
			'Służy do wyświetlania danych z bazy danych.',
			'Służy do modyfikowania danych w bazie danych.'
		],
		correct: 'Służy do wyświetlania danych z bazy danych.'
	},

	{
		question: 'Co to jest SIM',
		answers: ['Generuje zlecenia w IMOS z pliku XML np. z konfiguratora kiedy klient generuje zamówienie w OM.'],
		correct: 'Generuje zlecenia w IMOS z pliku XML np. z konfiguratora kiedy klient generuje zamówienie w OM.'
	},
	{
		question: 'Gdzie można wygenerować szybko layout na stronę główną',
		answers: ['Np w www.mobirise.com/pl', 'Np w www.google.pl'],
		correct: 'Np w www.mobirise.com/pl'
	},
	{
		question: 'Jak w FC2 dodać kolejny kafelek na stronie głównej?',
		answers: [
			'Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w OM',
			'Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w HEIDI'
		],
		correct: 'Poprzez zmianę flagi z 0 na 1 w zmiennych systemowych w OM'
	},
	{
		question: 'Co to jest NPR?',
		answers: ["Program na maszynę, na centrum Homag'a, inaczej rozszerzenie pliku", 'System zarzadzania zamówieniami podobny do CRM'],
		correct: "Program na maszynę, na centrum Homag'a, inaczej rozszerzenie pliku"
	},
	{
		question: 'Czym są NPM, CIT, PGMX, TCN ?',
		answers: [
			'Rozszerzenia plików na maszyny',
			'Roszszerzenia plików w Bazie danych',
			'Roszerzenia plików na maszyny ale nie ma CIT tylko CIX'
		],
		correct: 'Roszerzenia plików na maszyny ale nie ma CIT tylko CIX'
	},
	{
		question: 'Czy w OM powinniśmy klikać najpierw button XML Czy CNC ?',
		answers: ['CNC', 'XML'],
		correct: 'XML'
	},
	{
		question: 'Do jakiej maszyny przypisane jest rozszerzenie NPR ?',
		answers: ['Homag', 'Biesse'],
		correct: 'Homag'
	},
  {
    question: "Jadną z zasad w K3D jest?",
    answers: ["Zasada jest taka, że zasoby, które są filtrami zakładamy w OM z typem materiału 10 i przypisujemy do grupy Filtry", "Zasada jest taka, że zasoby, które są filtrami zakładamy w OM z typem materiału 1 i przypisujemy do grupy Filtry"],
    correct: "Zasada jest taka, że zasoby, które są filtrami zakładamy w OM z typem materiału 10 i przypisujemy do grupy Filtry",
  },
  {
    question: "Co oznacza nazwa w GroupId",
    answers: ["Jest to identyfikator folderu, do którego przypisany jest obiekt" ,  "Jest to inaczej zmienna tłumaczeniowa"],
    correct: "Jest to identyfikator folderu, do którego przypisany jest obiekt",
  },
  {
    question: "Tworzac nowy obiekt w pole nazwa i opis nalezy wpisać:",
    answers: ["Zmienną tłumaczeniową" ,  "Nazwę bez spacji"],
    correct: "Zmienną tłumaczeniową",
  },
  {
    question: "Alias w konfiguratorze K3D to:",
    answers: ["W to mijesce wpisujemy zmienna z imosa odpowiadająca danemu parametrowi." ,  "a wpisuj co tam chcesz. ."],
    correct: "W to mijesce wpisujemy zmienna z imosa odpowiadająca danemu parametrowi",
  },
  {
    question: "Przedrostek __Imos_ w zmiennej mówi nam o tym, że:",
    answers: ["Zmienne z tym przedrostkiem są zmiennymi, które wykorzystywane są do integracji z imosem." ,  "To taki przydługi przedrostek bo autor tak chciał."],
    correct: "Zmienne z tym przedrostkiem są zmiennymi, które wykorzystywane są do integracji z imosem.",
  },
  {
    question: "Co oznacza zapis __Imos_S_B_GR_LS1=CorpusGrainSide ?",
    answers: ["W imosie pod zmienną S_B_GR_LS1 wstawiona zostanie wartość jaka wynika ze zmiennej CorpusGrainSides w K3D" ,  "W imosie pod zmienną S_B_GR_LS1 wstawiona zostanie wartość jaka wynika ze zmiennej CorpusGrainSides"],
    correct: "W imosie pod zmienną S_B_GR_LS1 wstawiona zostanie wartość jaka wynika ze zmiennej CorpusGrainSides w K3D",
  },

  {
    question: "Pod znakiem E w K3D kryje się :",
    answers: ["Lista parametrów - uzupełniane są automatycznie, nie możemy ich edytować.", " Zmienne systemowe – uzupełniane są automatycznie – są to zmienne zaprogramowane przez Agmasoft, na nie nie mamy wpływu.", "Zmienne ukryte – w tym miejscu przypisujemy do danego obiektu zmienne ukryte, tzn. są to wartości na które użytkownik nie ma wpływu."],
    correct: "Lista parametrów - uzupełniane są automatycznie, nie możemy ich edytować.",
  }

	// {
	//   question: "------------",
	//   answers: [   ],
	//   correct: "------------",
	//   questionId: Math.random(),
	// },
];
// jak wygląda uchwyt do rury fi 160 przegugowy,
// https://www.europanels.pl/wp-content/uploads/Dwuteowniki-rownolegloscienne.jpg

export default (shuffledQuestions = numberOfQuestion) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, shuffledQuestions));

const string = ' Plaża jest super!';

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const word = 'plaż';
const wordCapitalized = capitalizeFirstLetter(word);

const findWordInDesc = word => {
	if (string.includes(word) || string.includes(wordCapitalized)) {
		console.log('Tak, jest takie słow/część słowa');
		return true;
	} else {
		console.log('Brak takiego słow/część słowa');
		return false;
	}
};
console.log(findWordInDesc(word));
