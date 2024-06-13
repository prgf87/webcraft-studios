// const secretKey = process.env.GOOGLE_RECAPTCHA_SECRET;
// const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY;
// console.log(secretKey);
// console.log(siteKey);

// const handler = async (req, res) => {
//   const { token } = req.body;
//   console.log('TOKEN: ', token);
//   const response = await fetch({
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       event: {
//         siteKey: siteKey,
//         token: token,
//         expectedAction: 'homepage',
//       },
//     }),
//   });
//   const data = await response.json();
//   console.log('RESPONSE: ', data);

//   // if (response.status === 200) {
//   //   const data = await response.json();
//   //   // console.log('Entries: ', Object.entries(body));
//   //   console.log('Full body: ', data);
//   //   if (data.success === true) {
//   //     return res.status(200).send({ message: 'Success' });
//   //   }
//   // }
//   // return res
//   //   .status(402)
//   //   .send({ message: "That didn't work, please try again" });
// };
// export default handler;

// // `https://recaptchaenterprise.googleapis.com/v1/projects/webcraft-studios-1717768473822/assessments?key=${secretKey}`,

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

      console.log(
        'Response from Google reCaptcha verification API',
        reCaptchaRes
      );
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
