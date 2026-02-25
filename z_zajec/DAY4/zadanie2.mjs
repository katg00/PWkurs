async function deliverPackage(params) {
    return new Promise((resolve,reject) => {
        console.log("Paczka zamówiona...");

        setTimeout(() => {
            const success = Math.random() > 0.5; // w taki sposób można losowo wygenerować true lub false: czasem dostawa pizzy się uda, czasem nie

            if (success) {
                resolve("Paczka dostarczona!");
            } else {
                reject("Brak odbiorcy. Nie można dostarczyć paczki");
            }
        }, 3000);
    });
}

    try {
        const message = await deliverPackage(); // czekamy na Promise
        console.log(message);
    } catch (error) {
        console.log("Błąd:", error); // obsługa błędu
    }