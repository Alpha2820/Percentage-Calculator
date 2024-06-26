function percentageCalculator()
{
    var subject1 = parseFloat(document.getElementById('Subject1').value);
    var subject2 = parseFloat(document.getElementById('Subject2').value);
    var subject3 = parseFloat(document.getElementById('Subject3').value);
    var subject4 = parseFloat(document.getElementById('Subject4').value);
    var subject5 = parseFloat(document.getElementById('Subject5').value);
    var marksObtained = subject1+subject2+subject3+subject4+subject5;
    var percentage = parseFloat(document.getElementById('totalMarks').value);
    var result = (marksObtained/percentage)*100;
    document.getElementById('results').innerHTML = "Your Percentage is "+result.toFixed(2)+" % ";
}