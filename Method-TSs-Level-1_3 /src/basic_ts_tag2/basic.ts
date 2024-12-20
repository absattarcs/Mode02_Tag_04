// variable
const values: any[] = [15.16698, 7.78714, "12.3", true, false, "321", "Supercode"];

// Functions
function toFixedAndLog(value: any) {
    if (typeof value === 'number' || typeof value === 'boolean') {
        console.log(`variable: ${value}`);
        console.log(`2 round up : ${Number(value).toFixed(2)}`);
    } else if (!isNaN(Number(value))) {
        const num = Number(value);
        console.log(`variable: ${value} (as number: ${num})`);
        console.log(`2 round up: ${num.toFixed(2)}`);
    } else {
        console.log(`variable: ${value} word cannot converted to number.`);
    }
    console.log('--------------------------');
}


values.forEach(value => toFixedAndLog(value));
