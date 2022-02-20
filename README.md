# Inlämningsuppgift 3: TodoMVC
Skriv er egen version av [den kända exempelappen TodoMVC](https://todomvc.com/examples/backbone/) med HTML, CSS och JavaScript.

## Funktionalitet
Er app ska ha samma funktionalitet som [exemplet](https://todomvc.com/examples/backbone/), inklusive följande:

- Lägga till anteckningar.
- Ta bort anteckningar.
- Markera anteckningar som färdiga.
- Se hur många ofärdiga anteckningar som återstår ("X items left").
- Markera alla anteckningar som färdiga/ofärdiga (nedåtpilen till vänster om textfältet).
- Ta bort alla färdiga anteckningar ("Clear completed").
- Visa upp antingen alla anteckningar ("All"), alla ofärdiga anteckningar ("Active") eller alla färdiga anteckningar ("Completed").

Ni ska dock **inte** implementera följande funktionalitet:

- URL-hantering (att knapparna "All", "Active" och "Completed" ändrar på URL:en).
- Att anteckningar kan redigeras genom att dubbelklicka på dem.
- Automatiskt spara anteckningarna så att de finns kvar även när sidan laddas om.

## Utseende
Utseendet ska också vara samma som exemplet, förutom följande:

- Er design ska, till skillnad från exemplet, vara responsiv. Ni bedömer själva hur detta bäst görs.
- Vänsterkolumnen (som beskriver ramverket Backbone.js) ska inte vara med.
- Istället för ikonerna som exemplet använder till vissa knappar kan ni istället använda följande:
    - För checkrutan till vänster om varje anteckning räcker det med en vanlig `<input type="checkbox">`, med större bredd/höjd än standard.
    - För krysset som används för att ta bort enstaka anteckningar räcker det med följande emoji: ❌
    - För nedåtpilen till vänster om textfältet räcker det med följande emoji: 🔽
- Ni behöver inte återskapa "pappershög"-effekten under listan över anteckningar. Skuggan runt huvudinnehållet ska dock finnas med.

Till skillnad från tidigare inlämningsuppgifter behöver ni här återskapa samma design som i exemplet, inklusive typsnitt, marginaler, textstorlekar, etc. Det är dock tillåtet att välja andra färger och/eller bakgrundsgrafik, om ni vill göra den till "er egen".

## Tester
Ni ska skriva följande tre GUI-tester med Selenium:

1. Lägg till en anteckning och bekräfta att den visas på sidan.
2. Lägg till en anteckning och bekräfta att sidan visar "1 item left". Kryssa sedan i anteckningen och bekräfta att sidan visar "0 items left".
3. Lägg till 3 anteckningar, kryssa i en av dem och bekräfta att sidan visar "2 items left".

## Övrigt
- Den kod som ni lämnar in ska vara er egen, men det är OK att inspektera källkoden till exemplet och vid behov låna enstaka värden eller enstaka kodrader därifrån. (Detta behöver ni exempelvis göra för att välja rätt färger och textstorlekar.)
- Denna uppgift har ingenting med designmönstret MVC (Model-View-Controller) att göra, trots namnet TodoMVC. Ni behöver inte och bör inte implementera detta designmönster i er lösning. (Med andra ord: glömt helt bort begreppet MVC i det här sammanhanget.)
- Skriv all er HTML, CSS och JavaScript själva, utan ramverk och bibliotek.
- I övrigt gäller samma generella riktlinjer som tidigare kring exempelvis kodformatering och semantisk HTML.

## Samarbete
Denna inlämningsuppgift ska utföras och lämnas in i par.

## Betygsättning
Möjliga betyg: G och IG.

## Inlämning
1. Formatera och indentera er kod (HTML, CSS, JavaScript) på ett korrekt sätt, exempelvis med kommandot `Format Document` (`Shift+Alt+F`) i Visual Studio Code.
    - Om koden inte är korrekt formaterad och indenterad så kommer jag att be om komplettering utan att bedöma resten av er inlämning.
2. Gå med i en [projektgrupp](https://yh.pingpong.se/courseId/14519/projectGroupsList.do) i PingPong.
    - Gå med i en av de projektgrupper som börjar med "Inlämning 3". Ni behöver göra detta även om ni jobbar med samma person som till förra inlämningsuppgiften.
3. Lämna in följande [via PingPong](https://yh.pingpong.se/courseId/14519/content.do?id=6486101):
    1. ZIP-arkiv med samtliga filer (som tidigare).
    2. Länk till er TodoMVC på GitHub Pages, som en kommentar i PingPong (som tidigare).
