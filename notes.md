> - [👇 current to dos](#current-to-dos)
> - [👀 prev meetings](#prev-meetings)
> - [📝 random notes](#random-notes)

<hr><hr>

# **current to dos**

#### > html

- temat strony -> domena (żeby później wykorzystać) **kinda done** mieszkanka.site / 1000thingsiwantedtobe.com
- dodawać content i media **forever in progress**
- metadata w headzie, [dobrać fonty](https://www.monotype.com/font-pairing) **in progress, nie podoba mi się jeszcze**
- CSS: klasa dla linków tylko w buttonie (żeby zabrać podkreślenie tylko im)
- CSS: buttony w jednym rzędzie (flexbox? coś byłooo)

#### > workflow

- skrócić czas wyświetlania wskazówek albo wydłużyć hover time, bo oszaleję xd
- sync/pull z gh przy uruchomieniu VSCode (albo chociaż info)
- pozbyć się Google Drive z tego równania
- problemy z odświeżaniem preview - inne rozszerzenie?
- dokończyć ustawienia/przegląd możliwości w VS Code
- wymyslić sposób pracy **in progress i guess?** (~~GDrive~~, GKeep notes, mobile code editing; do ogarnięcia: regularne sloty na pracę)

#### > know more

- doczytać jeszcze tagi semantyczne
- hasło staging commit **in progress** proces dzielenia na osobne commity zmian z jednego "czasu"; żeby był porządek w historii
- doczytać o branchu origin **in progress** origin/main ->
- CLI przypominajka mocno

## _side quests - mniej ważne, do doczytania_

- na kiedyś: notatki nie w markdownie, może html? chciałabym spis treści, linkowanie
- doczytać: system zmian GDocs CRDT (czyli oparte na czasie) vs Git merge conflict (czyli spr, czy mają wpływ na siebie, porównują różnice i pyta)
- czy w md mogę ingerować w sposób stylowania?
- alternatywa typu code coach dla Copilota
- --> sprawdzić WebStorm (gdy będę mogła już zmigrować ustawienia z VS)
  (nieaktualne, do idead1) - obiekt/badge w CSS + modal/warstwa po kliku

## ✅ already done

- index.html create
- na razie tylko html ^ raw content, bez kombinacji **in progess forever**
- preview do VS code
- praca w folderze współdzielonym (służbowy komp + prywatny)
- Prettier formatter
- co mogę robić mobilne? tylko notes, apka do edytowania .html
- Copilot nightmare <--- wyłączony lol
- bullety na sekcje z headingami

<hr><hr>

# **prev meetings**

## 29.07

🎵 **What I've Done.mp3** 🎶

- przypomniałam sobie md, żeby mniej się wkurzać na formę notatek (i więcej w nich widzieć)
- zmieniłam koncepcję contentu/tematyki strony 🙃 (czy ostatecznie? zobaczymy...)
- odkryłam [MDN Web Docs](https://developer.mozilla.org/en-US/)
- odpaliłam i podpięłam styles.css, żeby nie kombinować ręcznie ze stylowaniem
- przejrzałam tysiąc fontów i żaden mi się nie podoba :p
- poprawiłam sobie układ i nazwy folderów/repozytorium, nauczyłam się jak to edytować i od czego zależy połączenie Git<=>local (m.in. update nazwy repo w terminalu)
- stworzyłam Workspace w VSCode, żeby nie mieszać projektu z rzeczami, które czasem sobie tu otwieram

<br>

HOP do [👆 current to dos](#current-to-dos)

- mieszkanka.site ? jako nazwa domeny
- I'm struggling with content and decision making

## 15.07

- potencjał do rozwijania str: images/stories, linki do źródeł, poradników jak zacząć, people/groups to contact (może social media profiles z danego tematu) + wersje językowe + interakcja: formularz na dodawanie propozycji źródeł

## 24.06

- rzeczy stworzone przez korporację vs rzeczy uniwersalne
- na start: prosty front, zobaczymy gdzie poniesie
- junior w innej firmie?
- dużo czasu!
- co tydzień od 15.07 - check
- nie ma, że boli - chcesz albo nie chcesz
- co tydzień, next 15.07

### html idea 1

- started from kawalerka, now we're here
- olaboga mam mieszkanie i co teraz
- mieszkanie od dewelopera
- pov: jesteś debilem i kupujesz mieszkanie

- research: na co zwrócić uwagę; budżet przed: jak określić, ile wydać;
- skąd się bierze prąd? czyli z kim i co trzeba załatwić
- podatki i przepisy z dupy, czyli z czym do jakiego urzędu i o co chodzi notariuszowi
- wspólnota mieszkaniowa, sąsiedzi
- stolarz vs Ikea;
- zdjęcia/obrazy??? może np. kiepskie floor plany i jak je poprawić?
- co mnie zaskoczyło
- wzór umowy z majstrem do pobrania
- cały dział projektowanie: czego w ogóle chcesz od tego mieszkania?
- kredyt: po prostu idź do doradcy. serio. / nie rezygnuj z wakacji
- tricki architektoniczne, typu kolorowy sufit, ukryte drzwi

### html idea 2

- event planning
- stories from the 6 most demanding years of my life

thanks, I hate it

<hr><hr>

# **random notes**

## skróty VS Code

- ctrl + D -> zaznacz frazę/słowo; kolejny raz -> zaznacz kolejne i kolejne frazy (kolejny kursor)
- alt + click - kolejny kursor
- ctrl + fn + f2 - kolejny kursor na zaznaczonym tekście
- Markdown: triple click na preview -> przenosi do danego wiersza w .md

## HTML

### importowanie fontów z Google

Zawsze podawaj generyczną rodzinę czcionek (np. sans-serif, serif, monospace) jako rezerwę. Jeśli z jakiegoś powodu czcionka Google nie zostanie załadowana (np. problem z siecią), przeglądarka użyje domyślnej czcionki z tej generycznej rodziny, co poprawi doświadczenie użytkownika.

Nie importuj zbyt wielu czcionek ani stylów. Każda dodatkowa czcionka i styl zwiększa rozmiar strony i czas ładowania. Wybieraj tylko te, których naprawdę potrzebujesz.

Zwróć uwagę na parametr display=swap w linku. Jest to zalecana praktyka (domyślna w Google Fonts), która pomaga poprawić wydajność. Powoduje, że tekst jest początkowo renderowany z domyślną czcionką systemową, a następnie przełącza się na czcionkę Google, gdy ta zostanie załadowana, zapobiegając "niewidzialnemu tekstowi podczas ładowania".

### comments in HTML

< !-- code you want to disable -- >

You can use comments to temporarily disable part of your code so it’s not displayed by the browser.

### html is not case-sensitive

but it's nice to keep things lowercase and tidy :)

## Markdown

## lint w Markdown

In the context of Markdown, "linting" refers to the automated process of checking a Markdown file for stylistic and formatting errors. A "linter" is the tool that performs this analysis, flagging inconsistencies and potential problems that could affect the document's rendering or readability.

## ogólna terminologia itd.

### IDE

Note: Integrated Development Environments (IDEs) such as NetBeans (multiplatform, free), and WebStorm (multiplatform, not free) have more features than simple code editors but tend to be more complex than what you need at this stage in your learning journey.

### język programowania vs język znaczników

Język programowania służy do tworzenia instrukcji, które komputer wykonuje, aby rozwiązać problem, przetworzyć dane, lub wykonać jakieś operacje. Języki programowania posiadają logikę, zmienne, pętle, warunki (np. if/else), funkcje, klasy itp. Przykłady to Python, Java, C++, JavaScript (używany po stronie klienta i serwera), PHP.

Język znaczników (markup language) służy do strukturyzowania i formatowania danych. Definiuje on, jak treść powinna być wyświetlana i zorganizowana, ale nie wykonuje żadnych operacji logicznych.
