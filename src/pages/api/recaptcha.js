const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET;
const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY;
console.log(secretKey);

const handler = async (req, res) => {
  const { token } = req.body;
  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/webcraft-studios-1717768473822/assessments?key=${secretKey}`,
    {
      method: 'POST',
      siteKey: siteKey,
      token: token,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    // console.log('Entries: ', Object.entries(body));
    console.log('Full body: ', data);
    if (data.success === true) {
      return res.status(200).send({ message: 'Success' });
    }
  }
  return res
    .status(402)
    .send({ message: "That didn't work, please try again" });
};
export default handler;
