export default async function handler(req, res) {
  const { email, lot } = req.body;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer re_dNhyJLid_6RwkpmPMUVBcCEZpiwEhZniV', // remplace
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: email,
      subject: '🎉 Félicitations, vous avez gagné !',
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:32px">
          <h1 style="color:#1a1a1a">Félicitations !</h1>
          <p>Vous avez gagné : <strong>${lot}</strong></p>
          <p>Rendez-vous au comptoir dédié du centre commercial pour récupérer votre lot.</p>
          <p style="color:#c9a84c"><strong>Vous avez 3 jours pour récupérer votre lot.</strong></p>
          <p style="color:#888;font-size:12px">Jeu réservé aux +18 ans.</p>
        </div>
      `
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}