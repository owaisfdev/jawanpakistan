function marks(math, english, urdu) {
        math = parseInt(math);
        english = parseInt(english);
        urdu = parseInt(urdu);
      const totalmarks = 300;
      if (!(math >= 0 && math <= 100 && english >= 0 && english <= 100 && urdu >= 0 && urdu <= 100)) {
        document.write("Marks must be between 0 and 100!");
        return;
        }
      let obtmarks = math + english + urdu;
      let per = (obtmarks / totalmarks) * 100;

      let grade;
      if (per >= 80) grade = "A+";
      else if (per >= 70) grade = "A";
      else if (per >= 60) grade = "B";
      else if (per >= 50) grade = "C";
      else grade = "Fail";

      const output = `
MARK SHEET<br>
-------------------------<br>
Math: ${math}<br>
English: ${english}<br>
Urdu: ${urdu}<br>
-------------------------<br>
Obtained Marks: ${obtmarks}<br>
Total Marks: ${totalmarks}<br>
Percentage: ${per}%<br>
Grade: ${grade}`;

      document.write(output);
    }