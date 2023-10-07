const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");

switch (userInput) {
    case "marketing":
        console.log("Je koos " + userInput + ". " + departments.marketing.description);
        break;
    case "sales":
        console.log("Je koos " + userInput + ". " + departments.sales.description);
        break;
    case "customer-service":
        console.log("Je koos " + userInput + ". " + departments["customer-service"].description);
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}