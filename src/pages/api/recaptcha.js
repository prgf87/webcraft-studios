async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${req.body.token}`,
        }
      );
      const reCaptchaRes = await data.json();

      if (reCaptchaRes.success === true) {
        res.status(200).json({
          status: 'success',
          message: 'Enquiry submitted successfully',
        });
      } else {
        res.status(402).json({
          status: 'failure',
          message: 'Google ReCaptcha Failure',
        });
      }
    } catch (err) {
      res.status(405).json({
        status: 'failure',
        message: 'Error submitting the enquiry form',
      });
    }
  } else {
    res.status(405);
    res.end();
  }
}

export default handler;
