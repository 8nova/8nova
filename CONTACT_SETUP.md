# Contact Form Setup Instructions

## EmailJS Configuration

The contact form is set up to send emails to `8nova555@gmail.com` using EmailJS. Follow these steps to complete the setup:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Create Email Service
- Go to "Email Services" in your EmailJS dashboard
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Connect your Gmail account
- Note down the Service ID (e.g., `service_xxxxxxx`)

### 3. Create Email Template
- Go to "Email Templates" in your EmailJS dashboard
- Click "Create New Template"
- Use this template content:

```
Subject: New Message from {{from_name}}

From: {{from_name}} ({{from_email}})
To: {{to_email}}

Message:
{{message}}

---
This message was sent from the 8Nova website contact form.
```

- Save the template and note down the Template ID (e.g., `template_xxxxxxx`)

### 4. Get Public Key
- Go to "Account" > "General" in your EmailJS dashboard
- Copy your Public Key

### 5. Update Configuration
- Open `src/config/emailConfig.js`
- Replace the placeholder values:
  - `serviceId`: Your EmailJS service ID
  - `templateId`: Your EmailJS template ID
  - `publicKey`: Your EmailJS public key

### 6. Test the Form
- Start your development server: `npm run dev`
- Go to the contact page
- Fill out and submit the form
- Check your email for the message

## Fallback Option

If EmailJS is not configured, the form will automatically fall back to opening the user's default email client with a pre-filled message to `8nova555@gmail.com`.

## Security Notes

- EmailJS handles email sending securely from the client-side
- No server-side code is required
- The public key is safe to use in client-side code
- EmailJS has built-in spam protection

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Emails not received**: Check spam folder, verify EmailJS service connection
- **Template errors**: Ensure template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`
