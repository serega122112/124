
let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Введите @ или имя человека, которого вы хотите знать, если вы можете ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
🤤👅🥵 *Ты только что трахнул@!*🥵👅🤤

*Ты только что трахнул сучку* *${text}* ⁩ *буть осторожен..,теперь выебать могут тебя.." береги задницу!*

*${text}* 
🤤🥵 *¡УДАЧИ!* 🥵🤤`, null, { mentions: [user] })
}

handler.command = /^(секс|violar)/i
handler.fail = null

export default handler
