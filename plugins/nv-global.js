import {sticker} from '../lib/sticker.js';
const handler = (m) => m;

handler.all = async function(m, {conn}) {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.nv_global

  const chat = global.db.data.chats[m.chat];

  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup && !chat.isBanned && !m.fromMe) {
    const join = `${tradutor.texto1[0]} @${m.sender.split('@')[0]}, ${tradutor.texto1[1]} https://chat.whatsapp.com/LjJbmdO0qSDEKgB60qivZj`.trim();
    this.sendMessage(m.chat, {text: join.trim(), mentions: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...join.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": global.imagen6, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://www.atom.bio/theshadowbrokers-team`}}}, {quoted: m});
  }

  if (/^hola$/i.test(m.text) && !chat.isBanned) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Hola.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (/^que no$/i.test(m.text) && !chat.isBanned) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/queno.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(я тут|я здесь)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/ятут.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(что|где)/gi)) { 
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/что.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(хочу)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/хочу.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(оцтань|фууу)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/фуу.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(устал|надоело)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/устал.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(чистка|удаление)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/удалю.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(ты кто)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/ты кто.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(ржу|ха ха|хаха)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/тупой.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(заебали|не вызывайте|опять ты)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/сье.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(красотка|страшня я)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/страшная.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(сладких снов|доброй ночи)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/спать.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(спам)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/спам.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(афигеть|ппц)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/смех.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(сломайся)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/сломайся.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(порно стикеры)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/секс.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(бот|бот иди сюда)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/рожа.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(сладкая моя|роднулька)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/роднуль.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(здарова)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/привет.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(правила)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/правила.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(пошла на работу)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/пошла на работу.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(пошол на хуй|пошол нахуй)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/пошол нахуй.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(MuriÃ³ el grupo|Murio el grupo|murio el grupo|muriÃ³ el grupo|Grupo muerto|grupo muerto)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Murio.m4a';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(Feliz navidad|feliz navidad|Merry Christmas|merry chritmas)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/navidad.m4a';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(пошли спать|пойдем спать)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/пошла спать.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(давай знакомиться)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/давай знакомитьсяс.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(oni-chan|onichan|o-onichan)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Onichan.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(Pasa pack|vendes tu nudes|pasa video hot|pasa tu pack|pasa fotos hot|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|PÃ¡same tus fotos desnudas|pÃ¡same tu pack|me pasas tu pak|me pasas tu pack|pasa pack)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Elmo.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(QuiÃ©n es tu senpai botsito 7u7|Quien es tu senpai botsito 7u7|QuiÃ©n es tu sempai botsito 7u7|Quien es tu sempai botsito 7u7|QuiÃ©n es tu senpai botsito 7w7|Quien es tu senpai botsito 7w7|quiÃ©n es tu senpai botsito 7u7|quien es tu senpai botsito 7u7|QuiÃ©n es tu sempai botsito 7w7|Quien es tu sempai botsito 7w7|QuiÃ©n es tu senpai botsito|Quien es tu senpai botsito|QuiÃ©n es tu sempai botsito|Quien es tu sempai botsito|QuiÃ©n es tu senpai botsito|Quien es tu senpai botsito|quiÃ©n es tu senpai botsito|quien es tu senpai botsito|QuiÃ©n es tu sempai botsito|Quien es tu sempai botsito)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Tu.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(rawr|Rawr|RAWR|raawwr|rraawr|rawwr)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/rawr.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(siu|siiuu|ssiiuu|siuuu|siiuuu|siiiuuuu|siuuuu|siiiiuuuuu|siu|SIIIIUUU)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/siu.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(te amo|teamo)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Te-amo.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(ooo tio|tio que rico)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/oh_tio.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(un Pato| un pato|un pato que va caminando alegremente|Un pato|Un Pato)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/pato.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(UwU|uwu|Uwu|uwU|UWU)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/UwU.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(vetealavrg|vete a la vrg|vete a la verga)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/vete a la verga.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(fiesta viernes|viernes|Viernes|viernes fiesta)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/viernes.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(vivan!!|vivan los novios|vivanlosnovios)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/vivan.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(Yamete|yamete|Yamete kudasai|yamete kudasai)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Yamete-kudasai.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(epico|esto va a ser epico)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/Epico.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(shitpost)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/shitpost.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(no digas eso papu)/gi)) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[mconn.conn.user.jid].audios_bot && !m.isGroup) return;
    const vn = './media/nopapu.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  

  return !0;
};
export default handler;
