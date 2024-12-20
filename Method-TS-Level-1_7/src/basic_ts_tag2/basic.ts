
const samsStatus = 'Sam is good at codingschool';

const part1: string = samsStatus.replace("good", "bad").replace("codingschool", "school"); 
const part2: string = samsStatus.replace("Sam", "Susi").replace("codingschool", "school"); 
const part3: string = samsStatus.replace("codingschool", "tennis");

document.getElementById('part1')!.innerHTML = part1;
document.getElementById('part2')!.innerHTML = part2;
document.getElementById('part3')!.innerHTML = part3;

