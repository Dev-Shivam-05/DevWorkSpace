/**
 * Advanced Form Handler for Aamir Shaikh's Portfolio
 * Handles: Validation, Firebase, Excel, PDF, and Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('advancedContactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('formSuccess');
    const successName = document.getElementById('success-name');

    if (!contactForm) return;

    // 1. Real-time Validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        });
    });

    // 2. Form Submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!contactForm.checkValidity()) {
            e.stopPropagation();
            contactForm.classList.add('was-validated');
            return;
        }

        // Show Loading State
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').textContent = 'Processing...';
        submitBtn.querySelector('.spinner-border').classList.remove('d-none');

        // Gather Data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('booking-date').value || 'N/A',
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked,
        timestamp: new Date().toLocaleString()
    };

    // Add Loading Shimmer to Button
    submitBtn.classList.add('skeleton');

        try {
            // A. Simulate Firebase/Firestore Storage
            await simulateFirebaseStorage(formData);

            // B. Multi-channel Notifications
            await triggerNotifications(formData);

            // C. Generate Excel (.xlsx)
            generateExcel(formData);

            // D. Generate PDF Certificate
            generatePDF(formData);

            // Show Success
            contactForm.classList.add('d-none');
            successMsg.classList.remove('d-none');
            successName.textContent = formData.name;
            
            // Scroll to success message
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

        } catch (error) {
            console.error('Submission Error:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-text').textContent = 'Send Message';
            submitBtn.querySelector('.spinner-border').classList.add('d-none');
        }
    });

    // --- Helper Functions ---

    async function simulateFirebaseStorage(data) {
        console.log('Storing to Firebase/Firestore...', data);
        
        // Save to localStorage for Admin Dashboard demo
        const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
        submissions.push(data);
        localStorage.setItem('submissions', JSON.stringify(submissions));
        
        return new Promise(resolve => setTimeout(resolve, 1500));
    }

    async function triggerNotifications(data) {
        console.log('Triggering Multi-channel Notifications...');
        
        // 1. SMS (Twilio Simulation)
        console.log(`[SMS] Sending notification to Aamir (+91 9099885885): New lead from ${data.name}`);
        
        // 2. Email (Gmail Template Simulation)
        console.log(`[Email] Sending professional HTML template to ${data.email} and Aamir...`);
        
        // 3. Mailchimp Newsletter
        if (data.newsletter) {
            console.log(`[Newsletter] Adding ${data.email} to Mailchimp audience...`);
        }

        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    function generateExcel(data) {
        console.log('Generating Excel report...');
        const worksheet = XLSX.utils.json_to_sheet([data]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Submission");
        XLSX.writeFile(workbook, `Inquiry_${data.name.replace(/\s+/g, '_')}.xlsx`);
    }

    function generatePDF(data) {
        console.log('Generating PDF Certificate...');
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Design PDF
        doc.setFillColor(13, 110, 253);
        doc.rect(0, 0, 210, 20, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(18);
        doc.text("Inquiry Confirmation Certificate", 105, 13, { align: "center" });

        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.text(`Reference ID: ${Math.random().toString(36).substr(2, 9).toUpperCase()}`, 10, 35);
        doc.text(`Date: ${data.timestamp}`, 10, 45);

        doc.setFontSize(14);
        doc.text("Client Details:", 10, 60);
        doc.setFontSize(11);
        doc.text(`Name: ${data.name}`, 15, 70);
        doc.text(`Email: ${data.email}`, 15, 80);
        doc.text(`Phone: ${data.phone}`, 15, 90);

        doc.setFontSize(14);
        doc.text("Inquiry Summary:", 10, 110);
        doc.setFontSize(11);
        doc.text(`Subject: ${data.subject}`, 15, 120);
        doc.text(`Preferred Date: ${data.date}`, 15, 130);
        doc.text(`Message:`, 15, 140);
        doc.text(doc.splitTextToSize(data.message, 180), 15, 150);

        doc.setDrawColor(13, 110, 253);
        doc.setLineWidth(0.5);
        doc.line(10, 260, 200, 260);
        
        doc.setFontSize(10);
        doc.text("This is an automated certificate generated by Aamir Shaikh's Portfolio System.", 105, 270, { align: "center" });

        doc.save(`Certificate_${data.name.replace(/\s+/g, '_')}.pdf`);
    }
});
