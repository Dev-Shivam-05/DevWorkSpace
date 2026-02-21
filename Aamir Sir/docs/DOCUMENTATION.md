# Aamir Shaikh Portfolio - Documentation

## Project Overview
This is a production-ready, highly interactive portfolio website for Aamir Shaikh. It is built using modern front-end technologies and includes advanced features like PWA, multi-channel notifications, and automated report generation.

## Technical Stack
- **Front-End**: HTML5, CSS3, Bootstrap 5, Vanilla JavaScript
- **Animations**: AOS (Animate On Scroll), Typed.js, Custom CSS Keyframes
- **PWA**: Service Workers, Web App Manifest
- **Reporting**: SheetJS (Excel), jsPDF (PDF Certificates)
- **Interactive**: Flatpickr (Booking), WhatsApp Integration

## Core Pages
1. **Home**: Hero section, technical skills, project carousel, testimonials, and newsletter.
2. **About**: Biography, education/work timeline, soft skills, and interactive web knowledge quiz.
3. **Services**: Service offerings with hover effects and pricing tiers.
4. **Portfolio**: Filterable project gallery with detail modals.
5. **Blog**: Article listings with search and categories.
6. **Contact**: Advanced form with real-time validation and multi-channel notification logic.
7. **Admin**: Dashboard to view and manage form submissions.

## Setup & Installation
1. Clone the repository.
2. No build step is required (Vanilla JS/HTML).
3. Open `index.html` in any modern browser.
4. For PWA and certain API features, it is recommended to use a local server (e.g., Live Server extension in VS Code).

## API Integration Guide
### 1. Firebase/Firestore
To enable real-time database storage:
- Create a Firebase project.
- Add your config to `assets/js/form-handler.js`.
- Replace `simulateFirebaseStorage` with actual `db.collection('submissions').add(data)`.

### 2. Email Notifications
Currently simulated. Recommended: **EmailJS**.
- Create an account at [emailjs.com](https://www.emailjs.com/).
- Replace the email logic in `triggerNotifications` with `emailjs.send()`.

### 3. Twilio (SMS)
Currently simulated. Requires a backend (Node.js/Serverless Function).
- Use Twilio SDK to send SMS upon form submission.

### 4. Mailchimp (Newsletter)
Currently simulated. 
- Use Mailchimp Marketing API to add subscribers.

## Maintenance Checklist
- [ ] **Daily**: Check Admin Dashboard for new inquiries.
- [ ] **Weekly**: Update blog content or project gallery.
- [ ] **Monthly**: Test form functionality and PWA offline support.
- [ ] **Quarterly**: Update technical skills and progress bars.

## Troubleshooting Guide
- **AOS Animations not working?** Ensure `AOS.init()` is called and the library is loaded via CDN.
- **PWA not installing?** Check `manifest.json` for correct icon paths and ensure you're on HTTPS or localhost.
- **Excel/PDF not generating?** Ensure SheetJS and jsPDF scripts are correctly included in `contact.html`.

---
*Created by Aamir Shaikh - 2026*
