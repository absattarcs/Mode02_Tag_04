const infoAboutSam = "Sam is going to codingschool";
        const susi = "Susi";
        const and = "and";

        // replacing strings
        const sentence1 = infoAboutSam.replace("codingschool", "school").concat(" ", and, " to the movie theater.");
        const sentence2 = infoAboutSam.replace("codingschool", "the movie theater.");
        const sentence3 = susi.concat(" ", and, " Sam are going to school.");
        const sentence4 = susi.concat(" ", and, " Sam are going to gym ", and, " to the movie theater.");
        const sentence5 = susi.concat(" is going to school ", and, " to the movie theater.");

        // writing HTML document
        document.getElementById("output").innerHTML = `
            <p>${sentence1}</p>
            <p>${sentence2}</p>
            <p>${sentence3}</p>
            <p>${sentence4}</p>
            <p>${sentence5}</p>
        `;