'use client'

import { Download, Printer } from 'lucide-react'
import { ResumeData, TemplateType } from '@/types/resume'

interface PrintDownloadActionsProps {
  resumeData: ResumeData
  template: TemplateType
}

// PUBLIC_INTERFACE
export function PrintDownloadActions({ resumeData, template }: PrintDownloadActionsProps) {
  const handlePrint = () => {
    const printContent = document.getElementById('resume-preview')
    if (printContent) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Resume - ${resumeData.personalInfo.fullName || 'Resume'}</title>
              <style>
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                body {
                  font-family: Arial, sans-serif;
                  -webkit-print-color-adjust: exact;
                  print-color-adjust: exact;
                }
                @page {
                  margin: 0.5in;
                  size: letter;
                }
                @media print {
                  body {
                    font-size: 12px;
                  }
                }
              </style>
              <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `)
        printWindow.document.close()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 500)
      }
    }
  }

  const handleDownloadPDF = async () => {
    try {
      // Import jsPDF dynamically to avoid SSR issues
      const { jsPDF } = await import('jspdf')
      const html2canvas = await import('html2canvas')
      
      const element = document.getElementById('resume-preview')
      if (element) {
        const canvas = await html2canvas.default(element, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        })
        
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4')
        
        const imgWidth = 210
        const pageHeight = 295
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        let heightLeft = imgHeight
        
        let position = 0
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
        
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          pdf.addPage()
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight
        }
        
        const fileName = `${resumeData.personalInfo.fullName || 'Resume'}_${template}.pdf`
        pdf.save(fileName)
      }
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again or use the print option.')
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
        title="Print Resume"
      >
        <Printer className="w-4 h-4" />
        Print
      </button>
      <button
        onClick={handleDownloadPDF}
        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
        title="Download as PDF"
      >
        <Download className="w-4 h-4" />
        PDF
      </button>
    </div>
  )
}
