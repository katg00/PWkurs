try {
    functionThatDoesntExist(); // wywołanie funkcji, której nie ma
} catch (error) {
console.log("Wystąpił błąd:", error.message);
} finally {
console.log("Zakończono blok try...catch");
}
