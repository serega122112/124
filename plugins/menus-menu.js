import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen2
//let vn = './Plugins/Audios/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `
╭「➻❥⎝⎝✧ХУЛИГАН✧⎠⎠➻❥」
│➯ *Создатель:➟Серёга*
│➯ **Номер➟79384135617*
│➯ *время работы:➟*${uptime}
︎╰───────────────╯
💥᭢━━━━━━━━━᭥💥᭢
╭─「➻❥ *Для админов* ➻❥」
° ඬ⃟👑 _*приветствие*
° ඬ⃟👑 _*прощание*
° ඬ⃟👑 _*описание*
° ඬ⃟👑 _*названиегруппы*
° ඬ⃟👑 _*сброситьссылку*
° ඬ⃟👑 _*добавить номер*
° ඬ⃟👑 _*внимание*
° ඬ⃟👑 _*датьадмина @номер*
° ඬ⃟👑 _*снятьадмина @номер*
° ඬ⃟👑 _*админы <текст>**
° ඬ⃟👑 _*группу открыть/закрыть*
° ඬ⃟👑 _*инфогруппы*
° ඬ⃟👑 _*снести @номер*
° ඬ⃟👑 _*снести2 @номер*
° ඬ⃟👑 _*молчуны*
° ඬ⃟👑 _*создатель*
° ඬ⃟👑 _*удалить*
° ඬ⃟👑 _*ссылка*
╰───────────────╯
💥᭢━━━━━━━━━᭥💥᭢
╭──「➻❥ *Аудио команды* ➻❥」
° ඬ⃟👽 _*плей <название песни>*
° ඬ⃟👽 _*басс <аудио>*
° ඬ⃟👽 _*взорван <аудио>*
° ඬ⃟👽 _*глубокий <аудио>*
° ඬ⃟👽 _*раковина <аудио>*
° ඬ⃟👽 _*быстрый <аудио>*
° ඬ⃟👽 _*найткор <аудио>*
° ඬ⃟👽 _*обратный <аудио>*
° ඬ⃟👽 _*робот <аудио>*
° ඬ⃟👽 _*медленный <аудио>*
° ඬ⃟👽 _*гладкий <аудио>*
╰───────────────╯
💥᭢━━━━━━━━━᭥💥᭢
╭─「➻❥*Для учасников*➻❥」
° ඬ⃟👽 _*стикер/с*
° ඬ⃟👽 _*умный @номер*
° ඬ⃟👽 _*какашка @номер*
° ඬ⃟👽 _*свадьба @номер*
° ඬ⃟👽 _*поцелуй @номер*
° ඬ⃟👽 _*радуга @номер*
° ඬ⃟👽 _*любовь @номер*
° ඬ⃟👽 _*дурак @номер*
° ඬ⃟👽 _*любит @номер*
° ඬ⃟👽 _*дура @номер*
° ඬ⃟👽 _*русский @номер*
° ඬ⃟👽 _*правда @номер*
° ඬ⃟👽 _*лучший @номер*
° ඬ⃟👽 _*якрасивая @номер*
° ඬ⃟👽 _*хитрый @номер*
° ඬ⃟👽 _*комплимент*
︎╰───────────────╯
💥᭢━━━━━━━━━᭥💥᭢
╭─「➻❥ *Команды для создателя* ➻❥」
° ඬ⃟😎 _*автоадмин*
° ඬ⃟😎 _*банчан*
° ඬ⃟😎 _*бан @номер*
° ඬ⃟😎 _*банлист*
° ඬ⃟😎 _*.разблокировать*
° ඬ⃟😎 _*списокблок*
° ඬ⃟😎 _*выйти*
° ඬ⃟😎 _*удалитьпрем*
° ඬ⃟😎 _*разбанчат*
° ඬ⃟😎 _*удалитьбан @номер*
° ඬ⃟😎 _*обьявление*
° ඬ⃟😎 _*обьявление2*
╰───────────────╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(меню|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null

export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
