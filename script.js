window.onload=function(){
               document.getElementById('Download').addEventListener("click",()=>{
                              const invoice= this.document.getElementById('invoice_window');
                              var opt = {
                                             margin:       1,
                                             filename:     'invoice.pdf',
                                             image:        { type: 'png', quality: 0.98 },
                                             html2canvas:  { scale: 2 },
                                             jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                                           };
                                           html2pdf().set(opt).from(invoice).save();
               })
}