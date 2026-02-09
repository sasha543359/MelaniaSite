export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const ALLOWED_USER_IDS = process.env.TELEGRAM_USER_IDS.split(",").map((id) =>
    id.trim()
  );

  const text =
    `📩 *Nouă solicitare de pe site*\n\n` +
    `👤 *Nume:* ${name}\n` +
    `📞 *Telefon:* ${phone || "—"}\n` +
    `📧 *Email:* ${email}\n` +
    `📋 *Subiect:* ${subject || "—"}\n` +
    `💬 *Mesaj:*\n${message}`;

  try {
    const results = await Promise.all(
      ALLOWED_USER_IDS.map((chatId) =>
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        }).then((r) => r.json())
      )
    );

    const allOk = results.every((r) => r.ok);
    if (!allOk) {
      console.error("Telegram API errors:", results);
      return res.status(500).json({ error: "Failed to send some notifications" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
