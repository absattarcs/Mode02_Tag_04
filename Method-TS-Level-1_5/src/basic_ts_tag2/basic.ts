
        const whereIsSusi = 'Susi is back from codingschool';

        const part1 = whereIsSusi.substring(0, 4); // 'Susi'
        const part2 = whereIsSusi.substring(5, 7); // 'is'
        const part3 = whereIsSusi.substring(24); // 'school'
        const part4 = whereIsSusi.substring(0, 4) + ' ' + whereIsSusi.substring(5, 7) + ' ' + whereIsSusi.substring(24); // 'Susi is school'

document.getElementById('part1')!.innerHTML = part1;
document.getElementById('part2')!.innerHTML = part2;
document.getElementById('part3')!.innerHTML = part3;
document.getElementById('part4')!.innerHTML = part4;
