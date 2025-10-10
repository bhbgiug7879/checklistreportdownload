import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  /**
   * Download checklist data as PDF
   * @param checklistData Array of checklist items or single checklist item
   */
  async downloadChecklistPdf(checklistData: any[] | any) {
    try {
      // Convert single object to array if needed
      const dataArray = Array.isArray(checklistData) ? checklistData : [checklistData];

      // Load logo image
      const logoUrl = 'https://d2q4gipm2ebkzp.cloudfront.net/icons/footer-logo.svg';
      let logoData: string | null = null;
      
      try {
        logoData = await this.loadImageAsBase64(logoUrl);
      } catch (error) {
        console.warn('Could not load logo:', error);
      }

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      dataArray.forEach((item, index) => {
        if (index > 0) {
          doc.addPage();
        }

        let currentY = 20;

        // ===== HEADER =====
        doc.setFillColor(41, 128, 185);
        doc.rect(0, 0, pageWidth, 30, 'F');

        // Add logo on the left side if available
        if (logoData) {
          try {
            doc.addImage(logoData, 'PNG', 10, 8, 25, 15); // x, y, width, height - adjusted size
          } catch (error) {
            console.warn('Could not add logo to PDF:', error);
          }
        }

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('Work Checklist Report', pageWidth / 2, 18, { align: 'center' });

        currentY = 40;

        // ===== PROJECT INFO & TEAM MEMBERS SIDE BY SIDE =====
        const leftX = 14;
        const rightX = pageWidth / 2 + 10;
        const columnWidth = (pageWidth / 2) - 24; // width for wrapping text

        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('Project Information', leftX, currentY);
        doc.text('Team Members', rightX, currentY);
        currentY += 3;

        // Lines under headers
        doc.setDrawColor(41, 128, 185);
        doc.setLineWidth(0.5);
        doc.line(leftX, currentY, pageWidth / 2 - 10, currentY);
        doc.line(rightX, currentY, pageWidth - 14, currentY);
        currentY += 8;

        const projectData = [
          ['Work Name', item.workName || 'N/A'],
          ['Project Name', item.projectName || 'N/A'],
          ['Date', item.date ? this.formatDate(item.date) : 'N/A']
        ];

        const teamData = [
          ['Frontend Developer', item.frontendDeveloperName || 'N/A'],
          ['Backend Developer', item.backentDeveloperName || 'N/A'],
          ['Manager', item.managerName || 'N/A'],
          ['Tested By', item.testedBy || 'No']
        ];

        doc.setFontSize(10);

        const maxRows = Math.max(projectData.length, teamData.length);

        for (let i = 0; i < maxRows; i++) {
          let leftTextHeight = 0;
          let rightTextHeight = 0;

          // LEFT COLUMN
          if (i < projectData.length) {
            const [label, value] = projectData[i];
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(60, 60, 60);
            doc.text(label + ':', leftX, currentY);

            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);

            const wrappedLeftText = doc.splitTextToSize(value, columnWidth - 25);
            doc.text(wrappedLeftText, leftX + 25, currentY);

            leftTextHeight = wrappedLeftText.length * 5;
          }

          // RIGHT COLUMN
          if (i < teamData.length) {
            const [label, value] = teamData[i];
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(60, 60, 60);
            doc.text(label + ':', rightX, currentY);

            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);

            const wrappedRightText = doc.splitTextToSize(value, columnWidth - 40);
            doc.text(wrappedRightText, rightX + 40, currentY);

            rightTextHeight = wrappedRightText.length * 5;
          }

          // move to next line based on tallest wrapped text
          currentY += Math.max(leftTextHeight, rightTextHeight, 7);
        }

        currentY += 5;

        // ===== ADDITIONAL DETAILS =====
        if (item.additionalDetails && item.additionalDetails.trim() !== '') {
          doc.setFontSize(14);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(0, 0, 0);
          doc.text('Additional Details', leftX, currentY);
          currentY += 3;

          doc.setDrawColor(41, 128, 185);
          doc.setLineWidth(0.5);
          doc.line(leftX, currentY, pageWidth - 14, currentY);
          currentY += 8;

          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          const splitDetails = doc.splitTextToSize(item.additionalDetails, pageWidth - 28);
          doc.text(splitDetails, leftX, currentY);
          currentY += (splitDetails.length * 5) + 10;
        }

        // ===== WORK TASKS TABLE =====
        if (item.workLists && item.workLists.length > 0) {
          doc.setFontSize(14);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(0, 0, 0);
          doc.text('Work Tasks Checklist', leftX, currentY);
          currentY += 3;

          doc.setDrawColor(41, 128, 185);
          doc.setLineWidth(0.5);
          doc.line(leftX, currentY, pageWidth - 14, currentY);
          currentY += 5;

          const tableData = item.workLists.map((task: any, taskIndex: number) => [
            (taskIndex + 1).toString(),
            task.taskName || 'N/A',
            task.verified ? 'Yes' : 'No',
            task.tested ? 'Yes' : 'No'
          ]);

          autoTable(doc, {
            startY: currentY,
            head: [['#', 'Task Name', 'Verified', 'Tested']],
            body: tableData,
            theme: 'striped',
            headStyles: {
              fillColor: [41, 128, 185],
              textColor: [255, 255, 255],
              fontStyle: 'bold',
              fontSize: 10,
              halign: 'center',
            },
            bodyStyles: {
              fontSize: 9,
              textColor: [0, 0, 0]
            },
            alternateRowStyles: {
              fillColor: [245, 245, 245]
            },
            columnStyles: {
              0: { cellWidth: 15, halign: 'center' },
              1: { cellWidth: 105 },
              2: { cellWidth: 30, halign: 'center' },
              3: { cellWidth: 30, halign: 'center' }
            },
            margin: { left: leftX, right: 14 },
          });

          const finalY = (doc as any).lastAutoTable.finalY || currentY;
          currentY = finalY + 10;
        }

        // ===== FOOTER =====
        const footerY = pageHeight - 15;
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(128, 128, 128);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, leftX, footerY);
        doc.text(`Page ${index + 1} of ${dataArray.length}`, pageWidth - 14, footerY, { align: 'right' });

        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.3);
        doc.line(leftX, footerY - 3, pageWidth - 14, footerY - 3);
      });

      // Save file
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
      const filename = `Checklist_Report_${timestamp}.pdf`;
      doc.save(filename);

      return true;
    } catch (error) {
      console.error('Error generating PDF:', error);
      return false;
    }
  }

  private async loadImageAsBase64(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        } else {
          reject(new Error('Could not get canvas context'));
        }
      };
      
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = url;
    });
  }

  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  private formatDate(timestamp: number): string {
    try {
      const date = timestamp.toString().length === 10
        ? new Date(timestamp * 1000)
        : new Date(timestamp);

      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };

      return date.toLocaleDateString('en-US', options);
    } catch (error) {
      return 'Invalid Date';
    }
  }
}