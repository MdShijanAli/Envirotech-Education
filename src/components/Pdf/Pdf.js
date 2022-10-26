import { Button } from '@material-tailwind/react';
import React from 'react';
import jsPDF from 'jspdf';
import logo from '../../images/shijan.jpg'

const Pdf = () => {
    const pdfGenerate = () => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(logo, 'PNG', 65, 20, 500, 400);
        doc.addPage()
        doc.setFont('Helvertica', 'bold')
        doc.text(60, 60, 'Name')
        doc.text(60, 80, 'Email')
        doc.text(60, 100, 'Phone')
        doc.setFont('Helvertica', 'normal')
        doc.text(100, 60, 'Md Shijan Ali')
        doc.text(100, 80, 'Shijan@gmail.com')
        doc.text(100, 100, '01571261165')


        doc.save('Course.pdf')
    }
    return (
        <div>
            <Button onClick={pdfGenerate} className='text-black bg-red-500'>Download</Button>
        </div>
    );
};

export default Pdf;