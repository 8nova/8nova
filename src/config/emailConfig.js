// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from Account > API Keys
// 6. Replace the values below with your actual credentials

export const emailConfig = {
  serviceId: 'service_8nova', // Replace with your EmailJS service ID
  templateId: 'template_contact', // Replace with your EmailJS template ID
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your EmailJS public key
  toEmail: 'zakariasisu5@gmail.com'
}

// EmailJS Template Variables:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{message}} - Message content
// {{to_email}} - Recipient email (zakariasisu5@gmail.com)
