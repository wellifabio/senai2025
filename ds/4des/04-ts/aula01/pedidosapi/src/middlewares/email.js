const nodemailer = require('nodemailer');

async function enviarEmail(email, senha) {
    // Configure o transporte SMTP (ajuste para seu provedor de e-mail)
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com', // Altere para o host SMTP real
        port: 587,
        secure: false, // true para 465, false para outros
        auth: {
            user: 'contacorporativa@hotmail.com', // Seu e-mail
            pass: 'SenhaDoSeuEmail' // Sua senha ou app password
        }
    });

    // Conteúdo do e-mail
    let mailOptions = {
        from: 'contacorporativa@hotmail.com',
        to: email,
        subject: 'Senha provisória para acesso',
        text: `Sua senha provisória é: ${senha}\nAcesse o sistema e altere sua senha assim que possível.`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado para', email);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
    }
}

module.exports = {enviarEmail};