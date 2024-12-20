const susisStatus: string = 'Susi is going to school';


const part1: string = susisStatus.slice(0, 4); 
const part2: string = susisStatus.slice(5, 7); 
const part3: string = susisStatus.slice(5, 23); 
const part4: string = susisStatus.slice(17); 
const part5: string = susisStatus.slice(0, 4) + " "+ susisStatus.slice(5, 7) +" "+ susisStatus.slice(19); 

// HTML-Document
document.getElementById('part1')!.innerHTML = part1;
document.getElementById('part2')!.innerHTML = part2;
document.getElementById('part3')!.innerHTML = part3;
document.getElementById('part4')!.innerHTML = part4;
document.getElementById('part5')!.innerHTML = part5;
