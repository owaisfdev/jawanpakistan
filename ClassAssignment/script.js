function generatemarksheet() {
    let rollnum = document.getElementById("rollnum").value.trim();
    let fname = document.getElementById("fname").value.trim();
    let error = document.getElementById("error");

    if (rollnum === "" || fname === "") {
        error.innerHTML = "Please fill the fields!";
    } else {
        error.innerHTML = "";
        let container = document.getElementById("marksheetdiv");

        let results = [
            {
                RollNum: 1,
                Name: "Owais",
                EnglishMarks: 90,
                UrduMarks: 90,
                MathMarks: 100
            },
            {
                RollNum: 2,
                Name: "Jbt",
                EnglishMarks: 75,
                UrduMarks: 67,
                MathMarks: 90,
            }
        ];
        let student = results.find(s => s.RollNum == rollnum && s.Name == fname);

        if (student) {
            let obtained = student.EnglishMarks + student.UrduMarks + student.MathMarks;
            let total = 300;
            let percentage = (obtained / total) * 100;

            let card = document.createElement("div");
            card.className = "studentfound";
            card.innerHTML = `
                <h2>Marksheet</h2>
                <div class="row"><span>Roll Number</span><span>${student.RollNum}</span></div>
                <div class="row"><span>Name</span><span>${student.Name}</span></div>
                <div class="row"><span>English Marks</span><span>${student.EnglishMarks}</span></div>
                <div class="row"><span>Urdu Marks</span><span>${student.UrduMarks}</span></div>
                <div class="row"><span>Math Marks</span><span>${student.MathMarks}</span></div>
                <div class="row"><span>Obtained Marks</span><span>${obtained}</span></div>
                <div class="row"><span>Total Marks</span><span>${total}</span></div>
                <div class="row"><span>Percentage</span><span>${percentage.toFixed(2)}%</span></div>
            `;
            container.innerHTML = "";
            container.appendChild(card);
        } else {
            let card = document.createElement("div");
            card.className = "nofounderror";
            card.innerHTML = "No record found!";
            container.innerHTML = "";
            container.appendChild(card);
        }
    }
}
