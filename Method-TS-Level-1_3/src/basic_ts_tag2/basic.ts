
const values: any[] = [15.16698, 7.78714, "12.3", "3.14random", "32px", true, false, "321", "Supercode"];


function convertAndLog(value: any) {
    if (typeof value === 'number' || typeof value === 'boolean') {
        console.log(`Wert: ${value}`);
        console.log(`Base 2: ${value.toString(2)}`);
        console.log(`Base 8: ${value.toString(8)}`);
        console.log(`Base 16: ${value.toString(16)}`);
    } else if (!isNaN(Number(value))) {
        const num = Number(value);
        console.log(`Wert: ${value} (als Zahl: ${num})`);
        console.log(`Base 2: ${num.toString(2)}`);
        console.log(`Base 8: ${num.toString(8)}`);
        console.log(`Base 16: ${num.toString(16)}`);
    } else {
        console.log(`Wert: ${value} kann nicht konvertiert werden.`);
    }
    console.log('--------------------------');
}

// Konvertiere und logge alle Werte
values.forEach(value => convertAndLog(value));
