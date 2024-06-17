let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let optionsFull = `--------------------------------
*Вариант:* ✨ | ПРИВЕТСТВИЕ
*Команда:* /включить приветствие
*Descripción:* Включить или отключить приветствие в группе.
--------------------------------
*Вариант:* 🌎 | ОБЩЕСТВЕННЫЙ
*Команда:* /включить общественный
*Description:* Бот становится доступным для публичного и/или частного использования.
*Note:* Эта команда может быть использована только владельцами ботов.
--------------------------------
*Вариант:* 🔗 | АНТИССЫЛКА
*Команда:* /включить антиссылка
*Описание:* Активировать или деактивировать антиссылки WhatsApp.
*Примечание:* Вам необходимо активировать ограничение.
--------------------------------
*Вариант:* 🔗 | АНТИССЫЛКА 2
*Команда:* /включить антиссылка2
*Описание:* Включить или отключить анти-ссылки, начиная с HTTPS..
*Примечание:* Вам необходимо активировать ограничение.
--------------------------------
*Вариант:* 🔎 | ОБНАРУЖИТЬ
*Команда:* /включить обнаружить
*Описание:* Активировать или деактивировать уведомления об изменениях в группе.
--------------------------------
--------------------------------
*Вариант:* ❗ | ОГРАНИЧИТЬ
*Команда:* /включить ограничить
*Описание:* Включение или отключение ограничений для ботов, например удаление или добавление людей в группу.
*Примечание: * Эту команду могут использовать только владельцы бота..
--------------------------------
--------------------------------
*Вариант:* ☑️ | АВТОЧТЕНИЕ
*Команда:* /включить авточтение
*Описание:* Автоматически помечать сообщения и статусы как прочитанные.
*Примечание:* Эту команду могут использовать только владельцы ботов..
--------------------------------
*Вариант:* 🔊 | АУДИО
*Команда:* /включить аудио
*Описание:* Активирует или деактивирует аудиокоманды без префиксов, в группе.
--------------------------------
*Вариант:* 👾 | АВТОСТИКЕР
*Команда:* /включить автостикер 
*Описание:* Все изображения или видео, отправленные в группу, конвертируются в стикеры.. 
--------------------------------
*Вариант:* 💬 | ТОЛЬКО ПК
*Команда:* /включить толькоПК
*Описание:* Бот будет отвечать на Команды, только если это приватный чат.
*Примечание:* Эту команду могут использовать только владельцы ботов..
--------------------------------
*Вариант:* 🏢 | ТОЛЬКОГРУППЫ
*Команда:* /включить толькогруппы
*Описание: * Бот будет реагировать на командиров, только если это группа. 
*Примечание: * Эту команду могут использовать только владельцы бота..
--------------------------------
*Вариант:* ❌ | СКРЫТЫЙ 
*Команда:* /включить скрытый
*Описание:* Изображения, отправленные для просмотра только один раз, обычно повторно отправляются ботом.. 
--------------------------------
*Вариант:* 🤬 | АНТИМАТ
*Команда:* /включить антимат
*Описание: * Обнаруживает плохие слова и предупреждает участника группы, прежде чем будет устранен.
*Примечание. * Вам необходимо активировать ограничение.
--------------------------------
*Вариант:* 🕸️ | АНТИСПАМ
*Команда:* /включить антиспам
*Описание:* Бот обнаруживает длинные тексты, которые могут быть вирусами и вызывают задержку чата, и удаляет пользователя.
*Примечание:* Вам необходимо активировать ограничение.
--------------------------------
*Вариант:* 👎 | АНТИИНДУС
*Команда:* /включить антииндус
*Описание:* Если в группу зайдет индуский номер, Бот автоматически удаляет его.
*Примечание: * Необходимо активировать приветствие и ограничение.
--------------------------------
*Вариант:* 👎 | АНТИИНДУС
*Команда:* /включить антииндус
*Описание:* Если в группе пишет индуский номер, Бот автоматически ее удаляет.
*Примечание. * Необходимо активировать ограничение.
--------------------------------
*Вариант:* 🤖 | КОМАНДЫ
*Команда:* /включить команды
*Описание:* Включает или отключает использование Команд для бота. (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Примечание:* Эту команду могут использовать только владельцы ботов.
--------------------------------
*Вариант:* 👑 | ТОЛЬКОАДМИН
*Команда:* /включить толькоадмин
*Описание:* Бот будет отвечать только администраторам группы.
--------------------------------
*Вариант:* 😃 | SIMSIMI
*Команда:* /включить simsimi
*Описание:* Бот начнет отвечать на сообщения, используя искусственный интеллект SimSimi..
--------------------------------
*Вариант:* ⏳ | АНТИСПАМ
*Команда:* /включить антиспам
*Описание:* Бот определяет, когда пользователь спамит команду, блокирует его на 5 секунд и предупреждает..
*Примечание. * Эту команду можно использовать только в группе    antitraba
--------------------------------`.trim()

let isEnable = /true|включить|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружить':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'обнаружить2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break    
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'антиудаление':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'скрытый':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'порно':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'толькоадмин':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ограничить':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'толькоПК':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'толькогруппы':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'антивызов':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'антиличка':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'команды':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'антиспам':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antispam = isEnable    
break
case 'антимат':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'антивирус':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'антиспам':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
case 'антииндус':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab2 = isEnable  
break    
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, { text: optionsFull }, { quoted: m })
throw false
}
conn.sendMessage(m.chat, { text: `🧿 КОМАНДА: ${type}\n️🔮СТАТУС: ${isEnable ? 'ВКЛЮЧЕНА' : 'ВЫКЛЮЧЕНА'}\n🗂️КОМУ: ${isAll ? 'ЭТОМУ БОТУ' : isUser ? '' : 'ЭТОМУ ЧАТУ'}` }, { quoted: m })        
}
handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <option>')
handler.tags = ['group', 'owner']
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?[01])$/i

export default handler
