// -------------------- Opdracht-2 script -------------------------------- //

const userInputDepartment = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");

if (userInputDepartment === "marketing" || userInputDepartment === "sales" || userInputDepartment === "customer-service") {
    console.log(userInputDepartment + " is een leuke afdeling om te werken. Er werken op dit moment " + departments[userInputDepartment].numberOfEmployees + " medewerkers.");
} else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}

// -------------------- Opdracht-3 script -------------------------------- //

const userInputJob = prompt("Je koos " + userInputDepartment + ". Over welke functie wil je meer weten? \nVoer een getal tussen 0 en 3 in:" +
    "\n0: " + departments[userInputDepartment].jobs[0].title + "," +
    "\n1: " + departments[userInputDepartment].jobs[1].title + "," +
    "\n2: " + departments[userInputDepartment].jobs[2].title + "," +
    "\n3: " + departments[userInputDepartment].jobs[3].title);

switch (userInputJob) {
    case "0":
        console.log("Je koos " + departments[userInputDepartment].jobs[0].title + ". Een uitdagende rol! " + departments[userInputDepartment].jobs[0].description);
        break;
    case "1":
        console.log("Je koos " + departments[userInputDepartment].jobs[1].title + ". Een uitdagende rol! " + departments[userInputDepartment].jobs[1].description);
        break;
    case "2":
        console.log("Je koos " + departments[userInputDepartment].jobs[2].title + ". Een uitdagende rol! " + departments[userInputDepartment].jobs[2].description);
        break;
    case "3":
        console.log("Je koos " + departments[userInputDepartment].jobs[3].title + ". Een uitdagende rol! " + departments[userInputDepartment].jobs[3].description);
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}