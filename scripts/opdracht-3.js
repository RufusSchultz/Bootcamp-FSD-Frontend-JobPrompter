const userInput = prompt("Je koos marketing. Over welke functie wil je meer weten? \nVoer een getal tussen 0 en 3 in:" +
    "\n0: " + departments.marketing.jobs[0].title + "," +
    "\n1: " + departments.marketing.jobs[1].title + "," +
    "\n2: " + departments.marketing.jobs[2].title + "," +
    "\n3: " + departments.marketing.jobs[3].title);

switch (userInput) {
    case "0":
        console.log("Je koos " + departments.marketing.jobs[0].title + ". Een uitdagende rol! " + departments.marketing.jobs[0].description);
        break;
    case "1":
        console.log("Je koos " + departments.marketing.jobs[1].title + ". Een uitdagende rol! " + departments.marketing.jobs[1].description);
        break;
    case "2":
        console.log("Je koos " + departments.marketing.jobs[2].title + ". Een uitdagende rol! " + departments.marketing.jobs[2].description);
        break;
    case "3":
        console.log("Je koos " + departments.marketing.jobs[3].title + ". Een uitdagende rol! " + departments.marketing.jobs[3].description);
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");

}