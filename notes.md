> - [🪀 fun & games](#fun--games)
> - [👇 current to dos](#current-to-dos)
> - [👀 prev meetings](#prev-meetings)
> - [📝 random notes](#random-notes)

<hr><hr>

# fun & games

https://flexboxfroggy.com/

https://cssbattle.dev/

> do obiadu

https://www.youtube.com/watch?v=TL41NpYnhWo
https://www.youtube.com/watch?v=-e5nWsGgZXQ

> do tramwaju

https://medium.com/cssclass-com/how-to-create-pure-css-games-2a29c777bf4

# **current to dos**

- https://htmx.org/ <--- jak logicznie rozwiązać opóźnienia w ładowaniu tych elementów? (właściwy content też w osobnym pliku?)

- squarespace - kupić domenę https://domains.squarespace.com/
- recordy typu A - github
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

  To create A records, point your apex domain to the IP addresses for GitHub Pages.

  185.199.108.153

  185.199.109.153

  185.199.110.153

  185.199.111.153

  To create AAAA records, point your apex domain to the IP addresses for GitHub Pages.

2606:50c0:8000::153

2606:50c0:8001::153

2606:50c0:8002::153

2606:50c0:8003::153

- **!** dark mode (media queries; css variables / nesting)
- img -> picture + artybut role /aria-role
- a propos picture: wsteczna kompatybilność
- [schema](https://schema.org/) / microdata / https://schema.org/docs/gs.html <-- przydatne dla SEO i dla czytników ekranu, do anotacji zawartości strony
- HTMLX -> web app po podziale strony na podstrony

##### moje

- zastąpić h1 z tytułem - logiem / ostylowanym textem
- dodać formularz typu "dodaj swoją poradę"

- metody GET, POST - endpointy - baza danych na serwerze - what is going ooooon
- zrozumieć: framework
- class idzie do picture czy do img?
- czemuuu cały button nie jest klikalny (header nav)?
- dopracować content, żeby go ładnie otagować
- CSS: ogarnąć różnice flexów (inline, block itd.) --> box model

- temat strony -> domena (żeby później wykorzystać) **kinda done** mieszkanka.site / 1000thingsiwantedtobe.com
- dodawać content i media **forever in progress**

##### NA PÓŻNIEJ

- osobna szybka navi dla czytników jak tutaj: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (w inspektorze: od "\<ul id="nav-access" class="a11y-nav">\")
- breadcrums + otagowane schema
- ~~podział na podstrony zamiast one page (zgodnie z nav)~~ + otagowanie schema

#### > workflow

- prywatny komp: zreplikować błąd; sync/pull z gh przy uruchomieniu VSCode (albo chociaż info)
- pozbyć się Google Drive z tego równania
- dokończyć ustawienia/przegląd możliwości w VS Code
- wymyslić sposób pracy **in progress i guess?** (~~GDrive~~, GKeep notes, mobile code editing; do ogarnięcia: regularne sloty na pracę)
- doczytać jeszcze tagi semantyczne

## _side quests: mniej ważne albo do doczytania_

- CDN as Content Delivery Network
- HTTP methods
- **in progress** selektory do CSS / pseudoselector + specificity
- **in progress** CSS BEM
- doczytać o branchu origin **in progress** origin/main ->
- ligatury fontów
- CLI przypominajka mocno
- na kiedyś: notatki nie w markdownie, może html? chciałabym spis treści, linkowanie
- [dobrać fonty](https://www.monotype.com/font-pairing) **in progress, nie podoba mi się jeszcze**
- wypróbować staging commits
- doczytać: system zmian GDocs CRDT (czyli oparte na czasie) vs Git merge conflict (czyli spr, czy mają wpływ na siebie, porównują różnice i pyta)
- czy w md mogę ingerować w sposób stylowania?
- alternatywa typu code coach dla Copilota
- --> sprawdzić WebStorm (gdy będę mogła już zmigrować ustawienia z VS)
  (nieaktualne, do idead1) - obiekt/badge w CSS + modal/warstwa po kliku (a może jednak?!!!! da się to napisać w CSS, chyba!)
- skrócić czas wyświetlania wskazówek albo wydłużyć hover time, bo oszaleję xd
- problemy z odświeżaniem preview - inne rozszerzenie?

## ✅ already done

- 5 osobnych html z linkowaniem
- odkryłam podgląd darkMode w inspectorze (big wow)
- poprawić na więcej h1 na pojedynczej stronie (a style się ogarnie selektorami CSS w poszczególnych sekcjach)
- hasło staging commit **in progress** proces dzielenia na osobne commity zmian z jednego "czasu"; żeby był porządek w historii
- CSS: buttony w jednym rzędzie (flexbox? coś byłooo)
- index.html create - na razie tylko html ^ raw content, bez kombinacji **in progess forever**
- preview do VS code
- praca w folderze współdzielonym (służbowy komp + prywatny)
- Prettier formatter
- co mogę robić mobilne? tylko notes, apka do edytowania .html
- Copilot nightmare <--- wyłączony lol
- bullety na sekcje z headingami
- nagłówki h1 per sekcja
- CSS: klasa dla linków tylko w buttonie (żeby zabrać podkreślenie tylko im)
- grupowanie elementów w stylesheecie CSS

<hr><hr>

# **prev meetings**

## 19.08

🎵 **What I've Done.mp3** 🎶

- 1 header to rule them all
- nav, bez duplikatów w kodzie

## 11.08

- old way: <?php include("gdm.html") ?> & echo

## miejsce na problemy zauważone przy dzieleniu .html na 5 .html

- kopiowanie elementów typu header & footer?
- wszystko OK, dopóki najpierw robię całość, a potem dzielę (a nie robię od nowa 5x to samo)
- chwała bogu za podłączony stylesheet
- pusty link w nav przy aktualnej podstronie (ale też trzeba go osobno dla każdej podstrony)
- wykorzystanie kluczy (?), żeby nie wpisywać 5x tego samego tekstu
- muszę przygotować osobne meta (descrip, keywords, etc) do każdej podstrony
- zmodyfikowanie tytułów stron (nie dało się zautomatyzować...)

## 5.08

CSS jest językiem programowania! można w nim napisać działający program

media queries == różne style/stylesheets w zależności od urządzenia, jego ustawień, viewportu, etc.

> In CSS, use the @media at-rule to conditionally apply part of a style sheet based on the result of a media query. To conditionally apply an entire style sheet, use @import.

## 29.07

xml -> html

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

Zwróć uwagę na **parametr display=swap w linku**. Jest to zalecana praktyka (domyślna w Google Fonts), która pomaga poprawić wydajność. Powoduje, że tekst jest początkowo renderowany z domyślną czcionką systemową, a następnie przełącza się na czcionkę Google, gdy ta zostanie załadowana, zapobiegając "niewidzialnemu tekstowi podczas ładowania".

### comments in HTML (and generally)

< !-- HTML code you want to disable -- >
/_ CSS code you want to disable _/

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

**Język programowania** służy do tworzenia instrukcji, które komputer wykonuje, aby rozwiązać problem, przetworzyć dane, lub wykonać jakieś operacje. Języki programowania posiadają logikę, zmienne, pętle, warunki (np. if/else), funkcje, klasy itp. Przykłady to Python, Java, C++, JavaScript (używany po stronie klienta i serwera), PHP.

**Język znaczników** (markup language) służy do strukturyzowania i formatowania danych. Definiuje on, jak treść powinna być wyświetlana i zorganizowana, ale nie wykonuje żadnych operacji logicznych.
