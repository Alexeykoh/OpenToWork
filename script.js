const getPDFButton = document.getElementById('getPDF')
const pdfContetnt = document.getElementById('pdfContetnt')
getPDFButton.addEventListener('click', getPDF)

function getPDF() {
    var element = document.getElementById('pdfContetnt'); //replace with your element id
    var opt = {
        margin: 0.5,
        filename: 'AlexeyKohanovich_cv.pdf',
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 2.5 },
        jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
}