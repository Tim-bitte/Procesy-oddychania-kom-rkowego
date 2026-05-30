const points = [
  {
    text: "Wszystkie organizmy potrzebują energii do wzrostu ruchu syntezy związków oraz utrzymania procesów życiowych Komórki pozyskują energię poprzez utlenianie związków organicznych głównie glukozy Energia chemiczna uwalniana podczas reakcji jest magazynowana w ATP – uniwersalnym nośniku energii komórkowej W zależności od dostępności tlenu organizmy wykorzystują oddychanie tlenowe oddychanie beztlenowe lub fermentację"
  },
  {
    text: "Oddychanie komórkowe jest procesem katabolicznym polegającym na stopniowym utlenianiu substancji organicznych i uwalnianiu energii chemicznej Najczęściej omawianym substratem energetycznym jest glukoza Proces może przebiegać w obecności tlenu lub bez jego udziału Oddychanie tlenowe zachodzi częściowo w cytozolu a częściowo w mitochondriach Fermentacja przebiega wyłącznie w cytozolu natomiast oddychanie beztlenowe prokariontów wykorzystuje błonę komórkową jako miejsce działania łańcucha oddechowego"
  },
  {
    text: "Glikoliza zachodzi w cytozolu komórki i nie wymaga obecności tlenu Jedna cząsteczka glukozy zawierająca 6 atomów węgla zostaje rozłożona do dwóch cząsteczek pirogronianu zawierających po 3 atomy węgla Proces prowadzi do uzyskania niewielkiej ilości energii – netto 2 cząsteczek ATP w fosforylacji substratowej Powstają również 2 cząsteczki NADH będące nośnikami wysokoenergetycznych elektronów"
  },
  {
    text: "W warunkach tlenowych pirogronian transportowany jest do mitochondrium gdzie zachodzi reakcja pomostowa Każda cząsteczka pirogronianu ulega oksydacyjnej dekarboksylacji i przekształca się w acetylo-CoA Podczas procesu wydziela się dwutlenek węgla oraz powstają kolejne cząsteczki NADH Reakcja pomostowa stanowi etap łączący glikolizę z cyklem Krebsa"
  },
  {
    text: "Cykl Krebsa zachodzi w matriks mitochondrium i ma charakter cykliczny Grupa acetylowa z acetylo-CoA łączy się ze szczawiooctanem tworząc cytrynian W kolejnych reakcjach następuje całkowite utlenienie atomów węgla do dwutlenku węgla Powstają wysokoenergetyczne nośniki elektronów: 6 NADH i 2 FADH2 oraz 2 cząsteczki ATP lub GTP w fosforylacji substratowej"
  },
  {
    text: "Łańcuch oddechowy znajduje się w wewnętrznej błonie mitochondrium Elektrony transportowane przez NADH i FADH2 przepływają przez kompleksy białkowe stopniowo tracąc energię Energia ta służy do pompowania protonów do przestrzeni międzybłonowej i wytworzenia gradientu protonowego Powrót protonów przez syntazę ATP umożliwia syntezę dużych ilości ATP Tlen pełni funkcję ostatecznego akceptora elektronów i redukuje się do wody"
  },
  {
    text: "Oddychanie tlenowe jest najbardziej wydajnym sposobem pozyskiwania energii przez komórkę Z jednej cząsteczki glukozy powstaje średnio około 30–32 cząsteczek ATP Największy udział w produkcji energii ma łańcuch oddechowy i fosforylacja oksydacyjna Proces prowadzi do całkowitego utlenienia glukozy do dwutlenku węgla i wody"
  },
  {
    text: "Fermentacja jest procesem beztlenowym zachodzącym wyłącznie w cytozolu Składa się z glikolizy oraz etapu regeneracji NAD+ potrzebnego do dalszego przebiegu glikolizy Ostatecznym akceptorem elektronów jest związek organiczny W fermentacji mlekowej produktem końcowym jest mleczan natomiast w fermentacji alkoholowej powstają etanol oraz dwutlenek węgla Zysk energetyczny fermentacji wynosi jedynie 2 ATP"
  },
  {
    text: "Niektóre bakterie i archeony przeprowadzają oddychanie beztlenowe z wykorzystaniem łańcucha oddechowego Proces zachodzi bez udziału tlenu jednak w przeciwieństwie do fermentacji wykorzystuje transport elektronów i gradient protonowy Ostatecznym akceptorem elektronów są związki nieorganiczne takie jak azotany(V) siarczany(VI) lub dwutlenek węgla Oddychanie beztlenowe dostarcza więcej energii niż fermentacja lecz mniej niż oddychanie tlenowe"
  },
  {
    text: "Oddychanie tlenowe oddychanie beztlenowe oraz fermentacja różnią się obecnością tlenu rodzajem akceptora elektronów wydajnością energetyczną i produktami końcowymi W oddychaniu tlenowym ostatecznym akceptorem elektronów jest tlen w oddychaniu beztlenowym – związek nieorganiczny a w fermentacji – związek organiczny Najwięcej ATP powstaje podczas oddychania tlenowego natomiast fermentacja jest najmniej wydajna energetycznie Procesy te umożliwiają organizmom funkcjonowanie w różnych warunkach środowiskowych i odgrywają ogromną rolę w ewolucji życia na Ziemi"
  }
];




const box = document.getElementById("infoBox");
const title = document.getElementById("infoTitle");
const text = document.getElementById("infoText");

function showPoint(index) {
    title.textContent = points[index].title;
    text.textContent = points[index].text;

    box.classList.remove("show");
    void box.offsetWidth; 
    box.classList.add("show");
}
