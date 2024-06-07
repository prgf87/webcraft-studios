const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET;
console.log(secretKey);

const handler = async (req, res) => {
  const { token } = req.body;
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      secret: secretKey,
      response: token,
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
