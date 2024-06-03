const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SG_EMAIL_API_KEY);

export default async function handler(req, res) {
  const { name, email, subject, message } = req.body;
  try {
    await sendgrid.send({
      to: 'reach-us@webcraftstudios.co.uk',
      from: 'info@anaknits.com',
      subject: `${subject}`,
      html: `${name} at ${email} has sent you a new message. 
      <br></br>
      <br></br>
      ${message}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}
