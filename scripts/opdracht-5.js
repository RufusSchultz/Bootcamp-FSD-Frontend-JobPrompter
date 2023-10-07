// -------------------- Variabelen -------------------------------- //

let consoleOutput = "";

// -------------------- Script -------------------------------- //

const userInputDepartment = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
if (userInputDepartment === "marketing" || userInputDepartment === "sales" || userInputDepartment === "customer-service") {
    consoleOutput = `${userInputDepartment} is een leuke afdeling om te werken. Er werken op dit moment ${departments[userInputDepartment].numberOfEmployees} medewerkers.`;
    console.log(consoleOutput);
} else {
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
    document.getElementById('error-message').textContent = `Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`;
}

const userInputJob = prompt(`Je koos ${userInputDepartment}. Over welke functie wile je meer weten?
Voer een getal tussen 0 en 3 in.
0: ${departments[userInputDepartment].jobs[0].title},
1: ${departments[userInputDepartment].jobs[1].title},
2: ${departments[userInputDepartment].jobs[2].title},
3: ${departments[userInputDepartment].jobs[3].title}`)

switch (userInputJob) {
    case "0":
        consoleOutput = `Je koos ${departments[userInputDepartment].jobs[0].title}. Een uitdagende rol! ${departments[userInputDepartment].jobs[0].description}`;
        console.log(consoleOutput);
        document.getElementById('role-title').textContent = `${departments[userInputDepartment].jobs[0].title}`;
        document.getElementById('department-description').textContent = `${departments[userInputDepartment].description}`;
        document.getElementById('role-description').textContent = `${departments[userInputDepartment].jobs[0].description}`;
        break;
    case "1":
        consoleOutput = `Je koos ${departments[userInputDepartment].jobs[1].title}. Een uitdagende rol! ${departments[userInputDepartment].jobs[1].description}`;
        console.log(consoleOutput);
        document.getElementById('role-title').textContent = `${departments[userInputDepartment].jobs[1].title}`;
        document.getElementById('department-description').textContent = `${departments[userInputDepartment].description}`;
        document.getElementById('role-description').textContent = `${departments[userInputDepartment].jobs[1].description}`;
        break;
    case "2":
        consoleOutput = `Je koos ${departments[userInputDepartment].jobs[2].title}. Een uitdagende rol! ${departments[userInputDepartment].jobs[2].description}`;
        console.log(consoleOutput);
        document.getElementById('role-title').textContent = `${departments[userInputDepartment].jobs[2].title}`;
        document.getElementById('department-description').textContent = `${departments[userInputDepartment].description}`;
        document.getElementById('role-description').textContent = `${departments[userInputDepartment].jobs[2].description}`;
        break;
    case "3":
        consoleOutput = `Je koos ${departments[userInputDepartment].jobs[3].title}. Een uitdagende rol! ${departments[userInputDepartment].jobs[3].description}`;
        console.log(consoleOutput);
        document.getElementById('role-title').textContent = `${departments[userInputDepartment].jobs[3].title}`;
        document.getElementById('department-description').textContent = `${departments[userInputDepartment].description}`;
        document.getElementById('role-description').textContent = `${departments[userInputDepartment].jobs[3].description}`;
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
        document.getElementById('error-message').textContent = `Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.`;
}



// document.getElementById('main-title').textContent = 'Rufus Schultz';
// document.getElementById('role-title').textContent = 'Rookworst';
