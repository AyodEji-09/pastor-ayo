"use server";

const TOKEN_URL = "https://api.sendpulse.com/oauth/access_token";

export async function getSendPulseToken() {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.SENDPULSE_CLIENT_ID,
      client_secret: process.env.SENDPULSE_CLIENT_SECRET,
    }),
  });

  if (!res.ok) throw new Error("SendPulse auth failed");

  const data = await res.json();
  return data.access_token;
}

export async function addEmailToSendPulse(email: string) {
  const token = await getSendPulseToken();

  const res = await fetch(
    `https://api.sendpulse.com/addressbooks/${process.env.SENDPULSE_ADDRESS_BOOK_ID}/emails`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        emails: [{ email }],
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }
}
