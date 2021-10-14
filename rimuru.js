const { 
  WAConnection: _WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const Client = require('./lib/simple')
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const WAConnection = Client.WAConnection(_WAConnection)
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const tele = require('telegraph-uploader')
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp');

/** Voting **/
const { addVote, deleteVote } = require("./lib/vote");
/** add file file nya itu ya **/

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { simih } = require('./lib/functionss')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const soune = fs.readFileSync('mp3/sound96.mp3')
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");
const Tag = "6285727492435"
/////////////////////////////////  cukup pake aja ya kak /////////////////////////////////////

var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const simple = require('./lib/simple.js')
let fakeimage = fs.readFileSync("./media/wpmobile.png")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./message/setting.json'))
banChats = true;
owner = setting.owner
ownerNumber = setting.ownerNumber
gamewaktu = setting.gamewaktu
ppbot = setting.ppbot
qris = setting.qris

/** prefix option **/
let multipref = false;
let oneprefix = true;
let noprefix = false;
let preff = "!"
// Database

let antivo = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
let antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));

let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
//hit
global.hit = {}
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

//entag
battre = 100
btre = 'Sisa Energi: buanyak'

// Sticker Cmd
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
_scommand.push(obj)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}

const getCmd = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return _scommand[position].chats
}
  
}



const checkSCommand = (id) => {
let status = false
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
status = true
}
})
return status
}
const getRespon = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return _respon[position].resp
    }
}

const getResponPosition = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getAllRespon = () => {
    const array = []
    Object.keys(_respon).forEach((i) => {
        array.push(_respon[i].txt)
    })
    return array
}

module.exports = rimuru = async (rimuru, editz) => {
try {
if (!editz.hasNewMessage) return
editz = editz.messages.all()[0]
if (!editz.message) return
if (editz.key && editz.key.remoteJid == 'status@broadcast') return
if (editz.key.id.startsWith('3EB0') && editz.key.id.length === 12) return
const { Functions }= require('./lib/functions.js');
global.ky_ttt
global.blocked
editz.message = (Object.keys(editz.message)[0] === 'ephemeralMessage') ? editz.message.ephemeralMessage.message : editz.message

const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const content = JSON.stringify(editz.message)
const from = editz.key.remoteJid
let isGroup = from.endsWith('@g.us')

/** vote **/
const isAntiviewonce = isGroup ? antivo.includes(from) : false;
const isAntidel = isGroup ? antidel.includes(from) : false;

const type = Object.keys(editz.message)[0]        
const cmd = (type === 'conversation' && editz.message.conversation) ? editz.message.conversation : (type == 'imageMessage') && editz.message.imageMessage.caption ? editz.message.imageMessage.caption : (type == 'videoMessage') && editz.message.videoMessage.caption ? editz.message.videoMessage.caption : (type == 'extendedTextMessage') && editz.message.extendedTextMessage.text ? editz.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
  // const prefix = /^[°Z•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•Zπ÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
  
  if (multipref) {
    var prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_•\/\\Â©^<+]/.test(cmd) ? cmd.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_+•\/\\Â©^<+]/gi)[0]: '-'
  } else if (noprefix) {
    prefix = ""
  } else if (oneprefix) {
    prefix = preff
  }
    
body = (type === 'conversation' && editz.message.conversation.startsWith(prefix)) ? editz.message.conversation : (type == 'imageMessage') && editz.message[type].caption.startsWith(prefix) ? editz.message[type].caption : (type == 'videoMessage') && editz.message[type].caption.startsWith(prefix) ? editz.message[type].caption : (type == 'extendedTextMessage') && editz.message[type].text.startsWith(prefix) ? editz.message[type].text : (type == 'listResponseMessage') && editz.message[type].singleSelectReply.selectedRowId ? editz.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && editz.message[type].selectedButtonId ? editz.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(editz.message[type].fileSha256.toString('base64')) !== null && getCmd(editz.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(editz.message[type].fileSha256.toString('base64')) : ""

if (prefix != "") {
  if (!body.startsWith(prefix)) {
    isCmdd = false
    comm = ""
  } else {
    isCmdd = true
    comm = body.slice(1).trim().split(" ").shift().toLowerCase()
  }
} else {
  isCmdd = false
  comm = body.trim().split(" ").shift().toLowerCase()
}
    
budy = (type === 'conversation') ? editz.message.conversation : (type === 'extendedTextMessage') ? editz.message.extendedTextMessage.text : ''
const command = comm
budy = (type === 'conversation') ? editz.message.conversation : (type === 'extendedTextMessage') ? editz.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
hit_today.push(command)
const arg = body.substring(body.indexOf(' ') + 1)
const ar = args.map((v) => v.toLowerCase())
const argz = body.trim().split(/ +/).slice(1)
const isCmd = isCmdd
if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
const q = args.join(' ')
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
const botNumber = rimuru.user.jid
const ownerNumber = setting.ownerNumber
const ownerName = setting.ownerName
const botName = setting.botName
let sender = isGroup ? editz.participant : editz.key.remoteJid
let senderr = editz.key.fromMe ? rimuru.user.jid : editz.key.remoteJid.endsWith('@g.us') ? editz.participant : editz.key.remoteJid
const totalchat = await rimuru.chats.all()
const groupMetadata = isGroup ? await rimuru.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = editz.key.fromMe ? rimuru.user.jid : rimuru.contacts[sender] || '-'
const pushname = editz.key.fromMe ? rimuru.user.name : conts.notify || conts.vname || conts.name || '-'
const mentionByTag = type == "extendedTextMessage" && editz.message.extendedTextMessage.contextInfo != null ? editz.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = type == "extendedTextMessage" && editz.message.extendedTextMessage.contextInfo != null ? editz.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
idttt = []
players1 = []
players2 = []
gilir = []
for (let t of ky_ttt){
idttt.push(t.id)
players1.push(t.player1)
players2.push(t.player2)
gilir.push(t.gilir)
}
const isTTT = isGroup ? idttt.includes(from) : false
isPlayer1 = isGroup ? players1.includes(sender) : false
isPlayer2 = isGroup ? players2.includes(sender) : false
const isBadword = isGroup ? grupbadword.includes(from) : false
const isOwner = ownerNumber.includes(senderr)
const isRegister = register.includes(sender)
const isPremium = premium.checkPremiumUser(sender, _premium)
const isSewa = _sewa.checkSewaGroup(from, sewa)
const isAfkOn = afk.checkAfkUser(sender, _afk)
const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isMuted = isGroup ? mute.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const isSimi = isGroup ? samih.includes(from) : false
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
////////// here button function///////////////////////////////
selectedButton = (type == 'buttonsResponseMessage') ? editz.message.buttonsResponseMessage.selectedButtonId : ''

responseButton = (type == 'listResponseMessage') ? editz.message.listResponseMessage.title : ''

const gcount = setting.gcount
const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = rimuru.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","listType": "SINGLE_SELECT","sections": list}}, {})
  return rimuru.relayWAMessage(po, {waitForAck: true})
}
const btrai = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": btre, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/♡.jpeg')} } }
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
function monospace(string) {
return '```' + string + '```'
}   
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

const reply = (teks) => {
  var ids = teks.includes('@') ? teks.split('@'): []
  let semdertag = []
  for (var con of ids) {
    semdertag.push(con.split(' ')[0]+'@s.whatsapp.net')
  }
  rimuru.sendMessage(from, teks, MessageType.text, {
    quoted: editz, thumbnail: fakeimage, contextInfo: {
      mentionedJid: semdertag }});
}


const sendMess = (hehe, teks) => {
rimuru.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? rimuru.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : rimuru.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: freply, contextInfo: { "mentionedJid": memberr } })
}
const sendText = (from, text) => {
rimuru.sendMessage(from, text, MessageType.text)
}
const textImg = (teks) => {
return rimuru.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./media/wpmobile.png')})
}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
}}}
const math = (teks) => {
return Math.floor(teks)
}
const kick = function(from, orangnya){
for (let i of orangnya){
rimuru.groupRemove(from, [i])
}
}
const kickMember = async(id, target = []) => {
let group = await rimuru.groupMetadata(id)
let owner = group.owner.replace("c.us", "s.whatsapp.net")
let me = rimuru.user.jid
for (i of target) {
if (!i.includes(me) && !i.includes(owner)) {
await rimuru.groupRemove(to, [i])
} else {
await rimuru.sendMessage(id, "Not Premited!", "conversation")
break
}
}
}
const add = function(from, orangnya){
rimuru.groupAdd(from, orangnya)
}
const sendKontak = (from, nomor, nama, org = "") => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
rimuru.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
const hideTag = async function(from, text){
let anu = await rimuru.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
rimuru.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')},
'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
const sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('selesai');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
if (error) return reply(`${error}`)
rimuru.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:editz})
fs.unlinkSync(asw)
});
});
});
}

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//<ini const button>//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await rimuru.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
rimuru.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await rimuru.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
rimuru.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const isRegistered = checkRegisteredUser(sender)
/////< ini Button Text>///////
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
rimuru.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
///////////// lanjut mass /////////////
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
rimuru.sendMessage(to, media, type, {quoted: freply, mimetype: mime, caption: text, thumbnail:fakeimage, contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
rimuru.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
rimuru.sendMessage(from, hasil, type, options).catch(e => {
rimuru.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
const promoteAdmin = async function(to, target=[]){
if(!target.length > 0) { return  reply("No target..") }
let g = await rimuru.groupMetadata(to)
let owner = g.owner.replace("c.us","s.whatsapp.net")
let me = rimuru.user.jid
for (i of target){
if (!i.includes(me) && !i.includes(owner)){
const res = await rimuru.groupMakeAdmin(to, [i])
}else{
reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
if (isRegistered) {
hayuk0 = '[√ VERIFIED]'
}
}
const limitAdd = (sender) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
position = i
}
}) 
if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
}
}
const demoteAdmin = async function(to, target=[]){
if(!target.length > 0) { return  reply("No target..") }
let g = await rimuru.groupMetadata(to)
let owner = g.owner.replace("c.us","s.whatsapp.net")
let me = rimuru.user.jid
for (i of target){
if (!i.includes(me) && !i.includes(owner)){
const res = await rimuru.groupDemoteAdmin(to, [i])
}else{
reply("NOT PREMITED")
}
}
}
let authorname = rimuru.contacts[from] != undefined ? rimuru.contacts[from].vname || rimuru.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	
function addMetadata(packname, author) {	
if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	
if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	
const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
return `./sticker/${name}.exif`	
})	
}
const isImage = (type === 'imageMessage')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night🌌'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
const levelRole = level.getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
}

////< DAFTAR BUTTON BY ⲂⲟⲦz ғᴀʀᴇʟ ʙᴏᴛᴢ࿐ > ////
const _0x34afcb=_0x5045;function _0x1daa(){const _0x280f82=['```KLIK\x20TOMBOL\x20DI\x20BAWAH\x20UNTUK\x20MELIHAT\x20LIST\x20PREMIUM\x0a\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz```','29871jAXcgc','\x20\x0a\x0aSebelum\x20Menggunakan\x20','34540VBrZdV','\x20\x0a\x0a\x20Fitur\x20Ini\x20Khusus\x20Member\x20Premium\x20Silahkan\x20Buy\x20Premium\x20Untuk\x20Menggunakan\x20Fitur\x20Ini\x20','24BYzBMb','⬡\x20BUY\x20PREMIUM\x20','3081505XeQgfD','8FMqTax','7njxfaO','1992epSyuw','menu','103415UPGYdA','⬡\x20DAFTAR\x20','6cDbzMS','1071TYIptK','⬡\x20MENU\x20','sewabot','Hai\x20kak\x20\x20','6813768Bhztdr','9474905rGjCwg','142171JdotuR'];_0x1daa=function(){return _0x280f82;};return _0x1daa();}(function(_0x4b7420,_0x33afbb){const _0x408d43=_0x5045,_0x3ed0a6=_0x4b7420();while(!![]){try{const _0x420be9=-parseInt(_0x408d43(0xcb))/0x1*(parseInt(_0x408d43(0xbe))/0x2)+-parseInt(_0x408d43(0xcd))/0x3*(parseInt(_0x408d43(0xbb))/0x4)+parseInt(_0x408d43(0xbd))/0x5*(-parseInt(_0x408d43(0xc4))/0x6)+parseInt(_0x408d43(0xbf))/0x7*(parseInt(_0x408d43(0xc9))/0x8)+-parseInt(_0x408d43(0xc5))/0x9*(-parseInt(_0x408d43(0xcf))/0xa)+-parseInt(_0x408d43(0xca))/0xb+-parseInt(_0x408d43(0xc0))/0xc*(-parseInt(_0x408d43(0xc2))/0xd);if(_0x420be9===_0x33afbb)break;else _0x3ed0a6['push'](_0x3ed0a6['shift']());}catch(_0x6095fe){_0x3ed0a6['push'](_0x3ed0a6['shift']());}}}(_0x1daa,0x7480b));function _0x5045(_0x407c1e,_0x2d43bd){const _0x1daa02=_0x1daa();return _0x5045=function(_0x504556,_0xb33c73){_0x504556=_0x504556-0xba;let _0x22c0d0=_0x1daa02[_0x504556];return _0x22c0d0;},_0x5045(_0x407c1e,_0x2d43bd);}const daftar1=_0x34afcb(0xc8)+pushname+'\x20'+ucapanWaktu+_0x34afcb(0xce)+botName+'\x20Verify\x20Terlebih\x20Dahulu\x20Ya\x20',daftar2='```Ketik\x20Tombol\x20Di\x20Bawah\x20Untuk\x20Verify\x20Kak\x0aⲂⲟⲦz\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐```',daftar3=[{'buttonId':prefix+'verify','buttonText':{'displayText':_0x34afcb(0xc3)},'type':0x1}],nomenu=[{'buttonId':prefix+_0x34afcb(0xc1),'buttonText':{'displayText':_0x34afcb(0xc6)},'type':0x1}],prem1='Hai\x20kak\x20\x20'+pushname+'\x20'+ucapanWaktu+_0x34afcb(0xba),prem2=_0x34afcb(0xcc),prem3=[{'buttonId':prefix+_0x34afcb(0xc7),'buttonText':{'displayText':_0x34afcb(0xbc)},'type':0x1}];

//////< FUNCTION LEVELING > ///////
var _0x2c15b3=_0x4415;(function(_0xae308f,_0x3ca7f6){var _0x35a8b0=_0x4415,_0x30f98f=_0xae308f();while(!![]){try{var _0x5de3e5=parseInt(_0x35a8b0(0x16a))/0x1*(-parseInt(_0x35a8b0(0x14f))/0x2)+parseInt(_0x35a8b0(0x19a))/0x3*(-parseInt(_0x35a8b0(0x19f))/0x4)+parseInt(_0x35a8b0(0x130))/0x5*(parseInt(_0x35a8b0(0x1a2))/0x6)+parseInt(_0x35a8b0(0x165))/0x7*(-parseInt(_0x35a8b0(0x14d))/0x8)+parseInt(_0x35a8b0(0x166))/0x9*(-parseInt(_0x35a8b0(0x16f))/0xa)+parseInt(_0x35a8b0(0x187))/0xb+parseInt(_0x35a8b0(0x189))/0xc;if(_0x5de3e5===_0x3ca7f6)break;else _0x30f98f['push'](_0x30f98f['shift']());}catch(_0x55228d){_0x30f98f['push'](_0x30f98f['shift']());}}}(_0x492d,0xcc8f2));if(isGroup&&!editz[_0x2c15b3(0x18a)][_0x2c15b3(0x147)]&&!level[_0x2c15b3(0x13a)](sender)&&isLevelingOn)try{level[_0x2c15b3(0x19b)](sender);const checkATM=atm['checkATMuser'](sender,_uang);if(checkATM===undefined)atm[_0x2c15b3(0x13f)](sender,_uang);const uangsaku=Math['floor'](Math['random']()*(0xf-0x19+0x1)+0x14);atm[_0x2c15b3(0x11c)](sender,uangsaku,_uang);const currentLevel=level[_0x2c15b3(0x141)](sender,_level),amountXp=Math['floor'](Math[_0x2c15b3(0x15a)]()*(0xf-0x19+0x1)+0x14),requiredXp=0xa*Math[_0x2c15b3(0x159)](currentLevel,0x2)+0x32*currentLevel+0x64;level[_0x2c15b3(0x1a9)](sender,amountXp,_level);if(requiredXp<=level['getLevelingXp'](sender,_level)){level[_0x2c15b3(0x16b)](sender,0x1,_level);const userLevel=level[_0x2c15b3(0x141)](sender,_level),fetchXp=0xa*Math[_0x2c15b3(0x159)](userLevel,0x2)+0x32*userLevel+0x64;reply(_0x2c15b3(0x190)+pushname+_0x2c15b3(0x13e)+level[_0x2c15b3(0x131)](sender,_level)+_0x2c15b3(0x1a8)+fetchXp+'\x0a➸\x20*Level\x20:*\x20'+currentLevel+_0x2c15b3(0x168)+level[_0x2c15b3(0x141)](sender,_level)+'\x20🆙\x20\x0a➸\x20*Role*:\x20*'+role+_0x2c15b3(0x191));}}catch(_0x4def20){console[_0x2c15b3(0x12e)](_0x4def20);}colors=[_0x2c15b3(0x151),_0x2c15b3(0x19d),_0x2c15b3(0x146),_0x2c15b3(0x13b),_0x2c15b3(0x15d),_0x2c15b3(0x15f)];const {quotedMsg,isQuotedMsg,isBaileys}=editz,isMedia=type===_0x2c15b3(0x144)||type===_0x2c15b3(0x15c),isQuotedImage=type==='extendedTextMessage'&&content[_0x2c15b3(0x13d)](_0x2c15b3(0x144)),isQuotedVideo=type===_0x2c15b3(0x19e)&&content[_0x2c15b3(0x13d)](_0x2c15b3(0x15c)),isQuotedAudio=type===_0x2c15b3(0x19e)&&content[_0x2c15b3(0x13d)](_0x2c15b3(0x193)),isQuotedSticker=type===_0x2c15b3(0x19e)&&content['includes'](_0x2c15b3(0x17b)),isVideo=type===_0x2c15b3(0x15c),isSticker=type=='stickerMessage',isListMsg=type==_0x2c15b3(0x1a4),isQuotedemage=isQuotedMsg?quotedMsg[_0x2c15b3(0x178)]===_0x2c15b3(0x144)?!![]:![]:![],isQuotediudio=isQuotedMsg?quotedMsg['type']===_0x2c15b3(0x193)?!![]:![]:![],isQuotedoideo=isQuotedMsg?quotedMsg[_0x2c15b3(0x178)]===_0x2c15b3(0x15c)?!![]:![]:![],isQuotedpticker=isQuotedMsg?quotedMsg[_0x2c15b3(0x178)]===_0x2c15b3(0x17b)?!![]:![]:![],createSerial=_0xc8433a=>{var _0x53e3be=_0x2c15b3;return crypto[_0x53e3be(0x15e)](_0xc8433a)[_0x53e3be(0x14b)](_0x53e3be(0x17a))['slice'](0x0,_0xc8433a);};isGroup&&isAntiLink&&!isOwner&&!isGroupAdmins&&isBotGroupAdmins&&(budy[_0x2c15b3(0x163)](/(https:\/\/chat.whatsapp.com)/gi)&&(reply(_0x2c15b3(0x180)),rimuru[_0x2c15b3(0x13c)](from,[sender])));if(fs[_0x2c15b3(0x139)]('./lib/vote/'+from+_0x2c15b3(0x1aa))&&fs[_0x2c15b3(0x139)]('./lib/'+from+_0x2c15b3(0x1aa))&&isGroup){if(budy['toLowerCase']()===_0x2c15b3(0x181)){var vote=JSON[_0x2c15b3(0x171)](fs['readFileSync'](_0x2c15b3(0x18b)+from+_0x2c15b3(0x1aa))),_votes=JSON[_0x2c15b3(0x171)](fs[_0x2c15b3(0x1ad)](_0x2c15b3(0x150)+from+_0x2c15b3(0x1aa))),fil=vote[_0x2c15b3(0x162)](_0x205c5c=>_0x205c5c[_0x2c15b3(0x173)]);if(fil[_0x2c15b3(0x13d)](sender))return mentions('@'+sender[_0x2c15b3(0x145)]('@')[0x0]+_0x2c15b3(0x158),fil,!![]);else{vote[_0x2c15b3(0x153)]({'participant':sender,'voting':'✅','voted':sender}),fs['writeFileSync'](_0x2c15b3(0x18b)+from+_0x2c15b3(0x1aa),JSON[_0x2c15b3(0x1ac)](vote));let _p=[],_vote=_0x2c15b3(0x194)+'@'+_votes[0x0][_0x2c15b3(0x17e)][_0x2c15b3(0x145)]('@')[0x0]+(_0x2c15b3(0x161)+_votes[0x0][_0x2c15b3(0x18d)]+_0x2c15b3(0x1a3)+vote['length']+_0x2c15b3(0x16e)+_votes[0x0]['durasi']+'\x20Menit\x0a\x0a');for(let i=0x0;i<vote['length'];i++){_vote+='@'+vote[i][_0x2c15b3(0x173)]['split']('@')[0x0]+_0x2c15b3(0x124)+vote[i][_0x2c15b3(0x177)]+'\x0a\x0a',_p['push'](vote[i][_0x2c15b3(0x173)]);}_p[_0x2c15b3(0x153)](_votes[0x0][_0x2c15b3(0x17e)]),mentions(_vote,_p,!![]);}}else{if(budy['toLowerCase']()===_0x2c15b3(0x128)){var vote=JSON['parse'](fs['readFileSync'](_0x2c15b3(0x18b)+from+_0x2c15b3(0x1aa))),_votes=JSON[_0x2c15b3(0x171)](fs[_0x2c15b3(0x1ad)](_0x2c15b3(0x150)+from+'.json')),fil=vote[_0x2c15b3(0x162)](_0x3b724c=>_0x3b724c['participant']);if(fil[_0x2c15b3(0x13d)](sender))return mentions('@'+sender['split']('@')[0x0]+_0x2c15b3(0x158),fil,!![]);else{vote['push']({'participant':sender,'voting':'❌','devote':sender}),fs[_0x2c15b3(0x1ab)](_0x2c15b3(0x18b)+from+_0x2c15b3(0x1aa),JSON[_0x2c15b3(0x1ac)](vote));let _p=[],_vote=_0x2c15b3(0x194)+'@'+_votes[0x0][_0x2c15b3(0x17e)][_0x2c15b3(0x145)]('@')[0x0]+(_0x2c15b3(0x161)+_votes[0x0][_0x2c15b3(0x18d)]+_0x2c15b3(0x1a3)+vote[_0x2c15b3(0x197)]+_0x2c15b3(0x16e)+_votes[0x0]['durasi']+_0x2c15b3(0x129));for(let i=0x0;i<vote['length'];i++){_vote+='@'+vote[i][_0x2c15b3(0x173)][_0x2c15b3(0x145)]('@')[0x0]+'\x0a*Vote*\x20:\x20'+vote[i]['voting']+'\x0a\x0a',_p[_0x2c15b3(0x153)](vote[i][_0x2c15b3(0x173)]);}_p[_0x2c15b3(0x153)](_votes[0x0]['votes']),mentions(_vote,_p,!![]);}}}}if(isGroup&&isAntiviewonce&&type==_0x2c15b3(0x119)){rimuru['sendMessage'](from,'@'+sender[_0x2c15b3(0x145)]('@')[0x0]+_0x2c15b3(0x172),text,{'quoted':editz,'contextInfo':{'mentionedJid':[sender]}});var msg={...editz};msg[_0x2c15b3(0x117)]=editz[_0x2c15b3(0x11f)]['viewOnceMessage'][_0x2c15b3(0x11f)],msg[_0x2c15b3(0x117)][Object[_0x2c15b3(0x133)](msg[_0x2c15b3(0x117)])[0x0]][_0x2c15b3(0x121)]=![],rimuru[_0x2c15b3(0x185)](from,msg);}if(isGroup&&isBadword&&!isOwner&&!isGroupAdmins&&!fromMe)for(let kasar of badword){if(chats[_0x2c15b3(0x137)]()[_0x2c15b3(0x13d)](kasar)){if(isCountKasar(sender,senbadword)){if(!isBotGroupAdmins)return reply(_0x2c15b3(0x15b));reply(_0x2c15b3(0x1a0)),rimuru[_0x2c15b3(0x13c)](from,[sender]),delCountKasar(sender,senbadword);}else addCountKasar(sender,senbadword),reply('Kamu\x20terdeteksi\x20berkata\x20kasar\x0aJangan\x20ulangi\x20lagi\x20atau\x20kamu\x20akan\x20dikick');}}isGroup&&isBaileys&&(mentioned[_0x2c15b3(0x197)]>=groupMembers['length']&&(!chats['match'](/(@)/gi)&&mentions(_0x2c15b3(0x12d)+sender[_0x2c15b3(0x145)]('@')[0x0]+_0x2c15b3(0x1a5),[sender],![])));async function uptotele(_0x180ad8){var _0x43ce1d=_0x2c15b3,_0x547416=await tele[_0x43ce1d(0x19c)](fs[_0x43ce1d(0x1ad)](_0x180ad8));return _0x547416['link'];}_sewa['expiredCheck'](rimuru,sewa);if(isMuted){if(!isGroupAdmins&&!isPremium)return;}const getWin=_0x17369a=>{var _0x1006f7=_0x2c15b3;let _0x5dd03a=![];Object[_0x1006f7(0x133)](_win)[_0x1006f7(0x17f)](_0x244eae=>{var _0x271677=_0x1006f7;_win[_0x244eae][_0x271677(0x17c)]===_0x17369a&&(_0x5dd03a=_0x244eae);});if(_0x5dd03a!==![])return _win[_0x5dd03a][_0x1006f7(0x160)];};game[_0x2c15b3(0x176)](rimuru,family100);if(tebakgambar[_0x2c15b3(0x174)](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakgambar[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy['toLowerCase']()==jawaban){var http=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,http,_uang),await reply(_0x2c15b3(0x12b)+http+_0x2c15b3(0x11d)+prefix+_0x2c15b3(0x152)),delete tebakgambar[sender['split']('@')[0x0]],fs['writeFileSync'](_0x2c15b3(0x170),JSON[_0x2c15b3(0x1ac)](tebakgambar));}}if(game[_0x2c15b3(0x155)](from,family100)){var anjuy=game['getjawaban100'](from,family100);for(let i of anjuy){if(budy[_0x2c15b3(0x137)]()[_0x2c15b3(0x13d)](i)){var htgmp=Math[_0x2c15b3(0x11b)](Math[_0x2c15b3(0x15a)]()*0x14)+0x1;atm['addKoinUser'](sender,htgmp,_uang),await reply('*Jawaban\x20benar*\x0a*Jawaban\x20:*\x20'+i+_0x2c15b3(0x11a)+htgmp+_0x2c15b3(0x18f)+(anjuy[_0x2c15b3(0x197)]-0x1));var anug=anjuy[_0x2c15b3(0x18c)](i);anjuy[_0x2c15b3(0x134)](anug,0x1);}}anjuy['length']<0x1&&(rimuru[_0x2c15b3(0x186)](from,_0x2c15b3(0x12c)+prefix+'family100*\x20untuk\x20bermain\x20lagi',text),family100['splice'](game[_0x2c15b3(0x1a6)](from,family100),0x1));}if(tebakanime[_0x2c15b3(0x174)](sender['split']('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakanime[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy[_0x2c15b3(0x137)]()==jawaban){var htgmu=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htgmu,_uang),await reply(_0x2c15b3(0x183)+htgmu+_0x2c15b3(0x11d)+prefix+'tebakanime*'),delete tebakanime[sender[_0x2c15b3(0x145)]('@')[0x0]],fs['writeFileSync']('./database/tebakanime.json',JSON[_0x2c15b3(0x1ac)](tebakanime));}}function _0x492d(){var _0xa55516=['parse','\x20Terdeteksi\x20mengirim\x20gambar/video\x20viewonce!','participant','hasOwnProperty','tebakbendera*','cekWaktuFam','voting','type','*_🎮\x20Tebak\x20Siapakah\x20Aku\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','hex','stickerMessage','jid','tebaklagu*','votes','forEach','*「\x20GROUP\x20LINK\x20DETECTOR\x20」*\x0a\x0a\x20karena\x20kamu\x20melanggar\x20aturan\x20group,\x20yaitu\x20menggirim\x20link\x20group\x20kamu\x20akan\x20di\x20kick\x20dari\x20group!','vote','*_🎮\x20Tebak\x20Jenaka\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','*_🎮\x20Tebak\x20Anime\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','tebakkimia*','copyNForward','sendMessage','17706898HhzdaV','.png','15529536vGYXfi','key','./lib/','indexOf','reason','./database/tebaklirik.json','\x0a*Jawaban\x20yang\x20blum\x20tertebak\x20:*\x20','*「\x20LEVEL\x20UP\x20」*\x0a\x0a➸\x20*Nama\x20:*\x20','*\x0a\x0aCongrats!!\x20🎉🎉','HH:mm:ss','audioMessage','*Vote*\x20','webpmux\x20-set\x20exif\x20./src/sticker/data.exif\x20','./database/tebaktebakan.json','length','*_🎮\x20Tebak\x20Lirik\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','*_🎮\x20Tebak\x20Kimia\x20??_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','210vKAaMW','addCooldown','uploadByBuffer','white','extendedTextMessage','67492NgPnAr','*「\x20ANTI\x20BADWORD\x20」*\x0a\x0aSepertinya\x20kamu\x20sudah\x20berkata\x20kasar\x20lebih\x20dari\x205x,\x20maaf\x20kamu\x20akan\x20di\x20kick','Asia/Jakarta','192UmqOsH','\x0a*Jumlah\x20Vote*\x20:\x20','listResponseMessage','\x20melakukan\x20hidetag','getfamposi','./database/asahotak.json','\x20/\x20','addLevelingXp','.json','writeFileSync','stringify','readFileSync','\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=20\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20','asahotak*','editz','format','viewOnceMessage','\x0a*Hadiah\x20:*\x20$','floor','addKoinUser','\x20💰_\x0a\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*','tebaktebakan*','message','Downloading\x20sticker...','viewOnce','pipe','*_🎮\x20Asah\x20Otak\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','\x0a*Vote*\x20:\x20','./database/tebakimia.json','✔️\x20Berhasil\x20✔️','caklontong*','devote','\x20Menit\x0a\x0a','head','*_🎮\x20Tebak\x20Gambar\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','Semua\x20jawaban\x20sudah\x20tertebak\x0aKirim\x20*','Terdeteksi\x20@','error','log','125855rFgHtj','getLevelingXp','magenta','keys','splice','MAAF\x20KA\x20NOMER\x20KAMU\x20BLOM\x20TERDAFTAR\x20DI\x20DATABASE\x20SILAHKAN\x20KETIK\x20!verify\x20UNTUK\x20MENDAFTAR\x20DI\x20SAYU\x20BOTZ','*_🎮\x20Susun\x20Kata\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','toLowerCase','./database/kuismath.json','existsSync','isGained','blue','groupRemove','includes','\x0a➸\x20*Xp\x20:*\x20','addATM','./database/susunkata.json','getLevelingLevel','ffmpeg\x20-i\x20','./database/caklontong.json','imageMessage','split','black','fromMe','⌛\x20Sedang\x20di\x20Prosess\x20⌛','*_🎮\x20Tebak\x20Kata\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','tebaksiapaaku*','toString','gold','194344dHYIcx','./database/tebakjenaka.json','4vOdfwi','./lib/vote/','red','tebakgambar*','push','*_🎮\x20Caklontong\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','isfam','*_🎮\x20Tebak\x20Lagu\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','tebaklirik*','\x20Anda\x20sudah\x20vote','pow','random','Kamu\x20beruntung\x20karena\x20bot\x20bukan\x20admin','videoMessage','yellow','randomBytes','green','win','\x0a\x0a*Alasan*:\x20','map','match','close','315DculVc','289503jemrEP','tebakkata*','\x20->\x20','./database/tebaklagu.json','282491VVIDdX','addLevelingLevel','*_🎮\x20Kuis\x20Matematika\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20','./lib/exif.js','\x20Vote\x0a*Durasi*\x20:\x20','10dCfNpv','./database/tebakgambar.json'];_0x492d=function(){return _0xa55516;};return _0x492d();}if(tebaklagu['hasOwnProperty'](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebaklagu[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy[_0x2c15b3(0x137)]()==jawaban){var htpl=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htpl,_uang),await reply(_0x2c15b3(0x156)+htpl+_0x2c15b3(0x11d)+prefix+_0x2c15b3(0x17d)),delete tebaklagu[sender[_0x2c15b3(0x145)]('@')[0x0]],fs['writeFileSync'](_0x2c15b3(0x169),JSON['stringify'](tebaklagu));}}if(tebaktebakan[_0x2c15b3(0x174)](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebaktebakan[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy['toLowerCase']()==jawaban){var htpu=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htpu,_uang),await reply('*_🎮\x20Tebak\x20Tebakan\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20'+htpu+'\x20💰_\x0a\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*'+prefix+_0x2c15b3(0x11e)),delete tebaktebakan[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)](_0x2c15b3(0x196),JSON['stringify'](tebaktebakan));}}if(kuismath[_0x2c15b3(0x174)](sender['split']('@')[0x0])&&!isCmd){kuis=!![],jawaban=kuismath[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy['toLowerCase']()==jawaban){var htcc=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htcc,_uang),await reply(_0x2c15b3(0x16c)+htcc+_0x2c15b3(0x11d)+prefix+'kuismath*'),delete kuismath[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)](_0x2c15b3(0x138),JSON[_0x2c15b3(0x1ac)](kuismath));}}if(asahotak[_0x2c15b3(0x174)](sender['split']('@')[0x0])&&!isCmd){kuis=!![],jawaban=asahotak[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy['toLowerCase']()==jawaban){var htgm=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htgm,_uang),await reply(_0x2c15b3(0x123)+htgm+_0x2c15b3(0x11d)+prefix+_0x2c15b3(0x116)),delete asahotak[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)](_0x2c15b3(0x1a7),JSON[_0x2c15b3(0x1ac)](asahotak));}}if(caklontong[_0x2c15b3(0x174)](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=caklontong[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy[_0x2c15b3(0x137)]()==jawaban){var htgmi=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htgmi,_uang),await reply(_0x2c15b3(0x154)+htgmi+'\x20💰_\x0a\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*'+prefix+_0x2c15b3(0x127)),delete caklontong[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)](_0x2c15b3(0x143),JSON[_0x2c15b3(0x1ac)](caklontong));}}if(tebakjenaka[_0x2c15b3(0x174)](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakjenaka[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy[_0x2c15b3(0x137)]()==jawaban){var htgmuu=randomNomor(0x64);atm['addKoinUser'](sender,htgmuu,_uang),await reply(_0x2c15b3(0x182)+htgmuu+_0x2c15b3(0x11d)+prefix+'tebakjenaka*'),delete tebakjenaka[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)](_0x2c15b3(0x14e),JSON[_0x2c15b3(0x1ac)](tebakjenaka));}}if(tebaklirik[_0x2c15b3(0x174)](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebaklirik[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy['toLowerCase']()==jawaban){var htgmii=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htgmii,_uang),await reply(_0x2c15b3(0x198)+htgmii+_0x2c15b3(0x11d)+prefix+_0x2c15b3(0x157)),delete tebaklirik[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)](_0x2c15b3(0x18e),JSON[_0x2c15b3(0x1ac)](tebaklirik));}}if(tebakimia['hasOwnProperty'](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakimia[sender['split']('@')[0x0]];if(budy[_0x2c15b3(0x137)]()==jawaban){var htgmcc=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htgmcc,_uang),await reply(_0x2c15b3(0x199)+htgmcc+'\x20💰_\x0a\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*'+prefix+_0x2c15b3(0x184)),delete tebakimia[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)](_0x2c15b3(0x125),JSON['stringify'](tebakimia));}}function _0x4415(_0x76bdbb,_0x56ff32){var _0x492d24=_0x492d();return _0x4415=function(_0x4415c4,_0x624e95){_0x4415c4=_0x4415c4-0x116;var _0x51d283=_0x492d24[_0x4415c4];return _0x51d283;},_0x4415(_0x76bdbb,_0x56ff32);}if(tebaksiapaaku[_0x2c15b3(0x174)](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebaksiapaaku[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy['toLowerCase']()==jawaban){var htgmk=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htgmk,_uang),await reply(_0x2c15b3(0x179)+htgmk+_0x2c15b3(0x11d)+prefix+_0x2c15b3(0x14a)),delete tebaksiapaaku[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)]('./database/tebaksiapaaku.json',JSON[_0x2c15b3(0x1ac)](tebaksiapaaku));}}if(tebakbendera[_0x2c15b3(0x174)](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakbendera[sender['split']('@')[0x0]];if(budy[_0x2c15b3(0x137)]()==jawaban){var html=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,html,_uang),await reply('*_🎮\x20Tebak\x20Bendera\x20\x20🎮_*\x0a\x0a*•*\x20*Jawaban\x20Benar🎉*\x0a*•*\x20*Mendapatkan*\x20:\x20_Rp\x20'+html+'\x20💰_\x0a\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*'+prefix+_0x2c15b3(0x175)),delete tebakbendera[sender[_0x2c15b3(0x145)]('@')[0x0]],fs[_0x2c15b3(0x1ab)]('./database/tebakbendera.json',JSON['stringify'](tebakbendera));}}if(susunkata[_0x2c15b3(0x174)](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=susunkata[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy[_0x2c15b3(0x137)]()==jawaban){var htmp=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htmp,_uang),await reply(_0x2c15b3(0x136)+htmp+_0x2c15b3(0x11d)+prefix+'susunkata*'),delete susunkata[sender[_0x2c15b3(0x145)]('@')[0x0]],fs['writeFileSync'](_0x2c15b3(0x140),JSON['stringify'](susunkata));}}if(tebakata['hasOwnProperty'](sender[_0x2c15b3(0x145)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakata[sender[_0x2c15b3(0x145)]('@')[0x0]];if(budy[_0x2c15b3(0x137)]()==jawaban){var htmu=randomNomor(0x64);atm[_0x2c15b3(0x11c)](sender,htmu,_uang),await reply(_0x2c15b3(0x149)+htmu+_0x2c15b3(0x11d)+prefix+_0x2c15b3(0x167)),delete tebakata[sender[_0x2c15b3(0x145)]('@')[0x0]],fs['writeFileSync']('./database/tebakata.json',JSON[_0x2c15b3(0x1ac)](tebakata));}}const sendStickerUrl=async(_0x320524,_0x1d0dc)=>{var _0x42400a=_0x2c15b3;console[_0x42400a(0x12f)](color(time,_0x42400a(0x132)),color(moment['tz'](_0x42400a(0x1a1))[_0x42400a(0x118)](_0x42400a(0x192)),_0x42400a(0x14c)),color(_0x42400a(0x120)));var _0x4094db=getRandom('.webp'),_0x185f24=getRandom(_0x42400a(0x188)),_0x1c2087=function(_0x1984cc,_0xf17003,_0x390fca){var _0x148c7d=_0x42400a;request[_0x148c7d(0x12a)](_0x1984cc,function(_0x5b1349,_0x521869,_0x4f25b1){var _0x13260b=_0x148c7d;request(_0x1984cc)[_0x13260b(0x122)](fs['createWriteStream'](_0xf17003))['on'](_0x13260b(0x164),_0x390fca);});};_0x1c2087(_0x1d0dc,_0x185f24,async function(){var _0x58b5b0=_0x42400a;let _0x18141e=_0x185f24,_0x1b4cfb=_0x4094db;require(_0x58b5b0(0x16d)),exec(_0x58b5b0(0x142)+_0x18141e+_0x58b5b0(0x1ae)+_0x1b4cfb,_0x32e54f=>{var _0x5e4749=_0x58b5b0;exec(_0x5e4749(0x195)+_0x1b4cfb+'\x20-o\x20'+_0x1b4cfb,async _0x2f5309=>{var _0x45e69d=_0x5e4749;let _0x2c5634=fs[_0x45e69d(0x1ad)](_0x1b4cfb);rimuru[_0x45e69d(0x186)](_0x320524,_0x2c5634,sticker),console[_0x45e69d(0x12f)](color(time,'magenta'),color(moment['tz']('Asia/Jakarta')['format'](_0x45e69d(0x192)),_0x45e69d(0x14c)),color('Succes\x20send\x20sticker...'));});});});};let Levelnye=level[_0x2c15b3(0x141)](sender,_level),Xpluu=level[_0x2c15b3(0x131)](sender,_level),requiredXplu=0xa*Math['pow'](Levelnye,0x2)+0x32*Levelnye+0x64;tc=_0x2c15b3(0x135),ind={'wait':_0x2c15b3(0x148),'success':_0x2c15b3(0x126)};
///// < lanjut massss > ////
let rimuruchan = await getBuffer(`${ppbot}`)
fakelink = (tekslink) => { 
return {"externalAdReply": { "title": tekslink, "thumbnail": rimuruchan, "sourceUrl": "https://wa.me/qr/UCVMNO2VLMDBK1" }}
}
// AFK
if (isGroup) {
if (!editz.key.fromMe && banChats === false) return
for (let x of mentionUser) {
if (afk.checkAfkUser(x, _afk)) {
const getId = afk.getAfkId(x, _afk)
const getReason = afk.getAfkReason(getId, _afk)
const getTime = afk.getAfkTime(getId, _afk)
const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
mentions(cptl, x, true)
}}
if (afk.checkAfkUser(sender, _afk) && !isCmd) {
const getTime = afk.getAfkTime(sender, _afk)
const getReason = afk.getAfkReason(sender, _afk)
const ittung = ms(await Date.now() - getTime)
const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
reply(pep)
_afk.splice(afk.getAfkPosition(sender, _afk), 1)
fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
}
}

if (!isCmd && from.endsWith('@s.whatsapp.net')) {
  rimuru.anonymous = rimuru.anonymous ? rimuru.anonymous: {}
  let room = Object.values(rimuru.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')
  if (room) {
    if (/^.*(next|leave|start)/.test(body)) return
    if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return
    let other = [room.a,
      room.b].find(user => user !== sender)
    if (type === "conversation") {
      rimuru.sendMessage(other, editz.message.conversation, text);
    } else {
      rimuru.sendMessageFromContent(other, editz.message)
    }
  }
  return
}

///// Auto Read
rimuru.chatRead(from, "read")
//// CMD
if (isCmd && !isGroup)
atm.addKoinUser(sender, randomNomor(20), _uang)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
atm.addKoinUser(sender, randomNomor(20), _uang)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//////// < lanjut mas > ////////////
if (budy.toLowerCase() === `8473`){
if (isRegister) return 
register.push(sender)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
teks = `Verification success\n\nPlease send *!menu* to view menu`
atm.addKoinUser(sender, randomNomor(100), _uang)
rimuru.sendMessage(from, teks, text, {quoted: freply })
}
if (!editz.key.fromMe && banChats === false) return
	              
           {
            if (body.startsWith("/")){
                console.log(color('[EVAL]'), color(moment(editz.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(body.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            } else if (body.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(body.slice(2), (err, stdout) => {
					if (err) return textImg(`${err}`)
					if (stdout) textImg(`${stdout}`)
				})
            }
        }
switch (command) {
case 'rules':
             rimuru.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: freply})
             break
case '%':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Teksnya?')
reply('Otw Kudeta')
tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
rimuru.updateProfilePicture (from, tessgc)
await sleep(1000)
rimuru.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
await sleep(1000)
rimuru.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)
await sleep(1000)
rimuru.sendMessage(from, 'Succes Hacked', text, {quoted: editz})
break
case 'sendbug':

if (args.length < 1) return reply(`Penggunaan ${command} idgroup`)
rimuru.sendBugGC(args[1], WA_DEFAULT_EPHEMERAL)
rimuru.sendBugGC(args[1], 0)
rimuru.sendBugGC(args[1], 999)
textImg('done owner')
break

case 'spamcall':{
if (!isPremium) return reply(mess.OnlyPrem)
if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)
if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
fetchJson(`https://api.zeks.xyz/api/spamcall?apikey=chika-key&no=${args[1]}`)
.then((data) => {
    textImg(data.result.logs)
    })
               .catch((err) => {
            sendMess(ownerNumber, `${command} Error:` + err)
            reply(mess.error.api)
        })
}
break
case 'next': case 'leave': case "stop": {
  if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
  rimuru.anonymous = rimuru.anonymous ? rimuru.anonymous: {}
  let room = Object.values(rimuru.anonymous).find(room => room.check(sender))
  if (!room) {
    await rimuru.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${rimuru.user.name}`, 'Cari Partner', prefix+'start')
    return false
  }
  reply('_You stopped matchmaking_')
  let other = room.other(sender)
  if (other) await rimuru.sendButton(other, '_Partner meninggalkan chat_', `${rimuru.user.name}`, 'Cari Partner', prefix+'start')
  delete rimuru.anonymous[room.id]
  if (command === 'leave' || command === "stop") break
  }
  
case 'owner': case 'creator':
sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
await sleep(1000)
txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`

buttons = [{buttonId: '!sourcecode',buttonText:{displayText: 'SC BOT'},type:1},{buttonId:'!infoig',buttonText:{displayText:'INSTAGRAM'},type:1}]
buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Sungkan Chat Ya Kak',
buttons: buttons,
headerType: 1
}
prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{})
rimuru.relayWAMessage(prep)
break

case 'bucinstick':
           case'bucinsticker':{
         
    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
    var wifegerak = ano.split('\n')
    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
    var isGif = wifegerakx.endsWith('.gif') ? true : false
    if (!isGif) {
    var ngebuff = await getBuffer(wifegerakx)
    var media = getRandom('.png')
    fs.writeFileSync(media, ngebuff)
    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
    if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
    } else {
     var ngebuff = await getBuffer(wifegerakx)
 	let media = `./sticker/${sender}.gif`
    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
    }
    }
    break
    
    case 'spamsms':{
if (!isPremium) return reply(`khusus premium`)
if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)
   
  
try {
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=PunyaIkyAds&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=PunyaIkyAds&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=PunyaIkyAds&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=PunyaIkyAds&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=PunyaIkyAds&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=PunyaIkyAds&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=PunyaIkyAds&nomor=${args[1]}`)
    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=PunyaIkyAds&nomor=${args[1]}`)
    reply("Success")
               } catch (err) {
            sendMess(ownerNumber, `${command} Error:` + err)
            reply(mess.error.api)
               }
}
break
case '!':
       case '#':
       case 'z':
       case '.':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
       break
       
       ////NEW UPDATE COPAS DARI XINZ
                      case 'threats':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'buriq': case 'burik':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'getstory':
        
          if (!args.length) return reply(from, "Urutan keberapa? #getstory urutan", rimuru)
          quotedText = editz.message.extendedTextMessage.contextInfo.quotedMessage.conversation
          var pilur = quotedText.split('👱🏻‍♂️ *Username :* ')
          var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${pilur[1].split("\n")[0]}`)
          
          if (!q.match(/^[0-9]/)) return reply(from, "Pastikan urutan hanya angka", editz)
          var typemsgg = image
          if (a.data.data[q - 1].type === "mp4") typemsgg = video
          await rimuru.sendMessage(from, {url: `${a.data.data[q - 1].url}`}, typemsgg)
        
      break
            case 'deep': case 'deepfry':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'magik': case 'magic':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'blurpify':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'captcha':
                if (!q) return reply(`Penggunaan ${command} query lalu reply gambar/sticker`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'glass':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'greyscale':
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
            case 'invert':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
               case 'tagme':
                mentions(`@${sender.split("@")[0]}`, [sender], true)
                break
            case 'invertgrey':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    })    
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)
                    .then(async(res) =>{
                    rimuru.sendImage(from, res, 'ini', msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               break
                      case 'nulishelp':
                reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
                break
            case 'nuliskiri':{
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    rimuru.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'nuliskanan':{
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    rimuru.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'foliokiri':{
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    rimuru.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'foliokanan':{
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    rimuru.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    
                })
            }
                break
                case 'sound69':
enamsembilan = fs.readFileSync('./mp3/sound69.mp3');
rimuru.sendMessage(from, enamsembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound70':
tujuhpuluh = fs.readFileSync('./mp3/sound70.mp3');
rimuru.sendMessage(from, tujuhpuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound71':
tujuhsatu = fs.readFileSync('./mp3/sound71.mp3');
rimuru.sendMessage(from, tujuhsatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound72':
tujuhdua = fs.readFileSync('./mp3/sound72.mp3');
rimuru.sendMessage(from, tujuhdua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound73':
tujuhtiga = fs.readFileSync('./mp3/sound73.mp3');
rimuru.sendMessage(from, tujuhtiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound74':
tujuhempat = fs.readFileSync('./mp3/sound74.mp3');
rimuru.sendMessage(from, tujuhempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound75':
tujuhlima = fs.readFileSync('./mp3/sound75.mp3');
rimuru.sendMessage(from, tujuhlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound76':
tujuhenam = fs.readFileSync('./mp3/sound76.mp3');
rimuru.sendMessage(from, tujuhenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound77':
tujuhtujuh = fs.readFileSync('./mp3/sound77.mp3');
rimuru.sendMessage(from, tujuhtujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound78':
tujuhdelapan = fs.readFileSync('./mp3/sound78.mp3');
rimuru.sendMessage(from, tujuhdelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound79':
tujuhsembilan = fs.readFileSync('./mp3/sound79.mp3');
rimuru.sendMessage(from, tujuhsembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound80':
delapanpuluh = fs.readFileSync('./mp3/sound80.mp3');
rimuru.sendMessage(from, delapanpuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound81':
delapansatu = fs.readFileSync('./mp3/sound81.mp3');
rimuru.sendMessage(from, delapansatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound82':
delapandua = fs.readFileSync('./mp3/sound82.mp3');
rimuru.sendMessage(from, delapandua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound83':
delapantiga = fs.readFileSync('./mp3/sound83.mp3');
rimuru.sendMessage(from, delapantiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound84':
delapanempat = fs.readFileSync('./mp3/sound84.mp3');
rimuru.sendMessage(from, delapanempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound85':
delapanlima = fs.readFileSync('./mp3/sound85.mp3');
rimuru.sendMessage(from, delapanlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound86':
delapanenam = fs.readFileSync('./mp3/sound86.mp3');
rimuru.sendMessage(from, delapamenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound87':
delapantujuh = fs.readFileSync('./mp3/sound87.mp3');
rimuru.sendMessage(from, delapantujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound88':
delapandelapan = fs.readFileSync('./mp3/sound88.mp3');
rimuru.sendMessage(from, delapandelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound89':
delapansembilan = fs.readFileSync('./mp3/sound89.mp3');
rimuru.sendMessage(from, delapansembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound90':
sembilanpuluh = fs.readFileSync('./mp3/sound90.mp3');
rimuru.sendMessage(from, sembilanpuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound91':
sembilansatu = fs.readFileSync('./mp3/sound91.mp3');
rimuru.sendMessage(from, sembilansatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound92':
sembilandua = fs.readFileSync('./mp3/sound92.mp3');
rimuru.sendMessage(from, sembilandua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound93':
sembilantiga = fs.readFileSync('./mp3/sound93.mp3');
rimuru.sendMessage(from, sembilantiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound94':
sembilanempat = fs.readFileSync('./mp3/sound94.mp3');
rimuru.sendMessage(from, sembilanempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound95':
sembilanlima = fs.readFileSync('./mp3/sound95.mp3');
rimuru.sendMessage(from, sembilanlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound96':
sembilanenam = fs.readFileSync('./mp3/sound96.mp3');
rimuru.sendMessage(from, sembilanenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound97':
sembilantujuh = fs.readFileSync('./mp3/sound97.mp3');
rimuru.sendMessage(from, sembilantujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound98':
sembilandelapan = fs.readFileSync('./mp3/sound98.mp3');
rimuru.sendMessage(from, sembilandelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
rimuru.sendMessage(from, delapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
rimuru.sendMessage(from, sembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
rimuru.sendMessage(from, sepuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
rimuru.sendMessage(from, sebelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
rimuru.sendMessage(from, duabelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
rimuru.sendMessage(from, tigabelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
rimuru.sendMessage(from, empatbelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
rimuru.sendMessage(from, limabelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
rimuru.sendMessage(from, enambelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
rimuru.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
rimuru.sendMessage(from, delapanbelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
rimuru.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
rimuru.sendMessage(from, duapuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
rimuru.sendMessage(from, duasatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
rimuru.sendMessage(from, duadua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
rimuru.sendMessage(from, duatiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
rimuru.sendMessage(from, duaempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
rimuru.sendMessage(from, dualima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
rimuru.sendMessage(from, duaenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
rimuru.sendMessage(from, duatujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
rimuru.sendMessage(from, duadelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
rimuru.sendMessage(from, duasembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
rimuru.sendMessage(from, tigapuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
rimuru.sendMessage(from, tigasatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
rimuru.sendMessage(from, tigadua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
rimuru.sendMessage(from, tigatiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
rimuru.sendMessage(from, tigaempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
rimuru.sendMessage(from, tigalima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
rimuru.sendMessage(from, tigalima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
rimuru.sendMessage(from, tigaenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
rimuru.sendMessage(from, tigatujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
rimuru.sendMessage(from, tigadelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
rimuru.sendMessage(from, tigasembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
rimuru.sendMessage(from, empatpuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
rimuru.sendMessage(from, empatsatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
rimuru.sendMessage(from, empatdua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
rimuru.sendMessage(from, empattiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
rimuru.sendMessage(from, empatempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
rimuru.sendMessage(from, empatlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
rimuru.sendMessage(from, empatenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
rimuru.sendMessage(from, empattujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
rimuru.sendMessage(from, empatdelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
rimuru.sendMessage(from, empatsembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
rimuru.sendMessage(from, limapuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
rimuru.sendMessage(from, limasatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
rimuru.sendMessage(from, limadua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
rimuru.sendMessage(from, limatiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
rimuru.sendMessage(from, limaempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
rimuru.sendMessage(from, limalima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desah.mp3');
rimuru.sendMessage(from, delapansatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
rimuru.sendMessage(from, limaenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
rimuru.sendMessage(from, limatujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
rimuru.sendMessage(from, limadelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
rimuru.sendMessage(from, limasembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
rimuru.sendMessage(from, enampuluh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
rimuru.sendMessage(from, enamsatu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/sound62.mp3');
rimuru.sendMessage(from, enamdua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/sound63.mp3');
rimuru.sendMessage(from, enamtiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/sound64.mp3');
rimuru.sendMessage(from, enamempat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
rimuru.sendMessage(from, enamlima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
rimuru.sendMessage(from, enamenam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/hujan.mp3');
rimuru.sendMessage(from, enamtujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
rimuru.sendMessage(from, enamdelapan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
rimuru.sendMessage(from, soun, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
rimuru.sendMessage(from, satu, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
rimuru.sendMessage(from, dua, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
rimuru.sendMessage(from, tiga, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
rimuru.sendMessage(from, empat, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
rimuru.sendMessage(from, lima, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
rimuru.sendMessage(from, enam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'bodi':
enam = fs.readFileSync('./mp3/sound6.mp3');
rimuru.sendMessage(from, enam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
rimuru.sendMessage(from, tujuh, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'home':
const home = fs.readFileSync('./mp3/home.mp3')
rimuru.sendMessage(from, home, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('./mp3/gettingold.mp3')
rimuru.sendMessage(from, getting, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('./mp3/sad.mp3')
rimuru.sendMessage(from, sad1, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('./mp3/sad2.mp3')
rimuru.sendMessage(from, sad2, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('mp3/sad3.mp3')
rimuru.sendMessage(from, sad3, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('mp3/sad4.mp3')
rimuru.sendMessage(from, sad4, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('mp3/aeshtetic.mp3')
rimuru.sendMessage(from, tetik, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('mp3/aeshtetic2.mp3')
rimuru.sendMessage(from, tetik3, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('mp3/aeshtetic3.mp3')
rimuru.sendMessage(from, tetik3, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('mp3/aeshtetic4.mp3')
rimuru.sendMessage(from, tetik4, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('mp3/allnight.mp3')
rimuru.sendMessage(from, allnight, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('mp3/lucas.mp3')
rimuru.sendMessage(from, lucas, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('mp3/sowell.mp3')
rimuru.sendMessage(from, well, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('mp3/wanna.mp3')
rimuru.sendMessage(from, wanna, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('mp3/up.mp3')
rimuru.sendMessage(from, ups, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('mp3/yourskin.mp3')
rimuru.sendMessage(from, skin, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('mp3/cutmeoff.mp3')
rimuru.sendMessage(from, moff, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('mp3/beautiful.mp3')
rimuru.sendMessage(from, ful, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('mp3/loosinggame.mp3')
rimuru.sendMessage(from, gam, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('mp3/loosinginterest.mp3')
rimuru.sendMessage(from, rest, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('mp3/playdate.mp3')
rimuru.sendMessage(from, date, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('mp3/ayatkursi2.mp3')
rimuru.sendMessage(from, kursi, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('mp3/tilawah.mp3')
rimuru.sendMessage(from, tilawah, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('mp3/sholawatnabi.mp3')
rimuru.sendMessage(from, nabi, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('mp3/ngaji.mp3')
rimuru.sendMessage(from, ngaji1, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('mp3/ngaji2.mp3')
rimuru.sendMessage(from, ngaji2, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
rimuru.sendMessage(from, irimp3, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
rimuru.sendMessage(from, pa, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound99':
sembilansembilan = fs.readFileSync('./mp3/sound99.mp3');
rimuru.sendMessage(from, sembilansembilan, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'sound100':
seratus = fs.readFileSync('./mp3/sound100.mp3');
rimuru.sendMessage(from, seratus, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break
case 'susu':
seratus = fs.readFileSync('./mp3/susu.mp3');
rimuru.sendMessage(from, seratus, MessageType.audio, {quoted: editz, mimetype: 'audio/mp4', ptt:true})
break

case  'soundmenu':
              var _0x51ce20=_0x2b7b;function _0x2b7b(_0x429dc9,_0x582617){var _0x1ff0e4=_0x1ff0();return _0x2b7b=function(_0x2b7b75,_0x2b5821){_0x2b7b75=_0x2b7b75-0x75;var _0x566a9c=_0x1ff0e4[_0x2b7b75];return _0x566a9c;},_0x2b7b(_0x429dc9,_0x582617);}(function(_0x4822e5,_0x3a632e){var _0x116d76=_0x2b7b,_0x349b41=_0x4822e5();while(!![]){try{var _0xa9d268=-parseInt(_0x116d76(0xe6))/0x1*(-parseInt(_0x116d76(0xbd))/0x2)+parseInt(_0x116d76(0xbe))/0x3+parseInt(_0x116d76(0xe4))/0x4+parseInt(_0x116d76(0x7d))/0x5*(-parseInt(_0x116d76(0xe8))/0x6)+-parseInt(_0x116d76(0xcd))/0x7+parseInt(_0x116d76(0xd4))/0x8+-parseInt(_0x116d76(0xc3))/0x9*(parseInt(_0x116d76(0x96))/0xa);if(_0xa9d268===_0x3a632e)break;else _0x349b41['push'](_0x349b41['shift']());}catch(_0x53628a){_0x349b41['push'](_0x349b41['shift']());}}}(_0x1ff0,0xc14e3),groups=rimuru[_0x51ce20(0x7c)][_0x51ce20(0x76)][_0x51ce20(0xc8)](_0xd43bbc=>_0xd43bbc[_0x51ce20(0xd5)]['endsWith'](_0x51ce20(0xcb))),privat=rimuru[_0x51ce20(0x7c)][_0x51ce20(0x76)]['filter'](_0x241333=>_0x241333[_0x51ce20(0xd5)][_0x51ce20(0xa7)](_0x51ce20(0xed))),ram2=(process[_0x51ce20(0xd6)]()['heapUsed']/0x400/0x400)[_0x51ce20(0xc7)](0x2)+_0x51ce20(0x86)+Math[_0x51ce20(0xa3)](require('os')[_0x51ce20(0x9a)]/0x400/0x400)+'MB',charger=''+(charging?'lagi\x20dicas':_0x51ce20(0x7a)),uptime=process[_0x51ce20(0x7b)](),timestampe=speed(),totalChat=await rimuru[_0x51ce20(0x7c)][_0x51ce20(0xb6)](),latensie=speed()-timestampe,total=math(groups[_0x51ce20(0xde)]+'*'+privat[_0x51ce20(0xde)]),menu=botName+'\x0a\x0a\x0a🐥\x20ɢʀᴏᴜᴘ\x20ᴄʜᴀᴛ\x20:\x20*'+groups[_0x51ce20(0xde)]+'*\x0a🐥\x20ᴘʀɪᴠᴀᴛᴇ\x20ᴄʜᴀᴛ\x20:\x20*'+privat[_0x51ce20(0xde)]+_0x51ce20(0x9e)+totalChat[_0x51ce20(0xde)]+_0x51ce20(0x78)+latensie['toFixed'](0x4)+_0x51ce20(0xe2)+runtime(process[_0x51ce20(0x7b)]())+'*\x0a🐥\x20ᴘʟᴀᴛғʀᴏᴍ\x20:\x20*'+os[_0x51ce20(0xec)]()+_0x51ce20(0xeb)+prefix+'iri\x0a╠➥'+prefix+_0x51ce20(0xc0)+prefix+_0x51ce20(0xdd)+prefix+_0x51ce20(0xa5)+prefix+_0x51ce20(0xd0)+prefix+_0x51ce20(0x82)+prefix+_0x51ce20(0xdf)+prefix+_0x51ce20(0xab)+prefix+_0x51ce20(0x98)+prefix+_0x51ce20(0xb0)+prefix+'menyukaiku\x0a╠➥'+prefix+_0x51ce20(0x99)+prefix+_0x51ce20(0xca)+prefix+_0x51ce20(0x8b)+prefix+'sound1\x0a╠➥'+prefix+_0x51ce20(0x79)+prefix+'sound3\x0a╠➥'+prefix+'sound4\x0a╠➥'+prefix+_0x51ce20(0xea)+prefix+_0x51ce20(0xc6)+prefix+_0x51ce20(0x89)+prefix+'sound8\x0a╠➥'+prefix+'sound9\x0a╠➥'+prefix+'sound10\x0a╠➥'+prefix+_0x51ce20(0x94)+prefix+_0x51ce20(0xb8)+prefix+_0x51ce20(0xc4)+prefix+_0x51ce20(0xcf)+prefix+_0x51ce20(0x8e)+prefix+_0x51ce20(0x9b)+prefix+_0x51ce20(0x80)+prefix+'sound18\x0a╠➥'+prefix+_0x51ce20(0x92)+prefix+_0x51ce20(0x97)+prefix+'sound21\x0a╠➥'+prefix+_0x51ce20(0xb4)+prefix+'sound23\x0a╠➥'+prefix+_0x51ce20(0xbf)+prefix+'sound25\x0a╠➥'+prefix+_0x51ce20(0xd1)+prefix+_0x51ce20(0xa6)+prefix+_0x51ce20(0xb5)+prefix+_0x51ce20(0xe1)+prefix+_0x51ce20(0xb9)+prefix+'sound31\x0a╠➥'+prefix+_0x51ce20(0x9f)+prefix+'sound33\x0a╠➥'+prefix+_0x51ce20(0x8c)+prefix+_0x51ce20(0x9c)+prefix+_0x51ce20(0x87)+prefix+'sound37\x0a╠➥'+prefix+'sound38\x0a╠➥'+prefix+_0x51ce20(0xc5)+prefix+_0x51ce20(0xc9)+prefix+'sound41\x0a╠➥'+prefix+_0x51ce20(0x91)+prefix+_0x51ce20(0x75)+prefix+_0x51ce20(0xa9)+prefix+'sound45\x0a╠➥'+prefix+_0x51ce20(0x7e)+prefix+'sound47\x0a╠➥'+prefix+_0x51ce20(0x8a)+prefix+_0x51ce20(0x88)+prefix+_0x51ce20(0xe9)+prefix+_0x51ce20(0xa4)+prefix+_0x51ce20(0xb7)+prefix+_0x51ce20(0x8f)+prefix+_0x51ce20(0xdb)+prefix+_0x51ce20(0xc2)+prefix+_0x51ce20(0xd9)+prefix+_0x51ce20(0x7f)+prefix+_0x51ce20(0xe5)+prefix+_0x51ce20(0xba)+prefix+_0x51ce20(0x84)+prefix+_0x51ce20(0xa8)+prefix+_0x51ce20(0xda)+prefix+_0x51ce20(0xa0)+prefix+_0x51ce20(0xa1)+prefix+_0x51ce20(0x81)+prefix+_0x51ce20(0xc1)+prefix+'sound67\x0a╠➥'+prefix+_0x51ce20(0xaa)+prefix+_0x51ce20(0xb2)+prefix+_0x51ce20(0x93)+prefix+_0x51ce20(0x85)+prefix+_0x51ce20(0xd7)+prefix+_0x51ce20(0x83)+prefix+_0x51ce20(0xdc)+prefix+_0x51ce20(0xe3)+prefix+_0x51ce20(0xa2)+prefix+_0x51ce20(0x95)+prefix+'sound82\x0a╠➥'+prefix+_0x51ce20(0xac)+prefix+_0x51ce20(0xb3)+prefix+_0x51ce20(0xaf)+prefix+_0x51ce20(0xd3)+prefix+_0x51ce20(0x90)+prefix+'sound88\x0a╠➥'+prefix+'sound89\x0a╠➥'+prefix+_0x51ce20(0xd8)+prefix+'sound91\x0a╠➥'+prefix+_0x51ce20(0xd2)+prefix+'sound93\x0a╠➥'+prefix+_0x51ce20(0x8d)+prefix+_0x51ce20(0x77)+prefix+_0x51ce20(0xb1)+prefix+_0x51ce20(0xe7)+prefix+_0x51ce20(0xbb)+prefix+_0x51ce20(0x9d),buttons=[{'buttonId':prefix+_0x51ce20(0xad),'buttonText':{'displayText':_0x51ce20(0xe0)},'type':0x1}],imageMsg=(await rimuru[_0x51ce20(0xbc)](fs['readFileSync'](_0x51ce20(0xcc)),_0x51ce20(0xae),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x51ce20(0xae)],buttonsMessage={'contentText':''+menu,'footerText':_0x51ce20(0xce),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru['relayWAMessage'](prep));function _0x1ff0(){var _0x5acd65=['sound43\x0a╠➥','array','sound95\x0a╠➥','*\x0a🐥\x20sᴘᴇᴇᴅ\x20:\x20*','sound2\x0a╠➥','ga\x20dicas','uptime','chats','1835XXSKvl','sound46\x0a╠➥','sound57\x0a╠➥','sound17\x0a╠➥','sound65\x0a╠➥','beb\x0a╠➥','sound77\x0a╠➥','sound60\x0a╠➥','sound75\x0a╠➥','MB\x20/\x20','sound36\x0a╠➥','sound49\x0a╠➥','sound7\x0a╠➥','sound48\x0a╠➥','sound\x0a╠➥','sound34\x0a╠➥','sound94\x0a╠➥','sound15\x0a╠➥','sound53\x0a╠➥','sound87\x0a╠➥','sound42\x0a╠➥','sound19\x0a╠➥','sound74\x0a╠➥','sound11\x0a╠➥','sound81\x0a╠➥','290lzulxC','sound20\x0a╠➥','susu\x0a╠➥','gatal\x0a╠➥','totalmem','sound16\x0a╠➥','sound35\x0a╠➥','sound100\x0a\x0a','*\x0a🐥\x20ᴛᴏᴛᴀʟ\x20ᴄʜᴀᴛ\x20:\x20*','sound32\x0a╠➥','sound63\x0a╠➥','sound64\x0a╠➥','sound80\x0a╠➥','round','sound51\x0a╠➥','pale\x0a╠➥','sound27\x0a╠➥','endsWith','sound61\x0a╠➥','sound44\x0a╠➥','sound68\x0a╠➥#sound69\x0a╠➥#sound70\x0a╠➥#sound71\x0a╠➥#sound72\x0a╠➥','megic\x0a╠➥','sound83\x0a╠➥','command','imageMessage','sound85\x0a╠➥','cemen\x0a╠➥','sound96\x0a╠➥','sound73\x0a╠➥','sound84\x0a╠➥','sound22\x0a╠➥','sound28\x0a╠➥','all','sound52\x0a╠➥','sound12\x0a╠➥','sound30\x0a╠➥','sound59\x0a╠➥','sound98\x0a╠➥#sound99\x0a╠➥','prepareMessageMedia','179874VLtXQZ','1257921rTmvJO','sound24\x0a╠➥','desah\x0a╠➥','sound66\x0a╠➥','sound55\x0a╠➥','213516YuIKZZ','sound13\x0a╠➥','sound39\x0a╠➥','sound6\x0a╠➥','toFixed','filter','sound40\x0a╠➥','sasageyo\x0a╠➥','g.us','./media/Menu.jpg','7517853zmnxuw','\x20\x20\x20\x0a\x0a\x0a\x0a\x20ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0a\x20ʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ🤗\x0a\x0a❤️\x20Denara࿐\x20https://instabio.cc/3101210Jh7y7z','sound14\x0a╠➥','playdate\x0a╠➥','sound26\x0a╠➥','sound92\x0a╠➥','sound86\x0a╠➥','5956552eadOCE','jid','memoryUsage','sound76\x0a╠➥','sound90\x0a╠➥','sound56\x0a╠➥','sound62\x0a╠➥','sound54\x0a╠➥','sound78\x0a╠➥','nengdesah\x0a╠➥','length','hallo\x0a╠➥','Back\x20to\x20menu','sound29\x0a╠➥','\x20_Second_*\x0a🐥\x20ᴀᴄᴛɪᴠᴇ\x20:\x20*','sound79\x0a╠➥','191008pJBqOf','sound58\x0a╠➥','17Knqupy','sound97\x0a╠➥','3054wyUlDq','sound50\x0a╠➥','sound5\x0a╠➥','*\x0a\x0a\x20\x20\x20\x20\x0a\x20\x20\x0a╠═══✪〘\x20Sound\x20Menu〙✪══\x0a╠➥','platform','s.whatsapp.net'];_0x1ff0=function(){return _0x5acd65;};return _0x1ff0();}
               break
               
               case 'slap':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/slap').then(({url}) => {
                    rimuru.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} slapped @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case 'pat':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/pat').then(({url}) => {
                    rimuru.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${sender.split('@')[0]} pat @${mentioned[0].split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                case 'baka':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/baka').then(({url}) => {
                    rimuru.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} Baka!!`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                 case 'semoji2': {
                    
                    if (args.length < 2) return reply(`Penggunaan ${command} emoji`)
                    if (args.length === 2) {
                    fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(args[1])}?apikey=${lolkey}`)
                    .then((res) =>{
                        let list = []
                        let startnum = 1
                        for (var x in res.result.emoji) {
                        let yy = {title: 'Model ke-' + startnum++,
                        rows: [
                           {
                            title: `${x}`,
                            description: `${x} model`,
                            rowId: `${prefix}esticker ${args[1]} ${res.result.emoji[x]}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    rimuru.sendList(from, `List Sticker`, `Kan model stickernya banyak tu kak, kaka mau model sticker yg mana ya? Pilih dibawah ya kak`, args[1], `Pilih Disini`, list, msg)
                    })
                   .catch((err) => {
                            rimuru.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    } else if (args.length === 3) {
                    rimuru.sendSticker(from, args[2], msg)
             		
                    }
                    }
                    break
                 case 'ceritasex': case 'cersex':
                    fetchJson('http://docs-jojo.herokuapp.com/api/cersex')
                    .then((res) => rimuru.sendFileFromUrl(from, res.result.img, res.result.judul + `\n\n` + res.result.cersex))
                    .catch((err) => {
                            editz.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                    case 'aspan': case 'ptl': case 'ptlvid':{
                if (!isPremium) return reply(mess.OnlyPrem)
                fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {
                    var wifegerak = data.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        rimuru.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, 'Follow IG: https://www.instagram.com/ff.gzx untuk mendapatkan asupan lebih banyak.', msg)
                })
                }
                break
                case 'spamcall2':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
                if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
                fetchJson(`https://api.justaqul.xyz/call?nomor=${args[1]}&apikey=${aqulzkey}`)
                .then((data) => {
                    textImg(data.result)
                    })
               .catch((err) => {
                            rimuru.sendMess(ownerNumber[0], `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                }
                break
                case 'hug':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/hug').then(({url}) => {
                    rimuru.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} hugged @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
                 case 'cium':
                    
                    if (mentioned.length !== 0){
                    fetchJson ('https://www.nekos.life/api/v2/img/kiss').then(({url}) => {
                    rimuru,sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
                    await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} kissed @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})
                    })
                } else {
                    reply(`Penggunaan ${command} @tag`)
                }
                 break
case 'bokep': case 'bkp': case 'randombokep':{
if (!isPremium) return reply(mess.OnlyPrem)

fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
    var bokepp = JSON.parse(JSON.stringify(data))
    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
    textImg(bokep2.teks)
})
}
////Anti delete
case 'antidelete':
                if (!isOwner && !isGroupAdmins) return reply(mess.GrupAdmin)
				const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				if (args.length === 1) return reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
				if (args[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
						dataRevoke.push(from)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete diaktifkan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
					}
				} else if (args[1] == 'ctaktif') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
						dataCtRevoke.data = true
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete diaktifkan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
					}
				} else if (args[1] == 'banct') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
					if (args.length === 2 || args[2].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
					dataBanCtRevoke.push(args[2] + '@s.whatsapp.net')
					fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					reply(`Kontak ${args[2]} telah dimasukan ke banlist antidelete secara permanen!`)
				} else if (args[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete dimatikan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
					}
				} else if (args[1] == 'ctmati') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete dimatikan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
					}
				} else {
                  reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
               }
				break
				//
				case 'setname':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
               await rimuru,updateProfileName(q)
                    reply(`Success`)
	            break
	case 'revoke':
			    case 'revokegroup':
				case 'revokelink': {
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
		        var linkgc = await rimuru.revokeInvite(from)
                mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
            }
					break
	case 'addbadword':
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
                addBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case 'delbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
                delBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break
        case 'antiviewonce':
  case 'antivo':
    const _0x2d8c89=_0x275c;(function(_0x938c7,_0x1fa6a1){const _0x4b9079=_0x275c,_0x5ccae4=_0x938c7();while(!![]){try{const _0x52ca1b=-parseInt(_0x4b9079(0x10f))/0x1*(parseInt(_0x4b9079(0x11a))/0x2)+-parseInt(_0x4b9079(0x110))/0x3+parseInt(_0x4b9079(0x11f))/0x4+-parseInt(_0x4b9079(0x10e))/0x5*(-parseInt(_0x4b9079(0x10c))/0x6)+-parseInt(_0x4b9079(0x113))/0x7*(-parseInt(_0x4b9079(0x119))/0x8)+parseInt(_0x4b9079(0x116))/0x9*(parseInt(_0x4b9079(0x11c))/0xa)+parseInt(_0x4b9079(0x118))/0xb*(-parseInt(_0x4b9079(0x112))/0xc);if(_0x52ca1b===_0x1fa6a1)break;else _0x5ccae4['push'](_0x5ccae4['shift']());}catch(_0x8079d4){_0x5ccae4['push'](_0x5ccae4['shift']());}}}(_0x4213,0xa764f));if(!q)return reply(_0x2d8c89(0x10a));function _0x275c(_0x123494,_0x177684){const _0x4213a3=_0x4213();return _0x275c=function(_0x275c00,_0x935066){_0x275c00=_0x275c00-0x10a;let _0x5653cf=_0x4213a3[_0x275c00];return _0x5653cf;},_0x275c(_0x123494,_0x177684);}function _0x4213(){const _0x4725fe=['toLowerCase','3234348WnsWBG','splice','Pilih\x20enable\x20atau\x20disable','Antiview\x20Once\x20grup\x20aktif','858ZSVqDr','./database/antiviewonce.json','42820HynEgg','444767jbSEGm','1251744OYoOxK','antiviewonce\x20grup\x20nonaktif','2247864OvjSwe','199423RTvatE','enable','writeFileSync','2961mRQAmP','stringify','33lvSnQz','16KxaZNg','2HqjDTw','indexOf','590oFsVZe','disable'];_0x4213=function(){return _0x4725fe;};return _0x4213();}if(q[_0x2d8c89(0x11e)]()===_0x2d8c89(0x114)){if(isAntiviewonce)return reply('Udah\x20aktif');antivo['push'](from),fs[_0x2d8c89(0x115)](_0x2d8c89(0x10d),JSON[_0x2d8c89(0x117)](antivo)),reply(_0x2d8c89(0x10b));}else{if(q['toLowerCase']()===_0x2d8c89(0x11d)){let anu=antivo[_0x2d8c89(0x11b)](from);antivo[_0x2d8c89(0x120)](anu,0x1),fs[_0x2d8c89(0x115)](_0x2d8c89(0x10d),JSON[_0x2d8c89(0x117)](antivo)),reply(_0x2d8c89(0x111));}else testqq(from,'antiviewonce');}
    break
    case 'antidelete':
    case 'antidel':
    if (!q) return reply(`Pilih enable atau disable`)
    if (q.toLowerCase() === 'enable') {
      if (isAntidel) return reply(`Udah aktif`)
      antidel.push(from)
      fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
      reply('anti delete grup aktif')
    } else if (q.toLowerCase() === 'disable') {
      let anu = antidel.indexOf(from)
      antidel.splice(anu, 1)
      fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
      reply('antiviewonce grup nonaktif')
    } else {
      testqq(from, `antiviewonce`)
    }
    break
    
    case 'exampleid':
    case 'contoh':
    case 'carapakai':
    tutor = `
*TERDETEKSI INDONESIA*

Ini adalah bot WhatsApp yg bisa membantu anda !
contoh command simpel

# *!sticker* yaitu untuk membuat sticker di WhatsApp *kirim/reply foto* dengan caption *!sticker*
    
# *!ytdl* yaitu untuk mengunduh video/audio dari YouTube *kirim perintah !ytdl di teruskan judul/link YouTube*
    
# *!tahta* yaitu untuk membuat logo *kirim perintah !tahta di lanjut nama request terserah kalian*
    
# *!anime* yaitu untuk stalk anime *kirim perintah !anime lanjut judul anime*
    
# *!pinterest* yaitu untuk membantu mencari gambar *kirim perintah !pinterest lanjut dengan gambar yg kalian cari*
    
# *!nulis* yaitu untuk membantu anda menulis sesuatu dalam bentuk foto *kirim perintah !nulis di lanjut dengan teks yg akan di tulis*
    
# *!alquran* yaitu untuk melihat isi surat yg kalian cari beserta artinya *kirim perintah !alquran di lanjut dengan ayat dan surah yg kalian cari*
    
*Silahkan kalian coba fitur-fitur lain yg sudah di sediakan bot*
    
*Warning*
-dilarang menelpon/vc bot
-dilarang spam bot/jeda 5 detik
-dilarang masukan bot sembarang grup (izin owner,)
-dilarang menggunakan fitur dewasa untuk anak di bawah 18th
-gunakan bot dengan bijak
    
*jadilah pengguna yang baik dan mematuhi rules*
*menu lainnya bisa kalian liat sendiri dengan ketik !command* `
    
    reply(tutor)
    
    break
    
    case 'exampleen':
    case 'methoden':
    tutor1 = 
`*ENGLISH DETECTED*

This is a WhatsApp bot that can help you!
simple command example 

# *!sticker* is to make a sticker on WhatsApp *send/reply a photo* with the caption *!sticker* 

# *!ytdl* that is to download video/audio from YouTube *send command !ytdl in forward YouTube title/link* 

# *!tahta* that is to make a logo *send orders! throne in advance the name of the request is up to you* 

# *!anime* that is for stalk anime *send command !anime continues anime title*

# *!pinterest*, which is to help you find images *send a command! further pinterest with the image you are looking for*

# *!write/nulis* that is to help you write something in the form of a photo *send a command !write further with the text to be written*

# *!alquran*, which is to see the contents of the letter you are looking for and its meaning *send orders!Alquran is continued with the verse and surah you are looking for* 

*Please try other features that have been provided by the bot*

*Warning* 
-no calls/vc bots 
-no spam bots/pause 5 seconds 
-not allowed to enter bots in any group (owner's permission) 
-Do not use adult features for children under 18 years old -use bots wisely 

*be a good user and obey the rules* 
You can see other menus for yourself by typing !command `
    reply(tutor1)
    break
    
    case "astetick":
    case "videoanime":
    case "storyanime2":
    reply(mess.wait)
     Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
     rimuru.sendMessage(from, Iki, video, {quoted: freply, thumbnail: fakeimage })
     break
    
case 'menu':
        case 'help':
        case 'rimuru':  
        function _0x3ae1(_0x407ac2,_0xb91f19){const _0x423b00=_0x423b();return _0x3ae1=function(_0x3ae152,_0x292d67){_0x3ae152=_0x3ae152-0x1e9;let _0x1233e6=_0x423b00[_0x3ae152];return _0x1233e6;},_0x3ae1(_0x407ac2,_0xb91f19);}const _0x560302=_0x3ae1;(function(_0x137773,_0xae1926){const _0x5fc9a2=_0x3ae1,_0x517802=_0x137773();while(!![]){try{const _0x4aa759=-parseInt(_0x5fc9a2(0x20d))/0x1+-parseInt(_0x5fc9a2(0x1fd))/0x2*(parseInt(_0x5fc9a2(0x1ff))/0x3)+parseInt(_0x5fc9a2(0x1f4))/0x4*(parseInt(_0x5fc9a2(0x200))/0x5)+-parseInt(_0x5fc9a2(0x205))/0x6*(parseInt(_0x5fc9a2(0x21d))/0x7)+parseInt(_0x5fc9a2(0x21a))/0x8*(parseInt(_0x5fc9a2(0x20c))/0x9)+parseInt(_0x5fc9a2(0x1ef))/0xa+parseInt(_0x5fc9a2(0x215))/0xb*(parseInt(_0x5fc9a2(0x203))/0xc);if(_0x4aa759===_0xae1926)break;else _0x517802['push'](_0x517802['shift']());}catch(_0x1ec885){_0x517802['push'](_0x517802['shift']());}}}(_0x423b,0xdae28),rimuru[_0x560302(0x210)](from,Presence[_0x560302(0x1ea)]));const loli=fs[_0x560302(0x228)](_0x560302(0x1fc));function _0x423b(){const _0x53d1e8=['lagi\x20dicas','1216eZrXhk','uptime','*\x0a\x0a│▹\x20Os\x20Version:\x20*','336qZYzRK','rules','*\x0a\x0a│▹\x20Admin\x20:\x20*','phone','*\x0a\x0a│\x0a\x0a╰──「\x20*','totalmem','length','platform','heapUsed','\x20Saya\x20Siap\x20Membantu\x20Kamu\x20Dalam\x20Membuat\x20Stiker\x20Dll\x0a\x0a\x20\x0a\x0a╭──「\x20*BOT\x20INFORMATION*\x20」\x0a\x0a│▹\x20Creator\x20:\x20*_@','*\x0a\x0a│▹\x20Platfrom\x20:\x20*','readFileSync','pencarijodoh','*\x0a\x0a│▹\x20Sender\x20:\x20*@','status','composing','all','g.us','endsWith','ʀᴜʟᴇs','6697530thmntH','audio/mp4','filter','round','toFixed','4233356AJRjpv','ᴘᴇɴᴄᴀʀɪ\x20ᴊᴏᴅᴏʜ','*\x20」\x0a\x0aFOLLOW\x20SOSMED\x20OWNER\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz/','./media/Menu.jpg','os_version','\x20Saya\x20Adalah\x20','*\x0a\x0a│▹\x20Active\x20:\x20*','chats','./assets/san','215498zPVKMT','*\x0a\x0a│▹\x20Total:\x20*','6OZzyls','5EpCZQh','*\x20*User*\x0a\x0a│\x0a\x0a│\x20「\x20*YOUR\x20INFORMATION*\x20」\x0a\x0a│\x0a\x0a│▹\x20Username:\x20*','text','347364nUxZEY','MB\x20/\x20','181764nMVYRP','_*\x0a\x0a│▹\x20Baterai\x20:\x20*','jid','\x20👋\x0a\x0a\x20Hai\x20Kak\x20','split','array','user','62487BdCIJi','362001RAccep','\x20_Second_*\x0a\x0a│▹\x20Wa\x20Version:\x20*','owner','updatePresence','\x20/\x20','*Note\x20:*\x20\x20ᴍᴀᴀғ\x20ᴋᴀᴋ\x20ⲂⲟⲦz\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20sᴀᴀᴛ\x20ɪɴɪ\x20sᴇᴅᴀɴɢ\x20ᴅᴀʟᴀᴍ\x20ᴘᴇʀʙᴀɪᴋᴀɴ','sendMessage','wa_version','55IdWpQq','@s.whatsapp.net','ga\x20dicas','*\x0a\x0a│▹\x20Level\x20:\x20*'];_0x423b=function(){return _0x53d1e8;};return _0x423b();}rimuru[_0x560302(0x213)](from,loli,MessageType['audio'],{'quoted':freply,'mimetype':_0x560302(0x1f0),'ptt':!![]});if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});thu=await rimuru['getStatus'](sender[_0x560302(0x209)]('@')[0x0]+_0x560302(0x216),MessageType[_0x560302(0x202)]),groups=rimuru[_0x560302(0x1fb)][_0x560302(0x20a)][_0x560302(0x1f1)](_0x488fcc=>_0x488fcc[_0x560302(0x207)][_0x560302(0x1ed)](_0x560302(0x1ec))),privat=rimuru['chats'][_0x560302(0x20a)][_0x560302(0x1f1)](_0x53143a=>_0x53143a[_0x560302(0x207)][_0x560302(0x1ed)]('s.whatsapp.net')),ram2=(process['memoryUsage']()[_0x560302(0x225)]/0x400/0x400)[_0x560302(0x1f3)](0x2)+_0x560302(0x204)+Math[_0x560302(0x1f2)](require('os')[_0x560302(0x222)]/0x400/0x400)+'MB',charger=''+(charging?_0x560302(0x219):_0x560302(0x217)),koko=setting[_0x560302(0x20f)]+_0x560302(0x216),uptime=process[_0x560302(0x21b)](),timestampe=speed(),totalChat=await rimuru[_0x560302(0x1fb)][_0x560302(0x1eb)](),latensie=speed()-timestampe,total=math(groups[_0x560302(0x223)]+'*'+privat[_0x560302(0x223)]),menu=ucapanWaktu+'\x20'+pushname+_0x560302(0x208)+pushname+_0x560302(0x1f9)+botName+_0x560302(0x226)+koko['split']('@')[0x0]+_0x560302(0x206)+baterai+'%\x20'+charger+'*\x0a\x0a│▹\x20Platform\x20:\x20*'+os[_0x560302(0x224)]()+'*\x0a\x0a│▹\x20Speed\x20:\x20*'+latensie[_0x560302(0x1f3)](0x4)+_0x560302(0x20e)+rimuru['user']['phone'][_0x560302(0x214)]+_0x560302(0x21c)+rimuru[_0x560302(0x20b)][_0x560302(0x220)][_0x560302(0x1f8)]+_0x560302(0x1fa)+runtime(process[_0x560302(0x21b)]())+_0x560302(0x227)+os[_0x560302(0x224)]()+_0x560302(0x1fe)+_registered[_0x560302(0x223)]+_0x560302(0x201)+pushname+_0x560302(0x22a)+sender[_0x560302(0x209)]('@')[0x0]+'*\x0a\x0a│▹\x20Bio\x20Info\x20:\x20*'+thu[_0x560302(0x1e9)]+'*\x0a\x0a│▹\x20Premium\x20:\x20*'+(isPremium?'Ya':'No')+_0x560302(0x21f)+(isGroupAdmins?'Ya':'No')+_0x560302(0x218)+Levelnye+'*\x0a\x0a│▹\x20XP\x20:\x20*'+Xpluu+_0x560302(0x211)+requiredXplu+_0x560302(0x221)+botName+_0x560302(0x1f6),buttons=[{'buttonId':prefix+'command','buttonText':{'displayText':'📝ʟɪsᴛ\x20ᴍᴇɴᴜ'},'type':0x1},{'buttonId':prefix+_0x560302(0x21e),'buttonText':{'displayText':_0x560302(0x1ee)},'type':0x1},{'buttonId':prefix+_0x560302(0x229),'buttonText':{'displayText':_0x560302(0x1f5)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](fs[_0x560302(0x228)](_0x560302(0x1f7)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':_0x560302(0x212),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru['relayWAMessage'](prep);
                    break
  //=====================================================================================================================================================================================      
case 'f':
case 'lock':
 editzmemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
rimuru.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": fakeimage}, MessageType.location, {quoted: editzmemek})
           break
           
            case 'allmenu':  
    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
                  const boy = "6285727492435@s.whatsapp.net"     
                  const filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                  const nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                  parseMention = (text = '') => {
                  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
                  totalChat = await rimuru.chats.all()
                  groups = rimuru.chats.array.filter(v => v.jid.endsWith('g.us'))
                  privat = rimuru.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
                  total = math(`${groups.length}*${privat.length}`)
                  timestampe = speed();
                  latensie = speed() - timestampe             
                  menu =`Hai kak ${pushname}`                          
                  buttons = [{buttonId: `${prefix}command`,buttonText:{displayText: '🗒️COMMAND'},type:1}]
   
                  imageMsg = (await rimuru.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage
   
                  buttonsMessage = {
                  contentText: `${menu}`,
                  footerText: `🤖 *sᴛᴀᴛᴜs Denara Bot࿐* 🤖
⚡ᴄʀᴇᴀᴛᴏʀ : @${owner}
⚡ʙᴀᴛᴇʀᴀɪ :  ${baterai}%
⚡ᴘʀᴇғɪx : ᴍᴜʟᴛɪ-ᴘʀᴇғɪx
⚡ɢʀᴜʙ ᴛᴏᴛᴀʟ : ${groups.length}
⚡ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ : ${privat.length}
⚡ᴛᴏᴛᴀʟ ᴄʜᴀʏ : ${totalChat.length}
⚡ᴀᴄᴛɪᴠᴇ : ${runtime(process.uptime())}
⚡ʙᴏᴛ ᴍᴏᴅᴇ: Public Mode
⚡sᴘᴇᴇᴅ : ${latensie.toFixed(4)} _Second
⚡ғɪᴛᴜғ : 𝟕𝟓𝟎

✑ɪɴғᴏ ᴜsᴇʀ
🎯 ʟᴇᴠᴇʟ : 𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗
🎯 ʟɪᴍɪᴛ : 𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗𝟗

⨷ ɪɴᴅᴏɴᴇsɪᴀ ᴛɪᴍᴇ ᴢᴏɴᴇ
ᴛᴀɴɢɢᴀʟ : ${tanggal}
⏰ ᴡɪʙ : ${time}
⏰ ᴡɪᴛᴀ : ${timeMak}
⏰ ᴡᴜᴛ : ${timeJay}
     [ɢʀᴏᴜᴘ ᴍᴇɴᴜ]
▹ ${prefix}  ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
▹ ${prefix}  ᴀꜰᴋ *ᴀʟᴀꜱᴀɴ*
▹ ${prefix}  ᴄᴇᴋꜱᴇᴡᴀ
▹ ${prefix}  ᴋɪᴄᴋᴀʟʟ
▹ ${prefix}  ɪɴꜰᴏɢʀᴜᴘ
▹ ${prefix}  ᴘʀᴏᴍᴏᴛᴇ
▹ ${prefix}  ᴅᴇᴍᴏᴛᴇ
▹ ${prefix}  ʟɪꜱᴛᴏɴʟɪɴᴇ
▹ ${prefix}  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
▹ ${prefix}  voting *!voting @tag | alasan | 1-100 menit
▹ ${prefix}  delvote *hapus sesi vote di grup*
▹ ${prefix}  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
▹ ${prefix}  ʟᴇᴀᴠᴇ
▹ ${prefix}  ᴋɪᴄᴋ *ʀᴇᴘʟʏ*
▹ ${prefix}  ᴀᴅᴅ *+62xxxxxx*
▹ ${prefix}  ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ
▹ ${prefix}  ꜱᴇᴛᴘᴘɢʀᴜᴘ
▹ ${prefix}  ꜱᴇᴛᴅᴇꜱᴄ
▹ ${prefix}  antidel *enable/disable*
▹ ${prefix}  antiviewonce *enable/disable*
▹ ${prefix}  ꜱɪᴅᴇʀ *ʀᴇᴘʟʏ ᴄʜᴀᴛ ʙᴏᴛ*
▹ ${prefix}  ʜɪᴅᴇᴛᴀɢ *ᴛᴇᴋꜱ/ʀᴇᴘʟʏ ᴛᴇᴋꜱ

  [𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔]
▹ ${prefix} chiisaihentai
▹ ${prefix} trap
▹ ${prefix} blowjob
▹ ${prefix} yaoi
▹ ${prefix} ecchi
▹ ${prefix} hentai
▹ ${prefix} ahegao
▹ ${prefix} hololewd
▹ ${prefix} sideoppai
▹ ${prefix} animefeets
▹ ${prefix} animebooty
▹ ${prefix} animethighss
▹ ${prefix} hentaiparadise
▹ ${prefix} animearmpits
▹ ${prefix} hentaifemdom
▹ ${prefix} lewdanimegirls
▹ ${prefix} biganimetiddies
▹ ${prefix} animebellybutton
▹ ${prefix} hentai4everyone 

 [𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔 𝟐]
▹ ${prefix} bj
▹ ${prefix} ero
▹ ${prefix} ppcp
▹ ${prefix} cum
▹ ${prefix} feet
▹ ${prefix} yuri
▹ ${prefix} trap
▹ ${prefix} lewd
▹ ${prefix} feed
▹ ${prefix} eron
▹ ${prefix} solo
▹ ${prefix} gasm
▹ ${prefix} poke
▹ ${prefix} anal
▹ ${prefix} holo
▹ ${prefix} tits
▹ ${prefix} kuni
▹ ${prefix} kiss
▹ ${prefix} erok
▹ ${prefix} smug
▹ ${prefix} baka
▹ ${prefix} solog
▹ ${prefix} feetg
▹ ${prefix} lewdk
▹ ${prefix} waifu
▹ ${prefix} pussy
▹ ${prefix} femdom
▹ ${prefix} cuddle
▹ ${prefix} hentai
▹ ${prefix} eroyuri
▹ ${prefix} cum_jpg
▹ ${prefix} blowjob
▹ ${prefix} erofeet
▹ ${prefix} holoero
▹ ${prefix} classic
▹ ${prefix} erokemo
▹ ${prefix} fox_girl
▹ ${prefix} futanari
▹ ${prefix} lewdkemo
▹ ${prefix} wallpaper
▹ ${prefix} pussy_jpg
▹ ${prefix} kemonomimi
▹ ${prefix} nsfw_avatar
▹ ${prefix} ngif
▹ ${prefix} nsfw_neko_gif
▹ ${prefix} random_hentai_gif
 
 [𝐓𝐄𝐗𝐓 𝐌𝐀𝐊𝐄𝐑]
▹ ${prefix} shadow text
▹ ${prefix} cup text
▹ ${prefix} cup1 text
▹ ${prefix} romance text
▹ ${prefix} smoke text
▹ ${prefix} burnpaper text
▹ ${prefix} lovemessage text
▹ ${prefix} undergrass text
▹ ${prefix} love text
▹ ${prefix} coffe text
▹ ${prefix} woodheart text
▹ ${prefix} woodenboard text
▹ ${prefix} summer3d text
▹ ${prefix} wolfmetal text
▹ ${prefix} nature3d text
▹ ${prefix} underwater text
▹ ${prefix} golderrose text
▹ ${prefix} summernature text
▹ ${prefix} letterleaves text
▹ ${prefix} glowingneon text
▹ ${prefix} fallleaves text
▹ ${prefix} flamming text
▹ ${prefix} harrypotter text
▹ ${prefix} carvedwood text
▹ ${prefix} tiktok text1 text2
▹ ${prefix} arcade8bit text1 text2
▹ ${prefix} battlefield4 text1 text2
▹ ${prefix} pubg text1 text2

「 Ephoto 360 」
▹ ${prefix} wetglass text
▹ ${prefix} multicolor3d text
▹ ${prefix} watercolor text
▹ ${prefix} luxurygold text
▹ ${prefix} galaxywallpaper text
▹ ${prefix} lighttext text
▹ ${prefix} beautifulflower text
▹ ${prefix} puppycute text
▹ ${prefix} royaltext text
▹ ${prefix} heartshaped text
▹ ${prefix} birthdaycake text
▹ ${prefix} galaxystyle text
▹ ${prefix} hologram3d text
▹ ${prefix} greenneon text
▹ ${prefix} glossychrome text
▹ ${prefix} greenbush text
▹ ${prefix} metallogo text
▹ ${prefix} noeltext text
▹ ${prefix} glittergold text
▹ ${prefix} textcake text
▹ ${prefix} starsnight text
▹ ${prefix} wooden3d text
▹ ${prefix} textbyname text
▹ ${prefix} writegalacy text
▹ ${prefix} galaxybat text
▹ ${prefix} snow3d text
▹ ${prefix} birthdayday text
▹ ${prefix} goldplaybutton text
▹ ${prefix} silverplaybutton text
▹ ${prefix} freefire text

┏━▹ IMAGE MANIPULATION
┃▹ ${prefix}darkjoke
┃▹ ${prefix}meme
┃▹ ${prefix}joke
┃▹ ${prefix}wasted
┃▹ ${prefix}hitler
┃▹ ${prefix}wanted
┃▹ ${prefix}greyscale
┃▹ ${prefix}trash
┃▹ ${prefix}circle
┃▹ ${prefix}blur
┃▹ ${prefix}tinyurl
┃▹ ${prefix}cuttly
┃▹ ${prefix}affect
┃▹ ${prefix}picture
┗━▹
┏⬡ 𝐅𝐈𝐋𝐌 𝐌𝐄𝐍𝐔
┃▹ ${prefix}drakorongoing
┃▹ ${prefix}lk21 query
┃▹ ${prefix}wattpad url_wattpad
┃▹ ${prefix}wattpadsearch query
┃▹ ${prefix}cerpen
┃▹ ${prefix}ceritahoror
┗⬡
┏⬡ 𝐓𝐄𝐗𝐓 𝐌𝐄𝐍
┃▹ ${prefix}quotes
┃▹ ${prefix}quotesdiLan
┃▹ ${prefix}quotesanime
┃▹ ${prefix}quotesimage
┃▹ ${prefix}faktaunik
┃▹ ${prefix}katabijak
┃▹ ${prefix}pantun
┃▹ ${prefix}bucin
┃▹ ${prefix}randomnama
┗⬡
  [𝐖𝐈𝐁𝐔 𝐌𝐄𝐍𝐔
▹ ${prefix}loli
▹ ${prefix}manga
▹ ${prefix}anime 
▹ ${prefix}lolivideo
▹ ${prefix}husbu
▹ ${prefix}waifu
▹ ${prefix}milf
▹ ${prefix}neko
▹ ${prefix}kanna
▹ ${prefix}sagiri
▹ ${prefix}hentai
▹ ${prefix}cosplay
▹ ${prefix}wallnime
▹ ${prefix}kusonime
▹ ${prefix}megumin
▹ ${prefix}otakudesu
▹ ${prefix}doujindesu
▹ ${prefix}storyanime
▹ ${prefix}nakanomiku
▹ ${prefix}nakanoikyy
▹ ${prefix}nakanoitsuki
▹ ${prefix}otakuongoing
▹ ${prefix}nhentai *code*
▹ ${prefix}nekopoi *link*
▹ ${prefix}nekopoisearch

┏⬡ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑
┃▹  ${prefix}fb 
┃▹  ${prefix}igdl 
┃▹  ${prefix}igdl2 
┃▹  ${prefix}twitter 
┃▹  ${prefix}tiktok 
┃▹  ${prefix}play 
┃▹  ${prefix}ythd 
┃▹  ${prefix}ytmp3 
┃▹  ${prefix}ytmp4 
┃▹  ${prefix}soundcloud 
┃▹  ${prefix}tiktoknowm 
┃▹  ${prefix}tiktokaudio
┃▹  ${prefix}mediafire 
┃▹  ${prefix}nhentaipdf *code*
┗⬡
┏⬡ 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔
┃▹  ${prefix}brainly *query*
┃▹  ${prefix}shopee *product*
┃▹  ${prefix}playstore *query*
┃▹  ${prefix}ssweb *query*
┃▹  ${prefix}google *query*
┃▹  ${prefix}image *query*
┃▹  ${prefix}pinterest *query*
┃▹  ${prefix}nulis *teks*
┃▹  ${prefix}iguser *ussername*
┃▹  ${prefix}igstalk *username*
┃▹  ${prefix}githubstalk *username*
┃▹  ${prefix}tiktokstalk *ussername*
┃▹  ${prefix}img2url *reply foto*
┃▹  ${prefix}ytsearch *query*
┗⬡

𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔
▹ ${prefix}slot
▹ ${prefix}voting
▹ ${prefix}limitgame
▹ ${prefix}gelud @tag
▹ ${prefix}tictactoe @tag
▹ ${prefix}siapaaku
▹ ${prefix}family100
▹ ${prefix}kuismath
▹ ${prefix}asahotak
▹ ${prefix}tebaklirik
▹ ${prefix}tebaklagu
▹ ${prefix}tebakkata
▹ ${prefix}susunkata
▹ ${prefix}kimiakuis
▹ ${prefix}caklontong
▹ ${prefix}tebakjenaka
▹ ${prefix}tebakanime
▹ ${prefix}tebaktebakan
▹ ${prefix}tebakgambar
▹ ${prefix}tebakbendera
▹ ${prefix}suit *batu/kertas/gunting*

⬡ 𝐌𝐄𝐍𝐔 𝐏𝐎𝐑𝐍
▹ ${prefix} bkp *random*
▹ ${prefix} bokep1
▹ ${prefix} bokep2
▹ ${prefix} bokep3
▹ ${prefix} bokep4
▹ ${prefix} bokep5
▹ ${prefix} bokep6
▹ ${prefix} bokep7
▹ ${prefix} bokep8
▹ ${prefix} bokep9
▹ ${prefix} bokep10
▹ ${prefix} bokep11
▹ ${prefix} bokep12
▹ ${prefix} bokep13
▹ ${prefix} bokep14
▹ ${prefix} bokep15
▹ ${prefix} bokep16
▹ ${prefix} bokep17
▹ ${prefix} bokep18
▹ ${prefix} bokep19
▹ ${prefix} bokep20
▹ ${prefix} bokep21
▹ ${prefix} bokep22
▹ ${prefix} bokep23
▹ ${prefix} bokep24
▹ ${prefix} 𝐛𝐨𝐤𝐞𝐩𝟐𝟓

┏⬡𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔
┃▹  ${prefix}dadu
┃▹  ${prefix}bucinstick
┃▹  ${prefix}doge
┃▹  ${prefix}toimg
┃▹  ${prefix}patrick
┃▹  ${prefix}ttg *teks*
┃▹  ${prefix}attp *teks*
┃▹  ${prefix}stickeranime
┃▹  ${prefix}semoji *emoji*
┃▹  ${prefix}sticker *reply foto/video*
┃▹  ${prefix}smeme *teks|teks*
┃▹  ${prefix}swm *pack|author*
┃▹  ${prefix}take *pack|author* 
┃▹  ${prefix}tovideo *reply sgif*
┗⬡

┏⬡ 𝐂𝐄𝐊 𝐌𝐄𝐍𝐔
┃▹  ${prefix}mining
┃▹  ${prefix}togel
┃▹  ${prefix}cekwatak
┃▹  ${prefix}cekmati [nama]
┃▹  ${prefix}wangy [nama]
┃▹  ${prefix}citacita
┃▹  ${prefix}toxic
┃▹  ${prefix}truth
┃▹  ${prefix}dare
┃▹  ${prefix}apakah
┃▹  ${prefix}bisakah
┃▹  ${prefix}kapankah
┃▹  ${prefix}rate
┃▹  ${prefix}jadian
┃▹  ${prefix}cantik
┃▹  ${prefix}ganteng
┃▹  ${prefix}beban
┃▹  ${prefix}babi
┃▹  ${prefix}cekganteng
┃▹  ${prefix}cekcantik
┗⬡
┏⬡ 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔
┃▹  ${prefix}update
┃▹  ${prefix}level
┃▹  ${prefix}rules
┃▹  ${prefix}profile
┃▹  ${prefix}waktu
┃▹  ${prefix}botstat
┃▹  ${prefix}sewabot
┃▹  ${prefix}listsewa
┃▹  ${prefix}owner
┃▹  ${prefix}ping
┃▹  ${prefix}runtime
┃▹  ${prefix}donasi
┃▹  ${prefix}leaderboard
┃▹  ${prefix}cekpremium
┃▹  ${prefix}listpremium
┃▹  ${prefix}sourcecode
┃▹  ${prefix}bugreport *keluha

┏⬡ 𝐈𝐒𝐋𝐀𝐌 𝐌𝐄𝐍𝐔
┃▹  ${prefix}listsurah
┃▹  ${prefix}alquran
┃▹  ${prefix}alquranaudio
┃▹  ${prefix}asmaulhusna
┃▹  ${prefix}kisahnabi
┃▹  ${prefix}jadwalshola
┗⬡

╠═══✪〘 Sound Menu〙✪══
╠➥${prefix}iri
╠➥${prefix}desah
╠➥${prefix}nengdesah
╠➥${prefix}pale
╠➥${prefix}playdate
╠➥${prefix}beb
╠➥${prefix}hallo
╠➥${prefix}megic
╠➥${prefix}susu
╠➥${prefix}cemen
╠➥${prefix}menyukaiku
╠➥${prefix}gatal
╠➥${prefix}sasageyo
╠➥${prefix}sound
╠➥${prefix}sound1
╠➥${prefix}sound2
╠➥${prefix}sound3
╠➥${prefix}sound4
╠➥${prefix}sound5
╠➥${prefix}sound6
╠➥${prefix}sound7
╠➥${prefix}sound8
╠➥${prefix}sound9
╠➥${prefix}sound10
╠➥${prefix}sound11
╠➥${prefix}sound12
╠➥${prefix}sound13
╠➥${prefix}sound14
╠➥${prefix}sound15
╠➥${prefix}sound16
╠➥${prefix}sound17
╠➥${prefix}sound18
╠➥${prefix}sound19
╠➥${prefix}sound20
╠➥${prefix}sound21
╠➥${prefix}sound22
╠➥${prefix}sound23
╠➥${prefix}sound24
╠➥${prefix}sound25
╠➥${prefix}sound26
╠➥${prefix}sound27
╠➥${prefix}sound28
╠➥${prefix}sound29
╠➥${prefix}sound30
╠➥${prefix}sound31
╠➥${prefix}sound32
╠➥${prefix}sound33
╠➥${prefix}sound34
╠➥${prefix}sound35
╠➥${prefix}sound36
╠➥${prefix}sound37
╠➥${prefix}sound38
╠➥${prefix}sound39
╠➥${prefix}sound40
╠➥${prefix}sound41
╠➥${prefix}sound42
╠➥${prefix}sound43
╠➥${prefix}sound44
╠➥${prefix}sound45
╠➥${prefix}sound46
╠➥${prefix}sound47
╠➥${prefix}sound48
╠➥${prefix}sound49
╠➥${prefix}sound50
╠➥${prefix}sound51
╠➥${prefix}sound52
╠➥${prefix}sound53
╠➥${prefix}sound54
╠➥${prefix}sound55
╠➥${prefix}sound56
╠➥${prefix}sound57
╠➥${prefix}sound58
╠➥${prefix}sound59
╠➥${prefix}sound60
╠➥${prefix}sound61
╠➥${prefix}sound62
╠➥${prefix}sound63
╠➥${prefix}sound64
╠➥${prefix}sound65
╠➥${prefix}sound66
╠➥${prefix}sound67
╠➥${prefix}sound68
╠➥#sound69
╠➥#sound70
╠➥#sound71
╠➥#sound72
╠➥${prefix}sound73
╠➥${prefix}sound74
╠➥${prefix}sound75
╠➥${prefix}sound76
╠➥${prefix}sound77
╠➥${prefix}sound78
╠➥${prefix}sound79
╠➥${prefix}sound80
╠➥${prefix}sound81
╠➥${prefix}sound82
╠➥${prefix}sound83
╠➥${prefix}sound84
╠➥${prefix}sound85
╠➥${prefix}sound86
╠➥${prefix}sound87
╠➥${prefix}sound88
╠➥${prefix}sound89
╠➥${prefix}sound90
╠➥${prefix}sound91
╠➥${prefix}sound92
╠➥${prefix}sound93
╠➥${prefix}sound94
╠➥${prefix}sound95
╠➥${prefix}sound96
╠➥${prefix}sound97
╠➥${prefix}sound98
╠➥#sound99
╠➥${prefix}sound100
╰───「 ${botName} 」────
`, imageMessage: imageMsg,
                  buttons: buttons,
                  headerType: 4
   }
               
                  prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: editz, contextInfo:{ mentionedJid: parseMention(menu), externalAdReply: {
                                                    title: `Hai ${pushname} 👋`,
                                                    footerText:  `*Note :*  ᴍᴀᴀғ ᴋᴀᴋ Denara Bot࿐ sᴀᴀᴛ ɪɴɪ sᴇᴅᴀɴɢ ᴅᴀʟᴀᴍ ᴘᴇʀʙᴀɪᴋᴀɴ`, imageMessage: imageMsg,
                                                    body: `${tanggal}`,
                                                    previewType: 1,
                                                    thumbnailUrl: "https://h.top4top.io/p_2102x150j0.jpg",
                                                    thumbnail: fs.readFileSync('./media/Menu.jpg'), }, forwardingScore:508, isForwarded:true, mentionedJid:[Tag + '@s.whatsapp.net', senderr]}})
                               rimuru.relayWAMessage(prep)
                               break 
       //=====================================================================================================================================================================================             
           case 'kalender':
              reply(`
🐣Day ${week} ${weton} 
🐥Date : ${date}
`)
break
case 'textpro':
function _0x17f4(){var _0x383281=['\x20breakwall\x20text\x0a▹\x20','\x20pornhub\x20text1\x20text2\x0a▹\x20','\x20glitch\x20text1\x20text2\x0a▹\x20','menu','2308880hRBbYA','only','1888138UFMdEf','daftarB','\x20marvelstudio\x20text1\x20text2\x0a▹\x20','\x20halloween\x20text\x0a▹\x20','\x20toxic\x20text\x0a▹\x20','\x20steel3d\x20text1\x20text2\x0a▹\x20','\x20deluxesilver\x20text\x0a▹\x20','\x20futureneon\x20text\x0a▹\x20','\x20horrorblood\x20text\x0a▹\x20','\x20strawberry\x20text\x0a▹\x20','\x20avenger\x20text1\x20text2\x0a▹\x20','\x20metaldark\x20text\x0a▹\x20','\x20lionlogo\x20text1\x20text2\x0a▹\x20','380220fsJzsc','\x20sandsummer\x20text\x0a▹\x20','「\x20Text\x20Pro\x20Me\x20」\x0a▹\x20','5691654yLjvkM','\x20luxury\x20text\x0a▹\x20','\x20greenneon\x20text\x0a▹\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20Denara࿐\x20https://instabio.cc/3101210Jh7y7z','\x20summersand\x20text\x0a▹\x20','\x20fireworksparkle\x20text\x0a▹\x20','\x20sandengraved\x20text\x0a▹\x20','\x20newyearcard\x20text\x0a▹\x20','1114256TGkLMa','\x20roadwarning\x20text\x0a▹\x20','\x20advanceglow\x20text\x0a▹\x20','\x20space\x20text1\x20text2\x0a▹\x20','3154041bmnUWf','\x20wolflogo\x20text1\x20text2\x0a▹\x20','\x20bokeh\x20text\x0a▹\x20','\x20neon\x20text\x0a▹\x20','\x20thunder\x20text\x0a▹\x20','\x20neonlight\x20text\x0a▹\x20','18Qiwfsv','40DoExAv','⬡\x20BACK\x20TO\x20MENU\x20','\x20wallgravity\x20text1\x20text2\x0a\x20','1288003rQwJmH'];_0x17f4=function(){return _0x383281;};return _0x17f4();}var _0x50e116=_0x5ce1;(function(_0x54177f,_0x56d2d1){var _0x4ad2f1=_0x5ce1,_0x1654a=_0x54177f();while(!![]){try{var _0x1a4a15=parseInt(_0x4ad2f1(0x118))/0x1+parseInt(_0x4ad2f1(0x137))/0x2+-parseInt(_0x4ad2f1(0x114))/0x3*(parseInt(_0x4ad2f1(0x12c))/0x4)+parseInt(_0x4ad2f1(0x11d))/0x5+parseInt(_0x4ad2f1(0x12f))/0x6+-parseInt(_0x4ad2f1(0x11f))/0x7+-parseInt(_0x4ad2f1(0x115))/0x8*(parseInt(_0x4ad2f1(0x10e))/0x9);if(_0x1a4a15===_0x56d2d1)break;else _0x1654a['push'](_0x1654a['shift']());}catch(_0x55f043){_0x1654a['push'](_0x1654a['shift']());}}}(_0x17f4,0xa1ea7));function _0x5ce1(_0x5c82dc,_0x9e23eb){var _0x17f416=_0x17f4();return _0x5ce1=function(_0x5ce138,_0x32c9bc){_0x5ce138=_0x5ce138-0x10e;var _0x385ee2=_0x17f416[_0x5ce138];return _0x385ee2;},_0x5ce1(_0x5c82dc,_0x9e23eb);}if(!isRegistered)return reply(ind[_0x50e116(0x11e)][_0x50e116(0x120)]);wibu='\x0a▹\x20'+prefix+_0x50e116(0x12e)+prefix+'\x20blackpink\x20text\x0a▹\x20'+prefix+_0x50e116(0x111)+prefix+_0x50e116(0x131)+prefix+_0x50e116(0x139)+prefix+_0x50e116(0x126)+prefix+'\x20sandwriting\x20text\x0a▹\x20'+prefix+_0x50e116(0x12d)+prefix+_0x50e116(0x135)+prefix+_0x50e116(0x12a)+prefix+_0x50e116(0x113)+prefix+'\x20holographic\x20text\x0a▹\x20'+prefix+'\x20text1917\x20text\x0a▹\x20'+prefix+'\x20minion\x20text\x0a▹\x20'+prefix+_0x50e116(0x125)+prefix+_0x50e116(0x136)+prefix+'\x20bloodfrosted\x20text\x0a▹\x20'+prefix+_0x50e116(0x122)+prefix+'\x20jokerlogo\x20text\x0a▹\x20'+prefix+_0x50e116(0x134)+prefix+'\x20natureleaves\x20text\x0a▹\x20'+prefix+_0x50e116(0x110)+prefix+_0x50e116(0x123)+prefix+_0x50e116(0x128)+prefix+'\x20box3d\x20text\x0a▹\x20'+prefix+_0x50e116(0x138)+prefix+_0x50e116(0x119)+prefix+'\x20icecold\x20text\x0a▹\x20'+prefix+_0x50e116(0x130)+prefix+'\x20cloud\x20text\x0a▹\x20'+prefix+_0x50e116(0x133)+prefix+_0x50e116(0x127)+prefix+_0x50e116(0x112)+prefix+_0x50e116(0x11a)+prefix+_0x50e116(0x11b)+prefix+_0x50e116(0x129)+prefix+_0x50e116(0x13a)+prefix+'\x20ninjalogo\x20text1\x20text2\x0a▹\x20'+prefix+_0x50e116(0x121)+prefix+_0x50e116(0x12b)+prefix+_0x50e116(0x10f)+prefix+_0x50e116(0x124)+prefix+_0x50e116(0x117),sendButMessage(from,wibu,_0x50e116(0x132),[{'buttonId':prefix+_0x50e116(0x11c),'buttonText':{'displayText':_0x50e116(0x116)},'type':0x1}]);
break
case 'wibu2':
case 'nsfwanime':
function _0x4f1c(){var _0x5db4e5=['294DAbTpi','946504KpiVsj','\x20hentaifemdom\x0a▹\x20','\x20trap\x0a▹\x20','\x20yaoi\x0a▹\x20','9QZMZut','17799330IcPAlx','\x20hololewd\x0a▹\x20','\x0a▹\x20','menu','\x20animebooty\x0a▹\x20','8416UWXGxn','daftarB','4122404JVolNM','⬡\x20BACK\x20TO\x20MENU\x20','\x20hentai\x0a▹\x20','\x20biganimetiddies\x0a▹\x20','47313qONDwc','416310iwxPAl','\x20hentai4everyone\x0a\x0a','\x20chiisaihentai\x0a▹\x20','\x20animebellybutton\x0a▹\x20','\x20lewdanimegirls\x0a▹\x20','4739TQDMca','\x20blowjob\x0a▹\x20','130270OYhiyD','\x20animearmpits\x0a▹\x20','\x20MENU\x0a▹\x20'];_0x4f1c=function(){return _0x5db4e5;};return _0x4f1c();}var _0x5a6a94=_0x3cd2;function _0x3cd2(_0x1f16c2,_0x4a6b15){var _0x4f1cb4=_0x4f1c();return _0x3cd2=function(_0x3cd236,_0x45d278){_0x3cd236=_0x3cd236-0x133;var _0x22c920=_0x4f1cb4[_0x3cd236];return _0x22c920;},_0x3cd2(_0x1f16c2,_0x4a6b15);}(function(_0x3ae2c5,_0xff9e87){var _0x16dce8=_0x3cd2,_0x66a149=_0x3ae2c5();while(!![]){try{var _0x251e32=parseInt(_0x16dce8(0x141))/0x1+-parseInt(_0x16dce8(0x14d))/0x2+-parseInt(_0x16dce8(0x142))/0x3+parseInt(_0x16dce8(0x13d))/0x4+-parseInt(_0x16dce8(0x149))/0x5*(-parseInt(_0x16dce8(0x14c))/0x6)+-parseInt(_0x16dce8(0x147))/0x7*(-parseInt(_0x16dce8(0x13b))/0x8)+-parseInt(_0x16dce8(0x135))/0x9*(parseInt(_0x16dce8(0x136))/0xa);if(_0x251e32===_0xff9e87)break;else _0x66a149['push'](_0x66a149['shift']());}catch(_0x325281){_0x66a149['push'](_0x66a149['shift']());}}}(_0x4f1c,0xa4bf9));if(!isRegistered)return reply(ind['only'][_0x5a6a94(0x13c)]);wibu=_0x5a6a94(0x138)+prefix+_0x5a6a94(0x14b)+prefix+_0x5a6a94(0x144)+prefix+_0x5a6a94(0x133)+prefix+_0x5a6a94(0x148)+prefix+_0x5a6a94(0x134)+prefix+'\x20ecchi\x0a▹\x20'+prefix+_0x5a6a94(0x13f)+prefix+'\x20ahegao\x0a▹\x20'+prefix+_0x5a6a94(0x137)+prefix+'\x20sideoppai\x0a▹\x20'+prefix+'\x20animefeets\x0a▹\x20'+prefix+_0x5a6a94(0x13a)+prefix+'\x20animethighss\x0a▹\x20'+prefix+'\x20hentaiparadise\x0a▹\x20'+prefix+_0x5a6a94(0x14a)+prefix+_0x5a6a94(0x14e)+prefix+_0x5a6a94(0x146)+prefix+_0x5a6a94(0x140)+prefix+_0x5a6a94(0x145)+prefix+_0x5a6a94(0x143),sendButMessage(from,wibu,'ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20Denara࿐\x20https://instabio.cc/3101210Jh7y7z',[{'buttonId':prefix+_0x5a6a94(0x139),'buttonText':{'displayText':_0x5a6a94(0x13e)},'type':0x1}]);
        break;
          case 'fitnah': 				
					if (!isGroup) return reply('ONLY GRUP')              
				    if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				    var gh = body.slice(8)
				    mentioned = editz.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					 rimuru.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'randomimage':
case 'randomimage':
function _0x4d49(_0x26ec1a,_0x2d0401){var _0x49cba8=_0x49cb();return _0x4d49=function(_0x4d4942,_0xba5085){_0x4d4942=_0x4d4942-0x94;var _0x32898b=_0x49cba8[_0x4d4942];return _0x32898b;},_0x4d49(_0x26ec1a,_0x2d0401);}var _0x2615ad=_0x4d49;(function(_0x1caa51,_0x79670d){var _0x4de334=_0x4d49,_0x5aba81=_0x1caa51();while(!![]){try{var _0x8b81f8=-parseInt(_0x4de334(0x9e))/0x1*(-parseInt(_0x4de334(0xbb))/0x2)+parseInt(_0x4de334(0xa6))/0x3+-parseInt(_0x4de334(0xa3))/0x4+parseInt(_0x4de334(0xa2))/0x5+-parseInt(_0x4de334(0xb5))/0x6*(-parseInt(_0x4de334(0x9c))/0x7)+-parseInt(_0x4de334(0x9d))/0x8+-parseInt(_0x4de334(0x96))/0x9;if(_0x8b81f8===_0x79670d)break;else _0x5aba81['push'](_0x5aba81['shift']());}catch(_0x246ff2){_0x5aba81['push'](_0x5aba81['shift']());}}}(_0x49cb,0x6b8af),wibu=_0x2615ad(0xa7)+prefix+_0x2615ad(0xa1)+prefix+'\x20ero\x0a▹\x20'+prefix+_0x2615ad(0xb8)+prefix+'\x20cum\x0a▹\x20'+prefix+'\x20feet\x0a▹\x20'+prefix+_0x2615ad(0x97)+prefix+'\x20trap\x0a▹\x20'+prefix+_0x2615ad(0xbc)+prefix+_0x2615ad(0xb1)+prefix+_0x2615ad(0xae)+prefix+_0x2615ad(0xa4)+prefix+'\x20gasm\x0a▹\x20'+prefix+'\x20poke\x0a▹\x20'+prefix+_0x2615ad(0x9f)+prefix+'\x20holo\x0a▹\x20'+prefix+_0x2615ad(0xa9)+prefix+_0x2615ad(0xbe)+prefix+'\x20kiss\x0a▹\x20'+prefix+'\x20erok\x0a▹\x20'+prefix+_0x2615ad(0xba)+prefix+'\x20baka\x0a▹\x20'+prefix+_0x2615ad(0xbd)+prefix+_0x2615ad(0xb4)+prefix+_0x2615ad(0xa8)+prefix+_0x2615ad(0xaf)+prefix+_0x2615ad(0x9a)+prefix+_0x2615ad(0x94)+prefix+_0x2615ad(0xaa)+prefix+_0x2615ad(0xa5)+prefix+_0x2615ad(0xb3)+prefix+'\x20cum_jpg\x0a▹\x20'+prefix+'\x20blowjob\x0a▹\x20'+prefix+'\x20erofeet\x0a▹\x20'+prefix+_0x2615ad(0xb7)+prefix+_0x2615ad(0xa0)+prefix+_0x2615ad(0xad)+prefix+_0x2615ad(0xb9)+prefix+_0x2615ad(0xb6)+prefix+_0x2615ad(0xb2)+prefix+_0x2615ad(0x9b)+prefix+_0x2615ad(0x98)+prefix+'\x20kemonomimi\x0a▹\x20'+prefix+_0x2615ad(0xab)+prefix+'\x20ngif\x0a▹\x20'+prefix+_0x2615ad(0xb0)+prefix+_0x2615ad(0xac),sendButMessage(from,wibu,_0x2615ad(0x99),[{'buttonId':prefix+_0x2615ad(0x95),'buttonText':{'displayText':'⬡\x20BACK\x20TO\x20MENU\x20'},'type':0x1}]));function _0x49cb(){var _0x294439=['3341315TpWiis','2249144LBfZYr','\x20solo\x0a▹\x20','\x20hentai\x0a▹\x20','523185xzlNnR','\x0a▹\x20','\x20lewdk\x0a▹\x20','\x20tits\x0a▹\x20','\x20cuddle\x0a▹\x20','\x20nsfw_avatar\x0a▹\x20','\x20random_hentai_gif\x0a\x0a','\x20erokemo\x0a▹\x20','\x20eron\x0a▹\x20','\x20waifu\x0a▹\x20','\x20nsfw_neko_gif\x0a▹\x20','\x20feed\x0a▹\x20','\x20lewdkemo\x0a▹\x20','\x20eroyuri\x0a▹\x20','\x20feetg\x0a▹\x20','111558OgMsHa','\x20futanari\x0a▹\x20','\x20holoero\x0a▹\x20','\x20ppcp\x0a▹\x20','\x20fox_girl\x0a▹\x20','\x20smug\x0a▹\x20','34156ylWAOP','\x20lewd\x0a▹\x20','\x20solog\x0a▹\x20','\x20kuni\x0a▹\x20','\x20femdom\x0a▹\x20','menu','2882565CKBdCg','\x20yuri\x0a▹\x20','\x20pussy_jpg\x0a▹\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20Denara࿐\x20https://instabio.cc/3101210Jh7y7z','\x20pussy\x0a▹\x20','\x20wallpaper\x0a▹\x20','203lpQcWC','1016808zEzqyR','4CSCIqN','\x20anal\x0a▹\x20','\x20classic\x0a▹\x20','\x20bj\x0a▹\x20'];_0x49cb=function(){return _0x294439;};return _0x49cb();}
        break;
        case 'photoxy':
case 'photooky':
function _0x1a29(_0x38eac6,_0x4e852a){var _0x2e632e=_0x2e63();return _0x1a29=function(_0x1a29ba,_0x1a083a){_0x1a29ba=_0x1a29ba-0x14f;var _0x3b8d39=_0x2e632e[_0x1a29ba];return _0x3b8d39;},_0x1a29(_0x38eac6,_0x4e852a);}var _0x510e6f=_0x1a29;(function(_0xff77dc,_0x3aa3fb){var _0x103cfa=_0x1a29,_0x562af9=_0xff77dc();while(!![]){try{var _0x47bb17=parseInt(_0x103cfa(0x168))/0x1+parseInt(_0x103cfa(0x160))/0x2+parseInt(_0x103cfa(0x15d))/0x3+-parseInt(_0x103cfa(0x167))/0x4+parseInt(_0x103cfa(0x15e))/0x5+parseInt(_0x103cfa(0x15f))/0x6+-parseInt(_0x103cfa(0x150))/0x7*(parseInt(_0x103cfa(0x164))/0x8);if(_0x47bb17===_0x3aa3fb)break;else _0x562af9['push'](_0x562af9['shift']());}catch(_0x40cbdf){_0x562af9['push'](_0x562af9['shift']());}}}(_0x2e63,0xddf63));if(!isRegistered)return reply(ind['only'][_0x510e6f(0x16f)]);function _0x2e63(){var _0x3b026d=['6162592NMtWXY','1707915hLRzuw','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','\x20undergrass\x20text\x0a▹\x20','\x20woodheart\x20text\x0a▹\x20','\x20fallleaves\x20text\x0a▹\x20','\x20lovemessage\x20text\x0a▹\x20','\x20cup\x20text\x0a▹\x20','daftarB','menu','18434087HSZWdM','\x0a\x0a▹\x20','\x20nature3d\x20text\x0a▹\x20','\x20carvedwood\x20text\x0a▹\x20','\x20glowingneon\x20text\x0a▹\x20','\x20letterleaves\x20text\x0a▹\x20','\x20golderrose\x20text\x0a▹\x20','\x20smoke\x20text\x0a▹\x20','\x20cup1\x20text\x0a▹\x20','\x20summer3d\x20text\x0a▹\x20','\x20arcade8bit\x20text1\x20text2\x0a▹\x20','\x20pubg\x20text1\x20text2\x0a\x0a','\x20underwater\x20text\x0a▹\x20','2795205VNzRYv','3191795gwEwto','4383216mTjhFN','2149398NeBnXv','\x20flamming\x20text\x0a▹\x20','\x20coffe\x20text\x0a▹\x20','\x20shadow\x20text\x0a▹\x20','8aiaMhK','\x20burnpaper\x20text\x0a▹\x20','\x20summernature\x20text\x0a▹\x20'];_0x2e63=function(){return _0x3b026d;};return _0x2e63();}wibu=_0x510e6f(0x151)+prefix+_0x510e6f(0x163)+prefix+_0x510e6f(0x16e)+prefix+_0x510e6f(0x158)+prefix+'\x20romance\x20text\x0a▹\x20'+prefix+_0x510e6f(0x157)+prefix+_0x510e6f(0x165)+prefix+_0x510e6f(0x16d)+prefix+_0x510e6f(0x16a)+prefix+'\x20love\x20text\x0a▹\x20'+prefix+_0x510e6f(0x162)+prefix+_0x510e6f(0x16b)+prefix+'\x20woodenboard\x20text\x0a▹\x20'+prefix+_0x510e6f(0x159)+prefix+'\x20wolfmetal\x20text\x0a▹\x20'+prefix+_0x510e6f(0x152)+prefix+_0x510e6f(0x15c)+prefix+_0x510e6f(0x156)+prefix+_0x510e6f(0x166)+prefix+_0x510e6f(0x155)+prefix+_0x510e6f(0x154)+prefix+_0x510e6f(0x16c)+prefix+_0x510e6f(0x161)+prefix+'\x20harrypotter\x20text\x0a▹\x20'+prefix+_0x510e6f(0x153)+prefix+'\x20tiktok\x20text1\x20text2\x0a▹\x20'+prefix+_0x510e6f(0x15a)+prefix+'\x20battlefield4\x20text1\x20text2\x0a▹\x20'+prefix+_0x510e6f(0x15b),sendButMessage(from,wibu,_0x510e6f(0x169),[{'buttonId':prefix+_0x510e6f(0x14f),'buttonText':{'displayText':'⬡\x20BACK\x20TO\x20MENU\x20'},'type':0x1}]);
        break;
        case 'simih':
					
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
        case 'simi':
					var _0x19e39c=_0x3ac7;(function(_0x1081a6,_0x24a8b0){var _0x185934=_0x3ac7,_0x14e968=_0x1081a6();while(!![]){try{var _0x1598e3=-parseInt(_0x185934(0x1c3))/0x1*(parseInt(_0x185934(0x1c9))/0x2)+parseInt(_0x185934(0x1bd))/0x3*(parseInt(_0x185934(0x1c5))/0x4)+-parseInt(_0x185934(0x1c6))/0x5*(-parseInt(_0x185934(0x1bf))/0x6)+parseInt(_0x185934(0x1be))/0x7+-parseInt(_0x185934(0x1c4))/0x8+-parseInt(_0x185934(0x1c1))/0x9+-parseInt(_0x185934(0x1c0))/0xa*(-parseInt(_0x185934(0x1c2))/0xb);if(_0x1598e3===_0x24a8b0)break;else _0x14e968['push'](_0x14e968['shift']());}catch(_0xebda62){_0x14e968['push'](_0x14e968['shift']());}}}(_0x1b3e,0x58d91));if(args[_0x19e39c(0x1c8)]<0x1)return reply(_0x19e39c(0x1c7));function _0x1b3e(){var _0x54b5fc=['2TgRjFk','2916624ZMUpet','8XmVHKF','5VNEEJu','Textnya\x20mana\x20um?','length','602036aTTbgu','955989fYrvsU','1921255zHFXFi','1931826tQSDfU','128250bbkdva','5708268yQUGld','627ALWXFO'];_0x1b3e=function(){return _0x54b5fc;};return _0x1b3e();}function _0x3ac7(_0x4234b4,_0x5ae094){var _0x1b3e94=_0x1b3e();return _0x3ac7=function(_0x3ac7e5,_0x2501ae){_0x3ac7e5=_0x3ac7e5-0x1bd;var _0x1cd3a6=_0x1b3e94[_0x3ac7e5];return _0x1cd3a6;},_0x3ac7(_0x4234b4,_0x5ae094);}teks=body['slice'](0x5),anu=await simih(teks),reply(anu);
					break 
					case 'darkjoke': 
				var _0x4fbf96=_0x54de;(function(_0x42c9b8,_0x210c2b){var _0x5eb436=_0x54de,_0x4033a0=_0x42c9b8();while(!![]){try{var _0x11a649=parseInt(_0x5eb436(0x19d))/0x1+parseInt(_0x5eb436(0x197))/0x2+-parseInt(_0x5eb436(0x199))/0x3*(-parseInt(_0x5eb436(0x1a2))/0x4)+-parseInt(_0x5eb436(0x1a3))/0x5+parseInt(_0x5eb436(0x19c))/0x6+-parseInt(_0x5eb436(0x195))/0x7*(parseInt(_0x5eb436(0x19a))/0x8)+-parseInt(_0x5eb436(0x1a4))/0x9*(parseInt(_0x5eb436(0x1a5))/0xa);if(_0x11a649===_0x210c2b)break;else _0x4033a0['push'](_0x4033a0['shift']());}catch(_0x2e04c7){_0x4033a0['push'](_0x4033a0['shift']());}}}(_0x58a8,0xecbd8),buff=await getBuffer(_0x4fbf96(0x193),{'method':_0x4fbf96(0x1a1)}),buttons=[{'buttonId':prefix+_0x4fbf96(0x19e),'buttonText':{'displayText':_0x4fbf96(0x198)},'type':0x1}],imageMsg=(await rimuru[_0x4fbf96(0x1a0)](buff,_0x4fbf96(0x19f),{'thumbnail':buff}))[_0x4fbf96(0x19f)],buttonsMessage={'footerText':_0x4fbf96(0x196),'imageMessage':imageMsg,'contentText':_0x4fbf96(0x19b),'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x4fbf96(0x194)](prep));function _0x54de(_0x39445f,_0x4e72be){var _0x58a827=_0x58a8();return _0x54de=function(_0x54de79,_0x2e572c){_0x54de79=_0x54de79-0x193;var _0x2ac752=_0x58a827[_0x54de79];return _0x2ac752;},_0x54de(_0x39445f,_0x4e72be);}function _0x58a8(){var _0x5c8a3e=['10368qpnyYe','©WhatsApp\x20bot','8325978siekfT','224546iTIyij','infoig','imageMessage','prepareMessageMedia','get','4EpPGKN','2556250ohHhCC','18RLUiqU','10283570IMoNpr','http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=PunyaIkyAds','relayWAMessage','441VrmQhN','ғᴏʟʟᴏs\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz/࿐','2880252ecxwfD','\x20©WhatsApp\x20bot','1700895OnDBcj'];_0x58a8=function(){return _0x5c8a3e;};return _0x58a8();}
break
        case 'ephoto':
case 'ephotomenu':
function _0x3dba(_0x191104,_0x4cba69){var _0x59cdaf=_0x59cd();return _0x3dba=function(_0x3dbad5,_0x16c2f9){_0x3dbad5=_0x3dbad5-0x1d9;var _0x30a786=_0x59cdaf[_0x3dbad5];return _0x30a786;},_0x3dba(_0x191104,_0x4cba69);}var _0x3a237d=_0x3dba;function _0x59cd(){var _0xaa0033=['\x20starsnight\x20text\x0a▹\x20','203TycjUK','\x20wetglass\x20text\x0a▹\x20','daftarB','\x20silverplaybutton\x20text\x0a▹\x20','\x20greenbush\x20text\x0a▹\x20','\x20watercolor\x20text\x0a▹\x20','15305IvPswZ','\x20birthdayday\x20text\x0a▹\x20','\x20textcake\x20text\x0a▹\x20','\x20birthdaycake\x20text\x0a▹\x20','⬡\x20BACK\x20TO\x20MENU\x20','110klaKga','\x20puppycute\x20text\x0a▹\x20','\x20wooden3d\x20text\x0a▹\x20','menu','608920TqAMtY','2363745sqWgBJ','32943Vnspiw','293706LbQaqC','\x20glittergold\x20text\x0a▹\x20','\x20multicolor3d\x20text\x0a▹\x20','\x20greenneon\x20text\x0a▹\x20','\x20galaxybat\x20text\x0a▹\x20','\x20lighttext\x20text\x0a▹\x20','\x20snow3d\x20text\x0a▹\x20','\x20galaxystyle\x20text\x0a▹\x20','\x20glossychrome\x20text\x0a▹\x20','\x20galaxywallpaper\x20text\x0a▹\x20','\x20goldplaybutton\x20text\x0a▹\x20','\x20metallogo\x20text\x0a▹\x20','39714EzaIwB','\x20luxurygold\x20text\x0a▹\x20','\x20royaltext\x20text\x0a▹\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ʀɪᴍᴜʀᴜhttps://instabio.cc/Farelbotz/࿐','\x20noeltext\x20text\x0a▹\x20','\x20beautifulflower\x20text\x0a▹\x20','2165800ZGTStY','500oDLsAE','\x20freefire\x20text\x20','only'];_0x59cd=function(){return _0xaa0033;};return _0x59cd();}(function(_0x7248e1,_0x46e521){var _0x24d133=_0x3dba,_0x289805=_0x7248e1();while(!![]){try{var _0x32eb3a=-parseInt(_0x24d133(0x1ec))/0x1+parseInt(_0x24d133(0x1ea))/0x2+parseInt(_0x24d133(0x1eb))/0x3+parseInt(_0x24d133(0x200))/0x4*(-parseInt(_0x24d133(0x1e1))/0x5)+parseInt(_0x24d133(0x1f9))/0x6*(-parseInt(_0x24d133(0x1db))/0x7)+parseInt(_0x24d133(0x1ff))/0x8+parseInt(_0x24d133(0x1ed))/0x9*(-parseInt(_0x24d133(0x1e6))/0xa);if(_0x32eb3a===_0x46e521)break;else _0x289805['push'](_0x289805['shift']());}catch(_0x5c9c10){_0x289805['push'](_0x289805['shift']());}}}(_0x59cd,0x60d3f));if(!isRegistered)return reply(ind[_0x3a237d(0x1d9)][_0x3a237d(0x1dd)]);wibu='\x0a「\x20Ephoto\x20360\x20」\x0a▹\x20'+prefix+_0x3a237d(0x1dc)+prefix+_0x3a237d(0x1ef)+prefix+_0x3a237d(0x1e0)+prefix+_0x3a237d(0x1fa)+prefix+_0x3a237d(0x1f6)+prefix+_0x3a237d(0x1f2)+prefix+_0x3a237d(0x1fe)+prefix+_0x3a237d(0x1e7)+prefix+_0x3a237d(0x1fb)+prefix+'\x20heartshaped\x20text\x0a▹\x20'+prefix+_0x3a237d(0x1e4)+prefix+_0x3a237d(0x1f4)+prefix+'\x20hologram3d\x20text\x0a▹\x20'+prefix+_0x3a237d(0x1f0)+prefix+_0x3a237d(0x1f5)+prefix+_0x3a237d(0x1df)+prefix+_0x3a237d(0x1f8)+prefix+_0x3a237d(0x1fd)+prefix+_0x3a237d(0x1ee)+prefix+_0x3a237d(0x1e3)+prefix+_0x3a237d(0x1da)+prefix+_0x3a237d(0x1e8)+prefix+'\x20textbyname\x20text\x0a▹\x20'+prefix+'\x20writegalacy\x20text\x0a▹\x20'+prefix+_0x3a237d(0x1f1)+prefix+_0x3a237d(0x1f3)+prefix+_0x3a237d(0x1e2)+prefix+_0x3a237d(0x1f7)+prefix+_0x3a237d(0x1de)+prefix+_0x3a237d(0x201),sendButMessage(from,wibu,_0x3a237d(0x1fc),[{'buttonId':prefix+_0x3a237d(0x1e9),'buttonText':{'displayText':_0x3a237d(0x1e5)},'type':0x1}]);
        break;
            case 'randomvideo':
var _0x317561=_0x379c;(function(_0x1b2a35,_0x22ff76){var _0x29baa5=_0x379c,_0x21f354=_0x1b2a35();while(!![]){try{var _0x481163=parseInt(_0x29baa5(0x100))/0x1*(parseInt(_0x29baa5(0xf8))/0x2)+-parseInt(_0x29baa5(0xf4))/0x3+-parseInt(_0x29baa5(0xf1))/0x4+-parseInt(_0x29baa5(0x102))/0x5+parseInt(_0x29baa5(0xf5))/0x6+parseInt(_0x29baa5(0xfb))/0x7+parseInt(_0x29baa5(0xfc))/0x8;if(_0x481163===_0x22ff76)break;else _0x21f354['push'](_0x21f354['shift']());}catch(_0x5274ff){_0x21f354['push'](_0x21f354['shift']());}}}(_0x3fbb,0xac31a));function _0x379c(_0x431302,_0x9c5362){var _0x3fbbc7=_0x3fbb();return _0x379c=function(_0x379ca6,_0x20b6a9){_0x379ca6=_0x379ca6-0xf1;var _0x54bfec=_0x3fbbc7[_0x379ca6];return _0x54bfec;},_0x379c(_0x431302,_0x9c5362);}function _0x3fbb(){var _0x2dcbe2=['1216736LKsiKo','\x0a\x0a「\x20Random\x20Video\x20」\x0a\x0a▹\x20','daftarB','3627126HgNnnN','49104qpqsQG','\x20astetick\x0a\x0a▹\x20','\x20lolivid\x0a\x0a▹\x20','2029366EdPwkA','menu','\x20videoanime\x20','4014773AnqJYP','10148472wMRRVY','⬡\x20BACK\x20TO\x20MENU\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','\x20asupan\x0a\x0a▹\x20','1HNiFxO','\x20storyanime\x0a\x0a▹\x20','3232165Dolbbc'];_0x3fbb=function(){return _0x2dcbe2;};return _0x3fbb();}if(!isRegistered)return reply(ind['only'][_0x317561(0xf3)]);wibu=_0x317561(0xf2)+prefix+_0x317561(0xf7)+prefix+_0x317561(0xff)+prefix+_0x317561(0x101)+prefix+_0x317561(0xf6)+prefix+_0x317561(0xfa),sendButMessage(from,wibu,_0x317561(0xfe),[{'buttonId':prefix+_0x317561(0xf9),'buttonText':{'displayText':_0x317561(0xfd)},'type':0x1}]);
        break;
        case 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !editz.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
					}
					break
					case 'tahta':
					var _0x297f8e=_0x5d25;(function(_0xb0bc04,_0x19fd23){var _0x24e73d=_0x5d25,_0x2ea55b=_0xb0bc04();while(!![]){try{var _0x549c7b=-parseInt(_0x24e73d(0x1ca))/0x1*(-parseInt(_0x24e73d(0x1cf))/0x2)+parseInt(_0x24e73d(0x1c8))/0x3*(-parseInt(_0x24e73d(0x1d7))/0x4)+parseInt(_0x24e73d(0x1d9))/0x5*(-parseInt(_0x24e73d(0x1cd))/0x6)+parseInt(_0x24e73d(0x1c9))/0x7*(parseInt(_0x24e73d(0x1dd))/0x8)+-parseInt(_0x24e73d(0x1d6))/0x9*(parseInt(_0x24e73d(0x1d1))/0xa)+parseInt(_0x24e73d(0x1d0))/0xb*(-parseInt(_0x24e73d(0x1d8))/0xc)+parseInt(_0x24e73d(0x1d4))/0xd*(parseInt(_0x24e73d(0x1ce))/0xe);if(_0x549c7b===_0x19fd23)break;else _0x2ea55b['push'](_0x2ea55b['shift']());}catch(_0x47a02d){_0x2ea55b['push'](_0x2ea55b['shift']());}}}(_0x6b93,0xeb110),buff=await getBuffer(_0x297f8e(0x1d2)+q+_0x297f8e(0x1c7)),buttons=[{'buttonId':prefix+_0x297f8e(0x1dc),'buttonText':{'displayText':_0x297f8e(0x1cc)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x297f8e(0x1da),{'thumbnail':buff}))[_0x297f8e(0x1da)],buttonsMessage={'footerText':_0x297f8e(0x1d5),'imageMessage':imageMsg,'contentText':_0x297f8e(0x1cb),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x297f8e(0x1d3)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x297f8e(0x1db)](prep));function _0x5d25(_0x335bbb,_0x3ac89a){var _0x6b9362=_0x6b93();return _0x5d25=function(_0x5d25e8,_0xe4ec7e){_0x5d25e8=_0x5d25e8-0x1c7;var _0x376a5f=_0x6b9362[_0x5d25e8];return _0x376a5f;},_0x5d25(_0x335bbb,_0x3ac89a);}function _0x6b93(){var _0xf0248b=['2094RsnUyJ','7513eRFqss','70UYsVAv','https://leyscoders-api.herokuapp.com/api/harta-tahta?text=','prepareMessageFromContent','296543dXuFbw','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','2256831sHSGrY','930844sZGFGe','4692lezLTF','340cSKnSF','imageMessage','relayWAMessage','infoig','9605976ffuqqn','&apikey=IkyOgiwara','3laVwqx','7mnvJcO','1663krtCGj','©WhatsApp\x20bot','\x20©WhatsApp\x20bot','142704pQFpEO','1162ZidKiD'];_0x6b93=function(){return _0xf0248b;};return _0x6b93();}
              break
              
              case 'quotesmaker':
					buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=Rimuru`)
					rimuru.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: freply})
				case 'tinyurl':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=IkyOgiwara`)
					rimuru.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					break
				case 'cuttly':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyOgiwara`)
					rimuru.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: freply})
					break
				case 'shorturl':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyOgiwara`)
					rimuru.sendMessage(from, `${anu.result}`, text, {quoted: freply})
					break
			    case 'imagemani':
case 'imageefek':
function _0x38b0(_0x37e7f5,_0x4cd3b1){var _0x555df1=_0x555d();return _0x38b0=function(_0x38b0dd,_0x500ecd){_0x38b0dd=_0x38b0dd-0x8c;var _0x1d8fb9=_0x555df1[_0x38b0dd];return _0x1d8fb9;},_0x38b0(_0x37e7f5,_0x4cd3b1);}function _0x555d(){var _0x28b748=['118070wrsmMm','6831054BSeAuR','\x20joke\x0a\x0a▹\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','2334WmllEA','\x20wasted\x0a\x0a▹\x20','⬡\x20BACK\x20TO\x20MENU\x20','only','\x20affect\x0a\x0a▹\x20','\x20trash\x0a\x0a▹\x20','\x20blur\x0a\x0a▹\x20','\x0a\x0a\x20*IMAGE\x20MANIPULATION*\x0a\x0a\x20\x0a\x0a▹\x20','\x20circle\x0a\x0a▹\x20','\x20greyscale\x0a\x0a▹\x20','\x20cuttly\x0a\x0a▹\x20','1801156BGkiGh','5559846nzUwpj','21654pQQXOn','2031806ItOJCN','\x20tinyurl\x0a\x0a▹\x20','1507mjuPrk','menu','4301PNindh','\x20picture\x0a\x0a','1835fGlOmM','\x20hitler\x0a\x0a▹\x20','daftarB','16XAOTaK','\x20wanted\x0a\x0a▹\x20'];_0x555d=function(){return _0x28b748;};return _0x555d();}var _0x36b46e=_0x38b0;(function(_0x51ee75,_0x971d99){var _0x1b6f63=_0x38b0,_0x503129=_0x51ee75();while(!![]){try{var _0x5ac804=parseInt(_0x1b6f63(0x8d))/0x1*(parseInt(_0x1b6f63(0x9a))/0x2)+parseInt(_0x1b6f63(0xa6))/0x3+parseInt(_0x1b6f63(0xa5))/0x4+-parseInt(_0x1b6f63(0x91))/0x5*(-parseInt(_0x1b6f63(0xa7))/0x6)+parseInt(_0x1b6f63(0xa8))/0x7*(-parseInt(_0x1b6f63(0x94))/0x8)+parseInt(_0x1b6f63(0x97))/0x9+parseInt(_0x1b6f63(0x96))/0xa*(-parseInt(_0x1b6f63(0x8f))/0xb);if(_0x5ac804===_0x971d99)break;else _0x503129['push'](_0x503129['shift']());}catch(_0x482512){_0x503129['push'](_0x503129['shift']());}}}(_0x555d,0xe79d8));if(!isRegistered)return reply(ind[_0x36b46e(0x9d)][_0x36b46e(0x93)]);wibu=_0x36b46e(0xa1)+prefix+'\x20darkjoke\x0a\x0a▹\x20'+prefix+'\x20meme\x0a\x0a▹\x20'+prefix+_0x36b46e(0x98)+prefix+_0x36b46e(0x9b)+prefix+_0x36b46e(0x92)+prefix+_0x36b46e(0x95)+prefix+_0x36b46e(0xa3)+prefix+_0x36b46e(0x9f)+prefix+_0x36b46e(0xa2)+prefix+_0x36b46e(0xa0)+prefix+_0x36b46e(0x8c)+prefix+_0x36b46e(0xa4)+prefix+_0x36b46e(0x9e)+prefix+_0x36b46e(0x90),sendButMessage(from,wibu,_0x36b46e(0x99),[{'buttonId':prefix+_0x36b46e(0x8e),'buttonText':{'displayText':_0x36b46e(0x9c)},'type':0x1}]);
        break;
        
         case '18+':
        case 'porno':
case '18':
function _0x3202(_0x462dc0,_0x506090){var _0x546adb=_0x546a();return _0x3202=function(_0x32022d,_0x2a4076){_0x32022d=_0x32022d-0x1d8;var _0x1314e6=_0x546adb[_0x32022d];return _0x1314e6;},_0x3202(_0x462dc0,_0x506090);}function _0x546a(){var _0x9a979d=['⬡\x20LANJUTAN\x20','39915MpVtoB','40YNGlZz','1176453lqLJef','208818zXoYyu','3222528EYBEvv','70690OoxWSy','1166mcvwax','378953qJazEU','pornmenu','\x0aMENU\x20INI\x20BERISI\x20FITUR\x2018+\x0aSEBELUM\x20MELANJUTKAN\x20PASTIKAN\x20ANDA\x20BERUMUR\x2018+\x0a','2mDWDAB','7236943BbYdFG','236RJBjzS'];_0x546a=function(){return _0x9a979d;};return _0x546a();}var _0x5774ba=_0x3202;(function(_0x56f00b,_0x246ee5){var _0x2ae061=_0x3202,_0x1e0ceb=_0x56f00b();while(!![]){try{var _0x46b7eb=parseInt(_0x2ae061(0x1db))/0x1*(-parseInt(_0x2ae061(0x1de))/0x2)+parseInt(_0x2ae061(0x1e5))/0x3+parseInt(_0x2ae061(0x1e0))/0x4*(-parseInt(_0x2ae061(0x1e2))/0x5)+parseInt(_0x2ae061(0x1d8))/0x6+parseInt(_0x2ae061(0x1df))/0x7+-parseInt(_0x2ae061(0x1e3))/0x8*(-parseInt(_0x2ae061(0x1e4))/0x9)+-parseInt(_0x2ae061(0x1d9))/0xa*(parseInt(_0x2ae061(0x1da))/0xb);if(_0x46b7eb===_0x246ee5)break;else _0x1e0ceb['push'](_0x1e0ceb['shift']());}catch(_0x310789){_0x1e0ceb['push'](_0x1e0ceb['shift']());}}}(_0x546a,0xa9a50),wibu=_0x5774ba(0x1dd),sendButMessage(from,wibu,'ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz',[{'buttonId':prefix+_0x5774ba(0x1dc),'buttonText':{'displayText':_0x5774ba(0x1e1)},'type':0x1}]));
        break;
    // Random Text //
  ///// LOLHUMAN API
  case 'spam':
    if (!editz.key.fromMe) return reply('FITUR INI KHUSUS OWNER BOT')
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argsi = arg.split("|")
				if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')
				if (isNaN(argsi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argsi[1]; i++){
					rimuru.sendMessage(from, argsi[0], MessageType.text)
				}
				break
		case 'picture':
					var _0x489e0a=_0x1923;(function(_0x4cb66a,_0x1dc882){var _0xecf5fa=_0x1923,_0x49dd18=_0x4cb66a();while(!![]){try{var _0x35d256=parseInt(_0xecf5fa(0x193))/0x1+-parseInt(_0xecf5fa(0x196))/0x2*(parseInt(_0xecf5fa(0x199))/0x3)+parseInt(_0xecf5fa(0x18d))/0x4*(-parseInt(_0xecf5fa(0x18f))/0x5)+-parseInt(_0xecf5fa(0x190))/0x6*(-parseInt(_0xecf5fa(0x195))/0x7)+-parseInt(_0xecf5fa(0x18c))/0x8+-parseInt(_0xecf5fa(0x18b))/0x9+-parseInt(_0xecf5fa(0x198))/0xa*(-parseInt(_0xecf5fa(0x19b))/0xb);if(_0x35d256===_0x1dc882)break;else _0x49dd18['push'](_0x49dd18['shift']());}catch(_0x2a0004){_0x49dd18['push'](_0x49dd18['shift']());}}}(_0xc1fe,0x6700b));function _0xc1fe(){var _0x1dd520=['39d895963468b814fad0514bd28787e2','stringify','5054031QLSYqj','3785824aIhnjE','93788FqWlzm','success','55vrZMGH','6jysrHc','picture','videoMessage','699714IuxeNe','Kirim\x20foto\x20atau\x20reply\x20foto\x20yang\x20sudah\x20dikirim,\x20dengan\x20caption\x20','173229TSWKir','2pgBdoE','downloadAndSaveMediaMessage','2170GZDWPi','1071633YVKsNq','message','68299niZRBO','https://leyscoders-api.herokuapp.com/api/img/picture?url=','display_url','quotedM','length','contextInfo'];_0xc1fe=function(){return _0x1dd520;};return _0xc1fe();}var imgbb=require('imgbb-uploader');function _0x1923(_0x57d35b,_0x2ebb57){var _0xc1febe=_0xc1fe();return _0x1923=function(_0x19234f,_0x195d69){_0x19234f=_0x19234f-0x186;var _0x228dcf=_0xc1febe[_0x19234f];return _0x228dcf;},_0x1923(_0x57d35b,_0x2ebb57);}(isMedia&&!editz[_0x489e0a(0x19a)][_0x489e0a(0x192)]||isQuotedImage)&&args[_0x489e0a(0x187)]==0x0?(ger=isQuotedImage?JSON['parse'](JSON[_0x489e0a(0x18a)](rimuru)['replace'](_0x489e0a(0x186),'m'))[_0x489e0a(0x19a)]['extendedTextMessage'][_0x489e0a(0x188)]:rimuru,owgi=await rimuru[_0x489e0a(0x197)](ger),data=await imgbb(_0x489e0a(0x189),owgi),buff=await getBuffer(_0x489e0a(0x19c)+data[_0x489e0a(0x19d)]+'&apikey=IkyOgiwara'),rimuru['sendMessage'](from,buff,image,{'quoted':freply,'caption':mess[_0x489e0a(0x18e)]})):reply(_0x489e0a(0x194)+prefix+_0x489e0a(0x191));
					break
					case 'affect':
					function _0x536c(_0xbd9abd,_0x2724db){var _0x253948=_0x2539();return _0x536c=function(_0x536c2f,_0xcf2598){_0x536c2f=_0x536c2f-0x77;var _0x207fca=_0x253948[_0x536c2f];return _0x207fca;},_0x536c(_0xbd9abd,_0x2724db);}var _0x66bb5c=_0x536c;(function(_0x5bdf09,_0x5c89a7){var _0x599aaa=_0x536c,_0x59cd86=_0x5bdf09();while(!![]){try{var _0x503e99=-parseInt(_0x599aaa(0x86))/0x1+parseInt(_0x599aaa(0x8a))/0x2+-parseInt(_0x599aaa(0x88))/0x3*(-parseInt(_0x599aaa(0x8c))/0x4)+-parseInt(_0x599aaa(0x7d))/0x5+parseInt(_0x599aaa(0x82))/0x6+parseInt(_0x599aaa(0x7b))/0x7*(-parseInt(_0x599aaa(0x89))/0x8)+parseInt(_0x599aaa(0x77))/0x9;if(_0x503e99===_0x5c89a7)break;else _0x59cd86['push'](_0x59cd86['shift']());}catch(_0x3f8332){_0x59cd86['push'](_0x59cd86['shift']());}}}(_0x2539,0x26fc4));var imgbb=require(_0x66bb5c(0x78));(isMedia&&!rimuru['message'][_0x66bb5c(0x7c)]||isQuotedImage)&&args['length']==0x0?(ger=isQuotedImage?JSON[_0x66bb5c(0x79)](JSON['stringify'](editz)[_0x66bb5c(0x85)](_0x66bb5c(0x81),'m'))[_0x66bb5c(0x83)]['extendedTextMessage'][_0x66bb5c(0x84)]:rimuru,owgi=await rimuru[_0x66bb5c(0x80)](ger),data=await imgbb('39d895963468b814fad0514bd28787e2',owgi),buff=await getBuffer('https://leyscoders-api.herokuapp.com/api/img/affect?url='+data['display_url']+_0x66bb5c(0x87)),rimuru[_0x66bb5c(0x7e)](from,buff,image,{'quoted':freply,'caption':mess[_0x66bb5c(0x7f)]})):reply(_0x66bb5c(0x8b)+prefix+_0x66bb5c(0x7a));function _0x2539(){var _0x3dc65d=['&apikey=IkyOgiwara','253314cuFfFO','53584YTnqzB','149756tujvob','Kirim\x20foto\x20atau\x20reply\x20foto\x20yang\x20sudah\x20dikirim,\x20dengan\x20caption\x20','4dUiwJg','2710746rLrKsS','imgbb-uploader','parse','affect','28IGewHC','videoMessage','872785UgbrGo','sendMessage','success','downloadAndSaveMediaMessage','quotedM','899856JDMsEE','message','contextInfo','replace','249453BGCfTm'];_0x2539=function(){return _0x3dc65d;};return _0x2539();}
					break
			case 'invert':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !editz.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}invert`)
					}
					break
			 case 'firework':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/img/firework?url=${data.display_url}&apikey=IkyOgiwara`)
						buff = await getBuffer(anu.result.url)
						rimuru.sendMessage(from, buff, video, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}firework`)
					}
					break
				case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}sepia`)
					}
					break
			case 'blur':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)
					}
					break
				case 'circle':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}circle`)
					}
					break
				case 'trash':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}trash`)
					}
					break
					case 'wiki':
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyOgiwara`)
					rimuru.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: freply})
					break
  case 'wanted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wanted`)
					}
					break
					case 'joke':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !rimuru.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
						owgi = await rimuru.downloadAndSaveMediaMessage(ger)
						data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
						buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyOgiwara`)
						rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}joke`)
					}
					break
   //======================================================   
   case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
function _0xd581(){var _0x175349=['prepareMessageMedia','?apikey=PunyaIkyAds','439952ykJyiY','7420hobjZc','https://instabio.cc/Farelbotz','6aYkVKH','5625ZuUPZM','©WhatsApp\x20bot','569284TArYqS','imageMessage','29208SBrDrU','4147zkcyBf','https://api.lolhuman.xyz/api/random/nsfw/','➡️Next','3sGHDvS','7uimdRN','66504VhzpKF','201248vBJtZw','wait','856045xcblfd'];_0xd581=function(){return _0x175349;};return _0xd581();}var _0x1709da=_0x427b;function _0x427b(_0x217d09,_0x1f36e9){var _0xd581da=_0xd581();return _0x427b=function(_0x427b56,_0x5ed19a){_0x427b56=_0x427b56-0x124;var _0x292f05=_0xd581da[_0x427b56];return _0x292f05;},_0x427b(_0x217d09,_0x1f36e9);}(function(_0x47a693,_0x51e3b0){var _0x23ac90=_0x427b,_0x23b438=_0x47a693();while(!![]){try{var _0x6860c6=parseInt(_0x23ac90(0x126))/0x1+-parseInt(_0x23ac90(0x134))/0x2+parseInt(_0x23ac90(0x132))/0x3*(parseInt(_0x23ac90(0x12c))/0x4)+parseInt(_0x23ac90(0x137))/0x5*(parseInt(_0x23ac90(0x129))/0x6)+-parseInt(_0x23ac90(0x133))/0x7*(parseInt(_0x23ac90(0x135))/0x8)+parseInt(_0x23ac90(0x12a))/0x9*(parseInt(_0x23ac90(0x127))/0xa)+-parseInt(_0x23ac90(0x12f))/0xb*(parseInt(_0x23ac90(0x12e))/0xc);if(_0x6860c6===_0x51e3b0)break;else _0x23b438['push'](_0x23b438['shift']());}catch(_0x1858f0){_0x23b438['push'](_0x23b438['shift']());}}}(_0xd581,0x3ae36),reply(mess[_0x1709da(0x136)]),buff=await getBuffer(_0x1709da(0x130)+command+_0x1709da(0x125)),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x1709da(0x131)},'type':0x1}],imageMsg=(await rimuru[_0x1709da(0x124)](buff,_0x1709da(0x12d),{'thumbnail':buff}))['imageMessage'],buttonsMessage={'footerText':_0x1709da(0x128),'imageMessage':imageMsg,'contentText':_0x1709da(0x12b),'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep));
              break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
var _0x55a914=_0x16ea;function _0x32b5(){var _0x46c4a8=['16AAKHPI','➡️Next','5144472NeVSrr','follow\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz/','41198FVMgia','imageMessage','22ooANWN','4ORJysO','prepareMessageMedia','3554830dxIixu','8482866JLpwTk','3355260xinDbg','©WhatsApp\x20bot','4222799iTzQWE','745146yDJRMB','https://api.lolhuman.xyz/api/random2/','prepareMessageFromContent','81sBGLdn'];_0x32b5=function(){return _0x46c4a8;};return _0x32b5();}function _0x16ea(_0x2b7daa,_0x358efa){var _0x32b50d=_0x32b5();return _0x16ea=function(_0x16ea56,_0x35be70){_0x16ea56=_0x16ea56-0x1f2;var _0x2fbffb=_0x32b50d[_0x16ea56];return _0x2fbffb;},_0x16ea(_0x2b7daa,_0x358efa);}(function(_0x19f5b4,_0x526ac6){var _0xca7a9a=_0x16ea,_0x433895=_0x19f5b4();while(!![]){try{var _0x3ff244=parseInt(_0xca7a9a(0x201))/0x1+-parseInt(_0xca7a9a(0x1f7))/0x2*(-parseInt(_0xca7a9a(0x1f2))/0x3)+-parseInt(_0xca7a9a(0x1fa))/0x4*(parseInt(_0xca7a9a(0x1fc))/0x5)+parseInt(_0xca7a9a(0x1fd))/0x6+-parseInt(_0xca7a9a(0x200))/0x7*(parseInt(_0xca7a9a(0x1f3))/0x8)+-parseInt(_0xca7a9a(0x1f5))/0x9+-parseInt(_0xca7a9a(0x1fe))/0xa*(-parseInt(_0xca7a9a(0x1f9))/0xb);if(_0x3ff244===_0x526ac6)break;else _0x433895['push'](_0x433895['shift']());}catch(_0x4bb046){_0x433895['push'](_0x433895['shift']());}}}(_0x32b5,0xdb046),reply(mess['wait']),buff=await getBuffer(_0x55a914(0x202)+command+'?apikey=PunyaIkyAds'),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x55a914(0x1f4)},'type':0x1}],imageMsg=(await rimuru[_0x55a914(0x1fb)](buff,'imageMessage',{'thumbnail':buff}))[_0x55a914(0x1f8)],buttonsMessage={'footerText':_0x55a914(0x1f6),'imageMessage':imageMsg,'contentText':_0x55a914(0x1ff),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x55a914(0x203)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep));
    break           
           case 'mulai': case 'start': {
    function _0x4ced(_0x26df28,_0x2803c1){const _0x473fe8=_0x473f();return _0x4ced=function(_0x4ceda8,_0x1b4cc8){_0x4ceda8=_0x4ceda8-0x11b;let _0x12b73e=_0x473fe8[_0x4ceda8];return _0x12b73e;},_0x4ced(_0x26df28,_0x2803c1);}const _0x405733=_0x4ced;(function(_0x300bed,_0x586abc){const _0x33b7b0=_0x4ced,_0x1a4406=_0x300bed();while(!![]){try{const _0x5a0048=parseInt(_0x33b7b0(0x11c))/0x1+parseInt(_0x33b7b0(0x130))/0x2+parseInt(_0x33b7b0(0x122))/0x3+parseInt(_0x33b7b0(0x127))/0x4*(parseInt(_0x33b7b0(0x121))/0x5)+-parseInt(_0x33b7b0(0x120))/0x6*(-parseInt(_0x33b7b0(0x12c))/0x7)+-parseInt(_0x33b7b0(0x129))/0x8*(parseInt(_0x33b7b0(0x125))/0x9)+-parseInt(_0x33b7b0(0x133))/0xa;if(_0x5a0048===_0x586abc)break;else _0x1a4406['push'](_0x1a4406['shift']());}catch(_0x1ca654){_0x1a4406['push'](_0x1a4406['shift']());}}}(_0x473f,0x6ae2a));if(isGroup)return reply(_0x405733(0x132));rimuru['anonymous']=rimuru[_0x405733(0x123)]?rimuru[_0x405733(0x123)]:{};if(Object[_0x405733(0x124)](rimuru[_0x405733(0x123)])[_0x405733(0x12f)](_0x178b40=>_0x178b40[_0x405733(0x11d)](sender)))return await rimuru['sendButton'](from,_0x405733(0x134),''+rimuru[_0x405733(0x12e)][_0x405733(0x11e)],_0x405733(0x11f),prefix+_0x405733(0x128)),![];function _0x473f(){const _0x4e6de6=['Fitur\x20Tidak\x20Dapat\x20Digunakan\x20Untuk\x20Group!','9451550waXPze','_Kamu\x20masih\x20berada\x20di\x20dalam\x20anonymous\x20chat,\x20menunggu\x20partner_','next','379965XKLrBX','check','name','Keluar','2116896NIxGSN','5ChzmCQ','2081205enbxLg','anonymous','values','2282481SiUvps','state','100276QDPPFD','leave','24rjOrEp','sendButton','Next','14eOkxPf','_Partner\x20ditemukan!_','user','find','678766kWbzdL','CHATTING'];_0x473f=function(){return _0x4e6de6;};return _0x473f();}let room=Object['values'](rimuru[_0x405733(0x123)])['find'](_0x20f7ab=>_0x20f7ab[_0x405733(0x126)]==='WAITING'&&!_0x20f7ab['check'](sender));if(room)await rimuru[_0x405733(0x12a)](room['a'],_0x405733(0x12d),''+rimuru[_0x405733(0x12e)][_0x405733(0x11e)],_0x405733(0x12b),prefix+_0x405733(0x11b)),room['b']=sender,room[_0x405733(0x126)]=_0x405733(0x131),await rimuru[_0x405733(0x12a)](room['b'],_0x405733(0x12d),''+rimuru['user']['name'],_0x405733(0x12b),prefix+'next');else{let id=+new Date();rimuru[_0x405733(0x123)][id]={'id':id,'a':sender,'b':'','state':'WAITING','check':function(_0x5be9e1=''){return[this['a'],this['b']]['includes'](_0x5be9e1);},'other':function(_0x1e1c71=''){return _0x1e1c71===this['a']?this['b']:_0x1e1c71===this['b']?this['a']:'';}},await rimuru[_0x405733(0x12a)](from,'_Menunggu\x20partner..._',''+rimuru['user']['name'],_0x405733(0x11f),prefix+_0x405733(0x128));}
    break
   }
      case 'ppcp':
case 'ppcouple':
function _0x1db9(){var _0x4a3012=['80VhexxL','result','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','1072060gubgit','male','1jVAUDU','2813657gDJVhx','relayWAMessage','81rJmyWZ','©WhatsApp\x20bot','1241082CVnAdW','infoig','576915gIXWZx','1003098COCUtU','8rAtAxZ','Cewe','1259614XnrEkT','imageMessage','https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyOgiwara','prepareMessageFromContent','female','91805ZCSAKS'];_0x1db9=function(){return _0x4a3012;};return _0x1db9();}var _0x1b5e9f=_0x40e2;function _0x40e2(_0x80d61c,_0x42f02c){var _0x1db9cb=_0x1db9();return _0x40e2=function(_0x40e20a,_0x567af9){_0x40e20a=_0x40e20a-0x14b;var _0x5b80f5=_0x1db9cb[_0x40e20a];return _0x5b80f5;},_0x40e2(_0x80d61c,_0x42f02c);}(function(_0x3d63a4,_0x21f990){var _0x5be54c=_0x40e2,_0x3b31c8=_0x3d63a4();while(!![]){try{var _0x24cf52=parseInt(_0x5be54c(0x14b))/0x1*(parseInt(_0x5be54c(0x156))/0x2)+parseInt(_0x5be54c(0x153))/0x3*(-parseInt(_0x5be54c(0x154))/0x4)+-parseInt(_0x5be54c(0x152))/0x5+-parseInt(_0x5be54c(0x150))/0x6+-parseInt(_0x5be54c(0x15b))/0x7*(parseInt(_0x5be54c(0x15c))/0x8)+parseInt(_0x5be54c(0x14e))/0x9*(parseInt(_0x5be54c(0x15f))/0xa)+parseInt(_0x5be54c(0x14c))/0xb;if(_0x24cf52===_0x21f990)break;else _0x3b31c8['push'](_0x3b31c8['shift']());}catch(_0x1c7d8d){_0x3b31c8['push'](_0x3b31c8['shift']());}}}(_0x1db9,0xb1d10),anu=await fetchJson(_0x1b5e9f(0x158)),buff1=await getBuffer(anu[_0x1b5e9f(0x15d)][_0x1b5e9f(0x160)]),buttons=[{'buttonId':prefix+_0x1b5e9f(0x151),'buttonText':{'displayText':_0x1b5e9f(0x14f)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff1,_0x1b5e9f(0x157),{'thumbnail':buff1}))['imageMessage'],buttonsMessage={'footerText':_0x1b5e9f(0x15e),'imageMessage':imageMsg,'contentText':'Cowo','buttons':buttons,'headerType':0x4},prep=await rimuru[_0x1b5e9f(0x159)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x1b5e9f(0x14d)](prep),buff2=await getBuffer(anu[_0x1b5e9f(0x15d)][_0x1b5e9f(0x15a)]),buttons=[{'buttonId':prefix+_0x1b5e9f(0x151),'buttonText':{'displayText':'©WhatsApp\x20bot'},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff2,_0x1b5e9f(0x157),{'thumbnail':buff2}))[_0x1b5e9f(0x157)],buttonsMessage={'footerText':_0x1b5e9f(0x15e),'imageMessage':imageMsg,'contentText':_0x1b5e9f(0x155),'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),setTimeout(async()=>{var _0xc01fea=_0x1b5e9f;rimuru[_0xc01fea(0x14d)](prep);},0x1388));

break
case 'meme':
case 'memek':
function _0x4798(){var _0x76aca4=['relayWAMessage','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','3897BRsBSj','620HPjVgr','4285015KlUXDA','12429WlwZkZ','8AthqlE','NEXT','42HXeYon','187WUdLFq','4820265aCjdsf','prepareMessageMedia','imageMessage','771180AopSew','107810pmNDDF','21524388SuQJtQ','https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara','24izVsqZ','prepareMessageFromContent'];_0x4798=function(){return _0x76aca4;};return _0x4798();}function _0x46d0(_0x1ff974,_0xcecacf){var _0x479885=_0x4798();return _0x46d0=function(_0x46d061,_0x304a14){_0x46d061=_0x46d061-0x7b;var _0x18c56c=_0x479885[_0x46d061];return _0x18c56c;},_0x46d0(_0x1ff974,_0xcecacf);}var _0x2cb4b9=_0x46d0;(function(_0x1184bf,_0x3266fd){var _0x30a7ff=_0x46d0,_0x3506f3=_0x1184bf();while(!![]){try{var _0x23fa14=-parseInt(_0x30a7ff(0x7b))/0x1*(parseInt(_0x30a7ff(0x81))/0x2)+-parseInt(_0x30a7ff(0x7e))/0x3*(parseInt(_0x30a7ff(0x7c))/0x4)+-parseInt(_0x30a7ff(0x86))/0x5*(parseInt(_0x30a7ff(0x8a))/0x6)+parseInt(_0x30a7ff(0x7d))/0x7+parseInt(_0x30a7ff(0x7f))/0x8*(-parseInt(_0x30a7ff(0x83))/0x9)+-parseInt(_0x30a7ff(0x87))/0xa*(parseInt(_0x30a7ff(0x82))/0xb)+parseInt(_0x30a7ff(0x88))/0xc;if(_0x23fa14===_0x3266fd)break;else _0x3506f3['push'](_0x3506f3['shift']());}catch(_0x58365c){_0x3506f3['push'](_0x3506f3['shift']());}}}(_0x4798,0x547b4),buff=await getBuffer(_0x2cb4b9(0x89)),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x2cb4b9(0x80)},'type':0x1}],imageMsg=(await rimuru[_0x2cb4b9(0x84)](buff,_0x2cb4b9(0x85),{'thumbnail':buff}))[_0x2cb4b9(0x85)],buttonsMessage={'footerText':_0x2cb4b9(0x8d),'imageMessage':imageMsg,'contentText':'klik\x20Next\x20untuk\x20ke\x20gambar\x20selanjut\x20nya','buttons':buttons,'headerType':0x4},prep=await rimuru[_0x2cb4b9(0x8b)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x2cb4b9(0x8c)](prep));
 
break
    // Textprome //
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
var _0x5f1a23=_0x5925;function _0x4625(){var _0x1f5595=['relayWAMessage','menu','822060ygnMkv','10oVeLYk','8WFCVgb','©WhatsApp\x20bot','length','1065096kcLpWy','549787cohppj','Example:\x20','wait','prepareMessageFromContent','66209MbugpG','join','https://api.lolhuman.xyz/api/textprome/','83010PMfqpn','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','422106MwcVqO','5fybiwj','200632wTyXOm','?apikey=PunyaIkyAds&text=','imageMessage','BACK\x20MENU','16jkQWgA'];_0x4625=function(){return _0x1f5595;};return _0x4625();}(function(_0x5024b1,_0x4759d4){var _0x5c180c=_0x5925,_0x36ff5a=_0x5024b1();while(!![]){try{var _0x8691ae=parseInt(_0x5c180c(0x14c))/0x1+parseInt(_0x5c180c(0x150))/0x2*(-parseInt(_0x5c180c(0x148))/0x3)+parseInt(_0x5c180c(0x153))/0x4+-parseInt(_0x5c180c(0x14b))/0x5*(parseInt(_0x5c180c(0x14a))/0x6)+-parseInt(_0x5c180c(0x159))/0x7*(parseInt(_0x5c180c(0x155))/0x8)+parseInt(_0x5c180c(0x158))/0x9+parseInt(_0x5c180c(0x154))/0xa*(-parseInt(_0x5c180c(0x15d))/0xb);if(_0x8691ae===_0x4759d4)break;else _0x36ff5a['push'](_0x36ff5a['shift']());}catch(_0x3a2a33){_0x36ff5a['push'](_0x36ff5a['shift']());}}}(_0x4625,0x242fc),reply(mess[_0x5f1a23(0x15b)]));if(args[_0x5f1a23(0x157)]==0x0)return reply(_0x5f1a23(0x15a)+(prefix+command)+'\x20LoL\x20Human');function _0x5925(_0x3b0faf,_0x845454){var _0x462589=_0x4625();return _0x5925=function(_0x592534,_0x171ca9){_0x592534=_0x592534-0x148;var _0x2edefd=_0x462589[_0x592534];return _0x2edefd;},_0x5925(_0x3b0faf,_0x845454);}ini_txt=args[_0x5f1a23(0x15e)]('\x20'),buff=await getBuffer(_0x5f1a23(0x15f)+command+_0x5f1a23(0x14d)+ini_txt),buttons=[{'buttonId':prefix+_0x5f1a23(0x152),'buttonText':{'displayText':_0x5f1a23(0x14f)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x5f1a23(0x14e),{'thumbnail':buff}))['imageMessage'],buttonsMessage={'footerText':_0x5f1a23(0x149),'imageMessage':imageMsg,'contentText':_0x5f1a23(0x156),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x5f1a23(0x15c)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x5f1a23(0x151)](prep);
    break
    case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
function _0xc8c5(){var _0x4ef72c=['723198jkuXEt','&text2=','©WhatsApp\x20bot','96hlxLsu','679761LHkbSc','menu','prepareMessageFromContent','?apikey=PunyaIkyAds&text1=','3699036wzWXhu','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','\x20LoL\x20Human','72373rolkLR','prepareMessageMedia','74322sFEZii','length','961TAOIAx','wait','490nIFKvI','8428vJKhqc','imageMessage'];_0xc8c5=function(){return _0x4ef72c;};return _0xc8c5();}var _0x3abc21=_0x1376;(function(_0x3dc358,_0x39262e){var _0x2a9740=_0x1376,_0x326f39=_0x3dc358();while(!![]){try{var _0x308a37=parseInt(_0x2a9740(0xc6))/0x1+-parseInt(_0x2a9740(0xc4))/0x2+parseInt(_0x2a9740(0xcf))/0x3+parseInt(_0x2a9740(0xc9))/0x4*(-parseInt(_0x2a9740(0xc8))/0x5)+-parseInt(_0x2a9740(0xcb))/0x6+parseInt(_0x2a9740(0xc2))/0x7*(-parseInt(_0x2a9740(0xce))/0x8)+parseInt(_0x2a9740(0xd3))/0x9;if(_0x308a37===_0x39262e)break;else _0x326f39['push'](_0x326f39['shift']());}catch(_0x4b6a45){_0x326f39['push'](_0x326f39['shift']());}}}(_0xc8c5,0x24b20),reply(mess[_0x3abc21(0xc7)]));function _0x1376(_0x202043,_0x4eeb4e){var _0xc8c5d2=_0xc8c5();return _0x1376=function(_0x137617,_0x1d6333){_0x137617=_0x137617-0xc1;var _0x4683d5=_0xc8c5d2[_0x137617];return _0x4683d5;},_0x1376(_0x202043,_0x4eeb4e);}if(args[_0x3abc21(0xc5)]==0x0)return reply('Example:\x20'+(prefix+command)+_0x3abc21(0xc1));txt1=args[0x0],txt2=args[0x1],buff=await getBuffer('https://api.lolhuman.xyz/api/textprome2/'+command+_0x3abc21(0xd2)+txt1+_0x3abc21(0xcc)+txt2),buttons=[{'buttonId':prefix+_0x3abc21(0xd0),'buttonText':{'displayText':'BACK\x20MENU'},'type':0x1}],imageMsg=(await rimuru[_0x3abc21(0xc3)](buff,_0x3abc21(0xca),{'thumbnail':buff}))[_0x3abc21(0xca)],buttonsMessage={'footerText':_0x3abc21(0xd4),'imageMessage':imageMsg,'contentText':_0x3abc21(0xcd),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x3abc21(0xd1)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep);
        
    break

    // Photo Oxy //
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
function _0x4fa9(_0x16dcd6,_0x4913bd){var _0x4797d3=_0x4797();return _0x4fa9=function(_0x4fa9a3,_0x39a71d){_0x4fa9a3=_0x4fa9a3-0x1d2;var _0x3ad762=_0x4797d3[_0x4fa9a3];return _0x3ad762;},_0x4fa9(_0x16dcd6,_0x4913bd);}function _0x4797(){var _0xfba5c3=['https://api.lolhuman.xyz/api/photooxy1/','©WhatsApp\x20bot','?apikey=PunyaIkyAds&text=','1151286sqWnHX','menu','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','length','3157980uDyAsT','2fEhKLc','948pimIOJ','81538uCdMbO','imageMessage','7bjzRtn','\x20LoL\x20Human','3446811aiNBHm','prepareMessageMedia','prepareMessageFromContent','wait','28337140LgdPCz','join','28845PvVrLo','5955104YiFgRy'];_0x4797=function(){return _0xfba5c3;};return _0x4797();}var _0x1cacc3=_0x4fa9;(function(_0x228cee,_0x9a5f17){var _0x2f123a=_0x4fa9,_0x47c591=_0x228cee();while(!![]){try{var _0x3905c0=parseInt(_0x2f123a(0x1e1))/0x1+-parseInt(_0x2f123a(0x1df))/0x2*(parseInt(_0x2f123a(0x1da))/0x3)+-parseInt(_0x2f123a(0x1de))/0x4+parseInt(_0x2f123a(0x1d5))/0x5*(-parseInt(_0x2f123a(0x1e0))/0x6)+parseInt(_0x2f123a(0x1e3))/0x7*(-parseInt(_0x2f123a(0x1d6))/0x8)+parseInt(_0x2f123a(0x1e5))/0x9+parseInt(_0x2f123a(0x1d3))/0xa;if(_0x3905c0===_0x9a5f17)break;else _0x47c591['push'](_0x47c591['shift']());}catch(_0xe7067a){_0x47c591['push'](_0x47c591['shift']());}}}(_0x4797,0x7285c),reply(mess[_0x1cacc3(0x1d2)]));if(args[_0x1cacc3(0x1dd)]==0x0)return reply('Example:\x20'+(prefix+command)+_0x1cacc3(0x1e4));ini_txt=args[_0x1cacc3(0x1d4)]('\x20'),buff=await getBuffer(_0x1cacc3(0x1d7)+command+_0x1cacc3(0x1d9)+ini_txt),buttons=[{'buttonId':prefix+_0x1cacc3(0x1db),'buttonText':{'displayText':'BACK\x20MENU'},'type':0x1}],imageMsg=(await rimuru[_0x1cacc3(0x1e6)](buff,_0x1cacc3(0x1e2),{'thumbnail':buff}))[_0x1cacc3(0x1e2)],buttonsMessage={'footerText':_0x1cacc3(0x1dc),'imageMessage':imageMsg,'contentText':_0x1cacc3(0x1d8),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x1cacc3(0x1e7)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep);
    break
case 'ttlogo':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
function _0x299f(_0x2adc62,_0x30e933){var _0x51e968=_0x51e9();return _0x299f=function(_0x299f2e,_0x59082f){_0x299f2e=_0x299f2e-0x100;var _0x5a8d42=_0x51e968[_0x299f2e];return _0x5a8d42;},_0x299f(_0x2adc62,_0x30e933);}var _0x3dd61b=_0x299f;function _0x51e9(){var _0x2a6c4d=['11525AzsdyQ','?apikey=PunyaIkyAds&text1=','length','prepareMessageMedia','890214KFxWul','imageMessage','4490946qUamzw','189CtnmEQ','57472ZfJGfE','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','menu','198412yjJQxy','wait','303634EWlBVq','prepareMessageFromContent','BACK\x20MENU','relayWAMessage','15aluqAN','225738ZUhOAc','&text2='];_0x51e9=function(){return _0x2a6c4d;};return _0x51e9();}(function(_0x1045f1,_0x130a7d){var _0xd50edc=_0x299f,_0x2db1e2=_0x1045f1();while(!![]){try{var _0x487e25=-parseInt(_0xd50edc(0x105))/0x1+parseInt(_0xd50edc(0x100))/0x2+-parseInt(_0xd50edc(0x104))/0x3*(parseInt(_0xd50edc(0x112))/0x4)+-parseInt(_0xd50edc(0x107))/0x5+-parseInt(_0xd50edc(0x10b))/0x6+-parseInt(_0xd50edc(0x10e))/0x7*(-parseInt(_0xd50edc(0x10f))/0x8)+parseInt(_0xd50edc(0x10d))/0x9;if(_0x487e25===_0x130a7d)break;else _0x2db1e2['push'](_0x2db1e2['shift']());}catch(_0x525e45){_0x2db1e2['push'](_0x2db1e2['shift']());}}}(_0x51e9,0x35cc0),reply(mess[_0x3dd61b(0x113)]));if(args[_0x3dd61b(0x109)]==0x0)return reply('Example:\x20'+(prefix+command)+'\x20LoL\x20Human');txt1=args[0x0],txt2=args[0x1],buff=await getBuffer('https://api.lolhuman.xyz/api/photooxy2/'+command+_0x3dd61b(0x108)+txt1+_0x3dd61b(0x106)+txt2),buttons=[{'buttonId':prefix+_0x3dd61b(0x111),'buttonText':{'displayText':_0x3dd61b(0x102)},'type':0x1}],imageMsg=(await rimuru[_0x3dd61b(0x10a)](buff,_0x3dd61b(0x10c),{'thumbnail':buff}))[_0x3dd61b(0x10c)],buttonsMessage={'footerText':_0x3dd61b(0x110),'imageMessage':imageMsg,'contentText':'©WhatsApp\x20bot','buttons':buttons,'headerType':0x4},prep=await rimuru[_0x3dd61b(0x101)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x3dd61b(0x103)](prep);
    break
    
    // Ephoto 360 //
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
var _0x36435f=_0x5d7e;(function(_0xf064be,_0x5e44c0){var _0x37c86c=_0x5d7e,_0xa6fea9=_0xf064be();while(!![]){try{var _0x4b3245=-parseInt(_0x37c86c(0xcb))/0x1+-parseInt(_0x37c86c(0xc1))/0x2+-parseInt(_0x37c86c(0xbd))/0x3+parseInt(_0x37c86c(0xc5))/0x4+parseInt(_0x37c86c(0xc8))/0x5*(parseInt(_0x37c86c(0xcd))/0x6)+parseInt(_0x37c86c(0xd0))/0x7*(-parseInt(_0x37c86c(0xca))/0x8)+parseInt(_0x37c86c(0xce))/0x9;if(_0x4b3245===_0x5e44c0)break;else _0xa6fea9['push'](_0xa6fea9['shift']());}catch(_0x5f4914){_0xa6fea9['push'](_0xa6fea9['shift']());}}}(_0x501c,0x1aa3a),reply(mess[_0x36435f(0xbc)]));function _0x501c(){var _0x1c9e92=['join','241782hYoxxX','1460358qfkEqF','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','7IkiytB','©WhatsApp\x20bot','wait','31800gWwNIh','relayWAMessage','menu','\x20LoL\x20Human','135300JwEDof','BACK\x20MENU','https://api.lolhuman.xyz/api/ephoto1/','Example:\x20','431652PHwfpR','imageMessage','?apikey=PunyaIkyAds&text=','5VoCLVk','prepareMessageMedia','792408CumgiJ','24057diIWsp'];_0x501c=function(){return _0x1c9e92;};return _0x501c();}if(args['length']==0x0)return reply(_0x36435f(0xc4)+(prefix+command)+_0x36435f(0xc0));function _0x5d7e(_0x3ac6ae,_0x58ca5f){var _0x501c4a=_0x501c();return _0x5d7e=function(_0x5d7ea2,_0x77fddb){_0x5d7ea2=_0x5d7ea2-0xbb;var _0x2052e8=_0x501c4a[_0x5d7ea2];return _0x2052e8;},_0x5d7e(_0x3ac6ae,_0x58ca5f);}ini_txt=args[_0x36435f(0xcc)]('\x20'),buff=await getBuffer(_0x36435f(0xc3)+command+_0x36435f(0xc7)+ini_txt),buttons=[{'buttonId':prefix+_0x36435f(0xbf),'buttonText':{'displayText':_0x36435f(0xc2)},'type':0x1}],imageMsg=(await rimuru[_0x36435f(0xc9)](buff,'imageMessage',{'thumbnail':buff}))[_0x36435f(0xc6)],buttonsMessage={'footerText':_0x36435f(0xcf),'imageMessage':imageMsg,'contentText':_0x36435f(0xbb),'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x36435f(0xbe)](prep);
    break         
   case 'setwelcome':
					    var _0x1b0b62=_0x1c67;(function(_0x3bc3e7,_0x3e0960){var _0xe0cab0=_0x1c67,_0x41d366=_0x3bc3e7();while(!![]){try{var _0x25d0f8=-parseInt(_0xe0cab0(0x201))/0x1+-parseInt(_0xe0cab0(0x1ff))/0x2+-parseInt(_0xe0cab0(0x1f5))/0x3+-parseInt(_0xe0cab0(0x1fb))/0x4+parseInt(_0xe0cab0(0x1f7))/0x5+-parseInt(_0xe0cab0(0x1f4))/0x6*(-parseInt(_0xe0cab0(0x1fe))/0x7)+parseInt(_0xe0cab0(0x1fa))/0x8;if(_0x25d0f8===_0x3e0960)break;else _0x41d366['push'](_0x41d366['shift']());}catch(_0x3fa191){_0x41d366['push'](_0x41d366['shift']());}}}(_0x1970,0xeadd0));function _0x1970(){var _0xea489e=['sendMessage','532412LsMsAo','```','```Welcome\x20berhasil\x20di\x20ubah\x20menjadi\x20:\x20','1614VQBOqZ','5019156KuDOwX','*Teks\x20nya\x20mana\x20gan?*','6564435sDEeeK','length','composing','29663832DSKvPZ','7561292vFjvbm','updatePresence','slice','38213UVSOFr','2863100cwOUuX'];_0x1970=function(){return _0xea489e;};return _0x1970();}function _0x1c67(_0xb0b0e6,_0x40beba){var _0x197057=_0x1970();return _0x1c67=function(_0x1c676a,_0x1e6924){_0x1c676a=_0x1c676a-0x1f4;var _0x4b7730=_0x197057[_0x1c676a];return _0x4b7730;},_0x1c67(_0xb0b0e6,_0x40beba);}if(args[_0x1b0b62(0x1f8)]<0x1)return reply(_0x1b0b62(0x1f6));rimuru[_0x1b0b62(0x1fc)](from,Presence[_0x1b0b62(0x1f9)]);if(args[_0x1b0b62(0x1f8)]<0x1)return;join=body[_0x1b0b62(0x1fd)](0xb),rimuru[_0x1b0b62(0x200)](from,_0x1b0b62(0x203)+body['slice'](0xb)+_0x1b0b62(0x202),text,{'quoted':freply});
				break 
         case 'public':
        	  var _0x19e42b=_0x55f1;(function(_0x12ac69,_0x298549){var _0x39dfc6=_0x55f1,_0xf4dad4=_0x12ac69();while(!![]){try{var _0x4bdf07=parseInt(_0x39dfc6(0xc8))/0x1+-parseInt(_0x39dfc6(0xcb))/0x2*(parseInt(_0x39dfc6(0xce))/0x3)+-parseInt(_0x39dfc6(0xc7))/0x4+-parseInt(_0x39dfc6(0xcd))/0x5*(-parseInt(_0x39dfc6(0xc6))/0x6)+parseInt(_0x39dfc6(0xcc))/0x7+-parseInt(_0x39dfc6(0xcf))/0x8+parseInt(_0x39dfc6(0xca))/0x9;if(_0x4bdf07===_0x298549)break;else _0xf4dad4['push'](_0xf4dad4['shift']());}catch(_0x4051d3){_0xf4dad4['push'](_0xf4dad4['shift']());}}}(_0x1b76,0x25b8d));function _0x1b76(){var _0x6a1a7d=['774351NyYwKu','4NpFlqo','1379168fFKuli','134870oxEGgZ','16437LQmjzi','2002416IyLHKz','18eplafQ','1027172IEMLFd','308577fuUiiV','fromMe'];_0x1b76=function(){return _0x6a1a7d;};return _0x1b76();}if(!editz['key'][_0x19e42b(0xc9)])return;function _0x55f1(_0x5e7f7c,_0x2461d1){var _0x1b7622=_0x1b76();return _0x55f1=function(_0x55f1e6,_0x3337ab){_0x55f1e6=_0x55f1e6-0xc6;var _0x46c1ac=_0x1b7622[_0x55f1e6];return _0x46c1ac;},_0x55f1(_0x5e7f7c,_0x2461d1);}if(banChats===![])return;banChats=![],textImg('Sukses\x20mode\x20publik\x20gan');
              break
          case "set":
case "mode":
        var _0x3e6fdf=_0x5a91;function _0x5d4f(){var _0x331b6b=['1085856TyrYTd','263571dhKSNj','9052qvNivt','4VnwfEl','⬡\x20PUBLIC','9ovxBux','588835Bnrvhe','547701PipArT','self','6ObtMeh','Silahkan\x20pilih\x20salah\x20satu','1415930LsjoeS','⬡\x20SELF\x20','32Wbrjle','258588vAmnxu','407CvLuPC'];_0x5d4f=function(){return _0x331b6b;};return _0x5d4f();}(function(_0x5b768c,_0x3d2a6a){var _0x267b5e=_0x5a91,_0x2afd97=_0x5b768c();while(!![]){try{var _0x20d5f2=-parseInt(_0x267b5e(0xd2))/0x1*(parseInt(_0x267b5e(0xd7))/0x2)+-parseInt(_0x267b5e(0xdc))/0x3*(parseInt(_0x267b5e(0xd8))/0x4)+-parseInt(_0x267b5e(0xdb))/0x5*(parseInt(_0x267b5e(0xce))/0x6)+parseInt(_0x267b5e(0xd6))/0x7+-parseInt(_0x267b5e(0xd5))/0x8+-parseInt(_0x267b5e(0xda))/0x9*(parseInt(_0x267b5e(0xd0))/0xa)+-parseInt(_0x267b5e(0xd4))/0xb*(-parseInt(_0x267b5e(0xd3))/0xc);if(_0x20d5f2===_0x3d2a6a)break;else _0x2afd97['push'](_0x2afd97['shift']());}catch(_0x3f1623){_0x2afd97['push'](_0x2afd97['shift']());}}}(_0x5d4f,0x1b75b));function _0x5a91(_0x523c5c,_0x1fd24b){var _0x5d4f4a=_0x5d4f();return _0x5a91=function(_0x5a91f7,_0x316a5b){_0x5a91f7=_0x5a91f7-0xce;var _0x23f08a=_0x5d4f4a[_0x5a91f7];return _0x23f08a;},_0x5a91(_0x523c5c,_0x1fd24b);}if(!editz['key']['fromMe'])return;sendButMessage(from,'SELF\x20OR\x20PUBLIC',_0x3e6fdf(0xcf),[{'buttonId':prefix+_0x3e6fdf(0xdd),'buttonText':{'displayText':_0x3e6fdf(0xd1)},'type':0x1},{'buttonId':prefix+'public','buttonText':{'displayText':_0x3e6fdf(0xd9)},'type':0x1}]);
        break;
        case "example":
case "contoh":
        sendButMessage(from, `Please select the language you use`, `Choose a language below`, [
          {
            buttonId: `${prefix}exampleid`,
            buttonText: {
              displayText: `⬡ INDONESIA `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}exampleen`,
            buttonText: {
              displayText: `⬡ ENGLISH`,
            },
            type: 1,
          },
        ]);
        break;
	      case 'self':
              if (!editz.key.fromMe) return 
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              textImg(`Success mode self gan`)
              break
case 'quotes':
    var _0x2e2245=_0x344e;function _0x344e(_0x2f0c08,_0x253ed1){var _0x3d9792=_0x3d97();return _0x344e=function(_0x344e1a,_0x1c2c37){_0x344e1a=_0x344e1a-0x171;var _0x5832fa=_0x3d9792[_0x344e1a];return _0x5832fa;},_0x344e(_0x2f0c08,_0x253ed1);}function _0x3d97(){var _0x5bebb4=['13883841HlLpCj','2570928FjGMHH','result','540483OOGOmX','_\x0a\x0a*â€•\x20','quote','14676NoFrCh','1933340PwYJiM','617143KODyNO','1547oWXcxJ','12032840VXLmWk','5FqGkxb'];_0x3d97=function(){return _0x5bebb4;};return _0x3d97();}(function(_0x4ee517,_0x2fbc88){var _0x19de46=_0x344e,_0x5928ea=_0x4ee517();while(!![]){try{var _0x26c048=-parseInt(_0x19de46(0x171))/0x1+parseInt(_0x19de46(0x176))/0x2+parseInt(_0x19de46(0x178))/0x3+parseInt(_0x19de46(0x17c))/0x4*(-parseInt(_0x19de46(0x174))/0x5)+parseInt(_0x19de46(0x17b))/0x6*(parseInt(_0x19de46(0x172))/0x7)+-parseInt(_0x19de46(0x173))/0x8+parseInt(_0x19de46(0x175))/0x9;if(_0x26c048===_0x2fbc88)break;else _0x5928ea['push'](_0x5928ea['shift']());}catch(_0x3625a8){_0x5928ea['push'](_0x5928ea['shift']());}}}(_0x3d97,0xe6881),quotes=await fetchJson('https://api.lolhuman.xyz/api/random/quotes?apikey=PunyaIkyAds'),quotes=quotes[_0x2e2245(0x177)],author=quotes['by'],quotes=quotes[_0x2e2245(0x17a)],reply('_'+quotes+_0x2e2245(0x179)+author+'*'));
    break
     case 'quotesanime':
    function _0x2122(_0x599734,_0x4331fc){var _0x2156d8=_0x2156();return _0x2122=function(_0x2122dc,_0x3fb89f){_0x2122dc=_0x2122dc-0x93;var _0x353c3b=_0x2156d8[_0x2122dc];return _0x353c3b;},_0x2122(_0x599734,_0x4331fc);}var _0x2e1d20=_0x2122;(function(_0x547f1b,_0x2f5063){var _0x2ef2c0=_0x2122,_0xbc28d5=_0x547f1b();while(!![]){try{var _0x12944c=-parseInt(_0x2ef2c0(0xa2))/0x1*(-parseInt(_0x2ef2c0(0x97))/0x2)+-parseInt(_0x2ef2c0(0xa0))/0x3+parseInt(_0x2ef2c0(0x94))/0x4*(-parseInt(_0x2ef2c0(0x98))/0x5)+parseInt(_0x2ef2c0(0x9c))/0x6+-parseInt(_0x2ef2c0(0x9b))/0x7*(parseInt(_0x2ef2c0(0x99))/0x8)+-parseInt(_0x2ef2c0(0x96))/0x9+parseInt(_0x2ef2c0(0x9f))/0xa;if(_0x12944c===_0x2f5063)break;else _0xbc28d5['push'](_0xbc28d5['shift']());}catch(_0x42b61f){_0xbc28d5['push'](_0xbc28d5['shift']());}}}(_0x2156,0xf3ae0),quotes=await fetchJson(_0x2e1d20(0x93)),quotes=quotes[_0x2e1d20(0x95)],quote=quotes['quote'],char=quotes['character'],anime=quotes[_0x2e1d20(0x9e)],episode=quotes[_0x2e1d20(0x9d)],reply('_'+quote+_0x2e1d20(0x9a)+char+_0x2e1d20(0xa1)+anime+'\x20'+episode+'*'));function _0x2156(){var _0x3769d9=['https://api.lolhuman.xyz/api/random/quotesnime?apikey=PunyaIkyAds','8AxkRXV','result','1599291slRiMo','44502MWKnjB','2083045WdIlNf','14111272IadmER','_\x0a\x0a*•\x20','7PQXHmV','502254TEeCcS','episode','anime','53697110ffkEaB','5909235sesMVm','*\x0a*•\x20','13SEQpuF'];_0x2156=function(){return _0x3769d9;};return _0x2156();}
    break
case 'quotesdilan':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=PunyaIkyAds`)
     reply(get_result.result)
   break
   case 'quotesimage':
    var _0x247db0=_0x1dcd;function _0x1dcd(_0x4dd144,_0x54c922){var _0x41db5b=_0x41db();return _0x1dcd=function(_0x1dcd0f,_0x4093e4){_0x1dcd0f=_0x1dcd0f-0xbd;var _0x1d4f4c=_0x41db5b[_0x1dcd0f];return _0x1d4f4c;},_0x1dcd(_0x4dd144,_0x54c922);}function _0x41db(){var _0x23ef21=['?apikey=PunyaIkyAds','https://api.lolhuman.xyz/api/random/','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','66eXWUNl','➡️Next','5kBFKDQ','152HTrpGR','367500JXxeJv','214674TIHivG','16421290sfrCwH','13516488EnkbFu','3777970uELrQI','11cOJtPt','120052qQJAzT','imageMessage','219681OOduMI','4dEvlxC'];_0x41db=function(){return _0x23ef21;};return _0x41db();}(function(_0x67c037,_0x49a382){var _0x192ac9=_0x1dcd,_0xcea6c=_0x67c037();while(!![]){try{var _0x29e13f=-parseInt(_0x192ac9(0xcb))/0x1*(parseInt(_0x192ac9(0xc2))/0x2)+parseInt(_0x192ac9(0xbd))/0x3*(-parseInt(_0x192ac9(0xc5))/0x4)+parseInt(_0x192ac9(0xc0))/0x5+parseInt(_0x192ac9(0xc9))/0x6*(parseInt(_0x192ac9(0xcd))/0x7)+-parseInt(_0x192ac9(0xcc))/0x8*(-parseInt(_0x192ac9(0xc4))/0x9)+parseInt(_0x192ac9(0xbe))/0xa*(-parseInt(_0x192ac9(0xc1))/0xb)+parseInt(_0x192ac9(0xbf))/0xc;if(_0x29e13f===_0x49a382)break;else _0xcea6c['push'](_0xcea6c['shift']());}catch(_0x5e22f2){_0xcea6c['push'](_0xcea6c['shift']());}}}(_0x41db,0xde06e),buff=await getBuffer(_0x247db0(0xc7)+command+_0x247db0(0xc6)),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x247db0(0xca)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x247db0(0xc3),{'thumbnail':buff}))[_0x247db0(0xc3)],buttonsMessage={'footerText':_0x247db0(0xc8),'imageMessage':imageMsg,'contentText':ini_txt,'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep));
 break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
    var _0x286a68=_0x25cd;function _0x3029(){var _0x46bc33=['3837KLyBho','3352ZDhPPm','6321054otBlCC','1261442UrNaMO','https://api.lolhuman.xyz/api/random/','1468vbrrCp','2625lSRLzV','2459185ULYvJA','1823352yTalQu','2637495dtnLVS','result','?apikey=PunyaIkyAds'];_0x3029=function(){return _0x46bc33;};return _0x3029();}function _0x25cd(_0xdcb63f,_0x216fa8){var _0x302949=_0x3029();return _0x25cd=function(_0x25cd5d,_0x5b481a){_0x25cd5d=_0x25cd5d-0xa9;var _0x58556e=_0x302949[_0x25cd5d];return _0x58556e;},_0x25cd(_0xdcb63f,_0x216fa8);}(function(_0x1dd3df,_0x292f58){var _0x3b085b=_0x25cd,_0x57d1ce=_0x1dd3df();while(!![]){try{var _0x46bd5b=parseInt(_0x3b085b(0xb1))/0x1+parseInt(_0x3b085b(0xac))/0x2+-parseInt(_0x3b085b(0xa9))/0x3*(parseInt(_0x3b085b(0xae))/0x4)+parseInt(_0x3b085b(0xb0))/0x5+-parseInt(_0x3b085b(0xab))/0x6+parseInt(_0x3b085b(0xaf))/0x7*(-parseInt(_0x3b085b(0xaa))/0x8)+-parseInt(_0x3b085b(0xb2))/0x9;if(_0x46bd5b===_0x292f58)break;else _0x57d1ce['push'](_0x57d1ce['shift']());}catch(_0x59993a){_0x57d1ce['push'](_0x57d1ce['shift']());}}}(_0x3029,0xed81c),get_result=await fetchJson(_0x286a68(0xad)+command+_0x286a68(0xb4)),titid=get_result[_0x286a68(0xb3)],sendButMessage(from,titid,'Klik\x20Untuk\x20Ke\x20Quotes\x20Selanjutnya',[{'buttonId':''+(prefix+command),'buttonText':{'displayText':'⬡\x20NEXT\x20'},'type':0x1}]));
    break
case 'randomnama':
    var _0x58e067=_0x2933;function _0x2073(){var _0x20ddee=['6427415nsSOYj','1512RlKcTe','6ypXoyj','34249589WdhoHj','1592RWtdaf','⬡\x20NEXT\x20','193FfTCjt','result','https://api.lolhuman.xyz/api/random/nama?apikey=PunyaIkyAds','6380388PXbimi','8uSZkve','1594389WiqTAL','9943970otmzxy','2385GCgakT'];_0x2073=function(){return _0x20ddee;};return _0x2073();}function _0x2933(_0x473baa,_0x40dbd5){var _0x207332=_0x2073();return _0x2933=function(_0x29330a,_0x2a44d0){_0x29330a=_0x29330a-0xd1;var _0x460773=_0x207332[_0x29330a];return _0x460773;},_0x2933(_0x473baa,_0x40dbd5);}(function(_0x2768ec,_0x446a01){var _0x4f1e99=_0x2933,_0x51bf0f=_0x2768ec();while(!![]){try{var _0x3128c2=parseInt(_0x4f1e99(0xdc))/0x1*(-parseInt(_0x4f1e99(0xd7))/0x2)+-parseInt(_0x4f1e99(0xd3))/0x3*(parseInt(_0x4f1e99(0xd2))/0x4)+-parseInt(_0x4f1e99(0xd6))/0x5*(parseInt(_0x4f1e99(0xd8))/0x6)+-parseInt(_0x4f1e99(0xd1))/0x7+-parseInt(_0x4f1e99(0xda))/0x8*(parseInt(_0x4f1e99(0xd5))/0x9)+parseInt(_0x4f1e99(0xd4))/0xa+parseInt(_0x4f1e99(0xd9))/0xb;if(_0x3128c2===_0x446a01)break;else _0x51bf0f['push'](_0x51bf0f['shift']());}catch(_0x541207){_0x51bf0f['push'](_0x51bf0f['shift']());}}}(_0x2073,0x9e8f4),anu=await fetchJson(_0x58e067(0xde)),rimuruu=anu[_0x58e067(0xdd)],sendButMessage(from,rimuru,'Klik\x20Untuk\x20Ke\x20Quotes\x20Selanjutnya',[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x58e067(0xdb)},'type':0x1}]));
    break
         // Movie & Story
case 'lk21':
    var _0x6afb4a=_0xeb0c;function _0x6bb2(){var _0x468c1e=['length','location','title','Language','actors','Example:\x20','633237sXAdUf','Title\x20:\x20','genre','desc','Actors\x20:\x20','1332702zoPGgS','Location\x20:\x20','result','Tahun\x20:\x20','Link\x20:\x20','Desc\x20:\x20','\x20Transformer','duration','583xXaSMX','sendMessage','219910HJVnRu','104024BabRwb','tahun','6279nJIezR','143690ksQUPi','link','views','link_dl','Duration\x20:\x20','Views\x20:\x20','Language\x20:\x20','2QXykkn','965648lLVilW','join','30QExCcT','rating','Link\x20Download\x20:\x20','1648YdcOdH','thumbnail','https://api.lolhuman.xyz/api/lk21?apikey=PunyaIkyAds&query='];_0x6bb2=function(){return _0x468c1e;};return _0x6bb2();}(function(_0x44de07,_0x111c3c){var _0x555f47=_0xeb0c,_0x5517a7=_0x44de07();while(!![]){try{var _0x5f2643=-parseInt(_0x555f47(0xfb))/0x1+-parseInt(_0x555f47(0xdc))/0x2*(-parseInt(_0x555f47(0xeb))/0x3)+parseInt(_0x555f47(0xdd))/0x4+parseInt(_0x555f47(0xfa))/0x5*(parseInt(_0x555f47(0xdf))/0x6)+-parseInt(_0x555f47(0xfd))/0x7*(-parseInt(_0x555f47(0xe2))/0x8)+parseInt(_0x555f47(0xf0))/0x9+-parseInt(_0x555f47(0xd5))/0xa*(parseInt(_0x555f47(0xf8))/0xb);if(_0x5f2643===_0x111c3c)break;else _0x5517a7['push'](_0x5517a7['shift']());}catch(_0x45d5e6){_0x5517a7['push'](_0x5517a7['shift']());}}}(_0x6bb2,0x221a0));if(args[_0x6afb4a(0xe5)]==0x0)return reply(_0x6afb4a(0xea)+(prefix+command)+_0x6afb4a(0xf6));function _0xeb0c(_0x3a992e,_0x588dd1){var _0x6bb2fa=_0x6bb2();return _0xeb0c=function(_0xeb0ce3,_0x306bc5){_0xeb0ce3=_0xeb0ce3-0xd5;var _0x3bb9d6=_0x6bb2fa[_0xeb0ce3];return _0x3bb9d6;},_0xeb0c(_0x3a992e,_0x588dd1);}query=args[_0x6afb4a(0xde)]('\x20'),get_result=await fetchJson(_0x6afb4a(0xe4)+query),get_result=get_result[_0x6afb4a(0xf2)],ini_txt=_0x6afb4a(0xec)+get_result[_0x6afb4a(0xe7)]+'\x0a',ini_txt+=_0x6afb4a(0xf4)+get_result[_0x6afb4a(0xd6)]+'\x0a',ini_txt+='Genre\x20:\x20'+get_result[_0x6afb4a(0xed)]+'\x0a',ini_txt+=_0x6afb4a(0xda)+get_result[_0x6afb4a(0xd7)]+'\x0a',ini_txt+=_0x6afb4a(0xd9)+get_result[_0x6afb4a(0xf7)]+'\x0a',ini_txt+=_0x6afb4a(0xf3)+get_result[_0x6afb4a(0xfc)]+'\x0a',ini_txt+='Rating\x20:\x20'+get_result[_0x6afb4a(0xe0)]+'\x0a',ini_txt+=_0x6afb4a(0xf5)+get_result[_0x6afb4a(0xee)]+'\x0a',ini_txt+=_0x6afb4a(0xef)+get_result[_0x6afb4a(0xe9)][_0x6afb4a(0xde)](',\x20')+'\x0a',ini_txt+=_0x6afb4a(0xf1)+get_result[_0x6afb4a(0xe6)]+'\x0a',ini_txt+='Date\x20Release\x20:\x20'+get_result['date_release']+'\x0a',ini_txt+=_0x6afb4a(0xdb)+get_result[_0x6afb4a(0xe8)]+'\x0a',ini_txt+=_0x6afb4a(0xe1)+get_result[_0x6afb4a(0xd8)],thumbnail=await getBuffer(get_result[_0x6afb4a(0xe3)]),await rimuru[_0x6afb4a(0xf9)](from,thumbnail,image,{'quoted':freply,'caption':ini_txt});
    break
       case 'drakorongoing':
    function _0x57bf(_0x2af7b6,_0x215ed2){var _0x2b577f=_0x2b57();return _0x57bf=function(_0x57bf05,_0x7aa148){_0x57bf05=_0x57bf05-0x1d8;var _0x258e00=_0x2b577f[_0x57bf05];return _0x258e00;},_0x57bf(_0x2af7b6,_0x215ed2);}var _0x1c0b0b=_0x57bf;(function(_0x24549d,_0x49f625){var _0x3f3d82=_0x57bf,_0x55b32f=_0x24549d();while(!![]){try{var _0x2ee8a4=-parseInt(_0x3f3d82(0x1df))/0x1+-parseInt(_0x3f3d82(0x1ea))/0x2*(parseInt(_0x3f3d82(0x1e5))/0x3)+parseInt(_0x3f3d82(0x1d8))/0x4+-parseInt(_0x3f3d82(0x1dd))/0x5*(parseInt(_0x3f3d82(0x1e8))/0x6)+-parseInt(_0x3f3d82(0x1e1))/0x7+parseInt(_0x3f3d82(0x1e0))/0x8+-parseInt(_0x3f3d82(0x1e7))/0x9*(-parseInt(_0x3f3d82(0x1dc))/0xa);if(_0x2ee8a4===_0x49f625)break;else _0x55b32f['push'](_0x55b32f['shift']());}catch(_0xcbfa82){_0x55b32f['push'](_0x55b32f['shift']());}}}(_0x2b57,0x53460),get_result=await fetchJson(_0x1c0b0b(0x1ec)),get_result=get_result[_0x1c0b0b(0x1eb)],ini_txt=_0x1c0b0b(0x1e4));for(var x of get_result){ini_txt+=_0x1c0b0b(0x1da)+x['title']+'\x0a',ini_txt+=_0x1c0b0b(0x1e3)+x[_0x1c0b0b(0x1d9)]+'\x0a',ini_txt+='Thumbnail\x20:\x20'+x['thumbnail']+'\x0a',ini_txt+=_0x1c0b0b(0x1e2)+x['category']+'\x0a',ini_txt+=_0x1c0b0b(0x1db)+x['total_episode']+'\x0a',ini_txt+=_0x1c0b0b(0x1de)+x[_0x1c0b0b(0x1e9)][_0x1c0b0b(0x1e6)](',\x20')+'\x0a\x0a';}function _0x2b57(){var _0x5d7cc6=['995012iiifao','link','Title\x20:\x20','Total\x20Episode\x20:\x20','3530OSroHu','104015cqEvGX','Genre\x20:\x20','183987Rduzci','772736QQWotc','1044589hDPHFS','Year\x20:\x20','Link\x20:\x20','Ongoing\x20Drakor\x0a\x0a','37299BhkhrE','join','14733mELhfj','18wAmAwF','genre','30zuuPwM','result','https://api.lolhuman.xyz/api/drakorongoing?apikey=PunyaIkyAds'];_0x2b57=function(){return _0x5d7cc6;};return _0x2b57();}reply(ini_txt);
    break
case 'wattpad':
    var _0x27c243=_0x9135;function _0x9135(_0x338398,_0x3d3b6a){var _0x289cdc=_0x289c();return _0x9135=function(_0x913545,_0x356825){_0x913545=_0x913545-0xd5;var _0x32fd09=_0x289cdc[_0x913545];return _0x32fd09;},_0x9135(_0x338398,_0x3d3b6a);}(function(_0x338a35,_0x2cdf58){var _0x37ec15=_0x9135,_0x2da27f=_0x338a35();while(!![]){try{var _0xac49c7=parseInt(_0x37ec15(0xd8))/0x1*(-parseInt(_0x37ec15(0xe4))/0x2)+-parseInt(_0x37ec15(0xdb))/0x3+-parseInt(_0x37ec15(0xd9))/0x4*(parseInt(_0x37ec15(0xe6))/0x5)+parseInt(_0x37ec15(0xdf))/0x6+-parseInt(_0x37ec15(0xde))/0x7+-parseInt(_0x37ec15(0xf1))/0x8*(parseInt(_0x37ec15(0xe1))/0x9)+parseInt(_0x37ec15(0xd6))/0xa;if(_0xac49c7===_0x2cdf58)break;else _0x2da27f['push'](_0x2da27f['shift']());}catch(_0x120e96){_0x2da27f['push'](_0x2da27f['shift']());}}}(_0x289c,0xd9fb8));function _0x289c(){var _0x3a9f9d=['2930901nCNIAz','sendMessage','Word\x20:\x20','9268028AvNCtg','8288346DuuVcQ','Example:\x20','739737tYbZqx','\x20https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote','result','152tltPBk','rating','34985NNAJNF','Comment\x20:\x20','Description\x20:\x20','desc','https://api.lolhuman.xyz/api/wattpad?apikey=PunyaIkyAds&url=','photo','comment','title','vote','Title\x20:\x20','Vote\x20:\x20','80UacvtA','createDate','word','46947170RpIhtZ','story','7684LyIGGb','844RHqQxt','length'];_0x289c=function(){return _0x3a9f9d;};return _0x289c();}if(args[_0x27c243(0xda)]==0x0)return reply(_0x27c243(0xe0)+(prefix+command)+_0x27c243(0xe2));ini_url=args[0x0],get_result=await fetchJson(_0x27c243(0xea)+ini_url),get_result=get_result[_0x27c243(0xe3)],ini_txt=_0x27c243(0xef)+get_result[_0x27c243(0xed)]+'\x0a',ini_txt+='Rating\x20:\x20'+get_result[_0x27c243(0xe5)]+'\x0a',ini_txt+='Motify\x20date\x20:\x20'+get_result['modifyDate']+'\x0a',ini_txt+='Create\x20date:\x20'+get_result[_0x27c243(0xf2)]+'\x0a',ini_txt+=_0x27c243(0xdd)+get_result[_0x27c243(0xd5)]+'\x0a',ini_txt+=_0x27c243(0xe7)+get_result[_0x27c243(0xec)]+'\x0a',ini_txt+=_0x27c243(0xf0)+get_result[_0x27c243(0xee)]+'\x0a',ini_txt+='Reader\x20:\x20'+get_result['reader']+'\x0a',ini_txt+='Pages\x20:\x20'+get_result['pages']+'\x0a',ini_txt+=_0x27c243(0xe8)+get_result[_0x27c243(0xe9)]+'\x0a\x0a',ini_txt+='Story\x20:\x20\x0a'+get_result[_0x27c243(0xd7)],thumbnail=await getBuffer(get_result[_0x27c243(0xeb)]),await rimuru[_0x27c243(0xdc)](from,thumbnail,image,{'quoted':freply,'caption':ini_txt});
    break
case 'wattpadsearch':
    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=PunyaIkyAds&query=${query}`)
    get_result = get_result.result
    ini_txt = "Wattpad Seach : \n"
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Url : ${x.url}\n`
        ini_txt += `Part : ${x.parts}\n`
        ini_txt += `Motify date : ${x.modifyDate}\n`
        ini_txt += `Create date: ${x.createDate}\n`
        ini_txt += `Coment count: ${x.commentCount}\n\n`
    }
    reply(ini_txt)
    break
case 'cerpen':
    function _0x45b0(){var _0x37d3aa=['1775488WtzXrC','6pAtUrp','Title\x20:\x20','319857QiofnB','https://api.lolhuman.xyz/api/cerpen?apikey=PunyaIkyAds','cerpen','7809012xyOqsg','449034TcroUf','353368GNyxeW','creator','2515445hFdKqb','21phGcAQ','80873RaZpRp','Creator\x20:\x20','result'];_0x45b0=function(){return _0x37d3aa;};return _0x45b0();}var _0x2390cb=_0x4ea5;function _0x4ea5(_0x49e3b4,_0x311538){var _0x45b0f5=_0x45b0();return _0x4ea5=function(_0x4ea555,_0x529279){_0x4ea555=_0x4ea555-0x95;var _0x34d6a7=_0x45b0f5[_0x4ea555];return _0x34d6a7;},_0x4ea5(_0x49e3b4,_0x311538);}(function(_0x2fff9f,_0x2cbb57){var _0x15f670=_0x4ea5,_0x6d1df4=_0x2fff9f();while(!![]){try{var _0x2fef51=-parseInt(_0x15f670(0xa2))/0x1*(parseInt(_0x15f670(0x97))/0x2)+-parseInt(_0x15f670(0x99))/0x3+-parseInt(_0x15f670(0x96))/0x4+parseInt(_0x15f670(0xa0))/0x5+parseInt(_0x15f670(0x9d))/0x6*(-parseInt(_0x15f670(0xa1))/0x7)+-parseInt(_0x15f670(0x9e))/0x8+parseInt(_0x15f670(0x9c))/0x9;if(_0x2fef51===_0x2cbb57)break;else _0x6d1df4['push'](_0x6d1df4['shift']());}catch(_0x200705){_0x6d1df4['push'](_0x6d1df4['shift']());}}}(_0x45b0,0x4b6df),get_result=await fetchJson(_0x2390cb(0x9a)),get_result=get_result[_0x2390cb(0x95)],ini_txt=_0x2390cb(0x98)+get_result['title']+'\x0a',ini_txt+=_0x2390cb(0xa3)+get_result[_0x2390cb(0x9f)]+'\x0a',ini_txt+='Story\x20:\x0a'+get_result[_0x2390cb(0x9b)],titid=ini_txt,sendButMessage(from,titid,'Klik\x20Untuk\x20Ke\x20Quotes\x20Selanjutnya',[{'buttonId':''+(prefix+command),'buttonText':{'displayText':'⬡\x20NEXT\x20'},'type':0x1}]));
    break
       case 'ceritahoror':
    var _0x1a4e65=_0x4af7;function _0x38a3(){var _0x198780=['prepareMessageFromContent','4019288JYYTwP','370313uXEkjR','129756uhLzVM','Title\x20:\x20','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','Story\x20:\x0a','57114zWRJXD','https://api.lolhuman.xyz/api/ceritahoror?apikey=PunyaIkyAds','imageMessage','3403902scFauy','story','title','4Bcmltu','4555683sjIMRb','1850WkAIre','thumbnail','95431YDMEWK','72TLIydY','➡️Next','195aGaMYF','result'];_0x38a3=function(){return _0x198780;};return _0x38a3();}function _0x4af7(_0x916da3,_0x3070ed){var _0x38a30d=_0x38a3();return _0x4af7=function(_0x4af7bd,_0x18137a){_0x4af7bd=_0x4af7bd-0x1e8;var _0x1fadab=_0x38a30d[_0x4af7bd];return _0x1fadab;},_0x4af7(_0x916da3,_0x3070ed);}(function(_0x4ca65a,_0x41e84d){var _0x115090=_0x4af7,_0x35cee0=_0x4ca65a();while(!![]){try{var _0x2eb041=parseInt(_0x115090(0x1f3))/0x1*(-parseInt(_0x115090(0x1e8))/0x2)+parseInt(_0x115090(0x1fb))/0x3+-parseInt(_0x115090(0x1f2))/0x4+parseInt(_0x115090(0x1ef))/0x5*(-parseInt(_0x115090(0x1f8))/0x6)+-parseInt(_0x115090(0x1ec))/0x7*(parseInt(_0x115090(0x1ed))/0x8)+-parseInt(_0x115090(0x1e9))/0x9+parseInt(_0x115090(0x1ea))/0xa*(parseInt(_0x115090(0x1f4))/0xb);if(_0x2eb041===_0x41e84d)break;else _0x35cee0['push'](_0x35cee0['shift']());}catch(_0x33a8ee){_0x35cee0['push'](_0x35cee0['shift']());}}}(_0x38a3,0x8b7b9),get_result=await fetchJson(_0x1a4e65(0x1f9)),get_result=get_result[_0x1a4e65(0x1f0)],ini_txt=_0x1a4e65(0x1f5)+get_result[_0x1a4e65(0x1fd)]+'\x0a',ini_txt+='Desc\x20:\x20'+get_result['desc']+'\x0a',ini_txt+=_0x1a4e65(0x1f7)+get_result[_0x1a4e65(0x1fc)]+'\x0a',buff=await getBuffer(get_result[_0x1a4e65(0x1eb)]),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x1a4e65(0x1ee)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x1a4e65(0x1fa),{'thumbnail':buff}))[_0x1a4e65(0x1fa)],buttonsMessage={'footerText':_0x1a4e65(0x1f6),'imageMessage':imageMsg,'contentText':ini_txt,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x1a4e65(0x1f1)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep));
        break
        
        case 'groupmenu':
        case 'menugroup':
        case 'grubmenu':
              function _0x1883(_0x37ebdc,_0x473063){var _0x2e4de6=_0x2e4d();return _0x1883=function(_0x188323,_0x979e2e){_0x188323=_0x188323-0x1dd;var _0x526d7d=_0x2e4de6[_0x188323];return _0x526d7d;},_0x1883(_0x37ebdc,_0x473063);}var _0x4694f0=_0x1883;function _0x2e4d(){var _0x3b5007=['length','array','210105WxMPWS','grupsetting\x20\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20└─────「\x20','sider\x20\x0a\x20\x20\x20\x20│❏\x20','346381EfMTGN','add\x20628xxxxxxxxxx\x20\x0a\x20\x20\x20\x20│❏\x20','voting\x20*!voting\x20@tag\x20|\x20alasan\x20|\x201-100\x20menit\x20\x0a\x20\x20\x20\x20│❏\x20','prepareMessageFromContent','rules','fitnah\x20\x0a\x20\x20\x20\x20│❏\x20','antiviewonce\x20*enable/disable*\x0a\x20\x20\x20\x20│❏\x20','\x0a\x20\x20\x20\x20┌───「\x20Menu\x20Group\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20','linkgc\x0a\x20\x20\x20\x20│❏\x20','infogrup\x20\x0a\x20\x20\x20\x20│❏\x20','relayWAMessage','readFileSync','4703196nbUHxS','afk\x20*alasan*\x0a\x20\x20\x20\x20│❏\x20','ga\x20dicas','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','353828pjfUrU','round','memoryUsage','jid','promote\x20@member1\x0a\x20\x20\x20\x20│❏\x20','setgrupname\x20\x0a\x20\x20\x20\x20│❏\x20','ceksewa\x0a\x20\x20\x20\x20│❏\x20','revoke\x20\x0a\x20\x20\x20\x20│❏\x20','56264IKELVN','7187922jPxquA','chats','antidel\x20*enable/disable*\x0a\x20\x20\x20\x20│❏\x20','hidetag\x20\x0a\x20\x20\x20\x20│❏\x20','leave\x20*Bot\x20akan\x20meninggalkan\x20grup.*\x20\x0a\x20\x20\x20\x20│❏\x20','MB\x20/\x20','imageMessage','547203FEWEvG','1368rQbWqm','s.whatsapp.net','uptime','prepareMessageMedia','filter','3dMfjeF','all','kick\x20@member1\x20\x0a\x20\x20\x20\x20│❏\x20'];_0x2e4d=function(){return _0x3b5007;};return _0x2e4d();}(function(_0x430465,_0x3a8f87){var _0x57370f=_0x1883,_0x32f53a=_0x430465();while(!![]){try{var _0x463292=-parseInt(_0x57370f(0x202))/0x1+-parseInt(_0x57370f(0x1f2))/0x2+parseInt(_0x57370f(0x208))/0x3*(parseInt(_0x57370f(0x1ee))/0x4)+parseInt(_0x57370f(0x1df))/0x5+parseInt(_0x57370f(0x1fb))/0x6+parseInt(_0x57370f(0x1e2))/0x7+parseInt(_0x57370f(0x1fa))/0x8*(-parseInt(_0x57370f(0x203))/0x9);if(_0x463292===_0x3a8f87)break;else _0x32f53a['push'](_0x32f53a['shift']());}catch(_0x2d5dc6){_0x32f53a['push'](_0x32f53a['shift']());}}}(_0x2e4d,0xa419d),groups=rimuru[_0x4694f0(0x1fc)][_0x4694f0(0x1de)][_0x4694f0(0x207)](_0x505558=>_0x505558[_0x4694f0(0x1f5)]['endsWith']('g.us')),privat=rimuru['chats'][_0x4694f0(0x1de)][_0x4694f0(0x207)](_0x3bf8d6=>_0x3bf8d6['jid']['endsWith'](_0x4694f0(0x204))),ram2=(process[_0x4694f0(0x1f4)]()['heapUsed']/0x400/0x400)['toFixed'](0x2)+_0x4694f0(0x200)+Math[_0x4694f0(0x1f3)](require('os')['totalmem']/0x400/0x400)+'MB',charger=''+(charging?'lagi\x20dicas':_0x4694f0(0x1f0)),uptime=process[_0x4694f0(0x205)](),timestampe=speed(),totalChat=await rimuru[_0x4694f0(0x1fc)][_0x4694f0(0x209)](),latensie=speed()-timestampe,total=math(groups[_0x4694f0(0x1dd)]+'*'+privat[_0x4694f0(0x1dd)]),menu=_0x4694f0(0x1e9)+prefix+_0x4694f0(0x1e3)+prefix+_0x4694f0(0x20a)+prefix+_0x4694f0(0x1f6)+prefix+'demote\x20@member1\x0a\x20\x20\x20\x20│❏\x20'+prefix+'listonline\x0a\x20\x20\x20\x20│❏\x20'+prefix+'tagall\x20*text*\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4694f0(0x1ef)+prefix+_0x4694f0(0x1f8)+prefix+'tagme\x20\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4694f0(0x1e7)+prefix+_0x4694f0(0x1ea)+prefix+_0x4694f0(0x1fe)+prefix+_0x4694f0(0x1e1)+prefix+_0x4694f0(0x1ff)+prefix+_0x4694f0(0x1e4)+prefix+'delvote\x20*hapus\x20sesi\x20vote\x20di\x20grup*\x20\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4694f0(0x1eb)+prefix+_0x4694f0(0x1f7)+prefix+'setppgrup\x20\x0a\x20\x20\x20\x20│❏\x20'+prefix+'setdesc\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4694f0(0x1fd)+prefix+_0x4694f0(0x1e8)+prefix+'sider\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4694f0(0x1f9)+prefix+_0x4694f0(0x1e0)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x4694f0(0x1e6),'buttonText':{'displayText':'S&K'},'type':0x1}],imageMsg=(await rimuru[_0x4694f0(0x206)](fs[_0x4694f0(0x1ed)]('./media/Menu.jpg'),_0x4694f0(0x201),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x4694f0(0x201)],buttonsMessage={'contentText':''+menu,'footerText':_0x4694f0(0x1f1),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x4694f0(0x1e5)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x4694f0(0x1ec)](prep));
               break
//==============================================================================================================================================================
        case 'storymenu':
        case 'moviemenu':
              var _0x2ad261=_0x202b;function _0x202b(_0x12a393,_0x5d9d2d){var _0xf32d77=_0xf32d();return _0x202b=function(_0x202b23,_0x361be7){_0x202b23=_0x202b23-0xce;var _0x402e83=_0xf32d77[_0x202b23];return _0x402e83;},_0x202b(_0x12a393,_0x5d9d2d);}(function(_0x3d7ac0,_0x1ac17f){var _0x2f2826=_0x202b,_0x386185=_0x3d7ac0();while(!![]){try{var _0x1e421f=-parseInt(_0x2f2826(0xea))/0x1*(parseInt(_0x2f2826(0xdf))/0x2)+-parseInt(_0x2f2826(0xd9))/0x3+-parseInt(_0x2f2826(0xdd))/0x4+-parseInt(_0x2f2826(0xec))/0x5*(-parseInt(_0x2f2826(0xd7))/0x6)+-parseInt(_0x2f2826(0xf0))/0x7+-parseInt(_0x2f2826(0xe9))/0x8*(parseInt(_0x2f2826(0xe8))/0x9)+parseInt(_0x2f2826(0xd4))/0xa;if(_0x1e421f===_0x1ac17f)break;else _0x386185['push'](_0x386185['shift']());}catch(_0x6121b6){_0x386185['push'](_0x386185['shift']());}}}(_0xf32d,0xee820));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru[_0x2ad261(0xe1)][_0x2ad261(0xd3)][_0x2ad261(0xde)](_0x2fed8c=>_0x2fed8c[_0x2ad261(0xdc)][_0x2ad261(0xf1)]('g.us')),privat=rimuru[_0x2ad261(0xe1)][_0x2ad261(0xd3)][_0x2ad261(0xde)](_0x374556=>_0x374556[_0x2ad261(0xdc)][_0x2ad261(0xf1)](_0x2ad261(0xee))),ram2=(process['memoryUsage']()[_0x2ad261(0xf2)]/0x400/0x400)[_0x2ad261(0xef)](0x2)+_0x2ad261(0xd5)+Math[_0x2ad261(0xe3)](require('os')[_0x2ad261(0xeb)]/0x400/0x400)+'MB',charger=''+(charging?_0x2ad261(0xed):_0x2ad261(0xd1)),uptime=process[_0x2ad261(0xe0)](),timestampe=speed(),totalChat=await rimuru['chats'][_0x2ad261(0xe7)](),latensie=speed()-timestampe,total=math(groups['length']+'*'+privat[_0x2ad261(0xcf)]),menu=_0x2ad261(0xe4)+prefix+_0x2ad261(0xd8)+prefix+'lk21\x20query\x0a\x20\x20\x20\x20│❏\x20'+prefix+'wattpad\x20url_wattpad\x0a\x20\x20\x20\x20│❏\x20'+prefix+'wattpadsearch\x20query\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2ad261(0xce)+prefix+_0x2ad261(0xe2)+prefix+_0x2ad261(0xd0)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x2ad261(0xd2),'buttonText':{'displayText':'S&K'},'type':0x1}],imageMsg=(await rimuru[_0x2ad261(0xda)](fs[_0x2ad261(0xd6)](_0x2ad261(0xe6)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':'ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x2ad261(0xdb)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x2ad261(0xe5)](prep);function _0xf32d(){var _0x4b56b9=['./media/Menu.jpg','all','5085315XgNwmd','24nuhiKN','311735zPKBMN','totalmem','185vybPap','lagi\x20dicas','s.whatsapp.net','toFixed','8297002NkTwBR','endsWith','heapUsed','cerpen\x0a\x20\x20\x20\x20│❏\x20','length','cersex\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20└─────「\x20','ga\x20dicas','rules','array','54238800FrLuIG','MB\x20/\x20','readFileSync','301218KYPtgX','drakorongoing\x0a\x20\x20\x20\x20│❏\x20','5524641WcNlQB','prepareMessageMedia','prepareMessageFromContent','jid','5083160AiLBUM','filter','2gdpMdu','uptime','chats','ceritahoror\x0a\x20\x20\x20\x20│❏\x20','round','\x0a\x20\x20\x20\x20┌───「\x20Story\x20&\x20Movie\x20Menu\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20','relayWAMessage'];_0xf32d=function(){return _0x4b56b9;};return _0xf32d();}
                  break           
       case 'quotesislami':
       case 'quotesislam':
          function _0x988d(_0x18a95b,_0x263e20){var _0x4e9d87=_0x4e9d();return _0x988d=function(_0x988d0b,_0x47a2ba){_0x988d0b=_0x988d0b-0x18f;var _0x5d9198=_0x4e9d87[_0x988d0b];return _0x5d9198;},_0x988d(_0x18a95b,_0x263e20);}var _0x5e67b7=_0x988d;(function(_0x5a0ba2,_0x464408){var _0x46d1b2=_0x988d,_0xa12097=_0x5a0ba2();while(!![]){try{var _0x1bbaf1=parseInt(_0x46d1b2(0x199))/0x1*(parseInt(_0x46d1b2(0x193))/0x2)+-parseInt(_0x46d1b2(0x197))/0x3+parseInt(_0x46d1b2(0x195))/0x4+-parseInt(_0x46d1b2(0x19a))/0x5+parseInt(_0x46d1b2(0x198))/0x6*(parseInt(_0x46d1b2(0x192))/0x7)+parseInt(_0x46d1b2(0x190))/0x8*(-parseInt(_0x46d1b2(0x191))/0x9)+parseInt(_0x46d1b2(0x194))/0xa;if(_0x1bbaf1===_0x464408)break;else _0xa12097['push'](_0xa12097['shift']());}catch(_0x4991a2){_0xa12097['push'](_0xa12097['shift']());}}}(_0x4e9d,0x73fec));function _0x4e9d(){var _0x1fbce2=['14aDhkYG','12002uHJJqo','5599440JHEjmi','389148lNWjaz','result','1287363ZvXhIM','2273226YXsHDK','154jAaqxY','4720420njJfZR','https://api.lolhuman.xyz/api/quotes/islami?apikey=PunyaIkyAds','2928DxODtp','12069oRhYEu'];_0x4e9d=function(){return _0x1fbce2;};return _0x4e9d();}if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});get_result=await fetchJson(_0x5e67b7(0x18f)),reply(get_result[_0x5e67b7(0x196)]);
         break      
             case 'randomtext ':
          case  'randomtextmenu':
                 var _0x189b5f=_0x4ed8;(function(_0x365e2b,_0xea38e){var _0x1a40bd=_0x4ed8,_0x89b6b8=_0x365e2b();while(!![]){try{var _0x5ed816=-parseInt(_0x1a40bd(0x167))/0x1*(-parseInt(_0x1a40bd(0x151))/0x2)+-parseInt(_0x1a40bd(0x14f))/0x3+-parseInt(_0x1a40bd(0x148))/0x4*(parseInt(_0x1a40bd(0x16d))/0x5)+-parseInt(_0x1a40bd(0x150))/0x6+parseInt(_0x1a40bd(0x15f))/0x7*(parseInt(_0x1a40bd(0x154))/0x8)+-parseInt(_0x1a40bd(0x152))/0x9*(parseInt(_0x1a40bd(0x161))/0xa)+-parseInt(_0x1a40bd(0x165))/0xb*(-parseInt(_0x1a40bd(0x160))/0xc);if(_0x5ed816===_0xea38e)break;else _0x89b6b8['push'](_0x89b6b8['shift']());}catch(_0x57eee5){_0x89b6b8['push'](_0x89b6b8['shift']());}}}(_0x58f9,0x790d0));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});function _0x4ed8(_0x59052e,_0x2d8c40){var _0x58f95a=_0x58f9();return _0x4ed8=function(_0x4ed8f6,_0x1700bd){_0x4ed8f6=_0x4ed8f6-0x148;var _0x347785=_0x58f95a[_0x4ed8f6];return _0x347785;},_0x4ed8(_0x59052e,_0x2d8c40);}function _0x58f9(){var _0x563523=['\x0a\x20\x20\x20\x20┌───「\x20Random\x20Text\x20Menu\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20','imageMessage','filter','prepareMessageMedia','quotesimage\x0a\x20\x20\x20\x20│❏\x20','toFixed','21BFcghp','3084SHnDuA','779010EaRIbX','katabijak\x0a\x20\x20\x20\x20│❏\x20','quotesanime\x0a\x20\x20\x20\x20│❏\x20','lagi\x20dicas','6314LNyTzz','s.whatsapp.net','29519xtdNkL','g.us','randomnama\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20└─────「\x20','S&K','array','chats','35AqYQeG','MB\x20/\x20','quotes\x0a\x20\x20\x20\x20│❏\x20','157316YhTver','memoryUsage','uptime','relayWAMessage','heapUsed','quotesislami\x0a\x20\x20\x20\x20│❏\x20','pantun\x0a\x20\x20\x20\x20│❏\x20','543723wXYtEk','3114558LqigLn','58JmCfyh','9bEXfPo','prepareMessageFromContent','1455448spkThz','totalmem','readFileSync','endsWith','length'];_0x58f9=function(){return _0x563523;};return _0x58f9();}groups=rimuru[_0x189b5f(0x16c)][_0x189b5f(0x16b)][_0x189b5f(0x15b)](_0x3d71f6=>_0x3d71f6['jid'][_0x189b5f(0x157)](_0x189b5f(0x168))),privat=rimuru[_0x189b5f(0x16c)][_0x189b5f(0x16b)][_0x189b5f(0x15b)](_0x39293a=>_0x39293a['jid'][_0x189b5f(0x157)](_0x189b5f(0x166))),ram2=(process[_0x189b5f(0x149)]()[_0x189b5f(0x14c)]/0x400/0x400)[_0x189b5f(0x15e)](0x2)+_0x189b5f(0x16e)+Math['round'](require('os')[_0x189b5f(0x155)]/0x400/0x400)+'MB',charger=''+(charging?_0x189b5f(0x164):'ga\x20dicas'),uptime=process[_0x189b5f(0x14a)](),timestampe=speed(),totalChat=await rimuru['chats']['all'](),latensie=speed()-timestampe,total=math(groups[_0x189b5f(0x158)]+'*'+privat[_0x189b5f(0x158)]),menu=_0x189b5f(0x159)+prefix+_0x189b5f(0x16f)+prefix+'quotesdiLan\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x189b5f(0x163)+prefix+_0x189b5f(0x15d)+prefix+_0x189b5f(0x14d)+prefix+'faktaunik\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x189b5f(0x162)+prefix+_0x189b5f(0x14e)+prefix+'bucin\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x189b5f(0x169)+botName+'\x20」',buttons=[{'buttonId':prefix+'rules','buttonText':{'displayText':_0x189b5f(0x16a)},'type':0x1}],imageMsg=(await rimuru[_0x189b5f(0x15c)](fs[_0x189b5f(0x156)]('./media/Menu.jpg'),_0x189b5f(0x15a),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x189b5f(0x15a)],buttonsMessage={'contentText':''+menu,'footerText':'ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x189b5f(0x153)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x189b5f(0x14b)](prep);
               break
   //=========================================================            
           case 'ownermenu':
        case  'menuowner':            
 function _0x244b(_0x4be60f,_0x2eff94){var _0x4d8531=_0x4d85();return _0x244b=function(_0x244b95,_0x44ce22){_0x244b95=_0x244b95-0xab;var _0x103911=_0x4d8531[_0x244b95];return _0x103911;},_0x244b(_0x4be60f,_0x2eff94);}var _0x6f6fbf=_0x244b;function _0x4d85(){var _0x250917=['leaveall\x0a▹\x20','249464LtzuGy','134814azNyNz','400918awYwSd','742930qappBo','63inUUKy','self\x0a▹\x20','130956YchysH','getimage\x0a▹\x20','sewa\x20add/del\x20*waktunya*\x0a▹\x20','23487RnafwJ','menu','join\x20*link\x20gc*\x0a▹\x20','premium\x20del\x20@tag|nomor\x0a','231KEBxjd','1309488srJnAN','addvideo\x0a▹\x20','term\x0a▹\x20','premium\x20add\x20@tag|nomor\x0a▹\x20','105zCbbrA','\x0a\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a▹\x20','slow\x0a▹\x20','164sfVUCq','clearall\x0a▹\x20','getvn\x0a▹\x20','addvn\x0a▹\x20','addimage\x0a▹\x20','shutdown\x0a▹\x20','getvideo\x0a▹\x20','exif\x20*nama|author*\x0a▹\x20','addupdate\x20*fiturnya*\x0a▹\x20'];_0x4d85=function(){return _0x250917;};return _0x4d85();}(function(_0x8da567,_0x5955cd){var _0x47b868=_0x244b,_0x13b928=_0x8da567();while(!![]){try{var _0x51fd5e=-parseInt(_0x47b868(0xc9))/0x1+-parseInt(_0x47b868(0xb6))/0x2+parseInt(_0x47b868(0xb1))/0x3*(-parseInt(_0x47b868(0xbd))/0x4)+-parseInt(_0x47b868(0xba))/0x5*(-parseInt(_0x47b868(0xc8))/0x6)+parseInt(_0x47b868(0xae))/0x7+-parseInt(_0x47b868(0xc7))/0x8*(parseInt(_0x47b868(0xac))/0x9)+parseInt(_0x47b868(0xab))/0xa*(parseInt(_0x47b868(0xb5))/0xb);if(_0x51fd5e===_0x5955cd)break;else _0x13b928['push'](_0x13b928['shift']());}catch(_0x3811a7){_0x13b928['push'](_0x13b928['shift']());}}}(_0x4d85,0x6f462),wibu=_0x6f6fbf(0xbb)+prefix+'bc\x20*teks*\x0a▹\x20'+prefix+_0x6f6fbf(0xb8)+prefix+_0x6f6fbf(0xad)+prefix+'public\x0a▹\x20'+prefix+'eval\x0a▹\x20'+prefix+'reset\x0a▹\x20'+prefix+_0x6f6fbf(0xbe)+prefix+'leaveall\x0a▹\x20'+prefix+_0x6f6fbf(0xc0)+prefix+_0x6f6fbf(0xbf)+prefix+_0x6f6fbf(0xc1)+prefix+_0x6f6fbf(0xaf)+prefix+_0x6f6fbf(0xb7)+prefix+_0x6f6fbf(0xc3)+prefix+_0x6f6fbf(0xbc)+prefix+_0x6f6fbf(0xc6)+prefix+_0x6f6fbf(0xb3)+prefix+_0x6f6fbf(0xc2)+prefix+'getquoted\x0a▹\x20'+prefix+_0x6f6fbf(0xc5)+prefix+_0x6f6fbf(0xc4)+prefix+_0x6f6fbf(0xb0)+prefix+_0x6f6fbf(0xb9)+prefix+_0x6f6fbf(0xb4),sendButMessage(from,wibu,'ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz',[{'buttonId':prefix+_0x6f6fbf(0xb2),'buttonText':{'displayText':'⬡\x20BACK\x20TO\x20MENU\x20'},'type':0x1}]));
        break;
    //=========================================================
    case 'wibumenu':
        case  'menuwibu':
              function _0x2201(_0x522e85,_0x4fc639){var _0x9485fd=_0x9485();return _0x2201=function(_0x22017c,_0x4b2385){_0x22017c=_0x22017c-0x18c;var _0x10cdd9=_0x9485fd[_0x22017c];return _0x10cdd9;},_0x2201(_0x522e85,_0x4fc639);}var _0x468f02=_0x2201;(function(_0x5f1ef1,_0x502c71){var _0x146dbe=_0x2201,_0x55ab57=_0x5f1ef1();while(!![]){try{var _0x555d2a=parseInt(_0x146dbe(0x19a))/0x1+parseInt(_0x146dbe(0x199))/0x2*(-parseInt(_0x146dbe(0x1ba))/0x3)+-parseInt(_0x146dbe(0x192))/0x4+parseInt(_0x146dbe(0x18c))/0x5*(parseInt(_0x146dbe(0x1b0))/0x6)+-parseInt(_0x146dbe(0x1b9))/0x7*(-parseInt(_0x146dbe(0x1be))/0x8)+-parseInt(_0x146dbe(0x18d))/0x9*(-parseInt(_0x146dbe(0x18e))/0xa)+-parseInt(_0x146dbe(0x1aa))/0xb*(parseInt(_0x146dbe(0x1a9))/0xc);if(_0x555d2a===_0x502c71)break;else _0x55ab57['push'](_0x55ab57['shift']());}catch(_0x421d0b){_0x55ab57['push'](_0x55ab57['shift']());}}}(_0x9485,0x1bdf3),groups=rimuru[_0x468f02(0x195)][_0x468f02(0x19c)]['filter'](_0x56cf07=>_0x56cf07[_0x468f02(0x1bb)][_0x468f02(0x19f)]('g.us')),privat=rimuru['chats'][_0x468f02(0x19c)]['filter'](_0xf9fa42=>_0xf9fa42[_0x468f02(0x1bb)]['endsWith'](_0x468f02(0x1a7))),ram2=(process[_0x468f02(0x1ae)]()[_0x468f02(0x193)]/0x400/0x400)[_0x468f02(0x1bf)](0x2)+_0x468f02(0x1a3)+Math[_0x468f02(0x19b)](require('os')[_0x468f02(0x1ac)]/0x400/0x400)+'MB',charger=''+(charging?_0x468f02(0x1a4):'ga\x20dicas'),uptime=process['uptime'](),timestampe=speed(),totalChat=await rimuru[_0x468f02(0x195)][_0x468f02(0x18f)](),latensie=speed()-timestampe,total=math(groups[_0x468f02(0x198)]+'*'+privat[_0x468f02(0x198)]),menu=_0x468f02(0x1ad)+prefix+_0x468f02(0x190)+prefix+_0x468f02(0x1ab)+prefix+'doge\x0a\x20\x20\x20\x20│❏\x20'+prefix+'anime\x20\x0a\x20\x20\x20\x20│❏\x20'+prefix+'lolivideo\x20\x0a\x20\x20\x20\x20│❏\x20'+prefix+'husbu\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x468f02(0x19e)+prefix+'milf\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x468f02(0x1a6)+prefix+_0x468f02(0x1b5)+prefix+_0x468f02(0x191)+prefix+'hentai\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x468f02(0x1a1)+prefix+_0x468f02(0x194)+prefix+_0x468f02(0x1b8)+prefix+'megumin\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x468f02(0x1b6)+prefix+_0x468f02(0x1b4)+prefix+_0x468f02(0x1b2)+prefix+_0x468f02(0x1a0)+prefix+'nakanoikyy\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x468f02(0x1bd)+prefix+'otakuongoing\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x468f02(0x196)+prefix+'nekopoi\x20*link*\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x468f02(0x1b3)+prefix+_0x468f02(0x197)+prefix+_0x468f02(0x1b1)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x468f02(0x1a8),'buttonText':{'displayText':_0x468f02(0x1bc)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](fs[_0x468f02(0x1a2)](_0x468f02(0x1a5)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x468f02(0x1af)],buttonsMessage={'contentText':''+menu,'footerText':_0x468f02(0x1b7),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x468f02(0x19d)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru['relayWAMessage'](prep));function _0x9485(){var _0x4b347b=['manga\x0a\x20\x20\x20\x20│❏\x20','totalmem','\x0a\x20\x20\x20\x20┌───「\x20WIBU\x20MENU\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20','memoryUsage','imageMessage','1308BZhTfN','nekopoisearch\x0a\x20\x20\x20\x20└─────「\x20','storyanime\x0a\x20\x20\x20\x20│❏\x20','nekopoi3d\x0a\x20\x20\x20\x20│❏\x20','doujindesu\x0a\x20\x20\x20\x20│❏\x20','kanna\x0a\x20\x20\x20\x20│❏\x20','otakudesu\x0a\x20\x20\x20\x20│❏\x20','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','kusonime\x0a\x20\x20\x20\x20│❏\x20','22939jsWkIx','3mqQnON','jid','S&K','nakanoitsuki\x0a\x20\x20\x20\x20│❏\x20','472KWFTdU','toFixed','1535PSzvzi','7929ADWcnn','1270OcbkRr','all','loli\x0a\x20\x20\x20\x20│❏\x20','sagiri\x0a\x20\x20\x20\x20│❏\x20','316808ZPzIJs','heapUsed','wallnime\x0a\x20\x20\x20\x20│❏\x20','chats','nhentai\x20*code*\x0a\x20\x20\x20\x20│❏\x20','nekopoicosplay\x0a\x20\x20\x20\x20│❏\x20','length','390766HUBwBh','37423kcWYLG','round','array','prepareMessageFromContent','waifu\x0a\x20\x20\x20\x20│❏\x20','endsWith','nakanomiku\x0a\x20\x20\x20\x20│❏\x20','cosplay\x0a\x20\x20\x20\x20│❏\x20','readFileSync','MB\x20/\x20','lagi\x20dicas','./media/Menu.jpg','neko\x0a\x20\x20\x20\x20│❏\x20','s.whatsapp.net','rules','12ZreTGB','229141HksORN'];_0x9485=function(){return _0x4b347b;};return _0x9485();}
               break
    //=========================================================
    case  'menudownload':
 case 'downloadmenu':
          var _0x1dfdc1=_0x48d5;(function(_0x4923ae,_0x33b322){var _0x34263e=_0x48d5,_0x2851ea=_0x4923ae();while(!![]){try{var _0x35d7ef=parseInt(_0x34263e(0x163))/0x1*(-parseInt(_0x34263e(0x16b))/0x2)+-parseInt(_0x34263e(0x15a))/0x3*(parseInt(_0x34263e(0x183))/0x4)+parseInt(_0x34263e(0x182))/0x5*(-parseInt(_0x34263e(0x162))/0x6)+parseInt(_0x34263e(0x15b))/0x7+-parseInt(_0x34263e(0x184))/0x8*(parseInt(_0x34263e(0x16f))/0x9)+parseInt(_0x34263e(0x181))/0xa*(-parseInt(_0x34263e(0x176))/0xb)+parseInt(_0x34263e(0x157))/0xc;if(_0x35d7ef===_0x33b322)break;else _0x2851ea['push'](_0x2851ea['shift']());}catch(_0xac7a9d){_0x2851ea['push'](_0x2851ea['shift']());}}}(_0x13eb,0x71bc8));function _0x13eb(){var _0x10264d=['uptime','filter','play\x0a\x20\x20\x20\x20│❏\x20','length','getstory\x0a\x20\x20\x20\x20│❏\x20','3250KguXkh','5JpqUER','1566196Yljbgq','56ZcMsEA','tiktoknowm\x0a\x20\x20\x20\x20│❏\x20','ythd\x0a\x20\x20\x20\x20│❏\x20','igstory\x0a\x20\x20\x20\x20│❏\x20','soundcloud\x0a\x20\x20\x20\x20│❏\x20','array','35922912lxnOsd','MB\x20/\x20','readFileSync','6fCCJYE','2966649OzZQPg','totalmem','round','\x0a\x20\x20\x20\x20┌───「\x20DOWNLOADER\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20','igdl\x0a\x20\x20\x20\x20│❏\x20','memoryUsage','./media/Menu.jpg','1594470XxMVGF','144183EzRmFR','g.us','twitter\x0a\x20\x20\x20\x20│❏\x20','imageMessage','tiktok\x0a\x20\x20\x20\x20│❏\x20','all','jid','endsWith','10LtYWfr','relayWAMessage','teledl\x0a\x20\x20\x20\x20│❏\x20','tiktokaudio\x0a\x20\x20\x20\x20│❏\x20','533682QExdiV','ytmp4\x0a\x20\x20\x20\x20│❏\x20','S&K','ytmp3\x0a\x20\x20\x20\x20│❏\x20','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','igdl\x202\x0a\x20\x20\x20\x20│❏\x20','fb\x20\x0a\x20\x20\x20\x20│❏\x20','25949vklDFT','rules','mediafire\x0a\x20\x20\x20\x20│❏\x20','ga\x20dicas','linedl\x0a\x20\x20\x20\x20│❏\x20','chats'];_0x13eb=function(){return _0x10264d;};return _0x13eb();}function _0x48d5(_0x4b046e,_0x267462){var _0x13ebda=_0x13eb();return _0x48d5=function(_0x48d525,_0x1d59aa){_0x48d525=_0x48d525-0x155;var _0x1cab6d=_0x13ebda[_0x48d525];return _0x1cab6d;},_0x48d5(_0x4b046e,_0x267462);}if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru[_0x1dfdc1(0x17b)][_0x1dfdc1(0x156)][_0x1dfdc1(0x17d)](_0x4a7d4a=>_0x4a7d4a[_0x1dfdc1(0x169)][_0x1dfdc1(0x16a)](_0x1dfdc1(0x164))),privat=rimuru[_0x1dfdc1(0x17b)]['array'][_0x1dfdc1(0x17d)](_0x2c148e=>_0x2c148e[_0x1dfdc1(0x169)][_0x1dfdc1(0x16a)]('s.whatsapp.net')),ram2=(process[_0x1dfdc1(0x160)]()['heapUsed']/0x400/0x400)['toFixed'](0x2)+_0x1dfdc1(0x158)+Math[_0x1dfdc1(0x15d)](require('os')[_0x1dfdc1(0x15c)]/0x400/0x400)+'MB',charger=''+(charging?'lagi\x20dicas':_0x1dfdc1(0x179)),uptime=process[_0x1dfdc1(0x17c)](),timestampe=speed(),totalChat=await rimuru[_0x1dfdc1(0x17b)][_0x1dfdc1(0x168)](),latensie=speed()-timestampe,total=math(groups[_0x1dfdc1(0x17f)]+'*'+privat[_0x1dfdc1(0x17f)]),menu=botName+_0x1dfdc1(0x15e)+prefix+_0x1dfdc1(0x175)+prefix+_0x1dfdc1(0x15f)+prefix+_0x1dfdc1(0x174)+prefix+_0x1dfdc1(0x165)+prefix+_0x1dfdc1(0x167)+prefix+_0x1dfdc1(0x17e)+prefix+_0x1dfdc1(0x186)+prefix+_0x1dfdc1(0x172)+prefix+_0x1dfdc1(0x170)+prefix+_0x1dfdc1(0x155)+prefix+_0x1dfdc1(0x185)+prefix+_0x1dfdc1(0x16e)+prefix+_0x1dfdc1(0x178)+prefix+_0x1dfdc1(0x17a)+prefix+_0x1dfdc1(0x16d)+prefix+_0x1dfdc1(0x180)+prefix+_0x1dfdc1(0x187)+prefix+'nhentaipdf\x20*code*\x0a\x20\x20\x20\x20└─────「\x20'+botName+'\x20」',buttons=[{'buttonId':prefix+_0x1dfdc1(0x177),'buttonText':{'displayText':_0x1dfdc1(0x171)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](fs[_0x1dfdc1(0x159)](_0x1dfdc1(0x161)),_0x1dfdc1(0x166),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':_0x1dfdc1(0x173),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x1dfdc1(0x16c)](prep);
               break             
        case 'othermenu':
        case  'menuother':
               var _0x1f8eb4=_0x20cb;function _0x20cb(_0x5e5098,_0x31a55e){var _0x175f84=_0x175f();return _0x20cb=function(_0x20cb77,_0x58564c){_0x20cb77=_0x20cb77-0x151;var _0xabb3ef=_0x175f84[_0x20cb77];return _0xabb3ef;},_0x20cb(_0x5e5098,_0x31a55e);}(function(_0x402360,_0x493031){var _0x503bd4=_0x20cb,_0x164185=_0x402360();while(!![]){try{var _0x31cffa=parseInt(_0x503bd4(0x153))/0x1*(parseInt(_0x503bd4(0x173))/0x2)+parseInt(_0x503bd4(0x16d))/0x3+-parseInt(_0x503bd4(0x15d))/0x4*(parseInt(_0x503bd4(0x156))/0x5)+-parseInt(_0x503bd4(0x15c))/0x6+-parseInt(_0x503bd4(0x178))/0x7*(-parseInt(_0x503bd4(0x168))/0x8)+parseInt(_0x503bd4(0x158))/0x9+-parseInt(_0x503bd4(0x166))/0xa;if(_0x31cffa===_0x493031)break;else _0x164185['push'](_0x164185['shift']());}catch(_0x54ccec){_0x164185['push'](_0x164185['shift']());}}}(_0x175f,0xddd9c));function _0x175f(){var _0x1d0059=['brainly\x20*query*\x0a\x20\x20\x20\x20│❏\x20','1287846HiQaEz','S&K','readFileSync','memoryUsage','7864554NCJvHW','4vhYOWX','endsWith','array','githubstalk\x20*username*\x0a\x20\x20\x20\x20│❏\x20','relayWAMessage','prepareMessageFromContent','totalmem','jid','ytsearch\x20*query*\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20└─────「\x20','11127930zBCBlt','igstalk\x20*username*\x0a\x20\x20\x20\x20│❏\x20','6284392GZShrR','filter','chats','ssweb\x20*query*\x0a\x20\x20\x20\x20│❏\x20','img2url\x20*reply\x20foto*\x0a\x20\x20\x20\x20│❏\x20','3245814gUnFRD','playstore\x20*query*\x0a\x20\x20\x20\x20│❏\x20','uptime','s.whatsapp.net','MB\x20/\x20','nulis\x20*teks*\x0a\x20\x20\x20\x20│❏\x20','458TAuSMi','round','lagi\x20dicas','prepareMessageMedia','ga\x20dicas','14sJUoXQ','rules','length','g.us','image\x20*query*\x0a\x20\x20\x20\x20│❏\x20','all','6836LqsyIF','google\x20*query*\x0a\x20\x20\x20\x20│❏\x20','pinterest\x20*query*\x0a\x20\x20\x20\x20│❏\x20','5146610nleIHh'];_0x175f=function(){return _0x1d0059;};return _0x175f();}if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru[_0x1f8eb4(0x16a)][_0x1f8eb4(0x15f)][_0x1f8eb4(0x169)](_0x3710dc=>_0x3710dc[_0x1f8eb4(0x164)][_0x1f8eb4(0x15e)](_0x1f8eb4(0x17b))),privat=rimuru[_0x1f8eb4(0x16a)]['array'][_0x1f8eb4(0x169)](_0x242f8f=>_0x242f8f[_0x1f8eb4(0x164)][_0x1f8eb4(0x15e)](_0x1f8eb4(0x170))),ram2=(process[_0x1f8eb4(0x15b)]()['heapUsed']/0x400/0x400)['toFixed'](0x2)+_0x1f8eb4(0x171)+Math[_0x1f8eb4(0x174)](require('os')[_0x1f8eb4(0x163)]/0x400/0x400)+'MB',charger=''+(charging?_0x1f8eb4(0x175):_0x1f8eb4(0x177)),uptime=process[_0x1f8eb4(0x16f)](),timestampe=speed(),totalChat=await rimuru[_0x1f8eb4(0x16a)][_0x1f8eb4(0x152)](),latensie=speed()-timestampe,total=math(groups[_0x1f8eb4(0x17a)]+'*'+privat[_0x1f8eb4(0x17a)]),menu='\x0a\x20\x20\x20\x20┌───「\x20Other\x20Menu\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x1f8eb4(0x157)+prefix+'shopee\x20*product*\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x1f8eb4(0x16e)+prefix+_0x1f8eb4(0x16b)+prefix+_0x1f8eb4(0x154)+prefix+_0x1f8eb4(0x151)+prefix+_0x1f8eb4(0x155)+prefix+_0x1f8eb4(0x172)+prefix+'iguser\x20*ussername*\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x1f8eb4(0x167)+prefix+_0x1f8eb4(0x160)+prefix+'tiktokstalk\x20*ussername*\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x1f8eb4(0x16c)+prefix+_0x1f8eb4(0x165)+botName+'\x20」',buttons=[{'buttonId':prefix+_0x1f8eb4(0x179),'buttonText':{'displayText':_0x1f8eb4(0x159)},'type':0x1}],imageMsg=(await rimuru[_0x1f8eb4(0x176)](fs[_0x1f8eb4(0x15a)]('./media/Menu.jpg'),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':'ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x1f8eb4(0x162)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x1f8eb4(0x161)](prep);
               break
   //=========================================================            
        case 'gamemenu':
        case  'menugame':
              var _0x4da441=_0x4c16;function _0x4c16(_0x44adb0,_0x41fa81){var _0xb4fa61=_0xb4fa();return _0x4c16=function(_0x4c16eb,_0x3fe348){_0x4c16eb=_0x4c16eb-0x15a;var _0x341bf8=_0xb4fa61[_0x4c16eb];return _0x341bf8;},_0x4c16(_0x44adb0,_0x41fa81);}(function(_0x343d8f,_0x413bf2){var _0x133d07=_0x4c16,_0x18dc9e=_0x343d8f();while(!![]){try{var _0x4b5a8d=-parseInt(_0x133d07(0x161))/0x1+parseInt(_0x133d07(0x188))/0x2+-parseInt(_0x133d07(0x17f))/0x3+-parseInt(_0x133d07(0x173))/0x4+parseInt(_0x133d07(0x17b))/0x5+-parseInt(_0x133d07(0x15b))/0x6+-parseInt(_0x133d07(0x182))/0x7*(-parseInt(_0x133d07(0x16f))/0x8);if(_0x4b5a8d===_0x413bf2)break;else _0x18dc9e['push'](_0x18dc9e['shift']());}catch(_0x2fadd8){_0x18dc9e['push'](_0x18dc9e['shift']());}}}(_0xb4fa,0xb24b0));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});function _0xb4fa(){var _0x272b63=['./media/Menu.jpg','kimiakuis\x0a\x20\x20\x20\x20│❏\x20','tictactoe\x20@tag\x0a\x20\x20\x20\x20│❏\x20','1899935cIvzTw','jid','endsWith','array','709845RKPzhw','relayWAMessage','uptime','7pybxyT','readFileSync','chats','S&K','MB\x20/\x20','asahotak\x0a\x20\x20\x20\x20│❏\x20','1488548iUTBxv','lagi\x20dicas','2902998FuxNMk','tebakgambar\x0a\x20\x20\x20\x20│❏\x20','imageMessage','tebakbendera\x0a\x20\x20\x20\x20│❏\x20','tebakkata\x0a\x20\x20\x20\x20│❏\x20','tebaktebakan\x0a\x20\x20\x20\x20│❏\x20','956476ZtYOTl','kuismath\x0a\x20\x20\x20\x20│❏\x20','g.us','susunkata\x0a\x20\x20\x20\x20│❏\x20','caklontong\x0a\x20\x20\x20\x20│❏\x20','all','round','♥️\x20ⲂⲟⲦz\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐','totalmem','prepareMessageMedia','length','tebaklirik\x0a\x20\x20\x20\x20│❏\x20','rules','tebakjenaka\x0a\x20\x20\x20\x20│❏\x20','15640496oHUDQG','family100\x0a\x20\x20\x20\x20│❏\x20','siapaaku\x0a\x20\x20\x20\x20│❏\x20','filter','2688444sGtKNH','toFixed','voting\x0a\x20\x20\x20\x20│❏\x20','ga\x20dicas','prepareMessageFromContent'];_0xb4fa=function(){return _0x272b63;};return _0xb4fa();}groups=rimuru[_0x4da441(0x184)][_0x4da441(0x17e)]['filter'](_0x3a790d=>_0x3a790d[_0x4da441(0x17c)][_0x4da441(0x17d)](_0x4da441(0x163))),privat=rimuru[_0x4da441(0x184)][_0x4da441(0x17e)][_0x4da441(0x172)](_0x4660ce=>_0x4660ce[_0x4da441(0x17c)][_0x4da441(0x17d)]('s.whatsapp.net')),ram2=(process['memoryUsage']()['heapUsed']/0x400/0x400)[_0x4da441(0x174)](0x2)+_0x4da441(0x186)+Math[_0x4da441(0x167)](require('os')[_0x4da441(0x169)]/0x400/0x400)+'MB',charger=''+(charging?_0x4da441(0x15a):_0x4da441(0x176)),uptime=process[_0x4da441(0x181)](),timestampe=speed(),totalChat=await rimuru[_0x4da441(0x184)][_0x4da441(0x166)](),latensie=speed()-timestampe,total=math(groups[_0x4da441(0x16b)]+'*'+privat[_0x4da441(0x16b)]),menu='\x0a\x20\x20\x20\x20┌───「\x20Game\x20Menu\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20'+prefix+'slot\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4da441(0x175)+prefix+'limitgame\x0a\x20\x20\x20\x20│❏\x20'+prefix+'gelud\x20@tag\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4da441(0x17a)+prefix+_0x4da441(0x170)+prefix+_0x4da441(0x171)+prefix+_0x4da441(0x162)+prefix+_0x4da441(0x187)+prefix+_0x4da441(0x16c)+prefix+'tebaklagu\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4da441(0x15f)+prefix+_0x4da441(0x164)+prefix+_0x4da441(0x179)+prefix+_0x4da441(0x165)+prefix+_0x4da441(0x16e)+prefix+'tebakanime\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x4da441(0x160)+prefix+_0x4da441(0x15c)+prefix+_0x4da441(0x15e)+prefix+'suit\x20*batu/kertas/gunting*\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20└─────「\x20'+botName+'\x20」',buttons=[{'buttonId':prefix+_0x4da441(0x16d),'buttonText':{'displayText':_0x4da441(0x185)},'type':0x1}],imageMsg=(await rimuru[_0x4da441(0x16a)](fs[_0x4da441(0x183)](_0x4da441(0x178)),_0x4da441(0x15d),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':_0x4da441(0x168),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x4da441(0x177)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x4da441(0x180)](prep);
               break
    //=========================================================
    //=================================StickerMenu====================================================================================================================================================          
    case 'stickermenu':
    case  'stikermenu':
                        var _0x2dacbf=_0x195f;(function(_0x3eb067,_0x51e515){var _0x28e238=_0x195f,_0x270126=_0x3eb067();while(!![]){try{var _0x5ae3f7=parseInt(_0x28e238(0x190))/0x1*(-parseInt(_0x28e238(0x17c))/0x2)+parseInt(_0x28e238(0x18f))/0x3*(parseInt(_0x28e238(0x188))/0x4)+parseInt(_0x28e238(0x17b))/0x5*(parseInt(_0x28e238(0x1a4))/0x6)+parseInt(_0x28e238(0x173))/0x7+-parseInt(_0x28e238(0x186))/0x8*(-parseInt(_0x28e238(0x19c))/0x9)+parseInt(_0x28e238(0x187))/0xa+parseInt(_0x28e238(0x18c))/0xb*(-parseInt(_0x28e238(0x182))/0xc);if(_0x5ae3f7===_0x51e515)break;else _0x270126['push'](_0x270126['shift']());}catch(_0xfb66e0){_0x270126['push'](_0x270126['shift']());}}}(_0x351e,0xc9d21));function _0x195f(_0x1ac01a,_0x5c9f14){var _0x351ee5=_0x351e();return _0x195f=function(_0x195ff7,_0x4074cb){_0x195ff7=_0x195ff7-0x171;var _0x1acf98=_0x351ee5[_0x195ff7];return _0x1acf98;},_0x195f(_0x1ac01a,_0x5c9f14);}function _0x351e(){var _0x2041e9=['2855752HJTnaC','array','S&K','toimg\x0a\x20\x20\x20\x20│❏\x20','memoryUsage','\x0a\x20\x20\x20\x20┌───「\x20STICKER\x20NENU\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20','12dDrgwH','imageMessage','MB\x20/\x20','ttp4\x20text\x0a\x20\x20\x20\x20│❏\x20','8pAfAGi','13554890xEXEVC','8kbxqep','smeme\x20teks|teks\x20\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20「\x20Creator\x20MENU\x20」\x0a\x20\x20\x20\x20│❏\x20','take\x20pack|author\x0a\x20\x20\x20\x20│❏\x20','semoji2\x0a\x20\x20\x20\x20│❏\x20','19883149orkEdG','sticker\x20reply\x20foto/video\x0a\x20\x20\x20\x20│❏\x20','chats','1224294TWjcPU','1QRZhML','emojitoimg\x20emoji\x0a\x20\x20\x20\x20│❏\x20','attp\x20teks\x0a\x20\x20\x20\x20│❏\x20','ttg\x20teks\x0a\x20\x20\x20\x20│❏\x20','endsWith','prepareMessageFromContent','jid','readFileSync','tiger\x0a\x20\x20\x20\x20│❏\x20','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','./media/Menu.jpg','attp\x20text\x20\x0a\x20\x20\x20\x20│❏\x20','4472703uPVgaN','toFixed','semoji\x20emoji\x0a\x20\x20\x20\x20│❏\x20','amongus\x20text\x0a\x20\x20\x20\x20│❏\x20','heapUsed','lagi\x20dicas','ga\x20dicas','ttp3\x20text\x0a\x20\x20\x20\x20│❏\x20','373098KqNqVg','dadu\x0a\x20\x20\x20\x20│❏\x20','patrick\x0a\x20\x20\x20\x20│❏\x20','totalmem','ytkomen\x20text\x0a\x20\x20\x20\x20│❏\x20','phkomen\x20text\x0a\x20\x20\x20\x20│❏\x20','length','s.whatsapp.net','6271832mKPiNo','tolol\x20text\x0a\x20\x20\x20\x20│❏\x20','bucinstick\x0a\x20\x20\x20\x20│❏\x20','stickeranime\x0a\x20\x20\x20\x20│❏\x20','ktpmaker\x20text\x0a\x20\x20\x20\x20│❏\x20','g.us','prepareMessageMedia','rules','40LUPnHC'];_0x351e=function(){return _0x2041e9;};return _0x351e();}if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru['chats'][_0x2dacbf(0x17d)]['filter'](_0x100e52=>_0x100e52[_0x2dacbf(0x196)]['endsWith'](_0x2dacbf(0x178))),privat=rimuru[_0x2dacbf(0x18e)][_0x2dacbf(0x17d)]['filter'](_0x138f32=>_0x138f32['jid'][_0x2dacbf(0x194)](_0x2dacbf(0x172))),ram2=(process[_0x2dacbf(0x180)]()[_0x2dacbf(0x1a0)]/0x400/0x400)[_0x2dacbf(0x19d)](0x2)+_0x2dacbf(0x184)+Math['round'](require('os')[_0x2dacbf(0x1a7)]/0x400/0x400)+'MB',charger=''+(charging?_0x2dacbf(0x1a1):_0x2dacbf(0x1a2)),uptime=process['uptime'](),timestampe=speed(),totalChat=await rimuru[_0x2dacbf(0x18e)]['all'](),latensie=speed()-timestampe,total=math(groups['length']+'*'+privat[_0x2dacbf(0x171)]),menu=botName+_0x2dacbf(0x181)+prefix+_0x2dacbf(0x1a5)+prefix+_0x2dacbf(0x17f)+prefix+'doge\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2dacbf(0x175)+prefix+_0x2dacbf(0x1a6)+prefix+_0x2dacbf(0x198)+prefix+_0x2dacbf(0x18b)+prefix+_0x2dacbf(0x19e)+prefix+_0x2dacbf(0x191)+prefix+_0x2dacbf(0x176)+prefix+_0x2dacbf(0x18d)+prefix+_0x2dacbf(0x193)+prefix+_0x2dacbf(0x18a)+prefix+'swm\x20pack|author\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2dacbf(0x189)+prefix+_0x2dacbf(0x192)+prefix+'ttp1\x20text\x0a\x20\x20\x20\x20│❏\x20'+prefix+'ttp2\x20text\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2dacbf(0x1a3)+prefix+_0x2dacbf(0x185)+prefix+_0x2dacbf(0x19b)+prefix+'tg\x20text\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2dacbf(0x1a8)+prefix+_0x2dacbf(0x1a9)+prefix+_0x2dacbf(0x19f)+prefix+_0x2dacbf(0x174)+prefix+'fakedonald\x20tex\x0a\x20\x20\x20\x20│❏\x20'+prefix+'quotemaker\x20text\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x2dacbf(0x177)+prefix+'qrcode\x20text\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20└─────「\x20'+botName+'\x20」',buttons=[{'buttonId':prefix+_0x2dacbf(0x17a),'buttonText':{'displayText':_0x2dacbf(0x17e)},'type':0x1}],imageMsg=(await rimuru[_0x2dacbf(0x179)](fs[_0x2dacbf(0x197)](_0x2dacbf(0x19a)),_0x2dacbf(0x183),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))['imageMessage'],buttonsMessage={'contentText':''+menu,'footerText':_0x2dacbf(0x199),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru[_0x2dacbf(0x195)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru['relayWAMessage'](prep);
                  break               
           case 'fakedonald':
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
                       if (args.length == 0) return reply(`Example: ${prefix + command} ғᴀʀᴇʟ ʙᴏᴛᴢ࿐`)
                       ini_mn1k = args.join(" ")
                       ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=PunyaIkyAds&text=${ini_mn1k}`)
                       rimuru.sendMessage(from, ini_buffer, image, { quoted: freply})
                       break
//=========================================================================================
          case 'funmenu':
          case  'fun':
                 var _0xef0c54=_0x1f69;function _0x1093(){var _0x44e283=['1769202GYpsID','babi\x0a\x20\x20\x20\x20│❏\x20','jadian2\x0a\x20\x20\x20\x20│❏\x20','lagi\x20dicas','s.whatsapp.net','imageMessage','cekcantik\x0a\x20\x20\x20\x20│❏\x20','uptime','jid','beban\x0a\x20\x20\x20\x20│❏\x20','cekwatak\x0a\x20\x20\x20\x20│❏\x20','array','heapUsed','cekganteng\x0a\x20\x20\x20\x20│❏\x20','6021945LyhaAg','length','MB\x20/\x20','dare\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20└─────「\x20','1214372xEUijr','ga\x20dicas','cekmati\x20[nama]\x0a\x20\x20\x20\x20│❏\x20','5038251PRugcE','10346266YRhnZG','kapankah\x0a\x20\x20\x20\x20│❏\x20','bisakah\x0a\x20\x20\x20\x20│❏\x20','rate\x0a\x20\x20\x20\x20│❏\x20','toxic\x0a\x20\x20\x20\x20│❏\x20','round','prepareMessageMedia','88716VOROWr','8jdtrbW','truth\x0a\x20\x20\x20\x20│❏\x20','./media/Menu.jpg','cantik\x0a\x20\x20\x20\x20│❏\x20','29UelWlu','relayWAMessage','4321720tXxDgf','ganteng\x0a\x20\x20\x20\x20│❏\x20','memoryUsage','ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a\x20♥️\x20ⲂⲟⲦz\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐','S&K','apakah\x0a\x20\x20\x20\x20│❏\x20','endsWith','chats'];_0x1093=function(){return _0x44e283;};return _0x1093();}(function(_0xf6107e,_0x1386a2){var _0x56ae2b=_0x1f69,_0x991001=_0xf6107e();while(!![]){try{var _0x2b53f1=parseInt(_0x56ae2b(0x147))/0x1*(parseInt(_0x56ae2b(0x142))/0x2)+-parseInt(_0x56ae2b(0x13a))/0x3+-parseInt(_0x56ae2b(0x137))/0x4+-parseInt(_0x56ae2b(0x149))/0x5+parseInt(_0x56ae2b(0x151))/0x6+parseInt(_0x56ae2b(0x13b))/0x7*(parseInt(_0x56ae2b(0x143))/0x8)+parseInt(_0x56ae2b(0x133))/0x9;if(_0x2b53f1===_0x1386a2)break;else _0x991001['push'](_0x991001['shift']());}catch(_0x19aa8e){_0x991001['push'](_0x991001['shift']());}}}(_0x1093,0xd718e));function _0x1f69(_0x10404c,_0x11367b){var _0x109355=_0x1093();return _0x1f69=function(_0x1f6939,_0x240d6f){_0x1f6939=_0x1f6939-0x131;var _0x2b360a=_0x109355[_0x1f6939];return _0x2b360a;},_0x1f69(_0x10404c,_0x11367b);}if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru['chats']['array']['filter'](_0x5a245f=>_0x5a245f[_0xef0c54(0x159)][_0xef0c54(0x14f)]('g.us')),privat=rimuru[_0xef0c54(0x150)][_0xef0c54(0x15c)]['filter'](_0x108b99=>_0x108b99[_0xef0c54(0x159)][_0xef0c54(0x14f)](_0xef0c54(0x155))),ram2=(process[_0xef0c54(0x14b)]()[_0xef0c54(0x131)]/0x400/0x400)['toFixed'](0x2)+_0xef0c54(0x135)+Math[_0xef0c54(0x140)](require('os')['totalmem']/0x400/0x400)+'MB',charger=''+(charging?_0xef0c54(0x154):_0xef0c54(0x138)),uptime=process[_0xef0c54(0x158)](),timestampe=speed(),totalChat=await rimuru[_0xef0c54(0x150)]['all'](),latensie=speed()-timestampe,total=math(groups[_0xef0c54(0x134)]+'*'+privat[_0xef0c54(0x134)]),menu='\x0a\x20\x20\x20\x20┌───「\x20Fun\x20Menu\x20」\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20│❏\x20'+prefix+'mining\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xef0c54(0x15b)+prefix+_0xef0c54(0x139)+prefix+'citacita\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xef0c54(0x13f)+prefix+_0xef0c54(0x14e)+prefix+_0xef0c54(0x13d)+prefix+_0xef0c54(0x13c)+prefix+_0xef0c54(0x13e)+prefix+'jadian\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0xef0c54(0x153)+prefix+_0xef0c54(0x146)+prefix+_0xef0c54(0x14a)+prefix+_0xef0c54(0x15a)+prefix+_0xef0c54(0x152)+prefix+_0xef0c54(0x132)+prefix+_0xef0c54(0x157)+prefix+_0xef0c54(0x144)+prefix+_0xef0c54(0x136)+botName+'\x20」',buttons=[{'buttonId':prefix+'rules','buttonText':{'displayText':_0xef0c54(0x14d)},'type':0x1}],imageMsg=(await rimuru[_0xef0c54(0x141)](fs['readFileSync'](_0xef0c54(0x145)),_0xef0c54(0x156),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0xef0c54(0x156)],buttonsMessage={'contentText':''+menu,'footerText':_0xef0c54(0x14c),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x1},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0xef0c54(0x148)](prep);
               break
//=========================================================               
        case "delvote":
        if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json')) {
        deleteVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        } else {
          reply("Belum ada sesi yang dimulai")
        }
        break;
      case "voting": // tambahin if (!isGroupAdmins) return; kalau mau khusus admin
        if (!isGroup) return reply(mess.only.group);
        if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json')) {
          reply("Sesi vote sedang berlangsung")
        } else {
          if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          editz.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          editz.message.extendedTextMessage.contextInfo == null
        ) {
          let id = editz.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = q.replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
          }
        }
        break;
  //------------------< Bokep Nih >-------------------  
            case 'infomenu':
        case  'menuinfo':
              var _0x267ef1=_0x4f15;function _0x4f15(_0x1f817a,_0x14d88e){var _0x2a6213=_0x2a62();return _0x4f15=function(_0x4f158f,_0xb33ffe){_0x4f158f=_0x4f158f-0x81;var _0x289d2f=_0x2a6213[_0x4f158f];return _0x289d2f;},_0x4f15(_0x1f817a,_0x14d88e);}function _0x2a62(){var _0x2637af=['190ISjXkD','7497288nJOOoO','totalmem','S&K','\x0a\x20\x20\x20\x20\x0a\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a▹\x20\x20','uptime','owner\x0a▹\x20\x20','220121GouXYe','116TFrRut','89022cgrDMY','profile\x0a▹\x20\x20','136248wWlluC','prepareMessageFromContent','toFixed','endsWith','update\x0a▹\x20\x20','all','rules\x0a▹\x20\x20','waktu\x0a▹\x20\x20','listsewa\x0a▹\x20\x20','heapUsed','g.us','631530vdmzti','13ijwWee','rules','ga\x20dicas','s.whatsapp.net','12216aeHexK','./media/Menu.jpg','runtime\x0a▹\x20\x20','sourcecode\x0a▹\x20\x20','bugreport\x20*keluhan*','filter','MB\x20/\x20','array','318sJPCnB','chats','donasi\x0a▹\x20\x20','cekpremium\x0a▹\x20\x20','length','2297230tfMKtk','memoryUsage','imageMessage','jid','relayWAMessage'];_0x2a62=function(){return _0x2637af;};return _0x2a62();}(function(_0x38022e,_0xffeb8a){var _0x3c25a0=_0x4f15,_0x4e6440=_0x38022e();while(!![]){try{var _0x3a29ab=-parseInt(_0x3c25a0(0x93))/0x1*(parseInt(_0x3c25a0(0x85))/0x2)+parseInt(_0x3c25a0(0x97))/0x3*(parseInt(_0x3c25a0(0x84))/0x4)+parseInt(_0x3c25a0(0xa4))/0x5+-parseInt(_0x3c25a0(0x9f))/0x6*(-parseInt(_0x3c25a0(0x87))/0x7)+-parseInt(_0x3c25a0(0xaa))/0x8+parseInt(_0x3c25a0(0x92))/0x9+-parseInt(_0x3c25a0(0xa9))/0xa*(-parseInt(_0x3c25a0(0x83))/0xb);if(_0x3a29ab===_0xffeb8a)break;else _0x4e6440['push'](_0x4e6440['shift']());}catch(_0x5cbb5a){_0x4e6440['push'](_0x4e6440['shift']());}}}(_0x2a62,0x84bd5),groups=rimuru[_0x267ef1(0xa0)][_0x267ef1(0x9e)][_0x267ef1(0x9c)](_0x2f2f35=>_0x2f2f35['jid'][_0x267ef1(0x8a)](_0x267ef1(0x91))),privat=rimuru[_0x267ef1(0xa0)][_0x267ef1(0x9e)][_0x267ef1(0x9c)](_0x46855c=>_0x46855c[_0x267ef1(0xa7)][_0x267ef1(0x8a)](_0x267ef1(0x96))),ram2=(process[_0x267ef1(0xa5)]()[_0x267ef1(0x90)]/0x400/0x400)[_0x267ef1(0x89)](0x2)+_0x267ef1(0x9d)+Math['round'](require('os')[_0x267ef1(0xab)]/0x400/0x400)+'MB',charger=''+(charging?'lagi\x20dicas':_0x267ef1(0x95)),uptime=process[_0x267ef1(0x81)](),timestampe=speed(),totalChat=await rimuru[_0x267ef1(0xa0)][_0x267ef1(0x8c)](),latensie=speed()-timestampe,total=math(groups[_0x267ef1(0xa3)]+'*'+privat[_0x267ef1(0xa3)]),menu=botName+_0x267ef1(0xad)+prefix+_0x267ef1(0x8b)+prefix+'level\x0a▹\x20\x20'+prefix+_0x267ef1(0x8d)+prefix+_0x267ef1(0x86)+prefix+_0x267ef1(0x8e)+prefix+'botstat\x0a▹\x20\x20'+prefix+'sewabot\x0a▹\x20\x20'+prefix+_0x267ef1(0x8f)+prefix+_0x267ef1(0x82)+prefix+'ping\x0a▹\x20\x20'+prefix+_0x267ef1(0x99)+prefix+_0x267ef1(0xa1)+prefix+'leaderboard\x0a▹\x20\x20'+prefix+_0x267ef1(0xa2)+prefix+'listpremium\x0a▹\x20\x20'+prefix+_0x267ef1(0x9a)+prefix+_0x267ef1(0x9b),buttons=[{'buttonId':prefix+_0x267ef1(0x94),'buttonText':{'displayText':_0x267ef1(0xac)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](fs['readFileSync'](_0x267ef1(0x98)),'imageMessage',{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x267ef1(0xa6)],buttonsMessage={'contentText':''+menu,'footerText':'ᴊᴀɴɢᴀɴ\x20ᴘᴇʀɴᴀʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20sᴇsᴇᴏʀᴀɴɢ\x0aʏᴀɴɢ\x20ᴍᴀsɪʜ\x20ᴍᴇɴᴄɪɴᴛᴀɪ\x20ᴏʀᴀɴɢ\x20ʟᴀɪɴ\x0a\x0a♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x267ef1(0x88)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x267ef1(0xa8)](prep));
               break
         //------------------< Bokep Woi Bokep >-------------------
         case 'pornmenu':
        case  '181+':
              var _0x53e1d2=_0x2c16;(function(_0xbb4e1a,_0x481601){var _0x52f6e4=_0x2c16,_0x192ab9=_0xbb4e1a();while(!![]){try{var _0x4a7921=parseInt(_0x52f6e4(0x163))/0x1*(-parseInt(_0x52f6e4(0x172))/0x2)+parseInt(_0x52f6e4(0x184))/0x3*(parseInt(_0x52f6e4(0x185))/0x4)+parseInt(_0x52f6e4(0x180))/0x5+-parseInt(_0x52f6e4(0x177))/0x6*(-parseInt(_0x52f6e4(0x171))/0x7)+parseInt(_0x52f6e4(0x179))/0x8*(-parseInt(_0x52f6e4(0x15e))/0x9)+-parseInt(_0x52f6e4(0x17f))/0xa+parseInt(_0x52f6e4(0x16c))/0xb*(-parseInt(_0x52f6e4(0x17d))/0xc);if(_0x4a7921===_0x481601)break;else _0x192ab9['push'](_0x192ab9['shift']());}catch(_0x249251){_0x192ab9['push'](_0x192ab9['shift']());}}}(_0x15fd,0x7cea4),groups=rimuru['chats']['array'][_0x53e1d2(0x186)](_0x33f6e3=>_0x33f6e3[_0x53e1d2(0x176)][_0x53e1d2(0x159)](_0x53e1d2(0x161))),privat=rimuru[_0x53e1d2(0x175)]['array']['filter'](_0xb3249d=>_0xb3249d['jid'][_0x53e1d2(0x159)](_0x53e1d2(0x160))),ram2=(process[_0x53e1d2(0x187)]()[_0x53e1d2(0x169)]/0x400/0x400)['toFixed'](0x2)+'MB\x20/\x20'+Math[_0x53e1d2(0x170)](require('os')[_0x53e1d2(0x15a)]/0x400/0x400)+'MB',charger=''+(charging?'lagi\x20dicas':'ga\x20dicas'),uptime=process[_0x53e1d2(0x17c)](),timestampe=speed(),totalChat=await rimuru[_0x53e1d2(0x175)][_0x53e1d2(0x17e)](),latensie=speed()-timestampe,total=math(groups['length']+'*'+privat[_0x53e1d2(0x174)]),menu=botName+'\x0a\x0a⬡\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a▹\x20'+prefix+_0x53e1d2(0x183)+prefix+_0x53e1d2(0x15f)+prefix+_0x53e1d2(0x17a)+prefix+_0x53e1d2(0x16a)+prefix+_0x53e1d2(0x162)+prefix+'\x20bokep5\x0a▹\x20'+prefix+_0x53e1d2(0x16e)+prefix+_0x53e1d2(0x17b)+prefix+_0x53e1d2(0x168)+prefix+_0x53e1d2(0x164)+prefix+'\x20bokep10\x0a▹\x20'+prefix+_0x53e1d2(0x15c)+prefix+_0x53e1d2(0x178)+prefix+_0x53e1d2(0x173)+prefix+'\x20bokep14\x0a▹\x20'+prefix+_0x53e1d2(0x167)+prefix+_0x53e1d2(0x158)+prefix+'\x20bokep17\x0a▹\x20'+prefix+'\x20bokep18\x0a▹\x20'+prefix+_0x53e1d2(0x182)+prefix+_0x53e1d2(0x15d)+prefix+_0x53e1d2(0x15b)+prefix+_0x53e1d2(0x16d)+prefix+'\x20bokep23\x0a▹\x20'+prefix+_0x53e1d2(0x165)+prefix+_0x53e1d2(0x181),sendButMessage(from,menu,_0x53e1d2(0x16f),[{'buttonId':prefix+_0x53e1d2(0x16b),'buttonText':{'displayText':_0x53e1d2(0x166)},'type':0x1}]));function _0x2c16(_0x6cac35,_0x1d3d34){var _0x15fd68=_0x15fd();return _0x2c16=function(_0x2c1679,_0x4a5c86){_0x2c1679=_0x2c1679-0x158;var _0x329d74=_0x15fd68[_0x2c1679];return _0x329d74;},_0x2c16(_0x6cac35,_0x1d3d34);}function _0x15fd(){var _0x379130=['memoryUsage','\x20bokep16\x0a▹\x20','endsWith','totalmem','\x20bokep21\x0a▹\x20','\x20bokep11\x0a▹\x20','\x20bokep20\x0a▹\x20','774zEiznA','\x20bokep1\x0a▹\x20','s.whatsapp.net','g.us','\x20bokep4\x0a▹\x20','110738JpVScv','\x20bokep9\x0a▹\x20','\x20bokep24\x0a▹\x20','⬡\x20BACK\x20TO\x20MENU\x20','\x20bokep15\x0a▹\x20','\x20bokep8\x0a▹\x20','heapUsed','\x20bokep3\x0a▹\x20','menu','890549UrHezo','\x20bokep22\x0a▹\x20','\x20bokep6\x0a▹\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','round','2027501DprqNn','4SOtKgU','\x20bokep13\x0a▹\x20','length','chats','jid','6NiGgVV','\x20bokep12\x0a▹\x20','1496PbzFIA','\x20bokep2\x0a▹\x20','\x20bokep7\x0a▹\x20','uptime','60zAPBMK','all','1245630LXutPl','4829970HrEyzi','\x20bokep2𝟓\x0a\x20','\x20bokep19\x0a▹\x20','\x20bkp\x20*random*\x0a▹\x20','3KyNjsq','91724ABvrSY','filter'];_0x15fd=function(){return _0x379130;};return _0x15fd();}
        break;
   //addfiturbokep
         case 'bokep1':				            
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' , text, {quoted: freply})
				   break
	   case 'bokep2':
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' , text, {quoted: freply})
				   break
       case 'bokep3':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file', text, {quoted: reply })				    
				   break
	   case 'bokep4':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep5':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep6':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' , text, {quoted: freply})				   
				   break
        case 'bokep7':
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep8':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' , text, {quoted: freply})				   
				   break
        case 'bokep10':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep11':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' , text, {quoted: freply})				   
				   break
	  case 'bokep12':	   
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' , text, {quoted: freply})				   
				   break
	  case 'bokep13':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep14':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep15':
				qute = fs.readFileSync('media/Menu.jpg') 
			   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep16':
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep17':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep18':
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep19':				 
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep20':			
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep21':				 
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep22':		
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' , text, {quoted: freply})				   
				   break
       case 'bokep23':	
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' , text, {quoted: freply})				   
				   break
	   case 'bokep24':
				qute = fs.readFileSync('media/Menu.jpg') 
				   rimuru.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' , text, {quoted: freply})				   
				   break 
break
       //------------------< ⲂⲟⲦz ғᴀʀᴇʟ ʙᴏᴛᴢ࿐ >-------------------
        case 'bc':
        case 'broadcast':
             function _0xadf4(){const _0x3b2f88=['330449VncMle','replace','teks?','only','16uNdxAi','*「\x20🕊️\x20PESAN\x20SIARAN\x20BOT\x20🕊️\x20」*\x0a\x0a','Suksess\x20broadcast','buttonsMessage','quotedM','stringify','jid','LOCATION','©ⲂⲟⲦz\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐','owner','*「\x20PESAN\x20SIARAN\x20BOT\x20」*\x0a\x0a','length','videoMessage','all','contextInfo','parse','sendMessage','827695nZtprF','1348698PJeAtn','7492bJxPKU','281598GxWAOw','chats','21UYOTwR','slice','1045395PpWqLx','message','rules','73003pMYsIn'];_0xadf4=function(){return _0x3b2f88;};return _0xadf4();}const _0xe047ec=_0x2ffb;function _0x2ffb(_0x3ee345,_0x1f13c5){const _0xadf4f0=_0xadf4();return _0x2ffb=function(_0x2ffb13,_0xf93956){_0x2ffb13=_0x2ffb13-0x159;let _0x19115d=_0xadf4f0[_0x2ffb13];return _0x19115d;},_0x2ffb(_0x3ee345,_0x1f13c5);}(function(_0x515c97,_0x2b241c){const _0x4add15=_0x2ffb,_0x2f3053=_0x515c97();while(!![]){try{const _0x4c01cd=-parseInt(_0x4add15(0x174))/0x1+-parseInt(_0x4add15(0x16d))/0x2+parseInt(_0x4add15(0x16f))/0x3*(-parseInt(_0x4add15(0x16c))/0x4)+parseInt(_0x4add15(0x16a))/0x5+parseInt(_0x4add15(0x16b))/0x6+-parseInt(_0x4add15(0x175))/0x7*(parseInt(_0x4add15(0x159))/0x8)+parseInt(_0x4add15(0x171))/0x9;if(_0x4c01cd===_0x2b241c)break;else _0x2f3053['push'](_0x2f3053['shift']());}catch(_0x3c3d72){_0x2f3053['push'](_0x2f3053['shift']());}}}(_0xadf4,0x2d33e));if(!isOwner)return reply(mess[_0xe047ec(0x178)][_0xe047ec(0x162)]);if(args[_0xe047ec(0x164)]<0x1)return reply(_0xe047ec(0x177));anu100=await rimuru[_0xe047ec(0x16e)][_0xe047ec(0x166)]();if(isMedia&&!editz[_0xe047ec(0x172)][_0xe047ec(0x165)]||isQuotedImage){const encmedia=isQuotedImage?JSON[_0xe047ec(0x168)](JSON[_0xe047ec(0x15e)](editz)[_0xe047ec(0x176)](_0xe047ec(0x15d),'m'))['message']['extendedTextMessage'][_0xe047ec(0x167)]:rimuru;bc100=await rimuru['downloadMediaMessage'](encmedia);for(let _ of anu100){rimuru[_0xe047ec(0x169)](_[_0xe047ec(0x15f)],bc100,image,{'quoted':freply,'caption':_0xe047ec(0x163)+body['slice'](0x4)});}reply(_0xe047ec(0x15b));}else{for(let _ of anu100){rimuru['sendMessage'](_[_0xe047ec(0x15f)],{'contentText':_0xe047ec(0x15a)+body[_0xe047ec(0x170)](0x4),'footerText':_0xe047ec(0x161),'buttons':[{'buttonId':prefix+_0xe047ec(0x173),'buttonText':{'displayText':'Asyhiiap\x20Bwang'},'type':'RESPONSE'}],'headerType':_0xe047ec(0x160),'locationMessage':{'degreesLatitude':'','degreesLongitude':'','jpegThumbnail':fakeimage}},MessageType[_0xe047ec(0x15c)]);}reply(_0xe047ec(0x15b));}
             break
          case 'bc2':
      case 'broadcast2':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await rimuru.chats.all()
             if (isMedia && !editz.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
             bc = await rimuru.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             rimuru.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
             reply('Suksess broadcast')
}
             break
        case 'infomenu':
        case  'menuinfo':
              function _0x3bf9(_0x2e958d,_0xf5fcc3){var _0x4f000c=_0x4f00();return _0x3bf9=function(_0x3bf9d3,_0x1d8ca2){_0x3bf9d3=_0x3bf9d3-0xbf;var _0x527d89=_0x4f000c[_0x3bf9d3];return _0x527d89;},_0x3bf9(_0x2e958d,_0xf5fcc3);}var _0x3c4fcc=_0x3bf9;(function(_0x54c0e9,_0x4c21b7){var _0x8d10c3=_0x3bf9,_0x50d64c=_0x54c0e9();while(!![]){try{var _0x95198=parseInt(_0x8d10c3(0xd0))/0x1+parseInt(_0x8d10c3(0xdf))/0x2+parseInt(_0x8d10c3(0xda))/0x3*(-parseInt(_0x8d10c3(0xd2))/0x4)+parseInt(_0x8d10c3(0xc9))/0x5+-parseInt(_0x8d10c3(0xdc))/0x6*(parseInt(_0x8d10c3(0xe8))/0x7)+parseInt(_0x8d10c3(0xde))/0x8*(parseInt(_0x8d10c3(0xca))/0x9)+parseInt(_0x8d10c3(0xe3))/0xa;if(_0x95198===_0x4c21b7)break;else _0x50d64c['push'](_0x50d64c['shift']());}catch(_0x411172){_0x50d64c['push'](_0x50d64c['shift']());}}}(_0x4f00,0xb6575),groups=rimuru[_0x3c4fcc(0xc8)][_0x3c4fcc(0xe2)][_0x3c4fcc(0xc4)](_0x28b8e2=>_0x28b8e2['jid']['endsWith']('g.us')),privat=rimuru[_0x3c4fcc(0xc8)][_0x3c4fcc(0xe2)]['filter'](_0x26cc1e=>_0x26cc1e[_0x3c4fcc(0xd5)][_0x3c4fcc(0xd6)](_0x3c4fcc(0xe6))),ram2=(process[_0x3c4fcc(0xcb)]()[_0x3c4fcc(0xce)]/0x400/0x400)['toFixed'](0x2)+_0x3c4fcc(0xe7)+Math[_0x3c4fcc(0xbf)](require('os')['totalmem']/0x400/0x400)+'MB',charger=''+(charging?'lagi\x20dicas':_0x3c4fcc(0xd7)),uptime=process[_0x3c4fcc(0xdb)](),timestampe=speed(),totalChat=await rimuru[_0x3c4fcc(0xc8)]['all'](),latensie=speed()-timestampe,total=math(groups[_0x3c4fcc(0xc5)]+'*'+privat[_0x3c4fcc(0xc5)]),menu=botName+_0x3c4fcc(0xc6)+prefix+_0x3c4fcc(0xcf)+prefix+_0x3c4fcc(0xd9)+prefix+'rules\x0a▹\x20\x20'+prefix+_0x3c4fcc(0xe5)+prefix+'waktu\x0a▹\x20\x20'+prefix+'botstat\x0a▹\x20\x20'+prefix+_0x3c4fcc(0xc2)+prefix+_0x3c4fcc(0xc7)+prefix+'owner\x0a▹\x20\x20'+prefix+'ping\x0a▹\x20\x20'+prefix+_0x3c4fcc(0xd1)+prefix+_0x3c4fcc(0xc0)+prefix+_0x3c4fcc(0xe4)+prefix+_0x3c4fcc(0xc1)+prefix+'listpremium\x0a▹\x20\x20'+prefix+_0x3c4fcc(0xd3)+prefix+'bugreport\x20*keluhan*',buttons=[{'buttonId':prefix+_0x3c4fcc(0xcd),'buttonText':{'displayText':_0x3c4fcc(0xe0)},'type':0x1}],imageMsg=(await rimuru[_0x3c4fcc(0xd8)](fs['readFileSync'](_0x3c4fcc(0xc3)),_0x3c4fcc(0xdd),{'thumbnail':Bfake,'contextInfo':{'forwardingScore':0x3dd,'isForwarded':!![]}}))[_0x3c4fcc(0xdd)],buttonsMessage={'contentText':''+menu,'footerText':_0x3c4fcc(0xd4),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x3c4fcc(0xcc)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'mentionedJid':[senderr]}}),rimuru[_0x3c4fcc(0xe1)](prep));function _0x4f00(){var _0x56b3cc=['leaderboard\x0a▹\x20\x20','profile\x0a▹\x20\x20','s.whatsapp.net','MB\x20/\x20','62223drZJYU','round','donasi\x0a▹\x20\x20','cekpremium\x0a▹\x20\x20','sewabot\x0a▹\x20\x20','./media/Menu.jpg','filter','length','\x20\x20\x0a\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a▹\x20\x20','listsewa\x0a▹\x20\x20','chats','3815590dryCzH','9DjOYyH','memoryUsage','prepareMessageFromContent','rules','heapUsed','update\x0a▹\x20\x20','638676hxnahJ','runtime\x0a▹\x20\x20','4mZCzHS','sourcecode\x0a▹\x20\x20','♥️\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','jid','endsWith','ga\x20dicas','prepareMessageMedia','level\x0a▹\x20\x20','2445603lrNfAw','uptime','642ZgCBiY','imageMessage','3691864iStRnN','12318rJbHUI','S&K','relayWAMessage','array','6437570FSAIqL'];_0x4f00=function(){return _0x56b3cc;};return _0x4f00();}
               break
   //------------------< Islam Menu >-------------------            
 case 'islammenu':
        case  'islamimenu':           
 var _0x48cee2=_0x28db;function _0x5c95(){var _0x255eb8=['57611TrLhWk','alquranaudio\x0a\x20\x20\x20\x20│❏\x20','\x0aᴊᴀɴɢᴀɴ\x20ʟᴜᴘᴀ\x20ʙᴇʀsʏᴜᴋᴜʀ\x20ʜᴀʀɪ\x20ɪɴɪ\x20❤️\x20~\x0a\x0a\x20𝐋𝐈𝐒𝐓\x20𝐌𝐄𝐍𝐔\x0a\x20\x20\x20\x20┌───「\x20Sound\x20Islam\x20☪️\x20」\x0a\x20\x20\x20\x20│❏\x20','jadwalsholat\x0a\x20\x20\x20\x20│❏\x20','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','menu','⬡\x20BACK\x20TO\x20MENU\x20','ngaji\x20\x0a\x20\x20\x20\x20│❏\x20','alquran\x0a\x20\x20\x20\x20│❏\x20','22995096lMKvwA','ngaji2\x0a\x20\x20\x20\x20│\x0a\x20\x20\x20\x20└─────「\x20','kisahnabi\x0a\x20\x20\x20\x20│❏\x20','514740NKVWMS','asmaulhusna\x0a\x20\x20\x20\x20│❏\x20','1520079BHfDaZ','2282262PZCMjg','sholawatnabi\x0a\x20\x20\x20\x20│❏\x20','listsurah\x0a\x20\x20\x20\x20│❏\x20','\x0a\x0aʜᴀɪ\x20ᴋᴀᴋ\x20\x20👋🏻\x20','12506935seBGTF','4359024HqzDvK','12ITJBcz','tilawah\x0a\x20\x20\x20\x20│❏\x20'];_0x5c95=function(){return _0x255eb8;};return _0x5c95();}function _0x28db(_0x412968,_0x120578){var _0x5c95c8=_0x5c95();return _0x28db=function(_0x28dbf6,_0x3cf53c){_0x28dbf6=_0x28dbf6-0x157;var _0x50d3b3=_0x5c95c8[_0x28dbf6];return _0x50d3b3;},_0x28db(_0x412968,_0x120578);}(function(_0x59f0d1,_0x1b11da){var _0x9e2508=_0x28db,_0x2b6b3f=_0x59f0d1();while(!![]){try{var _0xfc8470=parseInt(_0x9e2508(0x157))/0x1+-parseInt(_0x9e2508(0x166))/0x2+parseInt(_0x9e2508(0x165))/0x3+parseInt(_0x9e2508(0x16c))/0x4*(-parseInt(_0x9e2508(0x163))/0x5)+parseInt(_0x9e2508(0x16b))/0x6+-parseInt(_0x9e2508(0x16a))/0x7+parseInt(_0x9e2508(0x160))/0x8;if(_0xfc8470===_0x1b11da)break;else _0x2b6b3f['push'](_0x2b6b3f['shift']());}catch(_0x1083f5){_0x2b6b3f['push'](_0x2b6b3f['shift']());}}}(_0x5c95,0xe2b03),menu='\x20'+botName+_0x48cee2(0x169)+pushname+_0x48cee2(0x159)+prefix+_0x48cee2(0x15f)+prefix+_0x48cee2(0x158)+prefix+'ayatkursi2\x0a\x20\x20\x20\x20│❏\x20'+prefix+_0x48cee2(0x164)+prefix+_0x48cee2(0x162)+prefix+_0x48cee2(0x15a)+prefix+_0x48cee2(0x168)+prefix+_0x48cee2(0x16d)+prefix+_0x48cee2(0x167)+prefix+_0x48cee2(0x15e)+prefix+_0x48cee2(0x161)+botName+'\x20」',sendButMessage(from,menu,_0x48cee2(0x15b),[{'buttonId':prefix+_0x48cee2(0x15c),'buttonText':{'displayText':_0x48cee2(0x15d)},'type':0x1}]));
        break;
case 'carijodoh':
        case  'pencarijodoh':      
 function _0x4842(){var _0x3b059e=['1ViFqyA','10kAhWDm','\x0a\x0a*ʜᴀɪ\x20ᴋᴀᴋ*\x20👋🏻\x20','261048GzjAEq','14010TxDvsd','11342187cyMugW','2773518NxjEgn','\x0a*ᴊᴀɴɢᴀɴ\x20ʟᴜᴘᴀ\x20ʙᴇʀsʏᴜᴋᴜʀ\x20ʜᴀʀɪ\x20ɪɴɪ*\x20❤️~\x0a\x0a*ᴄᴀʀɪ\x20ᴊᴏᴅᴏʜ*\x0a\x0a*ᴋᴇᴛɪᴋ\x20!sᴛᴀʀᴛ\x20ᴜɴᴛᴜᴋ\x20ᴍᴇᴍᴜʟᴀɪ\x20ᴘᴇɴᴄᴀʀɪᴀɴ*\x0a*ᴋᴇᴛɪᴋ\x20!ɴᴇxᴛ\x20ʙɪʟᴀ\x20ᴛɪᴅᴀᴋ\x20ᴅᴀᴘᴀᴛ\x20ᴀsᴘᴇᴋ\x20ʏɢ\x20ʙᴀɢᴜs*\x0a\x0a*ғɪᴛᴜʀ\x20ɪɴɪ\x20ʜᴀɴʏᴀ\x20ᴅᴀᴘᴀᴛ\x20ᴅɪ\x20ɢᴜɴᴀᴋᴀɴ\x20ᴅɪ\x20ᴘʀɪᴠᴀᴛ\x20ᴄʜᴀᴛ*\x0a*ᴅᴀɴ\x20ᴀɢᴀʀ\x20ғɪᴛᴜʀ\x20ʙᴇᴋᴇʀᴊᴀ\x20ʟᴀɴᴄᴀʀ\x20ʏᴀɴɢ\x20ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ\x20ᴍᴇɴᴜ\x20ғɪᴛᴜʀ\x20ɪɴɪ\x20ʜᴀʀᴜs\x20ʟᴇʙɪʜ\x20ᴅᴀʀɪ\x202\x20ᴏʀᴀɴɢ\x20ʏᴀ🤗*','4603920WcEAod','738dnzVEI','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','⬡\x20BACK\x20TO\x20MENU\x20','menu','52FcuWKY','1893962pbnxRw','8ZyURPy','4003945ywiiWU'];_0x4842=function(){return _0x3b059e;};return _0x4842();}function _0x4e9d(_0x4c1336,_0x300274){var _0x48422a=_0x4842();return _0x4e9d=function(_0x4e9d8a,_0x3303df){_0x4e9d8a=_0x4e9d8a-0xed;var _0x1e7c28=_0x48422a[_0x4e9d8a];return _0x1e7c28;},_0x4e9d(_0x4c1336,_0x300274);}var _0x4a5ed9=_0x4e9d;(function(_0x50935e,_0x5e9f23){var _0x2935d6=_0x4e9d,_0xba3673=_0x50935e();while(!![]){try{var _0x3e020c=parseInt(_0x2935d6(0xf6))/0x1*(parseInt(_0x2935d6(0xfc))/0x2)+-parseInt(_0x2935d6(0xf9))/0x3*(parseInt(_0x2935d6(0xf2))/0x4)+-parseInt(_0x2935d6(0xfa))/0x5*(parseInt(_0x2935d6(0xee))/0x6)+-parseInt(_0x2935d6(0xf3))/0x7*(-parseInt(_0x2935d6(0xf4))/0x8)+parseInt(_0x2935d6(0xfb))/0x9+parseInt(_0x2935d6(0xf7))/0xa*(-parseInt(_0x2935d6(0xf5))/0xb)+-parseInt(_0x2935d6(0xed))/0xc;if(_0x3e020c===_0x5e9f23)break;else _0xba3673['push'](_0xba3673['shift']());}catch(_0xb28d63){_0xba3673['push'](_0xba3673['shift']());}}}(_0x4842,0xa972b),menu='\x20'+botName+_0x4a5ed9(0xf8)+pushname+_0x4a5ed9(0xfd),sendButMessage(from,menu,_0x4a5ed9(0xef),[{'buttonId':prefix+_0x4a5ed9(0xf1),'buttonText':{'displayText':_0x4a5ed9(0xf0)},'type':0x1}]));
        break;       
   case 'command':
               list = []
               listmenu = [`groupmenu`,`pencarijodoh`,`soundmenu`,`photoxy`,`ephoto`,`randomimage`,`wibu2`,`storymenu`,`porno`,`randomtext`,`islammenu`,`wibumenu`,`stickermenu`,`ownermenu`,`gamemenu`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`,`grub`,`sewabot`]
               listmenuu = [`Menu Group`,`PencariJodoh`,`soundmenu`,`Photo Oky`,`Ephoto Menu`,`Random Image`,`Nsfw Anime`,`Movie&Story`,`18+ Menu`,`RandomText`,`Islam Menu`,`Wibu Menu`,`Sticker Menu`,`Owner Command`,`Game Menu`,`For Fun Menu`,`Downloader`,`Info Menu`,`Menu Lainnya`,`OwnerBot`,`Official Group`,`Rent this Bot`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'menu ke' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: ``,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu} ${pushname} 👋
               
I Am ${botName}
WhatsApp bots that can Help 
Doing something
`,`🐣 Day : ${week} ${weton}\n🐥 Date : ${tanggal}              `, list, { quoted: freply})
               break              

///ISLAMI MENU  

// Islami //
case 'listsurah':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = 'List Surah:\n'
    for (var x in get_result) {
        ini_txt += `${x}. ${get_result[x]}\n`
    }
    reply(ini_txt)
    break
case 'alquran':
    var _0x48c192=_0x1c0f;(function(_0x39dfd7,_0x3ee3cc){var _0x47f60a=_0x1c0f,_0x17d38e=_0x39dfd7();while(!![]){try{var _0x4b0cc8=-parseInt(_0x47f60a(0x135))/0x1*(-parseInt(_0x47f60a(0x13c))/0x2)+-parseInt(_0x47f60a(0x12f))/0x3*(-parseInt(_0x47f60a(0x143))/0x4)+parseInt(_0x47f60a(0x140))/0x5*(parseInt(_0x47f60a(0x146))/0x6)+parseInt(_0x47f60a(0x12e))/0x7*(parseInt(_0x47f60a(0x141))/0x8)+-parseInt(_0x47f60a(0x137))/0x9*(parseInt(_0x47f60a(0x145))/0xa)+parseInt(_0x47f60a(0x142))/0xb*(parseInt(_0x47f60a(0x13e))/0xc)+-parseInt(_0x47f60a(0x134))/0xd;if(_0x4b0cc8===_0x3ee3cc)break;else _0x17d38e['push'](_0x17d38e['shift']());}catch(_0xcf9a59){_0x17d38e['push'](_0x17d38e['shift']());}}}(_0x3361,0xab742));function _0x1c0f(_0x28302d,_0x20c2f4){var _0x33612d=_0x3361();return _0x1c0f=function(_0x1c0f93,_0x5e3609){_0x1c0f93=_0x1c0f93-0x12e;var _0x3826d3=_0x33612d[_0x1c0f93];return _0x3826d3;},_0x1c0f(_0x28302d,_0x20c2f4);}if(args['length']<0x1)return reply('Example:\x20'+(prefix+command)+'\x2018\x20or\x20'+(prefix+command)+_0x48c192(0x130)+(prefix+command)+_0x48c192(0x13d));urls=_0x48c192(0x13b)+args[0x0]+_0x48c192(0x132),quran=await fetchJson(urls),result=quran[_0x48c192(0x13a)],ayat=result[_0x48c192(0x131)],ini_txt=_0x48c192(0x136)+result[_0x48c192(0x147)]+'\x20:\x201-'+ayat[_0x48c192(0x138)]+'\x0a\x0a';for(var x of ayat){arab=x[_0x48c192(0x13f)],nomor=x[_0x48c192(0x131)],latin=x[_0x48c192(0x144)],indo=x[_0x48c192(0x139)],ini_txt+=arab+'\x0a'+nomor+'.\x20'+latin+'\x0a'+indo+'\x0a\x0a';}ini_txt=ini_txt[_0x48c192(0x133)](/<u>/g,'')[_0x48c192(0x133)](/<\/u>/g,''),ini_txt=ini_txt[_0x48c192(0x133)](/<strong>/g,'')[_0x48c192(0x133)](/<\/strong>/g,''),ini_txt=ini_txt[_0x48c192(0x133)](/<u>/g,'')[_0x48c192(0x133)](/<\/u>/g,''),reply(ini_txt);function _0x3361(){var _0x3b13cf=['QS.\x20','1728NlIdxA','length','indonesia','result','https://api.lolhuman.xyz/api/quran/','138kneUEi','\x2018/1-10','223428HZUsvy','arab','155665LqBSCT','104ESplhH','33jhxHfj','17200KCYoro','latin','29080OTzEpU','6FCMjTF','surah','33131JTEqzO','807YadDYQ','\x2018/10\x20or\x20','ayat','?apikey=PunyaIkyAds','replace','4945616TAtiFW','4867vYvOlJ'];_0x3361=function(){return _0x3b13cf;};return _0x3361();}
    break
case 'alquranaudio':
    var _0x2dd810=_0x1c1d;(function(_0x4af244,_0x3f1622){var _0xde1485=_0x1c1d,_0x33234c=_0x4af244();while(!![]){try{var _0x410fb8=-parseInt(_0xde1485(0x1e7))/0x1*(-parseInt(_0xde1485(0x1df))/0x2)+parseInt(_0xde1485(0x1dd))/0x3*(parseInt(_0xde1485(0x1e2))/0x4)+-parseInt(_0xde1485(0x1e8))/0x5*(-parseInt(_0xde1485(0x1db))/0x6)+-parseInt(_0xde1485(0x1e6))/0x7*(-parseInt(_0xde1485(0x1dc))/0x8)+-parseInt(_0xde1485(0x1e5))/0x9+parseInt(_0xde1485(0x1ed))/0xa*(parseInt(_0xde1485(0x1ee))/0xb)+-parseInt(_0xde1485(0x1e4))/0xc*(parseInt(_0xde1485(0x1eb))/0xd);if(_0x410fb8===_0x3f1622)break;else _0x33234c['push'](_0x33234c['shift']());}catch(_0x50fef9){_0x33234c['push'](_0x33234c['shift']());}}}(_0x1615,0xbff98));if(args[_0x2dd810(0x1de)]==0x0)return reply(_0x2dd810(0x1e0)+(prefix+command)+_0x2dd810(0x1e1)+(prefix+command)+_0x2dd810(0x1ec));function _0x1c1d(_0x11c41d,_0x39ccd5){var _0x161589=_0x1615();return _0x1c1d=function(_0x1c1dc0,_0x530a3e){_0x1c1dc0=_0x1c1dc0-0x1db;var _0x486f48=_0x161589[_0x1c1dc0];return _0x486f48;},_0x1c1d(_0x11c41d,_0x39ccd5);}function _0x1615(){var _0x467d1c=['1241970blxnJd','110QkjAbE','https://api.lolhuman.xyz/api/quran/audio/','30Jomqey','8jwdddU','489744LvSmah','length','244mVGYyV','Example:\x20','\x2018\x20or\x20','36ajFAZj','sendMessage','2784FqOjKH','9065718LlKJCI','10032085vrMnwI','402jXGmrn','250365tmmUOL','?apikey=PunyaIkyAds','mp4Audio','148499bSRgBb','\x2018/10'];_0x1615=function(){return _0x467d1c;};return _0x1615();}surah=args[0x0],ini_buffer=await getBuffer(_0x2dd810(0x1ef)+surah+_0x2dd810(0x1e9)),await rimuru[_0x2dd810(0x1e3)](from,ini_buffer,audio,{'quoted':freply,'mimetype':Mimetype[_0x2dd810(0x1ea)]});
    break
case 'asmaulhusna':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = `No : ${get_result.index}\n`
    ini_txt += `Latin: ${get_result.latin}\n`
    ini_txt += `Arab : ${get_result.ar}\n`
    ini_txt += `Indonesia : ${get_result.id}\n`
    ini_txt += `English : ${get_result.en}`
    reply(ini_txt)
    break
case 'kisahnabi':
    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = `Name : ${get_result.name}\n`
    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
    ini_txt += `Umur : ${get_result.age}\n`
    ini_txt += `Tempat : ${get_result.place}\n`
    ini_txt += `Story : \n${get_result.story}`
    reply(ini_txt)
    break
case 'jadwalsholat':
    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
    daerah = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=PunyaIkyAds`)
    get_result = get_result.result
    ini_txt = `Wilayah : ${get_result.wilayah}\n`
    ini_txt += `Tanggal : ${get_result.tanggal}\n`
    ini_txt += `Sahur : ${get_result.sahur}\n`
    ini_txt += `Imsak : ${get_result.imsak}\n`
    ini_txt += `Subuh : ${get_result.subuh}\n`
    ini_txt += `Terbit : ${get_result.terbit}\n`
    ini_txt += `Dhuha : ${get_result.dhuha}\n`
    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
    ini_txt += `Ashar : ${get_result.ashar}\n`
    ini_txt += `Maghrib : ${get_result.imsak}\n`
    ini_txt += `Isya : ${get_result.isya}`
    reply(ini_txt)
    break       
    ////SPORTAGE MENU
               
               case 'slow':
					encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rimuru.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						rimuru.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
						fs.unlinkSync(ran)
					})
					break
				case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } }, contextInfo: { "mentionedJid": setiker } })
				rimuru.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})

break
			case 'addsticker':
				
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				rimuru.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } } })
				rimuru.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})

break
				
				
			case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: { "mentionedJid": setiker } })
				rimuru.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
			case 'addsticker':
				
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				rimuru.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
				rimuru.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				
				
			case 'addvn':
			      
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				rimuru.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvn':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				rimuru.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
				break
		   case 'getsticker':
			case 'gets':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				rimuru.sendMessage(from, result, sticker)
				break
           case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })
				break
			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				rimuru.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				
				break
			case 'getimage':
            case 'getimg':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				rimuru.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })
				break
				
			case 'addvideo':
				if (!isQuotedVideo) return reply('Reply videonya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await rimuru.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				rimuru.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvideo':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				rimuru.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
				case 'listvideo':
			case 'videolist':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				rimuru.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })
				break
				   
//------------------< Game >------------------
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (editz.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!editz.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               rimuru.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
        case 'resetgame':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              function _0x357f(){var _0x347dca=['extendedTextMessage','7️⃣','message','1️⃣','3627449nfrAgA','1174242cUseUc',']\x20Menantang\x20anda\x20untuk\x20menjadi\x20lawan\x20Game🔥\x0aKetik\x20Y/N\x20untuk\x20menerima\x20atau\x20menolak\x20permainan\x0a\x0aKet\x20:\x20Ketik\x20/resetgame\x20,\x20Untuk\x20Mereset\x20Permainan\x20Yg\x20Ada\x20Di\x20Grup!','85522qcUOcw','sendMessage','Tag\x20Lawan\x20Anda!\x20','mentionedJid','8️⃣','split','15507eYlknb','length','16DMXEQq','only','3️⃣','116HWGEJY','93WCzQup','4️⃣','7610olNBUE','contextInfo','5️⃣','2️⃣','103045yKBQqf','Tag\x20target\x20Lawan!','*🎳\x20Memulai\x20Game\x20Tictactoe\x20🎲*\x0a\x0a[@','17450961KfSZhL','push','603728pkPybi','Sedang\x20Ada\x20Permainan\x20Di\x20Grub\x20Ini,\x20Harap\x20Tunggu','0️⃣','6️⃣','Limit\x20game\x20kamu\x20sudah\x20habis'];_0x357f=function(){return _0x347dca;};return _0x357f();}function _0x23c5(_0x34af18,_0x3c9cfd){var _0x357fc0=_0x357f();return _0x23c5=function(_0x23c5e0,_0x1f04bc){_0x23c5e0=_0x23c5e0-0xcd;var _0x1ffab6=_0x357fc0[_0x23c5e0];return _0x1ffab6;},_0x23c5(_0x34af18,_0x3c9cfd);}var _0x302a63=_0x23c5;(function(_0x52d7ea,_0x47261b){var _0x5db20c=_0x23c5,_0x46458e=_0x52d7ea();while(!![]){try{var _0x487c9c=-parseInt(_0x5db20c(0xec))/0x1+parseInt(_0x5db20c(0xd5))/0x2*(parseInt(_0x5db20c(0xe1))/0x3)+parseInt(_0x5db20c(0xe0))/0x4*(parseInt(_0x5db20c(0xe7))/0x5)+parseInt(_0x5db20c(0xd3))/0x6+-parseInt(_0x5db20c(0xd2))/0x7*(parseInt(_0x5db20c(0xdd))/0x8)+-parseInt(_0x5db20c(0xdb))/0x9*(parseInt(_0x5db20c(0xe3))/0xa)+parseInt(_0x5db20c(0xea))/0xb;if(_0x487c9c===_0x47261b)break;else _0x46458e['push'](_0x46458e['shift']());}catch(_0x57fa9a){_0x46458e['push'](_0x46458e['shift']());}}}(_0x357f,0xb8191));if(isGame(sender,isPremium,gcount,glimit))return reply(_0x302a63(0xcd));if(!isGroup)return reply(mess[_0x302a63(0xde)]['group']);if(args[_0x302a63(0xdc)]<0x1)return reply(_0x302a63(0xd7));if(isTTT)return reply(_0x302a63(0xed));if(editz['message'][_0x302a63(0xce)]===undefined||editz[_0x302a63(0xd0)]['extendedTextMessage']===null)return reply(_0x302a63(0xe8));ment=editz[_0x302a63(0xd0)][_0x302a63(0xce)][_0x302a63(0xe4)][_0x302a63(0xd8)],player1=sender,player2=ment[0x0],angka=[_0x302a63(0xee),_0x302a63(0xd1),_0x302a63(0xe6),_0x302a63(0xdf),_0x302a63(0xe2),_0x302a63(0xe5),_0x302a63(0xef),_0x302a63(0xcf),_0x302a63(0xd9),'9️⃣'],id=from,gilir=player2,ky_ttt[_0x302a63(0xeb)]({'player1':player1,'player2':player2,'id':id,'angka':angka,'gilir':gilir}),rimuru[_0x302a63(0xd6)](from,_0x302a63(0xe9)+player2[_0x302a63(0xda)]('@')[0x0]+_0x302a63(0xd4),text,{'contextInfo':{'mentionedJid':[player2]}}),gameAdd(sender,glimit);
     break
     case 't':
       function _0x1bf0(_0x31e3a1,_0x2d0963){var _0x3473e8=_0x3473();return _0x1bf0=function(_0x1bf099,_0x4f7fca){_0x1bf099=_0x1bf099-0x142;var _0x19c284=_0x3473e8[_0x1bf099];return _0x19c284;},_0x1bf0(_0x31e3a1,_0x2d0963);}var _0x52a4dd=_0x1bf0;(function(_0x142cff,_0xb1f6c1){var _0x4b8c9e=_0x1bf0,_0x41a7e5=_0x142cff();while(!![]){try{var _0x169d31=-parseInt(_0x4b8c9e(0x14a))/0x1+-parseInt(_0x4b8c9e(0x147))/0x2*(-parseInt(_0x4b8c9e(0x14b))/0x3)+-parseInt(_0x4b8c9e(0x14e))/0x4+parseInt(_0x4b8c9e(0x149))/0x5+-parseInt(_0x4b8c9e(0x14c))/0x6*(parseInt(_0x4b8c9e(0x14d))/0x7)+parseInt(_0x4b8c9e(0x144))/0x8*(parseInt(_0x4b8c9e(0x143))/0x9)+-parseInt(_0x4b8c9e(0x146))/0xa*(-parseInt(_0x4b8c9e(0x142))/0xb);if(_0x169d31===_0xb1f6c1)break;else _0x41a7e5['push'](_0x41a7e5['shift']());}catch(_0x2ebbb0){_0x41a7e5['push'](_0x41a7e5['shift']());}}}(_0x3473,0x20c5b),titid=_0x52a4dd(0x148),sendButMessage(from,titid,_0x52a4dd(0x145),[{'buttonId':'Y','buttonText':{'displayText':'Y'},'type':0x1},{'buttonId':'N','buttonText':{'displayText':'N'},'type':0x1}]));function _0x3473(){var _0x9e8486=['7gSftsJ','330716qCctih','15367qUxIIq','9261PZDtzS','360FlcGFA','ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','950hAgRik','43954zZRRhe','SILAHKAN\x20PILIH\x20DI\x20BAWAH\x20UNTUK\x20MELANJUTKAN','383695MCOhrn','38147sIyGOq','27tudQHo','1190946Tgydjh'];_0x3473=function(){return _0x9e8486;};return _0x3473();}
              break
       case 'family100':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=PunyaIkyAds`)
              titid =  `*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\nTotal Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s `
          
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}family100`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
            
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':
              var _0x5bec59=_0x1039;function _0x2f31(){var _0x3d1c0c=['log','54eMcdPo','604732cPSUVM','toLowerCase','1919616dzUZKK','stringify','Jawaban:\x20','split','2cqZtLW','then','1704490sZPfaX','tebakanime','1853922ulkSvp','592TPSRPg','name','writeFileSync','12oIDtHp','Klik\x20Untuk\x20Ke\x20Game','Limit\x20game\x20kamu\x20sudah\x20habis','⬡\x20NEXT\x20','5NgvRRP','./database/tebakanime.json','67417QAWKMD','sendMessage','hasOwnProperty','437620FCPwMz','image','5407545rwxRGr','Selesein\x20yg\x20sebelumnya\x20dulu\x20atuh','\x0a•\x20*Waktu*\x20:\x2030s','https://lolhuman.herokuapp.com/api/tebakchara?apikey=PunyaIkyAds'];_0x2f31=function(){return _0x3d1c0c;};return _0x2f31();}function _0x1039(_0x3d8f61,_0x9fbc36){var _0x2f31fd=_0x2f31();return _0x1039=function(_0x103976,_0x117954){_0x103976=_0x103976-0x75;var _0x25a309=_0x2f31fd[_0x103976];return _0x25a309;},_0x1039(_0x3d8f61,_0x9fbc36);}(function(_0x3326ff,_0x53bc0b){var _0x4b8d77=_0x1039,_0x41bf3a=_0x3326ff();while(!![]){try{var _0x280322=parseInt(_0x4b8d77(0x8d))/0x1*(parseInt(_0x4b8d77(0x8f))/0x2)+-parseInt(_0x4b8d77(0x89))/0x3+parseInt(_0x4b8d77(0x87))/0x4+parseInt(_0x4b8d77(0x7a))/0x5*(-parseInt(_0x4b8d77(0x91))/0x6)+-parseInt(_0x4b8d77(0x7c))/0x7*(parseInt(_0x4b8d77(0x92))/0x8)+-parseInt(_0x4b8d77(0x86))/0x9*(-parseInt(_0x4b8d77(0x7f))/0xa)+-parseInt(_0x4b8d77(0x81))/0xb*(-parseInt(_0x4b8d77(0x76))/0xc);if(_0x280322===_0x53bc0b)break;else _0x41bf3a['push'](_0x41bf3a['shift']());}catch(_0x152c86){_0x41bf3a['push'](_0x41bf3a['shift']());}}}(_0x2f31,0xe783f));if(isGame(sender,isPremium,gcount,glimit))return reply(_0x5bec59(0x78));if(tebakanime['hasOwnProperty'](sender[_0x5bec59(0x8c)]('@')[0x0]))return reply(_0x5bec59(0x82));get_result=await fetchJson(_0x5bec59(0x84)),get_result=get_result['result'],ini_image=get_result[_0x5bec59(0x80)],jawaban=get_result[_0x5bec59(0x93)],kisi_kisi=jawaban['replace'](/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi,'_'),ini_buffer=await getBuffer(ini_image),rimuru[_0x5bec59(0x7d)](from,ini_buffer,image,{'quoted':freply,'caption':'*+*\x20```Tebak\x20Anime```\x0a\x0a•\x20*Petunjuk*\x20:'+kisi_kisi+_0x5bec59(0x83)})[_0x5bec59(0x8e)](()=>{var _0x2853de=_0x5bec59;tebakanime[sender[_0x2853de(0x8c)]('@')[0x0]]=jawaban[_0x2853de(0x88)](),fs[_0x2853de(0x75)]('./database/tebakanime.json',JSON['stringify'](tebakanime));}),await sleep(0x7530);tebakanime[_0x5bec59(0x7e)](sender[_0x5bec59(0x8c)]('@')[0x0])&&(console[_0x5bec59(0x85)](color(_0x5bec59(0x8b)+jawaban)),titid='*Jawaban*:\x20'+jawaban,sendButMessage(from,titid,_0x5bec59(0x77),[{'buttonId':prefix+_0x5bec59(0x90),'buttonText':{'displayText':_0x5bec59(0x79)},'type':0x1}]),delete tebakanime[sender[_0x5bec59(0x8c)]('@')[0x0]],fs['writeFileSync'](_0x5bec59(0x7b),JSON[_0x5bec59(0x8a)](tebakanime)));gameAdd(sender,glimit);
              break
       case 'tebaklagu':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)
              get_result = get_result.result
              ini_audio = get_result.preview
              jawaban = get_result.judul
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_audio)
              reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')
              rimuru.sendMessage(from, ini_buffer, audio, {quoted: freply}).then(() => {
              tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
})
              await sleep(30000)
              if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaklagu`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaklagu[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
}
              gameAdd(sender, glimit)
              break
       case 'tebaktebakan':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.soal
              rimuru.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebaktebakan`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}kuismath`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              buff = await getBuffer(ini_image)
              
            rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
           titid = "*Jawaban*: " + jawaban
   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}tebakgambar`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
              
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              rimuru.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/kata?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              rimuru.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/lirik?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              rimuru.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              rimuru.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              rimuru.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              rimuru.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/susunkata?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              rimuru.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/asahotak?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              rimuru.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=PunyaIkyAds`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              rimuru.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : ?? : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : ?? : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
      //------------------< ⲂⲟⲦz by ғᴀʀᴇʟ ʙᴏᴛᴢ࿐ >-------------------
          case 'verify':              
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await rimuru.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
       const anuu = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n│ *「 VERIFICATION SUKSES 」*\n│ *Terimakasih Sudah*\n│ *Mendaftarkan Diri*\n│ *Dalam Database*\n└┬────────────┈ ⳹\n┌┤◦➛ *Nama :* ${pushname}\n││◦➛ *Nomor :* @${sender.split('@')[0]}\n││◦➛API :* +${sender.split('@')[0]}\n││◦➛ *SN :* ${serialUser}\n││◦➛ *Total Pengguna :* ${_registered.length} Orang\n││◦➛ *Status :* ☑️ Terverifikasi\n│└────────────┈ ⳹\n│ *Waktu Pendaftaran*\n│ *Tanggal :* tanggal\n│ *Jam :* jam \n├───────────────\n│ *Silahkan Ketik ${prefix}rules*\n│ *Untuk Melanjutkan Pengguna*\n└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n*「 ${botName} 」*`
                   rimuruchan = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `🏷️MENU`},type:1}]
              imageMsg = (await rimuru.prepareMessageMedia(rimuruchan, "imageMessage", { thumbnail: rimuruchan, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rimuru.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			rimuru.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Terdaftar Di Denara Bot *`)
		}, 2000)
        break
        break
        
        case 'sfire1':{
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    rimuru.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(yoooo))
                  	
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await rimuru.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    rimuru.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(ran))
                  	
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
                    case 'findsticker': case 'findstiker': case 'stickerwa':{
                
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${q}`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data.result))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    if (bokep2.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of bokep2.stickers) {
                            rimuru.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
            case 'linedl': case 'linestickerdl':{
                
                if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_line`)
                if (!isUrl(args[1]) && !args[1].includes('store.line')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/linestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
                    if (data.result.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of data.result.stickers) {
                        rimuru.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
            case 'teledl': case 'telegramdl': case 'telesticker':{
                
                if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_telegram`)
                if (!isUrl(args[1]) && !args[1].includes('t.me')) return reply(mess.error.Iv)
                fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {
                    if (data.result.sticker.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")
                    for (var x of data.result.sticker) {
                            rimuru.sendSticker(from, x, msg)
                    }
                    
                })
                }
                break
    break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner || editz.key.fromMe) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (editz.message.extendedTextMessage != undefined) {
              mentioned = editz.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
        
              } else {
            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (editz.message.extendedTextMessage != undefined) {
              mentioned = editz.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
           case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
         case 'belipremium':
       case 'buypremium':
       case 'sewabot':
              function _0x1d6a(_0x3bfe4b,_0xa12bb4){var _0x591ea9=_0x591e();return _0x1d6a=function(_0x1d6ad5,_0x1196ed){_0x1d6ad5=_0x1d6ad5-0x18c;var _0x4033ed=_0x591ea9[_0x1d6ad5];return _0x4033ed;},_0x1d6a(_0x3bfe4b,_0xa12bb4);}var _0x20ebfb=_0x1d6a;function _0x591e(){var _0x333635=['4599791lHSOAx','8592760dxPxTs','prepareMessageMedia','prepareMessageFromContent','relayWAMessage','imageMessage','PAYMENT','9165474iEvsdP','4CbqYhz','3176277zylPNb','16600LGnzKY','OWNER','1217AaqDOs','2614CpxrFn','26292250PezMUL','438CiLnvP','\x0a┏━━⬣\x20PRICE\x20LIST\x201\x0a┃⬡\x20SEWA\x2010K/MINGGU\x0a┃⬡\x20SEWA\x2015K/BLN\x0a┃⬡\x20PERMANEN\x2030K\x0a┃⬡\x20PERMANEN\x20+\x20PREM\x2035K\x0a┃⬡\x20ALL\x20PERMANEN\x2040K\x0a┗━━⬣\x0a\x0a┏━━⬣\x20PRICE\x20LIST\x202\x0a┃⬡\x20JADI\x20BOT\x2010K/BLN\x0a┃⬡\x20JADI\x20BOT\x20+\x20OWNER\x2030K\x0a┃⬡\x20SC\x20BOT\x20ATAU\x20MAU\x20BELI\x20NO\x20ENC\x20TANYA\x20OWNER\x0a┗━━⬣\x0a\x0a┏━━⬣\x20MINAT?\x20PM\x0a┃⬡\x20wa.me/6285727492435\x0a┃⬡\x20SOSMED\x20OWNER\x20Denara Bot࿐\x20https://instabio.cc/Farelbotz/\x0a┃⬡\x20YOU\x20TUBE\x20ANIME\x20SELERAKU\x0a┗━━⬣\x0a'];_0x591e=function(){return _0x333635;};return _0x591e();}(function(_0x4fc7d6,_0xc4f684){var _0x3f01e0=_0x1d6a,_0x187c8c=_0x4fc7d6();while(!![]){try{var _0x51c72d=-parseInt(_0x3f01e0(0x18e))/0x1*(-parseInt(_0x3f01e0(0x18f))/0x2)+-parseInt(_0x3f01e0(0x19c))/0x3*(-parseInt(_0x3f01e0(0x19b))/0x4)+parseInt(_0x3f01e0(0x18c))/0x5*(parseInt(_0x3f01e0(0x191))/0x6)+parseInt(_0x3f01e0(0x193))/0x7+-parseInt(_0x3f01e0(0x194))/0x8+parseInt(_0x3f01e0(0x19a))/0x9+-parseInt(_0x3f01e0(0x190))/0xa;if(_0x51c72d===_0xc4f684)break;else _0x187c8c['push'](_0x187c8c['shift']());}catch(_0xf80c50){_0x187c8c['push'](_0x187c8c['shift']());}}}(_0x591e,0xd2ead),gopeynya=''+qris,buff=await getBuffer(gopeynya),teksnya=_0x20ebfb(0x192),buttons=[{'buttonId':prefix+'owner','buttonText':{'displayText':_0x20ebfb(0x18d)},'type':0x1},{'buttonId':prefix+'payment','buttonText':{'displayText':_0x20ebfb(0x199)},'type':0x1}],imageMsg=(await denara[_0x20ebfb(0x195)](buff,_0x20ebfb(0x198),{'thumbnail':buff}))[_0x20ebfb(0x198)],buttonsMessage={'footerText':'crated\x20by\x20Denara࿐\x20https://instabio.cc/denara/','imageMessage':imageMsg,'contentText':teksnya,'buttons':buttons,'headerType':0x4},prep=await Denara[_0x20ebfb(0x196)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),Denara[_0x20ebfb(0x197)](prep));
      break
      
      case 'gopay':
              function _0x21bd(){var _0x219b75=['2GsngPS','\x0a\x0aSilahkan\x20scan\x20kode\x20pembayaran\x20di\x20atas\x20sesuai\x20nominal!\x0aAN:\x20AL\x20AHMAD\x0a\x0aNOTE*\x20JANGAN\x20LUPA\x20KIRIM\x20BUKTI\x20TRANSFER\x20KEPADA\x20OWNER!\x0a','prepareMessageMedia','imageMessage','KIRIM\x20BUKTI\x20TF','650dxlGLn','9Pmqban','359484mLnKDQ','3233816FRtSyq','168413MeOnvp','\x0aHai\x20kak\x20','payment','crated\x20by\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz/','prepareMessageFromContent','PAYMENT\x20LAIN','121Efewnf','6762geKZUP','1088022JUoqeP','6809784DHyqKI','2210750nmpSLT'];_0x21bd=function(){return _0x219b75;};return _0x21bd();}var _0x21d201=_0x4db5;function _0x4db5(_0x5a3a9f,_0x3e187f){var _0x21bdb1=_0x21bd();return _0x4db5=function(_0x4db502,_0x384c09){_0x4db502=_0x4db502-0xe7;var _0x236514=_0x21bdb1[_0x4db502];return _0x236514;},_0x4db5(_0x5a3a9f,_0x3e187f);}(function(_0x406d03,_0x57a655){var _0x57aec0=_0x4db5,_0x546d52=_0x406d03();while(!![]){try{var _0x4df635=-parseInt(_0x57aec0(0xf1))/0x1*(-parseInt(_0x57aec0(0xea))/0x2)+-parseInt(_0x57aec0(0xe7))/0x3+-parseInt(_0x57aec0(0xe8))/0x4+-parseInt(_0x57aec0(0xef))/0x5*(parseInt(_0x57aec0(0xfa))/0x6)+-parseInt(_0x57aec0(0xf3))/0x7+-parseInt(_0x57aec0(0xf2))/0x8*(-parseInt(_0x57aec0(0xf0))/0x9)+parseInt(_0x57aec0(0xe9))/0xa*(parseInt(_0x57aec0(0xf9))/0xb);if(_0x4df635===_0x57a655)break;else _0x546d52['push'](_0x546d52['shift']());}catch(_0x1e9c93){_0x546d52['push'](_0x546d52['shift']());}}}(_0x21bd,0xea567),gopeynya=''+qris,buff=await getBuffer(gopeynya),teksnya=_0x21d201(0xf4)+pushname+_0x21d201(0xeb),buttons=[{'buttonId':prefix+'bukti','buttonText':{'displayText':_0x21d201(0xee)},'type':0x1},{'buttonId':prefix+_0x21d201(0xf5),'buttonText':{'displayText':_0x21d201(0xf8)},'type':0x1}],imageMsg=(await rimuru[_0x21d201(0xec)](buff,_0x21d201(0xed),{'thumbnail':buff}))[_0x21d201(0xed)],buttonsMessage={'footerText':_0x21d201(0xf6),'imageMessage':imageMsg,'contentText':teksnya,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x21d201(0xf7)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep));
      break
         case 'dana':
              function _0x4c12(_0x363f6f,_0x16da52){var _0x4ef76c=_0x4ef7();return _0x4c12=function(_0x4c12b0,_0x399d44){_0x4c12b0=_0x4c12b0-0xef;var _0x188a26=_0x4ef76c[_0x4c12b0];return _0x188a26;},_0x4c12(_0x363f6f,_0x16da52);}var _0x82a2ef=_0x4c12;(function(_0x2a17e5,_0x34d77b){var _0x235410=_0x4c12,_0x57d2bf=_0x2a17e5();while(!![]){try{var _0x1cb493=-parseInt(_0x235410(0xf5))/0x1*(parseInt(_0x235410(0xf3))/0x2)+parseInt(_0x235410(0xfe))/0x3*(parseInt(_0x235410(0xf2))/0x4)+parseInt(_0x235410(0xfb))/0x5+parseInt(_0x235410(0xff))/0x6+-parseInt(_0x235410(0x100))/0x7*(parseInt(_0x235410(0xf4))/0x8)+-parseInt(_0x235410(0xfc))/0x9*(-parseInt(_0x235410(0x101))/0xa)+parseInt(_0x235410(0xfd))/0xb*(-parseInt(_0x235410(0xf1))/0xc);if(_0x1cb493===_0x34d77b)break;else _0x57d2bf['push'](_0x57d2bf['shift']());}catch(_0x2b2ade){_0x57d2bf['push'](_0x57d2bf['shift']());}}}(_0x4ef7,0xd5d7e),gopeynya=_0x82a2ef(0xf0),buff=await getBuffer(gopeynya),teksnya=_0x82a2ef(0xf7)+pushname+'\x0a\x0aSilahkan\x20Tf\x20Sesuai\x20Nominal\x20Ya\x20Kak!\x0a\x0aAN:\x20AL\x20AHMAD\x0a\x0aNomor\x20Dana:\x20085727492435\x0a\x0aNOTE*\x20JANGAN\x20LUPA\x20KIRIM\x20BUKTI\x20TRANSFER\x20KEPADA\x20OWNER!',buttons=[{'buttonId':prefix+_0x82a2ef(0xef),'buttonText':{'displayText':_0x82a2ef(0xf6)},'type':0x1},{'buttonId':prefix+'payment','buttonText':{'displayText':_0x82a2ef(0xf9)},'type':0x1}],imageMsg=(await rimuru[_0x82a2ef(0xf8)](buff,_0x82a2ef(0xfa),{'thumbnail':buff}))['imageMessage'],buttonsMessage={'footerText':_0x82a2ef(0x102),'imageMessage':imageMsg,'contentText':teksnya,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x82a2ef(0x104)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x82a2ef(0x103)](prep));function _0x4ef7(){var _0x4c3ef2=['4428688BcjOnd','720040qvifTj','112472XtrNOl','2tJIqMD','KIRIM\x20BUKTI\x20TF','\x0aHai\x20kak\x20','prepareMessageMedia','PAYMENT\x20LAIN','imageMessage','8729990cIYWuR','36PlZhJS','33CJFlro','3eWelUe','3684684eqZIYu','245qLXpIe','964290VwsINF','crated\x20by\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz/','relayWAMessage','prepareMessageFromContent','bukti','https://c.top4top.io/p_2106saxfe0.jpg','7059972kHvooU'];_0x4ef7=function(){return _0x4c3ef2;};return _0x4ef7();}
              break
 case 'ovo':
              var _0x36f6fb=_0x4b46;function _0x4b46(_0x25ad11,_0x33eb24){var _0x486a26=_0x486a();return _0x4b46=function(_0x4b46f3,_0x504e5d){_0x4b46f3=_0x4b46f3-0xff;var _0x24e62b=_0x486a26[_0x4b46f3];return _0x24e62b;},_0x4b46(_0x25ad11,_0x33eb24);}(function(_0x47a97d,_0x56b0ca){var _0x582725=_0x4b46,_0x2afe9a=_0x47a97d();while(!![]){try{var _0x1b63f2=-parseInt(_0x582725(0x10a))/0x1+-parseInt(_0x582725(0x102))/0x2*(-parseInt(_0x582725(0x108))/0x3)+parseInt(_0x582725(0x10e))/0x4*(-parseInt(_0x582725(0x112))/0x5)+-parseInt(_0x582725(0x111))/0x6*(parseInt(_0x582725(0x105))/0x7)+-parseInt(_0x582725(0x10b))/0x8*(parseInt(_0x582725(0x10d))/0x9)+parseInt(_0x582725(0x113))/0xa*(-parseInt(_0x582725(0x114))/0xb)+parseInt(_0x582725(0x10c))/0xc;if(_0x1b63f2===_0x56b0ca)break;else _0x2afe9a['push'](_0x2afe9a['shift']());}catch(_0x1b8668){_0x2afe9a['push'](_0x2afe9a['shift']());}}}(_0x486a,0x187ab),gopeynya=_0x36f6fb(0xff),buff=await getBuffer(gopeynya),teksnya=_0x36f6fb(0x10f)+pushname+_0x36f6fb(0x110),buttons=[{'buttonId':prefix+_0x36f6fb(0x107),'buttonText':{'displayText':'KIRIM\x20BUKTI\x20TF'},'type':0x1},{'buttonId':prefix+_0x36f6fb(0x106),'buttonText':{'displayText':_0x36f6fb(0x100)},'type':0x1}],imageMsg=(await rimuru[_0x36f6fb(0x103)](buff,_0x36f6fb(0x104),{'thumbnail':buff}))[_0x36f6fb(0x104)],buttonsMessage={'footerText':_0x36f6fb(0x109),'imageMessage':imageMsg,'contentText':teksnya,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x36f6fb(0x101)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep));function _0x486a(){var _0x308749=['\x0aHai\x20kak\x20','\x0a\x0aSilahkan\x20scan\x20kode\x20pembayaran\x20di\x20atas\x20sesuai\x20nominal!\x0aAN:\x20AL\x20AHMAD\x0a\x0aNOTE*\x20JANGAN\x20LUPA\x20KIRIM\x20BUKTI\x20TRANSFER\x20KEPADA\x20OWNER!\x0a','7146UeAoUx','65cYWVGl','218170aqCxGM','44vYUxGk','https://d.top4top.io/p_2106ez6yj1.jpg','PAYMENT\x20LAIN','prepareMessageFromContent','70UNhBBk','prepareMessageMedia','imageMessage','77aEPGug','payment','bukti','903qfVgAZ','crated\x20by\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz/','171706qUaRjO','8OJoKTO','7594896pEIFcK','1552698BTmbmT','30332SXwddd'];_0x486a=function(){return _0x308749;};return _0x486a();}
      break
case 'pulsa':
      function _0x184a(){var _0x3b62c4=['chats','2731896kCCwwd','round','all','!payment','LOCATION','3162375IrDiGJ','@s.whatsapp.net','lagi\x20dicas','s.whatsapp.net','buttonsMessage','\x0a\x20\x20\x20\x20\x20\x20\x0a\x20','endsWith','4579704hVVVpY','memoryUsage','10677CpaBrG','620HxQmYL','filter','!bukti','\x20👋\x0a\x20\x20\x0a\x20Untuk\x20melakukan\x20pembayaran\x20menggunakan\x20pulsa\x20silahkan\x20isi\x20kepada\x20nomer\x20di\x20bawah!\x0a\x20\x0a\x20TELKOMSEL:\x20081215626270\x0a','heapUsed','1108xkLWHV','1030138tppVEf','g.us','text','1YujdHO','282573agTpgy','ga\x20dicas','KIRIM\x20BUKTI\x20TF','sendMessage','totalmem','array','split','1930586LUaRBR','jid'];_0x184a=function(){return _0x3b62c4;};return _0x184a();}function _0x4071(_0xd8a609,_0x4c3533){var _0x184a33=_0x184a();return _0x4071=function(_0x407184,_0x429352){_0x407184=_0x407184-0xf2;var _0x436cc1=_0x184a33[_0x407184];return _0x436cc1;},_0x4071(_0xd8a609,_0x4c3533);}var _0x41052b=_0x4071;(function(_0x1d8c91,_0x20022a){var _0x5d977c=_0x4071,_0x3f5482=_0x1d8c91();while(!![]){try{var _0x25271f=parseInt(_0x5d977c(0xf6))/0x1*(-parseInt(_0x5d977c(0xf3))/0x2)+parseInt(_0x5d977c(0x10f))/0x3*(-parseInt(_0x5d977c(0xf2))/0x4)+-parseInt(_0x5d977c(0x106))/0x5+parseInt(_0x5d977c(0x10d))/0x6+parseInt(_0x5d977c(0xfe))/0x7+-parseInt(_0x5d977c(0x101))/0x8+-parseInt(_0x5d977c(0xf7))/0x9*(-parseInt(_0x5d977c(0x110))/0xa);if(_0x25271f===_0x20022a)break;else _0x3f5482['push'](_0x3f5482['shift']());}catch(_0x3ff0e7){_0x3f5482['push'](_0x3f5482['shift']());}}}(_0x184a,0x7cb66),thu=await rimuru['getStatus'](sender[_0x41052b(0xfd)]('@')[0x0]+_0x41052b(0x107),MessageType[_0x41052b(0xf5)]));if(!isRegistered)return sendButMessage(from,daftar1,daftar2,daftar3,{'quoted':freply});groups=rimuru['chats'][_0x41052b(0xfc)][_0x41052b(0x111)](_0x495c63=>_0x495c63[_0x41052b(0xff)][_0x41052b(0x10c)](_0x41052b(0xf4))),privat=rimuru[_0x41052b(0x100)][_0x41052b(0xfc)][_0x41052b(0x111)](_0xff988b=>_0xff988b[_0x41052b(0xff)][_0x41052b(0x10c)](_0x41052b(0x109))),ram2=(process[_0x41052b(0x10e)]()[_0x41052b(0x114)]/0x400/0x400)['toFixed'](0x2)+'MB\x20/\x20'+Math[_0x41052b(0x102)](require('os')[_0x41052b(0xfb)]/0x400/0x400)+'MB',charger=''+(charging?_0x41052b(0x108):_0x41052b(0xf8)),uptime=process['uptime'](),timestampe=speed(),totalChat=await rimuru['chats'][_0x41052b(0x103)](),latensie=speed()-timestampe,total=math(groups['length']+'*'+privat['length']),menu=_0x41052b(0x10b)+ucapanWaktu+'\x20Kak\x20'+pushname+_0x41052b(0x113),rimuru[_0x41052b(0xfa)](from,{'contentText':''+menu,'footerText':'ⲂⲟⲦz\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐','buttons':[{'buttonId':_0x41052b(0x112),'buttonText':{'displayText':_0x41052b(0xf9)},'type':0x1},{'buttonId':_0x41052b(0x104),'buttonText':{'displayText':'GANTI\x20PAYMENT'},'type':0x1}],'headerType':_0x41052b(0x105),'locationMessage':{'degreesLatitude':'','degreesLongitude':'','jpegThumbnail':rimuruchan,'contextInfo':{'mentionedJid':[sender]}}},_0x41052b(0x10a));
              break
              case 'bukti':
    var _0x45cf39=_0x2545;function _0x2545(_0x4f50a8,_0x29f81c){var _0x3f28b0=_0x3f28();return _0x2545=function(_0x2545ba,_0x114fb){_0x2545ba=_0x2545ba-0xe2;var _0x544ea1=_0x3f28b0[_0x2545ba];return _0x544ea1;},_0x2545(_0x4f50a8,_0x29f81c);}function _0x3f28(){var _0x14b74d=['8892527KvRybu','6zSBNTR','!infoig','571205kHCjVf','264auDoUk','\x0ahai\x20kak\x20','⬡\x20IG\x20OWNER','3114426ijLhAg','\x0a\x0aJika\x20sudah\x20tf\x20sesuai\x20nominal\x20silahkan\x20kirim\x20bukti\x20ke\x20owner\x20ku\x20ya!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aWa.me/6285727492435','1821714BKwkvQ','7518020xYNopz','904985cqGMBb','808497pRygQQ'];_0x3f28=function(){return _0x14b74d;};return _0x3f28();}(function(_0x575188,_0x6cb777){var _0x126004=_0x2545,_0x13e4a1=_0x575188();while(!![]){try{var _0x1a7c4d=parseInt(_0x126004(0xe8))/0x1+-parseInt(_0x126004(0xe6))/0x2+parseInt(_0x126004(0xe4))/0x3+-parseInt(_0x126004(0xe7))/0x4+parseInt(_0x126004(0xed))/0x5+-parseInt(_0x126004(0xeb))/0x6*(parseInt(_0x126004(0xea))/0x7)+-parseInt(_0x126004(0xee))/0x8*(-parseInt(_0x126004(0xe9))/0x9);if(_0x1a7c4d===_0x6cb777)break;else _0x13e4a1['push'](_0x13e4a1['shift']());}catch(_0x247427){_0x13e4a1['push'](_0x13e4a1['shift']());}}}(_0x3f28,0xeaa6e),titid=_0x45cf39(0xe2)+pushname+_0x45cf39(0xe5),sendButMessage(from,titid,'rimuru\x20editz',[{'buttonId':_0x45cf39(0xec),'buttonText':{'displayText':_0x45cf39(0xe3)},'type':0x1}]));
        break;
 
              
      case 'payment':
               function _0x1e20(){const _0x2d5eab=['scan','6459558GaVzRx','4501032UnlGbL','197336vzCaAk','pulsa','payment\x20ke','8gYVbGT','BAYAR\x20DENGAN\x20OVO','1600FAatHs','BAYAR\x20DENGAN\x20GOPAY','push','204aIAsmL','\x20\x0a\x0aSilahkan\x20pilih\x20metode\x20pembayaran\x20di\x20bawah\x20ya\x20!','ovo','855jTCJHB','gopay','INFO\x20BISNIS','229550evuCaI','2099500BuXclW','2723346pAnUhN'];_0x1e20=function(){return _0x2d5eab;};return _0x1e20();}const _0x40143f=_0x172a;function _0x172a(_0x262975,_0xe938c7){const _0x1e20b2=_0x1e20();return _0x172a=function(_0x172a1b,_0x43ed1e){_0x172a1b=_0x172a1b-0x1f0;let _0x4308b4=_0x1e20b2[_0x172a1b];return _0x4308b4;},_0x172a(_0x262975,_0xe938c7);}(function(_0x1491c0,_0x1a9102){const _0x544ba9=_0x172a,_0xecb75b=_0x1491c0();while(!![]){try{const _0x229ccd=-parseInt(_0x544ba9(0x1f5))/0x1*(parseInt(_0x544ba9(0x1f2))/0x2)+-parseInt(_0x544ba9(0x1fd))/0x3+-parseInt(_0x544ba9(0x201))/0x4+-parseInt(_0x544ba9(0x1fc))/0x5+parseInt(_0x544ba9(0x200))/0x6+parseInt(_0x544ba9(0x1ff))/0x7*(-parseInt(_0x544ba9(0x1f0))/0x8)+parseInt(_0x544ba9(0x1f8))/0x9*(parseInt(_0x544ba9(0x1fb))/0xa);if(_0x229ccd===_0x1a9102)break;else _0xecb75b['push'](_0xecb75b['shift']());}catch(_0x2694d7){_0xecb75b['push'](_0xecb75b['shift']());}}}(_0x1e20,0x723af),list=[],listmenu=[_0x40143f(0x1f9),'dana',_0x40143f(0x1f7),_0x40143f(0x202),_0x40143f(0x1fe)],listmenuu=[_0x40143f(0x1f3),'BAYAR\x20DENGAN\x20DANA',_0x40143f(0x1f1),'BAYAR\x20DENGAN\x20PULSA',_0x40143f(0x1fa)],nombor=0x1,startnum=0x0);for(let x of listmenu){const yy={'title':_0x40143f(0x203)+nombor++,'rows':[{'title':''+listmenuu[startnum++],'description':'','rowId':''+prefix+x}]};list[_0x40143f(0x1f4)](yy);}listmsg(from,'hai\x20kak\x20'+pushname+_0x40143f(0x1f6),'\x20\x20',list);
               break
                  //=========================================================
                      //=========================================================
    case 'pay3':
          wibu = `〘 LIST PEMBAYARAN 〙  `
                             sendButMessage(from, wibu, `¤=================¤\nSilakan Transfer & Kirim bukti pembayaran / Struck\nTransfer ke nomor dibawah ini ✓\n●▬▬▬ஜ۩❀۩ஜ▬▬▬●⭕\n *PEMBAYARAN TERSEDIA*\n●▬▬▬ *E-WALLET* ▬▬▬●\n▪ *Dana* : 085727492435\n▪ *OVO* : 085727492435\n▪ *GOPAY* : SCAN PP\n▪ *LINKAJA* : 085727492435\n▪ *SHOPEEPAY* : 085727492435\n   *Semua AN Di Atas* : *TANYA OWNER*\n●▬▬▬ *Bank* ▬▬▬●\n*Bank Mandiri* : \n▬▬▬ *Pulsa Telkomsel* ▬▬▬●\n▪︎ *Telkomsel* : 081215626270\n▪︎ *SAWERI* : https://saweria.co/Denarabot1\n●▬▬▬▬▬ஜ۩❀۩ஜ▬▬▬▬▬●\nTerimakasih 🙏`, [
                    {
                      buttonId: `${prefix}menu`,
                      buttonText: {
                        displayText: `⬡ BACK TO MENU `,
                      },
                      type: 1,
                    },]);
                  break;   
                  
                  case 'inibug':
      list = await rimuru.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
"productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": fakeimage
        },
        "businessOwnerJid": sender
      },
      "footerText": "MINAT? PC OWNER"
    }
  }, {quoted: freply})
  rimuru.relayWAMessage(list, {waitForAck: true})
       
  
  break
  case 'scan':
     function _0x2506(){var _0x47b716=['6431678466857362','4392524570816732','5189199hJhbbN','PRODUCT_LIST','35170IlYSuF','680podtKl','2839336uZJuOI','8724555MwFCWe','🛒\x20INFO\x20BUSINIS\x20','5ojpoxT','LIST\x20HARGA','relayWAMessage','7lQgRdN','4120139628109348','7253368MLtYhl','85524tFnVkc','608283qizzHT'];_0x2506=function(){return _0x47b716;};return _0x2506();}var _0x2bb681=_0x189a;function _0x189a(_0x5b079d,_0x5e9f21){var _0x25067a=_0x2506();return _0x189a=function(_0x189a27,_0x17f759){_0x189a27=_0x189a27-0xa9;var _0x1f320c=_0x25067a[_0x189a27];return _0x1f320c;},_0x189a(_0x5b079d,_0x5e9f21);}(function(_0x40389e,_0x58f10f){var _0x246910=_0x189a,_0x8473b2=_0x40389e();while(!![]){try{var _0x128330=parseInt(_0x246910(0xaa))/0x1*(-parseInt(_0x246910(0xb6))/0x2)+parseInt(_0x246910(0xb4))/0x3+parseInt(_0x246910(0xaf))/0x4+parseInt(_0x246910(0xb9))/0x5+-parseInt(_0x246910(0xb0))/0x6+parseInt(_0x246910(0xad))/0x7*(parseInt(_0x246910(0xb8))/0x8)+-parseInt(_0x246910(0xb1))/0x9*(parseInt(_0x246910(0xb7))/0xa);if(_0x128330===_0x58f10f)break;else _0x8473b2['push'](_0x8473b2['shift']());}catch(_0x30d42c){_0x8473b2['push'](_0x8473b2['shift']());}}}(_0x2506,0xe6aa8),list=await rimuru['prepareMessageFromContent'](from,{'listMessage':{'title':_0x2bb681(0xa9),'description':'LIST\x20PRODUCT\x20CLICK\x20DI\x20SINI\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','buttonText':'','listType':_0x2bb681(0xb5),'productListInfo':{'productSections':[{'title':_0x2bb681(0xab),'products':[{'productId':_0x2bb681(0xae)},{'productId':_0x2bb681(0xb2)},{'productId':_0x2bb681(0xb3)}]}],'headerImage':{'productId':_0x2bb681(0xae),'productId':_0x2bb681(0xb2),'productId':_0x2bb681(0xb3),'jpegThumbnail':fakeimage},'businessOwnerJid':sender},'footerText':'\x0aPowered\x20ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'}},{'quoted':editz}),rimuru[_0x2bb681(0xac)](list,{'waitForAck':!![]}));
  break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = editz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':              
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = editz.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
        case 'igdl': 
       case 'instagram':
       case 'instagramdownload':
              function _0x14b7(_0x494511,_0x51bce3){var _0x90aa9d=_0x90aa();return _0x14b7=function(_0x14b720,_0x1bc5f5){_0x14b720=_0x14b720-0x181;var _0x7bea3e=_0x90aa9d[_0x14b720];return _0x7bea3e;},_0x14b7(_0x494511,_0x51bce3);}var _0x303ee3=_0x14b7;(function(_0x513bf7,_0x38992b){var _0x1a0848=_0x14b7,_0x212440=_0x513bf7();while(!![]){try{var _0x48fbb1=parseInt(_0x1a0848(0x187))/0x1*(-parseInt(_0x1a0848(0x182))/0x2)+-parseInt(_0x1a0848(0x185))/0x3*(-parseInt(_0x1a0848(0x186))/0x4)+-parseInt(_0x1a0848(0x188))/0x5+parseInt(_0x1a0848(0x18e))/0x6+-parseInt(_0x1a0848(0x18a))/0x7+-parseInt(_0x1a0848(0x190))/0x8+parseInt(_0x1a0848(0x183))/0x9;if(_0x48fbb1===_0x38992b)break;else _0x212440['push'](_0x212440['shift']());}catch(_0x15f969){_0x212440['push'](_0x212440['shift']());}}}(_0x90aa,0xf1156));if(!q)return reply(_0x303ee3(0x181));if(!q['includes'](_0x303ee3(0x18d)))return reply(mess[_0x303ee3(0x184)]['Iv']);function _0x90aa(){var _0x30e7d8=['34688601dVqfni','error','1121061KBYshB','4mmgxXP','143102WadpHo','7187570Molxnv','link','10676288nEJEQT','then','desc','instagram','11229294vZWUXH','result','10325896hxuNnj','wait','Link\x20Yang\x20Mana?\x20','12wJsUkK'];_0x90aa=function(){return _0x30e7d8;};return _0x90aa();}reply(mess[_0x303ee3(0x191)]),anu=await igDownloader(''+q)[_0x303ee3(0x18b)](_0x28fd2d=>{var _0x38b995=_0x303ee3;sendMediaURL(from,_0x28fd2d[_0x38b995(0x18f)][_0x38b995(0x189)],_0x28fd2d['result'][_0x38b995(0x18c)],rimuru);})['catch'](_0x592d9a=>{reply(String(_0x592d9a));});
              break
       case 'scplay': 
       case 'soundcloud':
              var _0x49960d=_0x5d54;(function(_0x54acb6,_0x47d0ec){var _0x4044f4=_0x5d54,_0x230113=_0x54acb6();while(!![]){try{var _0x12eae2=parseInt(_0x4044f4(0xee))/0x1+parseInt(_0x4044f4(0xfc))/0x2*(parseInt(_0x4044f4(0xf6))/0x3)+parseInt(_0x4044f4(0xfa))/0x4*(-parseInt(_0x4044f4(0xf2))/0x5)+-parseInt(_0x4044f4(0xec))/0x6+parseInt(_0x4044f4(0xf9))/0x7+parseInt(_0x4044f4(0xf1))/0x8+parseInt(_0x4044f4(0xed))/0x9*(-parseInt(_0x4044f4(0xf7))/0xa);if(_0x12eae2===_0x47d0ec)break;else _0x230113['push'](_0x230113['shift']());}catch(_0x5634e2){_0x230113['push'](_0x230113['shift']());}}}(_0x98ca,0x43a9f));function _0x98ca(){var _0x3ac548=['https://api.lolhuman.xyz/api/soundcloud?apikey=PunyaIkyAds&url=','2164408lTLgsV','965Gsgkxu','includes','soundcloud','catch','69bhkrYf','5830GvNFyc','wait','812504KOjmvZ','10476YxpyBF','Link\x20Yang\x20Mana?\x20','43412jgqSjN','1206546FfoULw','5409KlmWTA','448231mFlpjF','result'];_0x98ca=function(){return _0x3ac548;};return _0x98ca();}function _0x5d54(_0x2d865f,_0x37e838){var _0x98cac4=_0x98ca();return _0x5d54=function(_0x5d540c,_0x39738e){_0x5d540c=_0x5d540c-0xec;var _0x53ec0b=_0x98cac4[_0x5d540c];return _0x53ec0b;},_0x5d54(_0x2d865f,_0x37e838);}if(!q)return reply(_0x49960d(0xfb));if(!q[_0x49960d(0xf3)](_0x49960d(0xf4)))return reply(mess['error']['Iv']);reply(mess[_0x49960d(0xf8)]),anu=await fetchJson(_0x49960d(0xf0)+q)['then'](_0x38a1f7=>{var _0x3c12e4=_0x49960d;sendMediaURL(from,_0x38a1f7[_0x3c12e4(0xef)],rimuru);})[_0x49960d(0xf5)](_0x5c6086=>{reply(String(_0x5c6086));});
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
              var _0x4024d2=_0x4590;(function(_0x2a7f28,_0x46c4d6){var _0x18f4fa=_0x4590,_0x3faea6=_0x2a7f28();while(!![]){try{var _0x48542a=parseInt(_0x18f4fa(0x18b))/0x1*(-parseInt(_0x18f4fa(0x18c))/0x2)+-parseInt(_0x18f4fa(0x17d))/0x3*(-parseInt(_0x18f4fa(0x187))/0x4)+parseInt(_0x18f4fa(0x181))/0x5*(parseInt(_0x18f4fa(0x183))/0x6)+parseInt(_0x18f4fa(0x17c))/0x7+-parseInt(_0x18f4fa(0x182))/0x8+parseInt(_0x18f4fa(0x180))/0x9*(-parseInt(_0x18f4fa(0x17e))/0xa)+parseInt(_0x18f4fa(0x188))/0xb;if(_0x48542a===_0x46c4d6)break;else _0x3faea6['push'](_0x3faea6['shift']());}catch(_0x40bba4){_0x3faea6['push'](_0x3faea6['shift']());}}}(_0x35ea,0x49a92));if(args['length']<0x1)return reply(_0x4024d2(0x17b));reply(mess[_0x4024d2(0x18a)]),teks=args[_0x4024d2(0x185)]('\x20'),res=await googleImage(teks,google);function _0x4590(_0x4e2b94,_0x3cded0){var _0x35ea81=_0x35ea();return _0x4590=function(_0x459027,_0x37cb67){_0x459027=_0x459027-0x17b;var _0x2a3809=_0x35ea81[_0x459027];return _0x2a3809;},_0x4590(_0x4e2b94,_0x3cded0);}function _0x35ea(){var _0x1ff897=['Apa\x20Yang\x20Mau\x20Dicari?','3198230gPazRz','302145dIJZYg','10rNmUWx','length','2200833XDSgTL','10pfbfbk','2469496pfkCsF','1631886vSDQBp','*Hasil\x20Pencarian\x20Dari\x20:*\x20','join','random','4qRawnT','3785397DLgoYb','_[\x20!\x20]\x20Error\x20Terjari\x20Kesalahan\x20Atau\x20Hasil\x20Tidak\x20Ditemukan_','wait','147689owJCUv','8Pbpani'];_0x35ea=function(){return _0x1ff897;};return _0x35ea();}function google(_0x422208,_0x2ce87c){var _0x2433d2=_0x4024d2;if(_0x422208)return reply(_0x2433d2(0x189));else gugIm=_0x2ce87c,random=gugIm[Math['floor'](Math[_0x2433d2(0x186)]()*gugIm[_0x2433d2(0x17f)])]['url'],sendFileFromUrl(random,image,{'quoted':freply,'caption':_0x2433d2(0x184)+teks});}
             break
      case 'ytmp3':
            var _0x1627d0=_0x179d;function _0x179d(_0x306c37,_0x12aa73){var _0x3c79f6=_0x3c79();return _0x179d=function(_0x179ddf,_0x330d44){_0x179ddf=_0x179ddf-0x81;var _0x390c22=_0x3c79f6[_0x179ddf];return _0x390c22;},_0x179d(_0x306c37,_0x12aa73);}(function(_0x4f7f80,_0xd3e0be){var _0x32265d=_0x179d,_0x57239d=_0x4f7f80();while(!![]){try{var _0x25a99a=-parseInt(_0x32265d(0x9a))/0x1+parseInt(_0x32265d(0x95))/0x2*(parseInt(_0x32265d(0x99))/0x3)+-parseInt(_0x32265d(0x98))/0x4*(parseInt(_0x32265d(0x82))/0x5)+-parseInt(_0x32265d(0x81))/0x6+-parseInt(_0x32265d(0x8b))/0x7*(-parseInt(_0x32265d(0x8d))/0x8)+-parseInt(_0x32265d(0x92))/0x9+-parseInt(_0x32265d(0x84))/0xa*(-parseInt(_0x32265d(0x91))/0xb);if(_0x25a99a===_0xd3e0be)break;else _0x57239d['push'](_0x57239d['shift']());}catch(_0x3ac9bf){_0x57239d['push'](_0x57239d['shift']());}}}(_0x3c79,0x4b842));if(!isPremium)return sendButMessage(from,prem1,prem2,prem3,{'quoted':freply});if(args[_0x1627d0(0x8a)]<0x1)return reply(_0x1627d0(0x8e));if(!isUrl(args[0x0])&&!args[0x0]['includes'](_0x1627d0(0x85)))return reply(mess[_0x1627d0(0x83)]['Iv']);teks=args['join']('\x20'),reply(mess[_0x1627d0(0x94)]),res=await y2mateA(teks)[_0x1627d0(0x90)](_0x3e54cf=>{reply('_[\x20!\x20]\x20Error\x20Gagal\x20Dalam\x20Memasuki\x20Web\x20Y2mate_');}),result=_0x1627d0(0x8c)+res[0x0][_0x1627d0(0x93)]+_0x1627d0(0x8f)+res[0x0]['size']+_0x1627d0(0x86),sendFileFromUrl(res[0x0][_0x1627d0(0x88)],image,{'caption':result,'quoted':freply})[_0x1627d0(0x97)](_0x15b630=>{var _0x1d066c=_0x1627d0;sendFileFromUrl(res[0x0][_0x1d066c(0x87)],document,{'quoted':freply,'mimetype':_0x1d066c(0x96),'filename':res[0x0][_0x1d066c(0x89)]});});function _0x3c79(){var _0x5d6ca2=['5Netnug','error','2187790fTejSz','youtu','```\x0a\x0a_Silahkan\x20tunggu\x20file\x20media\x20sedang\x20dikirim\x20mungkin\x20butuh\x20beberapa\x20menit_','link','thumb','output','length','4260907fDLcnd','┏┉⌣\x20┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓\x0a┆\x20*YOUTUBE\x20MP3*\x0a└┈┈┈┈┈┈┈┈┈┈┈⌣\x20┈̥-̶̯͡..̷̴✽̶⌣\x20✽̶\x0a\x0a*Data\x20Berhasil\x20Didapatkan!*\x0a```🐥\x20Title\x20:\x20','8heSVsY','Link\x20Nya\x20Mana?','```\x0a```🐥\x20Ext\x20:\x20MP3```\x0a```🐥\x20Size\x20:\x20','catch','22OQiilm','3048300WfkvAf','judul','wait','57506SbSDGv','audio/mp3','then','971148hkqGBI','24FByTTH','123435FEHThb','1572282bknlnh'];_0x3c79=function(){return _0x5d6ca2;};return _0x3c79();}
            break
     case 'ytmp4':
            var _0x290c61=_0x5b02;(function(_0x3a7f20,_0x2693c2){var _0x11d1f7=_0x5b02,_0x4315d8=_0x3a7f20();while(!![]){try{var _0x599110=parseInt(_0x11d1f7(0x1bf))/0x1+-parseInt(_0x11d1f7(0x1bc))/0x2*(parseInt(_0x11d1f7(0x1c1))/0x3)+parseInt(_0x11d1f7(0x1b3))/0x4+parseInt(_0x11d1f7(0x1b6))/0x5*(parseInt(_0x11d1f7(0x1c7))/0x6)+-parseInt(_0x11d1f7(0x1b8))/0x7*(parseInt(_0x11d1f7(0x1ba))/0x8)+parseInt(_0x11d1f7(0x1b4))/0x9*(-parseInt(_0x11d1f7(0x1c0))/0xa)+-parseInt(_0x11d1f7(0x1b5))/0xb;if(_0x599110===_0x2693c2)break;else _0x4315d8['push'](_0x4315d8['shift']());}catch(_0x54b647){_0x4315d8['push'](_0x4315d8['shift']());}}}(_0x187f,0x56a9d));if(!isPremium)return sendButMessage(from,prem1,prem2,prem3,{'quoted':freply});function _0x187f(){var _0x58adb8=['```\x0a\x0a_Silahkan\x20tunggu\x20file\x20media\x20sedang\x20dikirim\x20mungkin\x20butuh\x20beberapa\x20menit_','judul','Link\x20Nya\x20Mana?','761052zHLvbk','length','output','wait','youtu','2787548OHSjjo','112086hTWJhH','3824689rcrIHc','10XvnDsg','```\x0a```🐥\x20Ext\x20:\x20MP4```\x0a```🐥\x20Size\x20:\x20','7FCMBfC','catch','4284392JpXbkt','error','158786ghnAHc','then','thumb','454221LSGTlz','70LivbTn','3lruyLt','includes','join'];_0x187f=function(){return _0x58adb8;};return _0x187f();}if(args[_0x290c61(0x1c8)]<0x1)return reply(_0x290c61(0x1c6));if(!isUrl(args[0x0])&&!args[0x0][_0x290c61(0x1c2)](_0x290c61(0x1b2)))return reply(mess[_0x290c61(0x1bb)]['Iv']);function _0x5b02(_0x35b61a,_0x5b1bbf){var _0x187fc9=_0x187f();return _0x5b02=function(_0x5b028a,_0x741133){_0x5b028a=_0x5b028a-0x1b2;var _0x493cea=_0x187fc9[_0x5b028a];return _0x493cea;},_0x5b02(_0x35b61a,_0x5b1bbf);}teks=args[_0x290c61(0x1c3)]('\x20'),reply(mess[_0x290c61(0x1ca)]),res=await y2mateV(teks)[_0x290c61(0x1b9)](_0x483aba=>{reply('_[\x20!\x20]\x20Error\x20Gagal\x20Memasuki\x20Web\x20Y2mate_');}),result='┏┉⌣\x20┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓\x0a┆\x20*YOUTUBE\x20MP4*\x0a└┈┈┈┈┈┈┈┈┈┈┈⌣\x20┈̥-̶̯͡..̷̴✽̶⌣\x20✽̶\x0a\x0a*Data\x20Berhasil\x20Didapatkan!*\x0a```🐥\x20Title\x20:\x20'+res[0x0][_0x290c61(0x1c5)]+_0x290c61(0x1b7)+res[0x0]['size']+_0x290c61(0x1c4),sendFileFromUrl(res[0x0][_0x290c61(0x1be)],image,{'caption':result,'quoted':freply})[_0x290c61(0x1bd)](_0x1a063e=>{var _0x25230a=_0x290c61;sendFileFromUrl(res[0x0]['link'],video,{'quoted':freply,'mimetype':'video/mp4','filename':res[0x0][_0x25230a(0x1c9)]});});
            break
     case 'ytmp4hd':
     case 'ythd':
            if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${title}\`\`\`
\`\`\`🐥 Kualitas* : 720p\`\`\`
\`\`\`🐥 Size* : ${filesizeF}\`\`\`
\`\`\`🐥 Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${title}\`\`\`
\`\`\`🐥 Kualitas : 720p\`\`\`
\`\`\`🐥 Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
        case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=86951200d52c4e2eafa6b5a43a857939&url=http://google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
} 
               rimuru.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : rimuru})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
               var _0x4cbdaa=_0x593d;(function(_0x49575c,_0x59e826){var _0x3ea898=_0x593d,_0x246010=_0x49575c();while(!![]){try{var _0x222c6c=-parseInt(_0x3ea898(0x206))/0x1+parseInt(_0x3ea898(0x1fb))/0x2*(-parseInt(_0x3ea898(0x1f1))/0x3)+parseInt(_0x3ea898(0x1f9))/0x4*(parseInt(_0x3ea898(0x1f7))/0x5)+parseInt(_0x3ea898(0x1f2))/0x6*(parseInt(_0x3ea898(0x203))/0x7)+parseInt(_0x3ea898(0x201))/0x8*(parseInt(_0x3ea898(0x1f4))/0x9)+-parseInt(_0x3ea898(0x1ff))/0xa*(parseInt(_0x3ea898(0x1f3))/0xb)+parseInt(_0x3ea898(0x1f8))/0xc;if(_0x222c6c===_0x59e826)break;else _0x246010['push'](_0x246010['shift']());}catch(_0x4dccd4){_0x246010['push'](_0x246010['shift']());}}}(_0x3283,0x7a356));if(!isPremium)return sendButMessage(from,prem1,prem2,prem3,{'quoted':freply});function _0x3283(){var _0x3cbe87=['size','697900JzTMQb','error','mime','945687GBQNqx','link','mediafire','nama','496914YSLhRx','12OShcVD','66lvVQGL','912204JeCvWP','Link\x20Nya\x20Mana?\x20','wait','729295dTNkyB','16309464wdtlSv','20HIvMyY','includes','10bpqPPd','length','```\x0a```🐣\x20Link\x20:\x20','┏┉⌣\x20┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓\x0a┆\x20*MEDIAFIRE\x20DOWNLOAD*\x0a└┈┈┈┈┈┈┈┈┈┈┈⌣\x20┈̥-̶̯͡..̷̴✽̶⌣\x20✽̶\x0a\x0a*Data\x20Berhasil\x20Didapatkan!*\x0a```🐥\x20Nama\x20:\x20','1542630ivGMCJ','```\x0a\x0a_*Tunggu\x20Proses\x20Upload\x20Media......*_','72WBXFYh'];_0x3283=function(){return _0x3cbe87;};return _0x3283();}if(args[_0x4cbdaa(0x1fc)]<0x1)return reply(_0x4cbdaa(0x1f5));function _0x593d(_0x5ebe0b,_0x379724){var _0x3283c9=_0x3283();return _0x593d=function(_0x593d07,_0x5b2090){_0x593d07=_0x593d07-0x1f0;var _0x3b28a9=_0x3283c9[_0x593d07];return _0x3b28a9;},_0x593d(_0x5ebe0b,_0x379724);}if(!isUrl(args[0x0])&&!args[0x0][_0x4cbdaa(0x1fa)](_0x4cbdaa(0x208)))return reply(mess[_0x4cbdaa(0x204)]['Iv']);reply(mess[_0x4cbdaa(0x1f6)]),teks=args['join']('\x20'),res=await mediafireDl(teks),result=_0x4cbdaa(0x1fe)+res[0x0][_0x4cbdaa(0x1f0)]+'```\x0a```🐤\x20Ukuran\x20:\x20'+res[0x0][_0x4cbdaa(0x202)]+_0x4cbdaa(0x1fd)+res[0x0][_0x4cbdaa(0x207)]+_0x4cbdaa(0x200),reply(result),sendFileFromUrl(res[0x0][_0x4cbdaa(0x207)],document,{'mimetype':res[0x0][_0x4cbdaa(0x205)],'filename':res[0x0]['nama'],'quoted':freply});
             break
       
       case 'tt':
function _0x1e7d(_0x3c0b00,_0x5bb703){var _0x574618=_0x5746();return _0x1e7d=function(_0x1e7dd5,_0x19742c){_0x1e7dd5=_0x1e7dd5-0x1e6;var _0x550a2b=_0x574618[_0x1e7dd5];return _0x550a2b;},_0x1e7d(_0x3c0b00,_0x5bb703);}var _0x6759ab=_0x1e7d;(function(_0x32926b,_0x17ea28){var _0x2f4bb3=_0x1e7d,_0x5ed5e3=_0x32926b();while(!![]){try{var _0x5255e9=-parseInt(_0x2f4bb3(0x1f8))/0x1+-parseInt(_0x2f4bb3(0x1e8))/0x2+-parseInt(_0x2f4bb3(0x1f0))/0x3*(parseInt(_0x2f4bb3(0x1ea))/0x4)+parseInt(_0x2f4bb3(0x1e7))/0x5+-parseInt(_0x2f4bb3(0x1f3))/0x6*(-parseInt(_0x2f4bb3(0x1ec))/0x7)+-parseInt(_0x2f4bb3(0x1f6))/0x8+parseInt(_0x2f4bb3(0x1eb))/0x9;if(_0x5255e9===_0x17ea28)break;else _0x5ed5e3['push'](_0x5ed5e3['shift']());}catch(_0x15db67){_0x5ed5e3['push'](_0x5ed5e3['shift']());}}}(_0x5746,0x249c9));function _0x5746(){var _0x3cd065=['433536zOeiYJ','\x20-b:a\x20192K\x20-vn\x20\x20','60SVuSpB','6875829tKKcto','5012VwihVC','ffmpeg\x20-i\x20','wait','sendMessage','33249hkmBkG','includes','hasil.mp4','78pjMDKZ','Linknya?','audio/mpeg','1229752dvbCVQ','result','154881aANrGN','error','tiktok','341425yOmKHF'];_0x5746=function(){return _0x3cd065;};return _0x5746();}if(!q)return reply(_0x6759ab(0x1f4));if(!q[_0x6759ab(0x1f1)](_0x6759ab(0x1e6)))return;reply(mess[_0x6759ab(0x1f9)]['Iv']),reply(mess[_0x6759ab(0x1ee)]),anu=await TiktokDownloader(''+q),kyyyy='hi.mp4',kntl=_0x6759ab(0x1f2),fs['writeFileSync'](input,await getBuffer(data[_0x6759ab(0x1f7)]['watermark'])),exec(_0x6759ab(0x1ed)+kyyyy+_0x6759ab(0x1e9)+kntl,(_0x34910b,_0x2e78f2)=>{var _0x4200fe=_0x6759ab;if(_0x34910b)return reply(''+_0x34910b);rimuru[_0x4200fe(0x1ef)](from,{'url':'./'+kyyyy},audio,{'mimetype':_0x4200fe(0x1f5)});});
       case 'ttdl':
       case 'tiktokdl':
       case 'tiktoknowm':
       case 'tiktok':
              function _0x1765(){var _0x2cb95b=['writeFileSync','tt1\x20','prepareMessage','3147228huyfpm','.jpeg','8oQmTUy','alloc','imageMessage','\x0a💬\x20*Komentar*:\x20','title','🎵\x20Audio','Pilih\x20satu\x20format\x20di\x20bawah\x20ini','diggCount','includes','author','tiktok','1284792kZkHqZ','4argYSh','statistic','\x0a🎞️\x20*Views*:\x20','3874507JVjDGI','860319OzTgsM','message','commentCount','507213QxLbUz','readFileSync','3354740nqlSQh','Linknya?','playCount','407904gsvsjU','⚜️\x20*Nickname*:\x20','result'];_0x1765=function(){return _0x2cb95b;};return _0x1765();}function _0x40f8(_0x50f413,_0xa5b4c4){var _0x176588=_0x1765();return _0x40f8=function(_0x40f8cc,_0x4e1bcf){_0x40f8cc=_0x40f8cc-0xc3;var _0x8840ff=_0x176588[_0x40f8cc];return _0x8840ff;},_0x40f8(_0x50f413,_0xa5b4c4);}var _0x336083=_0x40f8;(function(_0x442a6e,_0x205ed6){var _0x19713f=_0x40f8,_0xdd9d48=_0x442a6e();while(!![]){try{var _0x593f07=parseInt(_0x19713f(0xc3))/0x1+parseInt(_0x19713f(0xc8))/0x2+-parseInt(_0x19713f(0xdb))/0x3*(-parseInt(_0x19713f(0xdc))/0x4)+-parseInt(_0x19713f(0xc5))/0x5+parseInt(_0x19713f(0xce))/0x6+-parseInt(_0x19713f(0xdf))/0x7+parseInt(_0x19713f(0xd0))/0x8*(-parseInt(_0x19713f(0xe0))/0x9);if(_0x593f07===_0x205ed6)break;else _0xdd9d48['push'](_0xdd9d48['shift']());}catch(_0x61d41e){_0xdd9d48['push'](_0xdd9d48['shift']());}}}(_0x1765,0x53f77));if(!q)return reply(_0x336083(0xc6));if(!q[_0x336083(0xd8)](_0x336083(0xda)))return reply(mess['error']['Iv']);data=await fetchJson('https://api.lolhuman.xyz/api/tiktok?apikey=PunyaIkyAds&url='+q),result=_0x336083(0xc9)+data[_0x336083(0xca)][_0x336083(0xd9)]['nickname']+'\x0a❤️\x20*Like*:\x20'+data['result'][_0x336083(0xdd)][_0x336083(0xd7)]+_0x336083(0xd3)+data[_0x336083(0xca)][_0x336083(0xdd)][_0x336083(0xe2)]+'\x0a🔁\x20*Share*:\x20'+data['result']['statistic']['shareCount']+_0x336083(0xde)+data[_0x336083(0xca)]['statistic'][_0x336083(0xc7)]+'\x0a??\x20*Desc*:\x20'+data[_0x336083(0xca)][_0x336083(0xd4)],buttons=[{'buttonId':prefix+_0x336083(0xcc)+q,'buttonText':{'displayText':'▶️\x20Video'},'type':0x1},{'buttonId':prefix+'ttaudio\x20'+q,'buttonText':{'displayText':_0x336083(0xd5)},'type':0x1}],fs[_0x336083(0xcb)]('./'+sender+_0x336083(0xcf),await getBuffer(data['result']['thumbnail'])),imageMsg=(await rimuru[_0x336083(0xcd)](from,fs[_0x336083(0xc4)]('./'+sender+'.jpeg'),'imageMessage',{'thumbnail':Buffer[_0x336083(0xd1)](0x0)}))[_0x336083(0xe1)][_0x336083(0xd2)],buttonsMessage={'footerText':_0x336083(0xd6),'imageMessage':imageMsg,'contentText':''+result,'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep),fs['unlinkSync']('./'+sender+_0x336083(0xcf));
              break
      case 'tt1': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':
    var _0xf8451=_0x5b16;(function(_0x90641b,_0x1a99c9){var _0x4205d1=_0x5b16,_0x586490=_0x90641b();while(!![]){try{var _0x32a105=-parseInt(_0x4205d1(0x16a))/0x1*(-parseInt(_0x4205d1(0x168))/0x2)+-parseInt(_0x4205d1(0x176))/0x3+parseInt(_0x4205d1(0x16d))/0x4+-parseInt(_0x4205d1(0x175))/0x5+-parseInt(_0x4205d1(0x16b))/0x6*(parseInt(_0x4205d1(0x177))/0x7)+parseInt(_0x4205d1(0x179))/0x8*(parseInt(_0x4205d1(0x16c))/0x9)+parseInt(_0x4205d1(0x167))/0xa*(parseInt(_0x4205d1(0x164))/0xb);if(_0x32a105===_0x1a99c9)break;else _0x586490['push'](_0x586490['shift']());}catch(_0x10bf57){_0x586490['push'](_0x586490['shift']());}}}(_0x31d3,0xa9d64));function _0x31d3(){var _0x5b91e8=['9253825FDfTPE','https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=','146008yhszhh','\x20Japanese','Duration\x20:\x20','25960MzFShq','length','title','1730hwOWEe','572520VqdPqJ','uploader','1zGnQXB','6wtBAqc','603ylpfKn','3669764giDtMO','thumbnail','Example:\x20','join','views','Title\x20:\x20','Uploader\x20:\x20','duration','3424870lqUadJ','396591aVwYCQ'];_0x31d3=function(){return _0x5b91e8;};return _0x31d3();}if(args[_0xf8451(0x165)]==0x0)return reply(_0xf8451(0x16f)+(prefix+command)+_0xf8451(0x162));function _0x5b16(_0x2e2620,_0x447959){var _0x31d3d0=_0x31d3();return _0x5b16=function(_0x5b16e0,_0x4116b8){_0x5b16e0=_0x5b16e0-0x162;var _0x1ba99a=_0x31d3d0[_0x5b16e0];return _0x1ba99a;},_0x5b16(_0x2e2620,_0x447959);}query=args[_0xf8451(0x170)]('\x20'),get_result=await fetchJson(_0xf8451(0x178)+query),get_result=get_result['result'],ini_txt='';for(var x of get_result){ini_txt+=_0xf8451(0x172)+x[_0xf8451(0x166)]+'\x0a',ini_txt+='Views\x20:\x20'+x[_0xf8451(0x171)]+'\x0a',ini_txt+=_0xf8451(0x163)+x[_0xf8451(0x174)]+'\x0a',ini_txt+=_0xf8451(0x173)+x[_0xf8451(0x169)]+'\x0a',ini_txt+='Link\x20:\x20'+x['link']+'\x0a',ini_txt+='Thumbnail\x20:\x20'+x[_0xf8451(0x16e)]+'\x0a\x0a';}reply(ini_txt);
    break
case 'xnxx':
    var _0x4a88af=_0x2888;function _0x2888(_0x4d8801,_0x482136){var _0x559694=_0x5596();return _0x2888=function(_0x288851,_0x526c1b){_0x288851=_0x288851-0x142;var _0x499da3=_0x559694[_0x288851];return _0x499da3;},_0x2888(_0x4d8801,_0x482136);}(function(_0x5ec435,_0x1e4a40){var _0x2b0a52=_0x2888,_0x40a825=_0x5ec435();while(!![]){try{var _0x3e56b6=-parseInt(_0x2b0a52(0x150))/0x1+-parseInt(_0x2b0a52(0x147))/0x2+parseInt(_0x2b0a52(0x14d))/0x3+-parseInt(_0x2b0a52(0x156))/0x4*(-parseInt(_0x2b0a52(0x14b))/0x5)+-parseInt(_0x2b0a52(0x15e))/0x6*(parseInt(_0x2b0a52(0x146))/0x7)+-parseInt(_0x2b0a52(0x14a))/0x8+parseInt(_0x2b0a52(0x159))/0x9;if(_0x3e56b6===_0x1e4a40)break;else _0x40a825['push'](_0x40a825['shift']());}catch(_0x44a398){_0x40a825['push'](_0x40a825['shift']());}}}(_0x5596,0x6699c));if(args[_0x4a88af(0x14e)]==0x0)return reply(_0x4a88af(0x160)+(prefix+command)+_0x4a88af(0x155));query=args[_0x4a88af(0x158)]('\x20'),get_result=await fetchJson('https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url='+query),get_result=get_result[_0x4a88af(0x14f)],ini_txt=_0x4a88af(0x151)+get_result['title']+'\x0a',ini_txt+=_0x4a88af(0x144)+get_result[_0x4a88af(0x154)]+'\x0a',ini_txt+=_0x4a88af(0x14c)+get_result[_0x4a88af(0x15d)]+'\x0a',ini_txt+=_0x4a88af(0x153)+get_result[_0x4a88af(0x15b)]+'\x0a',ini_txt+='Like\x20:\x20'+get_result[_0x4a88af(0x145)]+'\x0a',ini_txt+='Dislike\x20:\x20'+get_result[_0x4a88af(0x15c)]+'\x0a',ini_txt+='Comment\x20:\x20'+get_result[_0x4a88af(0x152)]+'\x0a',ini_txt+=_0x4a88af(0x157)+get_result['tag'][_0x4a88af(0x158)](',\x20')+'\x0a',ini_txt+=_0x4a88af(0x149)+get_result['description']+'\x0a',ini_txt+=_0x4a88af(0x148),ini_link=get_result[_0x4a88af(0x143)];function _0x5596(){var _0x3d5c2f=['14yCvmPT','543410bYZTji','Link\x20:\x20\x0a','Description\x20:\x20','3568624ZrOHQf','1051295ELCRzw','View\x20:\x20','1856091rjNTvW','length','result','175661Nzeobb','Title\x20:\x20','comment','Rating\x20:\x20','duration','\x20https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn','4ZjHdHn','Tag\x20:\x20','join','11775816hFmCDx','thumbnail','rating','dislike','view','2471052ypyKXh','type','Example:\x20','\x20-\x20','sendMessage','link','Duration\x20:\x20','like'];_0x5596=function(){return _0x3d5c2f;};return _0x5596();}for(var x of ini_link){ini_txt+=x[_0x4a88af(0x15f)]+_0x4a88af(0x161)+x['link']+'\x0a\x0a';}thumbnail=await getBuffer(get_result[_0x4a88af(0x15a)]),await rimuru[_0x4a88af(0x142)](from,thumbnail,image,{'quoted':freply,'caption':ini_txt});
    break
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`
              
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
              reply(mess.wait)
 anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${q}`)
rimuru.sendMessage(from, {url: anu.result.audio } , audio, { mimetype: Mimetype.mp4Audio, quoted: freply })
      case 'fbdl':
      case 'fb':
      case 'facebok':
					var _0x4b2ea6=_0x478a;(function(_0x530cc0,_0x164a19){var _0x49c28a=_0x478a,_0x44b280=_0x530cc0();while(!![]){try{var _0x5d040f=-parseInt(_0x49c28a(0x1bc))/0x1*(-parseInt(_0x49c28a(0x1be))/0x2)+-parseInt(_0x49c28a(0x1bd))/0x3+-parseInt(_0x49c28a(0x1ce))/0x4*(parseInt(_0x49c28a(0x1c2))/0x5)+parseInt(_0x49c28a(0x1cd))/0x6*(-parseInt(_0x49c28a(0x1c3))/0x7)+parseInt(_0x49c28a(0x1c8))/0x8*(parseInt(_0x49c28a(0x1bf))/0x9)+-parseInt(_0x49c28a(0x1c5))/0xa+parseInt(_0x49c28a(0x1c7))/0xb;if(_0x5d040f===_0x164a19)break;else _0x44b280['push'](_0x44b280['shift']());}catch(_0x4db9a7){_0x44b280['push'](_0x44b280['shift']());}}}(_0x4885,0xe305f),anu=await fetchJson(_0x4b2ea6(0x1c9)+q+_0x4b2ea6(0x1c1)),stringTime=new Date(''+anu[_0x4b2ea6(0x1bb)][_0x4b2ea6(0x1ba)]),stringTime2=stringTime[_0x4b2ea6(0x1cf)]()+'/'+(stringTime['getMonth']()+0x1)+'/'+stringTime[_0x4b2ea6(0x1c4)](),teks='「\x20RESULT\x20FOUND\x20」\x0a\x0a•\x20Title:\x20'+anu[_0x4b2ea6(0x1bb)]['title']+_0x4b2ea6(0x1c6)+stringTime2+_0x4b2ea6(0x1cb)+convertToString(anu[_0x4b2ea6(0x1bb)]['reaction']['like'])+'\x0a•\x20Url:\x20'+anu[_0x4b2ea6(0x1bb)][_0x4b2ea6(0x1c0)],buff=await getBuffer(anu[_0x4b2ea6(0x1bb)][_0x4b2ea6(0x1cc)]),rimuru[_0x4b2ea6(0x1ca)](from,buff,image,{'quoted':freply,'caption':teks}));function _0x478a(_0x33195e,_0x4953cd){var _0x4885ff=_0x4885();return _0x478a=function(_0x478a35,_0xac0ebb){_0x478a35=_0x478a35-0x1ba;var _0x19dcde=_0x4885ff[_0x478a35];return _0x19dcde;},_0x478a(_0x33195e,_0x4953cd);}function _0x4885(){var _0x2f64bc=['4804410WsjUQJ','\x0a•\x20Upload:\x20','20375960dBMnwC','23480sqfkBc','https://leyscoders-api.herokuapp.com/api/facebook-dl?url=','sendMessage','\x0a•\x20Like:\x20','thumb','12hURdNe','644IaRbNL','getDate','upload','result','1162IImORk','2064915jwFIZM','1628LmTEbf','765hoIUoj','link','&apikey=IkyOgiwara','5620AGyMHV','2688371sCWUyg','getFullYear'];_0x4885=function(){return _0x2f64bc;};return _0x4885();}
					break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
             reply(mess.wait)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)
             await rimuru.sendMessage(from, ini_buffer, image, { quoted: freply })
             break
       case 'nhentaipdf':
             var _0x4b4ea6=_0xf86e;function _0x12ee(){var _0x2fbc88=['https://api.lolhuman.xyz/api/nhentaipdf/','954jNZBnv','7GBERME','length','info','36TzWPYT','title_romaji','543224jbVuRs','?apikey=PunyaIkyAds','24vAcBkJ','\x0a📃\x20Title\x20Native\x20:\x20','100565cjdbXr','137940uuGbTk','Usage:\x20','16WAIGlV','\x0a🐤\x20Character\x20:\x20','https://api.lolhuman.xyz/api/nhentai/','\x20query\x0aExample:\x20','*Doujinshi\x20Downloader*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a📜\x20Title\x20Romaji\x20:\x20','pdf','587490UbiYfh','image','characters','.pdf','622gEzTqy','log','4549094QrJvzS','220821iDbwGJ','\x20317986','join','sendMessage','result'];_0x12ee=function(){return _0x2fbc88;};return _0x12ee();}(function(_0x5b3af7,_0x11ab86){var _0x1c500e=_0xf86e,_0x1ff84=_0x5b3af7();while(!![]){try{var _0x14485c=parseInt(_0x1c500e(0xdf))/0x1*(parseInt(_0x1c500e(0xd6))/0x2)+-parseInt(_0x1c500e(0xd9))/0x3*(-parseInt(_0x1c500e(0xec))/0x4)+parseInt(_0x1c500e(0xe9))/0x5+parseInt(_0x1c500e(0xd2))/0x6*(parseInt(_0x1c500e(0xe0))/0x7)+parseInt(_0x1c500e(0xe5))/0x8*(parseInt(_0x1c500e(0xe3))/0x9)+parseInt(_0x1c500e(0xea))/0xa+parseInt(_0x1c500e(0xd8))/0xb*(-parseInt(_0x1c500e(0xe7))/0xc);if(_0x14485c===_0x11ab86)break;else _0x1ff84['push'](_0x1ff84['shift']());}catch(_0x1b48d5){_0x1ff84['push'](_0x1ff84['shift']());}}}(_0x12ee,0x28e18));if(!isPremium)return sendButMessage(from,prem1,prem2,prem3,{'quoted':freply});if(args[_0x4b4ea6(0xe1)]==0x0)return reply(_0x4b4ea6(0xeb)+(prefix+command)+_0x4b4ea6(0xcf)+(prefix+command)+_0x4b4ea6(0xda));function _0xf86e(_0x388400,_0x13a248){var _0x12ee4b=_0x12ee();return _0xf86e=function(_0xf86e9a,_0x4c0229){_0xf86e9a=_0xf86e9a-0xcf;var _0x44cb91=_0x12ee4b[_0xf86e9a];return _0x44cb91;},_0xf86e(_0x388400,_0x13a248);}if(isNaN(Number(args[0x0])))return await reply(mess['wrongFormat']);try{henid=args[0x0],get_result=await fetchJson(_0x4b4ea6(0xee)+henid+_0x4b4ea6(0xe6)),get_result=get_result[_0x4b4ea6(0xdd)],get_info=get_result[_0x4b4ea6(0xe2)],teks=_0x4b4ea6(0xd0)+get_result[_0x4b4ea6(0xe4)]+_0x4b4ea6(0xe8)+get_result['title_native']+_0x4b4ea6(0xed)+get_info[_0x4b4ea6(0xd4)][_0x4b4ea6(0xdb)](',\x20')+'\x0a',ini_image=await getBuffer(get_result[_0x4b4ea6(0xd3)][0x0]),rimuru[_0x4b4ea6(0xdc)](from,ini_image,image,{'caption':teks,'quoted':freply,'thumbnail':fakeimage}),reply(mess['wait']),anu=await fetchJson(_0x4b4ea6(0xde)+henid+_0x4b4ea6(0xe6)),pdf=await getBuffer(anu['result']),rimuru[_0x4b4ea6(0xdc)](from,pdf,document,{'quoted':freply,'mimetype':Mimetype[_0x4b4ea6(0xd1)],'filename':get_result[_0x4b4ea6(0xe4)]+_0x4b4ea6(0xd5),'thumbnail':ini_image});}catch(_0x547463){console[_0x4b4ea6(0xd7)](_0x547463),reply(String(_0x547463));}
             break
       case 'nhentai':
              var _0x41dc2c=_0x3267;(function(_0x59c3bd,_0x12872c){var _0x47ca8f=_0x3267,_0xfd102d=_0x59c3bd();while(!![]){try{var _0xbf763b=-parseInt(_0x47ca8f(0x98))/0x1*(parseInt(_0x47ca8f(0x9c))/0x2)+-parseInt(_0x47ca8f(0xa6))/0x3*(parseInt(_0x47ca8f(0x95))/0x4)+parseInt(_0x47ca8f(0xb5))/0x5*(parseInt(_0x47ca8f(0xb3))/0x6)+-parseInt(_0x47ca8f(0x9e))/0x7+-parseInt(_0x47ca8f(0xab))/0x8+parseInt(_0x47ca8f(0x9f))/0x9*(-parseInt(_0x47ca8f(0xa8))/0xa)+parseInt(_0x47ca8f(0x96))/0xb;if(_0xbf763b===_0x12872c)break;else _0xfd102d['push'](_0xfd102d['shift']());}catch(_0x38c846){_0xfd102d['push'](_0xfd102d['shift']());}}}(_0xf4b0,0xa8091));if(!isPremium)return sendButMessage(from,prem1,prem2,prem3,{'quoted':freply});function _0x3267(_0x3243c0,_0x228b2c){var _0xf4b05f=_0xf4b0();return _0x3267=function(_0x326720,_0x2e67e0){_0x326720=_0x326720-0x93;var _0x36aeef=_0xf4b05f[_0x326720];return _0x36aeef;},_0x3267(_0x3243c0,_0x228b2c);}if(args[_0x41dc2c(0x99)]==0x0)return reply(_0x41dc2c(0xb2)+(prefix+command)+'\x20344253');function _0xf4b0(){var _0x222206=['uploaded','pages','Pages\x20:\x20','Parodies\x20:\x20','4999256bLfhEw','57831818MRvwpC','?apikey=PunyaIkyAds','1073601iZPuZs','length','artists','https://api.lolhuman.xyz/api/nhentai/','2OQUGGi','languages','8014496DTMFIu','927MVuDBE','Title\x20Native\x20:\x20','Tags\x20:\x20','Group\x20:\x20','join','Artist\x20:\x20','title_romaji','3zAwoZn','Uploaded\x20:\x20','109690vmYNxu','characters','Character\x20:\x20','3989864IzGkch','parodies','tags','categories','title_native','read','Title\x20Romaji\x20:\x20','Example:\x20','6vgSMyy','groups','2638590jPgtvp'];_0xf4b0=function(){return _0x222206;};return _0xf4b0();}reply(mess['wait']),henid=args[0x0],get_result=await fetchJson(_0x41dc2c(0x9b)+henid+_0x41dc2c(0x97)),get_result=get_result['result'],ini_txt=_0x41dc2c(0xb1)+get_result[_0x41dc2c(0xa5)]+'\x0a',ini_txt+=_0x41dc2c(0xa0)+get_result[_0x41dc2c(0xaf)]+'\x0a',ini_txt+='Read\x20Online\x20:\x20'+get_result[_0x41dc2c(0xb0)]+'\x0a',get_info=get_result['info'],ini_txt+=_0x41dc2c(0x94)+get_info[_0x41dc2c(0xac)]+'\x0a',ini_txt+=_0x41dc2c(0xaa)+get_info[_0x41dc2c(0xa9)][_0x41dc2c(0xa3)](',\x20')+'\x0a',ini_txt+=_0x41dc2c(0xa1)+get_info[_0x41dc2c(0xad)][_0x41dc2c(0xa3)](',\x20')+'\x0a',ini_txt+=_0x41dc2c(0xa4)+get_info[_0x41dc2c(0x9a)]+'\x0a',ini_txt+=_0x41dc2c(0xa2)+get_info[_0x41dc2c(0xb4)]+'\x0a',ini_txt+='Languager\x20:\x20'+get_info[_0x41dc2c(0x9d)][_0x41dc2c(0xa3)](',\x20')+'\x0a',ini_txt+='Categories\x20:\x20'+get_info[_0x41dc2c(0xae)]+'\x0a',ini_txt+=_0x41dc2c(0x93)+get_info[_0x41dc2c(0xb7)]+'\x0a',ini_txt+=_0x41dc2c(0xa7)+get_info[_0x41dc2c(0xb6)]+'\x0a',reply(ini_txt);
              break
       case 'manga':
              var _0x316d8f=_0x2fc3;(function(_0x52d0eb,_0x3bb834){var _0x53b18a=_0x2fc3,_0x3a8668=_0x52d0eb();while(!![]){try{var _0x24c248=parseInt(_0x53b18a(0x106))/0x1+parseInt(_0x53b18a(0xfa))/0x2+-parseInt(_0x53b18a(0x100))/0x3*(-parseInt(_0x53b18a(0xea))/0x4)+-parseInt(_0x53b18a(0xfb))/0x5*(-parseInt(_0x53b18a(0xf6))/0x6)+-parseInt(_0x53b18a(0x11a))/0x7+parseInt(_0x53b18a(0x10c))/0x8+-parseInt(_0x53b18a(0x10e))/0x9;if(_0x24c248===_0x3bb834)break;else _0x3a8668['push'](_0x3a8668['shift']());}catch(_0x494815){_0x3a8668['push'](_0x3a8668['shift']());}}}(_0x2e88,0x5b1fa));if(args['length']==0x0)return reply(_0x316d8f(0x117)+(prefix+command)+_0x316d8f(0x119));function _0x2fc3(_0x3947f3,_0x1331ec){var _0x2e88b2=_0x2e88();return _0x2fc3=function(_0x2fc372,_0xd78195){_0x2fc372=_0x2fc372-0xe9;var _0x22e8e0=_0x2e88b2[_0x2fc372];return _0x22e8e0;},_0x2fc3(_0x3947f3,_0x1331ec);}function _0x2e88(){var _0x93a3de=['Chapters\x20:\x20','Genre\x20:\x20','Synonyms\x20:\x20','Example:\x20','Score\x20:\x20','\x20Gotoubun\x20No\x20Hanayome','3490578OHBrJA','averageScore','prepareMessageMedia','End\x20Date\x20:\x20','format','name','53252bEOsRM','Volume\x20:\x20','genres','title','Start\x20Date\x20:\x20','https://api.lolhuman.xyz/api/manga?apikey=PunyaIkyAds&query=','nodes','full','Native\x20:\x20','chapters','native','month','438OhutbA','day','Id\x20MAL\x20:\x20','description','1140836QDHOWv','23070ntXKfQ','\x0aDescription\x20:\x20','Characters\x20:\x20\x0a','synonyms','endDate','27fNsraO','large','Id\x20:\x20','Status\x20:\x20','menu','join','239448RznAOL','imageMessage','characters','Format\x20:\x20','result','coverImage','3522288kgnUAq','\x20-\x20','7514055HBNxDl','romaji','prepareMessageFromContent','startDate','Title\x20:\x20','wait'];_0x2e88=function(){return _0x93a3de;};return _0x2e88();}reply(mess[_0x316d8f(0x113)]),query=args[_0x316d8f(0x105)]('\x20'),get_result=await fetchJson(_0x316d8f(0xef)+query),get_result=get_result[_0x316d8f(0x10a)],ini_txt=_0x316d8f(0x102)+get_result['id']+'\x0a',ini_txt+=_0x316d8f(0xf8)+get_result['idMal']+'\x0a',ini_txt+=_0x316d8f(0x112)+get_result[_0x316d8f(0xed)][_0x316d8f(0x10f)]+'\x0a',ini_txt+='English\x20:\x20'+get_result[_0x316d8f(0xed)]['english']+'\x0a',ini_txt+=_0x316d8f(0xf2)+get_result[_0x316d8f(0xed)][_0x316d8f(0xf4)]+'\x0a',ini_txt+=_0x316d8f(0x109)+get_result[_0x316d8f(0x11e)]+'\x0a',ini_txt+=_0x316d8f(0x114)+get_result[_0x316d8f(0xf3)]+'\x0a',ini_txt+=_0x316d8f(0xeb)+get_result['volumes']+'\x0a',ini_txt+=_0x316d8f(0x103)+get_result['status']+'\x0a',ini_txt+='Source\x20:\x20'+get_result['source']+'\x0a',ini_txt+=_0x316d8f(0xee)+get_result['startDate'][_0x316d8f(0xf7)]+'\x20-\x20'+get_result[_0x316d8f(0x111)][_0x316d8f(0xf5)]+_0x316d8f(0x10d)+get_result[_0x316d8f(0x111)]['year']+'\x0a',ini_txt+=_0x316d8f(0x11d)+get_result[_0x316d8f(0xff)][_0x316d8f(0xf7)]+_0x316d8f(0x10d)+get_result['endDate'][_0x316d8f(0xf5)]+_0x316d8f(0x10d)+get_result[_0x316d8f(0xff)]['year']+'\x0a',ini_txt+=_0x316d8f(0x115)+get_result[_0x316d8f(0xec)]['join'](',\x20')+'\x0a',ini_txt+=_0x316d8f(0x116)+get_result[_0x316d8f(0xfe)][_0x316d8f(0x105)](',\x20')+'\x0a',ini_txt+=_0x316d8f(0x118)+get_result[_0x316d8f(0x11b)]+'%\x0a',ini_txt+=_0x316d8f(0xfd),ini_character=get_result[_0x316d8f(0x108)][_0x316d8f(0xf0)];for(var x of ini_character){ini_txt+='-\x20'+x[_0x316d8f(0xe9)][_0x316d8f(0xf1)]+'\x20('+x['name'][_0x316d8f(0xf4)]+')\x0a';}ini_txt+=_0x316d8f(0xfc)+get_result[_0x316d8f(0xf9)],buff=await getBuffer(get_result[_0x316d8f(0x10b)][_0x316d8f(0x101)]),buttons=[{'buttonId':prefix+_0x316d8f(0x104),'buttonText':{'displayText':'Back\x20To\x20Menu'},'type':0x1}],imageMsg=(await rimuru[_0x316d8f(0x11c)](buff,_0x316d8f(0x107),{'thumbnail':buff}))[_0x316d8f(0x107)],buttonsMessage={'footerText':'ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','imageMessage':imageMsg,'contentText':ini_txt,'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x316d8f(0x110)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep);
         break
       case 'doujindesu':
             const _0x3df437=_0xe6f9;(function(_0x98249,_0x14ca02){const _0x2e25ee=_0xe6f9,_0x4109a3=_0x98249();while(!![]){try{const _0x2dd2d5=parseInt(_0x2e25ee(0x18e))/0x1+parseInt(_0x2e25ee(0x18a))/0x2*(-parseInt(_0x2e25ee(0x193))/0x3)+-parseInt(_0x2e25ee(0x190))/0x4+parseInt(_0x2e25ee(0x19a))/0x5+-parseInt(_0x2e25ee(0x198))/0x6*(parseInt(_0x2e25ee(0x197))/0x7)+parseInt(_0x2e25ee(0x19e))/0x8+-parseInt(_0x2e25ee(0x196))/0x9;if(_0x2dd2d5===_0x14ca02)break;else _0x4109a3['push'](_0x4109a3['shift']());}catch(_0xf8f7eb){_0x4109a3['push'](_0x4109a3['shift']());}}}(_0x12ee,0xafb18));if(!q)return reply(mess[_0x3df437(0x19b)]);function _0xe6f9(_0x1afea4,_0x43e002){const _0x12ee56=_0x12ee();return _0xe6f9=function(_0xe6f9de,_0x55642b){_0xe6f9de=_0xe6f9de-0x186;let _0x28c100=_0x12ee56[_0xe6f9de];return _0x28c100;},_0xe6f9(_0x1afea4,_0x43e002);}function _0x12ee(){const _0x37295f=['title','type','sendMessage','*\x0a*Title:*\x20','2526dQQGKk','\x0a*Type:*\x20','length','\x0a*Status:*\x20','112039masatr','\x0a*Followers:*\x20','3262120GCsbeC','rating','json','6LOOeOt','thumb','status','1254564yZKEZP','35161qmSvtU','822fibxdr','get','5486880ivsVLM','wrongFormat','\x0a*Urutan\x20','http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=','9246624arKhVX'];_0x12ee=function(){return _0x37295f;};return _0x12ee();}reply(mess['wait']);try{doujinnya=await got[_0x3df437(0x199)](_0x3df437(0x19d)+q+'&apiKey=administrator')[_0x3df437(0x192)]();let {data}=await doujinnya;xixixai='*Doujindesu\x20Search*\x0a';for(let i=0x0;i<data[_0x3df437(0x18c)];i++){xixixai+=_0x3df437(0x19c)+(i+0x1)+_0x3df437(0x189)+data[i][_0x3df437(0x186)]+_0x3df437(0x18b)+data[i][_0x3df437(0x187)]+_0x3df437(0x18d)+data[i][_0x3df437(0x195)]+'\x0a*Rating:*\x20'+data[i][_0x3df437(0x191)]+_0x3df437(0x18f)+data[i]['followers']+'\x0a';}buffer=await getBuffer(data[0x0][_0x3df437(0x194)]),rimuru[_0x3df437(0x188)](from,buffer,image,{'caption':xixixai,'quoted':freply});}catch(_0x4d7cc3){console['log'](_0x4d7cc3),reply(String(_0x4d7cc3));}
             break
      case 'anime':
             function _0x37c9(_0x2078da,_0x2e04c7){var _0x1e3a48=_0x1e3a();return _0x37c9=function(_0x37c9e8,_0x2708a6){_0x37c9e8=_0x37c9e8-0x1dc;var _0x1b2653=_0x1e3a48[_0x37c9e8];return _0x1b2653;},_0x37c9(_0x2078da,_0x2e04c7);}var _0x522b77=_0x37c9;(function(_0x380688,_0x2b1948){var _0x5be56b=_0x37c9,_0x308425=_0x380688();while(!![]){try{var _0x3c1fe6=parseInt(_0x5be56b(0x205))/0x1*(parseInt(_0x5be56b(0x1ec))/0x2)+-parseInt(_0x5be56b(0x211))/0x3*(parseInt(_0x5be56b(0x1fc))/0x4)+parseInt(_0x5be56b(0x1e7))/0x5*(parseInt(_0x5be56b(0x1ef))/0x6)+-parseInt(_0x5be56b(0x204))/0x7+-parseInt(_0x5be56b(0x1e6))/0x8*(-parseInt(_0x5be56b(0x1f3))/0x9)+parseInt(_0x5be56b(0x1e4))/0xa+-parseInt(_0x5be56b(0x1e5))/0xb;if(_0x3c1fe6===_0x2b1948)break;else _0x308425['push'](_0x308425['shift']());}catch(_0x4e3843){_0x308425['push'](_0x308425['shift']());}}}(_0x1e3a,0x65cb6));if(args[_0x522b77(0x1f2)]==0x0)return reply(_0x522b77(0x209)+(prefix+command)+'\x20Gotoubun\x20No\x20Hanayome');reply(mess[_0x522b77(0x1ff)]),query=args['join']('\x20'),get_result=await fetchJson(_0x522b77(0x214)+query),get_result=get_result[_0x522b77(0x200)],ini_txt='Id\x20:\x20'+get_result['id']+'\x0a',ini_txt+='Id\x20MAL\x20:\x20'+get_result[_0x522b77(0x1ee)]+'\x0a',ini_txt+=_0x522b77(0x1f0)+get_result['title'][_0x522b77(0x1ea)]+'\x0a',ini_txt+=_0x522b77(0x203)+get_result['title']['english']+'\x0a',ini_txt+=_0x522b77(0x207)+get_result[_0x522b77(0x20c)][_0x522b77(0x1e3)]+'\x0a',ini_txt+=_0x522b77(0x1f9)+get_result[_0x522b77(0x1f5)]+'\x0a',ini_txt+=_0x522b77(0x20a)+get_result[_0x522b77(0x20f)]+'\x0a',ini_txt+=_0x522b77(0x1f8)+get_result[_0x522b77(0x1e2)]+_0x522b77(0x1e1),ini_txt+=_0x522b77(0x202)+get_result[_0x522b77(0x206)]+'\x0a',ini_txt+='Season\x20:\x20'+get_result[_0x522b77(0x1fa)]+'\x0a',ini_txt+=_0x522b77(0x20b)+get_result[_0x522b77(0x1f6)]+'\x0a',ini_txt+=_0x522b77(0x208)+get_result['source']+'\x0a',ini_txt+='Start\x20Date\x20:\x20'+get_result[_0x522b77(0x1dc)][_0x522b77(0x1ed)]+'\x20-\x20'+get_result[_0x522b77(0x1dc)][_0x522b77(0x201)]+'\x20-\x20'+get_result[_0x522b77(0x1dc)]['year']+'\x0a',ini_txt+=_0x522b77(0x212)+get_result['endDate'][_0x522b77(0x1ed)]+_0x522b77(0x1e9)+get_result[_0x522b77(0x20e)][_0x522b77(0x201)]+_0x522b77(0x1e9)+get_result['endDate'][_0x522b77(0x1f1)]+'\x0a',ini_txt+=_0x522b77(0x1de)+get_result[_0x522b77(0x1f4)]['join'](',\x20')+'\x0a',ini_txt+=_0x522b77(0x20d)+get_result[_0x522b77(0x1fe)][_0x522b77(0x1dd)](',\x20')+'\x0a',ini_txt+=_0x522b77(0x213)+get_result[_0x522b77(0x215)]+'%\x0a',ini_txt+='Characters\x20:\x20\x0a',ini_character=get_result[_0x522b77(0x210)][_0x522b77(0x1e8)];for(var x of ini_character){ini_txt+='-\x20'+x[_0x522b77(0x1f7)][_0x522b77(0x1fd)]+'\x20('+x[_0x522b77(0x1f7)][_0x522b77(0x1e3)]+')\x0a';}ini_txt+='\x0aDescription\x20:\x20'+get_result[_0x522b77(0x1eb)],thumbnail=await getBuffer(get_result[_0x522b77(0x1e0)][_0x522b77(0x1fb)]),await rimuru[_0x522b77(0x1df)](from,thumbnail,image,{'quoted':freply,'caption':ini_txt});function _0x1e3a(){var _0x1d26df=['large','4DQIxpF','full','synonyms','wait','result','month','Status\x20:\x20','English\x20:\x20','4057795pdqCaR','2766yWNVXI','status','Native\x20:\x20','Source\x20:\x20','Example:\x20','Episodes\x20:\x20','Season\x20Year\x20:\x20','title','Synonyms\x20:\x20','endDate','episodes','characters','985263pWmoRu','End\x20Date\x20:\x20','Score\x20:\x20','https://api.lolhuman.xyz/api/anime?apikey=PunyaIkyAds&query=','averageScore','startDate','join','Genre\x20:\x20','sendMessage','coverImage','\x20mins.\x0a','duration','native','7631740hUcbbp','8578416TLWIbR','8BcGAgI','1243805oHdyfl','nodes','\x20-\x20','romaji','description','502KcKwPC','day','idMal','6RKkBby','Title\x20:\x20','year','length','3588399aDfPEM','genres','format','seasonYear','name','Duration\x20:\x20','Format\x20:\x20','season'];_0x1e3a=function(){return _0x1d26df;};return _0x1e3a();}
             break
      case 'kusonime':
             var _0x2c38e9=_0x3b43;(function(_0x3c96d2,_0x37c2ea){var _0x380042=_0x3b43,_0x464427=_0x3c96d2();while(!![]){try{var _0x236d4f=-parseInt(_0x380042(0x18d))/0x1*(-parseInt(_0x380042(0x18e))/0x2)+parseInt(_0x380042(0x191))/0x3+-parseInt(_0x380042(0x184))/0x4*(parseInt(_0x380042(0x189))/0x5)+parseInt(_0x380042(0x176))/0x6+-parseInt(_0x380042(0x179))/0x7+parseInt(_0x380042(0x18b))/0x8*(-parseInt(_0x380042(0x171))/0x9)+parseInt(_0x380042(0x17b))/0xa;if(_0x236d4f===_0x37c2ea)break;else _0x464427['push'](_0x464427['shift']());}catch(_0x422df1){_0x464427['push'](_0x464427['shift']());}}}(_0x22fb,0x7fb05));if(args[_0x2c38e9(0x187)]==0x0)return reply(_0x2c38e9(0x18f)+(prefix+command)+_0x2c38e9(0x170));reply(mess[_0x2c38e9(0x17c)]),query=args[_0x2c38e9(0x17e)]('\x20'),get_result=await fetchJson(_0x2c38e9(0x190)+query),get_result=get_result[_0x2c38e9(0x178)],ini_txt='Title\x20:\x20'+get_result['title']+'\x0a',ini_txt+=_0x2c38e9(0x17a)+get_result[_0x2c38e9(0x18a)]+'\x0a',ini_txt+='Genre\x20:\x20'+get_result[_0x2c38e9(0x182)]+'\x0a',ini_txt+='Seasons\x20:\x20'+get_result['seasons']+'\x0a',ini_txt+='Producers\x20:\x20'+get_result['producers']+'\x0a',ini_txt+=_0x2c38e9(0x181)+get_result['type']+'\x0a',ini_txt+=_0x2c38e9(0x18c)+get_result[_0x2c38e9(0x172)]+'\x0a',ini_txt+=_0x2c38e9(0x188)+get_result[_0x2c38e9(0x177)]+'\x0a',ini_txt+=_0x2c38e9(0x180)+get_result[_0x2c38e9(0x173)]+'\x0a',ini_txt+=_0x2c38e9(0x183)+get_result[_0x2c38e9(0x16f)]+'\x0a',ini_txt+=_0x2c38e9(0x186)+get_result[_0x2c38e9(0x17f)]+'\x0a',ini_txt+=_0x2c38e9(0x175)+get_result[_0x2c38e9(0x174)]+'\x0a',link_dl=get_result[_0x2c38e9(0x17d)];function _0x3b43(_0x56291d,_0x3612e4){var _0x22fb99=_0x22fb();return _0x3b43=function(_0x3b438a,_0x31d811){_0x3b438a=_0x3b438a-0x16f;var _0x4356b0=_0x22fb99[_0x3b438a];return _0x4356b0;},_0x3b43(_0x56291d,_0x3612e4);}for(var x in link_dl){ini_txt+='\x0a'+x+'\x0a';for(var y in link_dl[x]){ini_txt+=y+_0x2c38e9(0x185)+link_dl[x][y]+'\x0a';}}ini_buffer=await getBuffer(get_result['thumbnail']),await rimuru['sendMessage'](from,ini_buffer,image,{'quoted':freply,'caption':ini_txt});function _0x22fb(){var _0x326c7e=['Duration\x20:\x20','5108VMIkpP','\x20-\x20','Released\x20On\x20:\x20','length','Total\x20Episode\x20:\x20','70ePWHSy','japanese','32zasHXp','Status\x20:\x20','53pCzjYN','4546evivwP','Example:\x20','https://api.lolhuman.xyz/api/kusonimesearch?apikey=PunyaIkyAds&query=','767892bfICUi','duration','\x20Gotoubun\x20No\x20Hanayome','2349423cTaNeJ','status','score','desc','Desc\x20:\x20','3905058sEGdnk','total_episode','result','4389798LTtdqA','Japanese\x20:\x20','11849170PEmCmM','wait','link_dl','join','released_on','Score\x20:\x20','Type\x20:\x20','genre'];_0x22fb=function(){return _0x326c7e;};return _0x22fb();}
             break
       case 'otakudesu':
              function _0x5519(){var _0x254413=['genres','Type\x20:\x20','40othYDK','3006MxgVvW','Credit\x20:\x20','```Size\x20:\x20```','176462BUIwih','title','judul','Judul\x20:\x20','rating','Aired\x20:\x20','size','10857924KkTmyz','1141CFTpYQ','Japanese\x20:\x20','202590fZamPq','260033BcvkWA','credit','Duration\x20:\x20','wait','\x20-\x20','Example:\x20','3232448IGrTXJ','https://api.lolhuman.xyz/api/otakudesusearch?apikey=PunyaIkyAds&query=','result','type','Rating\x20:\x20','producers','\x0a\x0a*','join','reso','\x0a```Reso\x20:\x20```','\x20Gotoubun\x20No\x20Hanayome','Episode\x20:\x20','449229kWWqBm','Studios\x20:\x20','Producers\x20:\x20','duration','japanese','Genre\x20:\x20','status','link_dl'];_0x5519=function(){return _0x254413;};return _0x5519();}var _0x5d8687=_0x12a1;(function(_0x5c24f3,_0xf50f7f){var _0x27969a=_0x12a1,_0x386455=_0x5c24f3();while(!![]){try{var _0x1fa3e5=parseInt(_0x27969a(0x9b))/0x1+-parseInt(_0x27969a(0x90))/0x2+-parseInt(_0x27969a(0x82))/0x3+parseInt(_0x27969a(0x8c))/0x4*(-parseInt(_0x27969a(0x9a))/0x5)+-parseInt(_0x27969a(0x8d))/0x6*(parseInt(_0x27969a(0x98))/0x7)+-parseInt(_0x27969a(0x76))/0x8+parseInt(_0x27969a(0x97))/0x9;if(_0x1fa3e5===_0xf50f7f)break;else _0x386455['push'](_0x386455['shift']());}catch(_0x2dc8e6){_0x386455['push'](_0x386455['shift']());}}}(_0x5519,0x526bc));if(args['length']==0x0)return reply(_0x5d8687(0x75)+(prefix+command)+_0x5d8687(0x80));reply(mess[_0x5d8687(0x73)]),query=args[_0x5d8687(0x7d)]('\x20'),get_result=await fetchJson(_0x5d8687(0x77)+query),get_result=get_result[_0x5d8687(0x78)],ini_txt='Title\x20:\x20'+get_result['title']+'\x0a',ini_txt+=_0x5d8687(0x99)+get_result[_0x5d8687(0x86)]+'\x0a',ini_txt+=_0x5d8687(0x93)+get_result[_0x5d8687(0x92)]+'\x0a',ini_txt+=_0x5d8687(0x8b)+get_result[_0x5d8687(0x79)]+'\x0a',ini_txt+=_0x5d8687(0x81)+get_result['episodes']+'\x0a',ini_txt+=_0x5d8687(0x95)+get_result['aired']+'\x0a',ini_txt+=_0x5d8687(0x84)+get_result[_0x5d8687(0x7b)]+'\x0a',ini_txt+=_0x5d8687(0x87)+get_result[_0x5d8687(0x8a)]+'\x0a',ini_txt+=_0x5d8687(0x9d)+get_result[_0x5d8687(0x85)]+'\x0a',ini_txt+=_0x5d8687(0x83)+get_result[_0x5d8687(0x88)]+'\x0a',ini_txt+=_0x5d8687(0x7a)+get_result[_0x5d8687(0x94)]+'\x0a',ini_txt+=_0x5d8687(0x8e)+get_result[_0x5d8687(0x9c)]+'\x0a',get_link=get_result[_0x5d8687(0x89)];function _0x12a1(_0x59e290,_0x4cdd06){var _0x5519d3=_0x5519();return _0x12a1=function(_0x12a174,_0x388f67){_0x12a174=_0x12a174-0x73;var _0x59518d=_0x5519d3[_0x12a174];return _0x59518d;},_0x12a1(_0x59e290,_0x4cdd06);}for(var x in get_link){ini_txt+=_0x5d8687(0x7c)+get_link[x][_0x5d8687(0x91)]+'*\x0a';for(var y in get_link[x][_0x5d8687(0x89)]){ini_info=get_link[x][_0x5d8687(0x89)][y],ini_txt+=_0x5d8687(0x7f)+ini_info[_0x5d8687(0x7e)]+'\x0a',ini_txt+=_0x5d8687(0x8f)+ini_info[_0x5d8687(0x96)]+'\x0a',ini_txt+='```Link\x20:\x20```\x0a',down_link=ini_info[_0x5d8687(0x89)];for(var z in down_link){ini_txt+=z+_0x5d8687(0x74)+down_link[z]+'\x0a';}}}reply(ini_txt);
              break
       case 'nekopoi':
              function _0x2a67(){var _0xc5fe67=['```🐥\x20Sinopsis\x20:\x20','\x20-\x20','prepareMessageMedia','```\x0a','41ajEAow','12LbcYvS','anime','imageMessage','1572210zRAnNN','producers','44cuUxJl','length','https://api.lolhuman.xyz/api/nekopoi?apikey=PunyaIkyAds&url=','35gerizM','13488sJbaYM','```🐥\x20Duration\x20:\x20','```🐥\x20Size\x20:\x20','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','2636170iUIheT','1033731tfflOH','relayWAMessage','Example:\x20','name','```🐥\x20Title\x20:\x20','2462560teqltR','9IYbSNh','size','\x20https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/','result','thumb','1376178UTfNPN','477744sUWDyd','```🐥\x20Porducers\x20:\x20','➡️Next'];_0x2a67=function(){return _0xc5fe67;};return _0x2a67();}function _0x4669(_0x26b2e4,_0x25d639){var _0x2a671a=_0x2a67();return _0x4669=function(_0x4669c4,_0x4802a0){_0x4669c4=_0x4669c4-0x16a;var _0x92eba5=_0x2a671a[_0x4669c4];return _0x92eba5;},_0x4669(_0x26b2e4,_0x25d639);}var _0x594d0e=_0x4669;(function(_0x2405d3,_0xa97b73){var _0x8a810a=_0x4669,_0x38836c=_0x2405d3();while(!![]){try{var _0x3dc86a=parseInt(_0x8a810a(0x175))/0x1*(-parseInt(_0x8a810a(0x17f))/0x2)+-parseInt(_0x8a810a(0x184))/0x3+-parseInt(_0x8a810a(0x176))/0x4*(-parseInt(_0x8a810a(0x179))/0x5)+-parseInt(_0x8a810a(0x16d))/0x6*(parseInt(_0x8a810a(0x17e))/0x7)+-parseInt(_0x8a810a(0x189))/0x8*(-parseInt(_0x8a810a(0x18a))/0x9)+-parseInt(_0x8a810a(0x183))/0xa*(-parseInt(_0x8a810a(0x17b))/0xb)+parseInt(_0x8a810a(0x16e))/0xc;if(_0x3dc86a===_0xa97b73)break;else _0x38836c['push'](_0x38836c['shift']());}catch(_0xc1873){_0x38836c['push'](_0x38836c['shift']());}}}(_0x2a67,0x8cffa));if(args[_0x594d0e(0x17c)]==0x0)return reply(_0x594d0e(0x186)+(prefix+command)+_0x594d0e(0x16a));ini_url=args[0x0],get_result=await fetchJson(_0x594d0e(0x17d)+ini_url),get_result=get_result[_0x594d0e(0x16b)],ini_txt=_0x594d0e(0x188)+get_result[_0x594d0e(0x177)]+_0x594d0e(0x174),ini_txt+=_0x594d0e(0x16f)+get_result[_0x594d0e(0x17a)]+'```\x0a',ini_txt+=_0x594d0e(0x180)+get_result['duration']+_0x594d0e(0x174),ini_txt+=_0x594d0e(0x181)+get_result[_0x594d0e(0x18b)]+_0x594d0e(0x174),ini_txt+=_0x594d0e(0x171)+get_result['sinopsis']+_0x594d0e(0x174),link=get_result['link'];for(var x in link){ini_txt+='\x0a'+link[x][_0x594d0e(0x187)]+'\x0a',link_dl=link[x]['link'];for(var y in link_dl){ini_txt+=y+_0x594d0e(0x172)+link_dl[y]+'\x0a';}}buff=await getBuffer(get_result[_0x594d0e(0x16c)]),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x594d0e(0x170)},'type':0x1}],imageMsg=(await rimuru[_0x594d0e(0x173)](buff,'imageMessage',{'thumbnail':buff}))[_0x594d0e(0x178)],buttonsMessage={'footerText':_0x594d0e(0x182),'imageMessage':imageMsg,'contentText':ini_txt,'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x594d0e(0x185)](prep);
         break
       case 'nekopoisearch':
              var _0x563458=_0x500d;(function(_0x142985,_0x4f874f){var _0x53057d=_0x500d,_0x4945ca=_0x142985();while(!![]){try{var _0x429ac7=parseInt(_0x53057d(0x1dd))/0x1+-parseInt(_0x53057d(0x1df))/0x2*(parseInt(_0x53057d(0x1e8))/0x3)+-parseInt(_0x53057d(0x1d9))/0x4*(-parseInt(_0x53057d(0x1e0))/0x5)+-parseInt(_0x53057d(0x1de))/0x6*(parseInt(_0x53057d(0x1d3))/0x7)+-parseInt(_0x53057d(0x1da))/0x8*(parseInt(_0x53057d(0x1d7))/0x9)+parseInt(_0x53057d(0x1d8))/0xa*(-parseInt(_0x53057d(0x1d6))/0xb)+-parseInt(_0x53057d(0x1d2))/0xc*(-parseInt(_0x53057d(0x1d5))/0xd);if(_0x429ac7===_0x4f874f)break;else _0x4945ca['push'](_0x4945ca['shift']());}catch(_0x519106){_0x4945ca['push'](_0x4945ca['shift']());}}}(_0x2368,0x64e0c));if(args['length']==0x0)return reply('Example:\x20'+(prefix+command)+_0x563458(0x1e6));query=args[_0x563458(0x1e5)]('\x20'),get_result=await fetchJson(_0x563458(0x1d4)+query),get_result=get_result[_0x563458(0x1e7)],ini_txt='';for(var x of get_result){ini_txt+=_0x563458(0x1e1)+x[_0x563458(0x1e9)]+_0x563458(0x1db),ini_txt+=_0x563458(0x1dc)+x['link']+_0x563458(0x1db),ini_txt+=_0x563458(0x1e2)+x[_0x563458(0x1e3)]+_0x563458(0x1e4);}reply(ini_txt);function _0x500d(_0x4ecf82,_0x5879f9){var _0x23685e=_0x2368();return _0x500d=function(_0x500def,_0x7e438){_0x500def=_0x500def-0x1d2;var _0x27a580=_0x23685e[_0x500def];return _0x27a580;},_0x500d(_0x4ecf82,_0x5879f9);}function _0x2368(){var _0x41278f=['\x20Isekai\x20Harem','result','75NcRXIS','title','12ittWyq','19369gzmixP','https://api.lolhuman.xyz/api/nekopoisearch?apikey=PunyaIkyAds&query=','14746966AshRQF','2717kYfqxh','7317myPYsY','15630XeKqjW','12pLGLQH','7496CoRuAg','```\x0a','```🐥\x20Link\x20:\x20','648420ppVTop','1314AMPnqW','15482ToVPoM','962890ssYzeE','```🐥\x20Title\x20:\x20','```🐥\x20Thumbnail\x20:\x20','thumbnail','```\x0a\x0a','join'];_0x2368=function(){return _0x41278f;};return _0x2368();}
              break
       case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
              function _0x1d9d(_0x2da966,_0x2ac029){var _0x1230dc=_0x1230();return _0x1d9d=function(_0x1d9d42,_0x4df6cb){_0x1d9d42=_0x1d9d42-0x1c3;var _0x114cd4=_0x1230dc[_0x1d9d42];return _0x114cd4;},_0x1d9d(_0x2da966,_0x2ac029);}function _0x1230(){var _0x4d36bb=['5033553dbOYcW','574962YgvRET','imageMessage','prepareMessageFromContent','➡️Next','683584KDRemJ','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','22145vnbPxH','2SglHSJ','wait','114eHFXYo','klik\x20Next\x20untuk\x20ke\x20gambar\x20selanjut\x20nya','288xcqrxc','13389050VCviHv','96759UodOlu','4064164QGHQqD','https://api.lolhuman.xyz/api/random/','prepareMessageMedia','relayWAMessage','11DvByTi'];_0x1230=function(){return _0x4d36bb;};return _0x1230();}var _0x1363f0=_0x1d9d;(function(_0x119d6f,_0x593d9d){var _0x21bad5=_0x1d9d,_0xbe4e36=_0x119d6f();while(!![]){try{var _0x11b9d6=parseInt(_0x21bad5(0x1c7))/0x1+parseInt(_0x21bad5(0x1ca))/0x2*(parseInt(_0x21bad5(0x1c3))/0x3)+parseInt(_0x21bad5(0x1d1))/0x4+parseInt(_0x21bad5(0x1c9))/0x5*(-parseInt(_0x21bad5(0x1cc))/0x6)+parseInt(_0x21bad5(0x1d6))/0x7+parseInt(_0x21bad5(0x1ce))/0x8*(-parseInt(_0x21bad5(0x1d0))/0x9)+parseInt(_0x21bad5(0x1cf))/0xa*(-parseInt(_0x21bad5(0x1d5))/0xb);if(_0x11b9d6===_0x593d9d)break;else _0xbe4e36['push'](_0xbe4e36['shift']());}catch(_0x6e877e){_0xbe4e36['push'](_0xbe4e36['shift']());}}}(_0x1230,0xc360a),reply(mess[_0x1363f0(0x1cb)]),buff=await getBuffer(_0x1363f0(0x1d2)+command+'?apikey=PunyaIkyAds'),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x1363f0(0x1c6)},'type':0x1}],imageMsg=(await rimuru[_0x1363f0(0x1d3)](buff,'imageMessage',{'thumbnail':buff}))[_0x1363f0(0x1c4)],buttonsMessage={'footerText':_0x1363f0(0x1c8),'imageMessage':imageMsg,'contentText':_0x1363f0(0x1cd),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x1363f0(0x1c5)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x1363f0(0x1d4)](prep));
              break
       
       
    
              break
       case 'nakanoitsuki':
       case 'nakanoikyy':
       case 'nakanomiku':
              reply(mess.wait)
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: freply, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
              break
       case 'storyanime':
              
              reply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=PunyaIkyAds`)
              buffer = await getBuffer(anu.result)
              rimuru.sendMessage(from, buffer, video, { quoted: freply })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
       if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               reply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               try {
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':              
               const _0x3350f0=_0x161d;(function(_0x2634b9,_0x26fa05){const _0x39bdd9=_0x161d,_0x356a13=_0x2634b9();while(!![]){try{const _0x14fd09=parseInt(_0x39bdd9(0x163))/0x1*(parseInt(_0x39bdd9(0x174))/0x2)+-parseInt(_0x39bdd9(0x171))/0x3+parseInt(_0x39bdd9(0x16a))/0x4+-parseInt(_0x39bdd9(0x165))/0x5+-parseInt(_0x39bdd9(0x172))/0x6*(-parseInt(_0x39bdd9(0x179))/0x7)+-parseInt(_0x39bdd9(0x167))/0x8*(parseInt(_0x39bdd9(0x16b))/0x9)+parseInt(_0x39bdd9(0x173))/0xa*(parseInt(_0x39bdd9(0x16f))/0xb);if(_0x14fd09===_0x26fa05)break;else _0x356a13['push'](_0x356a13['shift']());}catch(_0x12fe64){_0x356a13['push'](_0x356a13['shift']());}}}(_0x4e75,0x7cfbc),o=await onGoing(),console[_0x3350f0(0x170)](o),ot=_0x3350f0(0x176));function _0x161d(_0x4adbae,_0x5ed54a){const _0x4e755f=_0x4e75();return _0x161d=function(_0x161dd6,_0x63b3ce){_0x161dd6=_0x161dd6-0x15f;let _0x292ada=_0x4e755f[_0x161dd6];return _0x292ada;},_0x161d(_0x4adbae,_0x5ed54a);}for(let i=0x0;i<o[_0x3350f0(0x160)];i++){ot+=_0x3350f0(0x169)+o[i]['judul']+_0x3350f0(0x177)+o[i][_0x3350f0(0x16d)]+_0x3350f0(0x161)+o[i][_0x3350f0(0x175)]+'\x0a*Tanggal\x20:*\x20'+o[i][_0x3350f0(0x15f)]+_0x3350f0(0x164)+o[i][_0x3350f0(0x168)];}buff=await getBuffer(o[0x0]['thumb']),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x3350f0(0x16c)},'type':0x1}],imageMsg=(await rimuru['prepareMessageMedia'](buff,_0x3350f0(0x166),{'thumbnail':buff}))['imageMessage'],buttonsMessage={'footerText':_0x3350f0(0x16e),'imageMessage':imageMsg,'contentText':_0x3350f0(0x162),'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru[_0x3350f0(0x178)](prep);function _0x4e75(){const _0xceb30e=['imageMessage','4381144NvhlXW','thumb','\x0a\x0a*Judul\x20:*\x20','2715772bMlsRq','9yKqOhC','➡️Next','eps','Jangan\x20Lupa\x20Donasi\x20Ya\x20Kak\x20☕','1148697GxwweD','log','2944062VORllc','1992FnYZha','90lsFquy','783248WSvpAs','hri','*「\x20Ongoing\x20Otakudesu\x20」*','\x0a*Episode\x20:*\x20','relayWAMessage','12978DfRZMK','tgl','length','\x0a*Eps\x20berikutnya\x20pada\x20hari\x20:*\x20','Follow\x20Sosmed\x20Owner\x20ⲂⲟⲦz\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz/','2ZfBqEg','\x0a\x0a*Image\x20:*\x20','4883165XPkHyE'];_0x4e75=function(){return _0xceb30e;};return _0x4e75();}
break
case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              const _0x5ebb00=_0x4779;function _0x5f14(){const _0x38af4d=['imageMessage','klik\x20Next\x20untuk\x20ke\x20gambar\x20selanjut\x20nya','➡️Next','.jpeg','35427ksDutc','1919746moRKFY','1lPoZyJ','length','https://raw.githubusercontent.com/Arya-was/endak-tau/main/','5frOYZl','15185388jQlkID','120EGpOzr','.json','1709301euaEsM','floor','468tLUTtj','156CWGryI','prepareMessage','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','prepareMessageFromContent','get','172432QyGZIZ','readFileSync','1934874aRJSEl','unlinkSync','random','4948576NMTMrt','writeFileSync'];_0x5f14=function(){return _0x38af4d;};return _0x5f14();}(function(_0x16d5a3,_0x37c145){const _0xfb9fdc=_0x4779,_0x9d5a6=_0x16d5a3();while(!![]){try{const _0x248f1a=-parseInt(_0xfb9fdc(0x16f))/0x1*(-parseInt(_0xfb9fdc(0x16e))/0x2)+parseInt(_0xfb9fdc(0x164))/0x3+parseInt(_0xfb9fdc(0x167))/0x4*(parseInt(_0xfb9fdc(0x172))/0x5)+-parseInt(_0xfb9fdc(0x179))/0x6*(-parseInt(_0xfb9fdc(0x16d))/0x7)+-parseInt(_0xfb9fdc(0x162))/0x8*(-parseInt(_0xfb9fdc(0x178))/0x9)+-parseInt(_0xfb9fdc(0x174))/0xa*(parseInt(_0xfb9fdc(0x176))/0xb)+-parseInt(_0xfb9fdc(0x173))/0xc;if(_0x248f1a===_0x37c145)break;else _0x9d5a6['push'](_0x9d5a6['shift']());}catch(_0x3e1218){_0x9d5a6['push'](_0x9d5a6['shift']());}}}(_0x5f14,0xeb684));let wipu=(await axios[_0x5ebb00(0x161)](_0x5ebb00(0x171)+command+_0x5ebb00(0x175)))['data'],wipi=wipu[Math[_0x5ebb00(0x177)](Math[_0x5ebb00(0x166)]()*wipu[_0x5ebb00(0x170)])];function _0x4779(_0x2860ec,_0x45be20){const _0x5f143c=_0x5f14();return _0x4779=function(_0x4779fd,_0x4e6c3b){_0x4779fd=_0x4779fd-0x15e;let _0x31a2af=_0x5f143c[_0x4779fd];return _0x31a2af;},_0x4779(_0x2860ec,_0x45be20);}fs[_0x5ebb00(0x168)]('./'+sender+_0x5ebb00(0x16c),await getBuffer(wipi)),buttons=[{'buttonId':''+(prefix+command),'buttonText':{'displayText':_0x5ebb00(0x16b)},'type':0x1}],imageMsg=(await rimuru[_0x5ebb00(0x15e)](from,fs[_0x5ebb00(0x163)]('./'+sender+_0x5ebb00(0x16c)),_0x5ebb00(0x169),{'thumbnail':Buffer['alloc'](0x0)}))['message']['imageMessage'],buttonsMessage={'footerText':_0x5ebb00(0x15f),'imageMessage':imageMsg,'contentText':_0x5ebb00(0x16a),'buttons':buttons,'headerType':0x4},prep=await rimuru[_0x5ebb00(0x160)](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep),fs[_0x5ebb00(0x165)]('./'+sender+'.jpeg');
              break
        case 'playy':
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *🐥 Judul :* ${res.all[0].title}
 *🐣 ID Video :* ${res.all[0].videoId}
 *🐤 Diupload Pada :* ${res.all[0].ago}
 *🐥 Views :* ${res.all[0].views}
 *🐣 Durasi :* ${res.all[0].timestamp}
 *🐤 Channel :* ${res.all[0].author.name}
 *🔗 Link Channel :* ${res.all[0].author.url}
 
*File Sedang Di Kirim........*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: freply, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				rimuru.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break  
					
					case 'ytdl':
					case 'play':
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *🐥 Judul :* ${res.all[0].title}
 *🐣 ID Video :* ${res.all[0].videoId}
 *🐤 Diupload Pada :* ${res.all[0].ago}
 *🐥 Views :* ${res.all[0].views}
 *🐣 Durasi :* ${res.all[0].timestamp}
 *🐤 Channel :* ${res.all[0].author.name}
 *🔗 Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await rimuru.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{})

rimuru.relayWAMessage(prep)
break
					
          case 'lirik':
    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=PunyaIkyAds&query=${query}`)
    reply(get_result.result)
    
               break
         case 'pinterest':
		   var _0x4d7863=_0x1fba;function _0x2017(){var _0x3b6b36=['127056AYXtKi','wait','15OPBAtZ','559156BlGYce','876050rRiZZn','20038MzEMTz','220572bxeXAT','Example:\x20','join','klik\x20Next\x20untuk\x20ke\x20gambar\x20selanjut\x20nya','24FUfise','9EOomON','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','prepareMessageMedia','length','258036KgWpmW','result','imageMessage','➡️Next','453467TrUBIH'];_0x2017=function(){return _0x3b6b36;};return _0x2017();}(function(_0x257107,_0x5f37e2){var _0x104c0b=_0x1fba,_0x2076ae=_0x257107();while(!![]){try{var _0x52c325=-parseInt(_0x104c0b(0x1c1))/0x1*(parseInt(_0x104c0b(0x1bb))/0x2)+-parseInt(_0x104c0b(0x1ca))/0x3+-parseInt(_0x104c0b(0x1b9))/0x4+parseInt(_0x104c0b(0x1cc))/0x5*(parseInt(_0x104c0b(0x1c5))/0x6)+parseInt(_0x104c0b(0x1c9))/0x7*(parseInt(_0x104c0b(0x1c0))/0x8)+parseInt(_0x104c0b(0x1bc))/0x9+parseInt(_0x104c0b(0x1ba))/0xa;if(_0x52c325===_0x5f37e2)break;else _0x2076ae['push'](_0x2076ae['shift']());}catch(_0xaae31b){_0x2076ae['push'](_0x2076ae['shift']());}}}(_0x2017,0x27d5a));if(args[_0x4d7863(0x1c4)]==0x0)return reply(_0x4d7863(0x1bd)+(prefix+command)+'\x20loli');function _0x1fba(_0x1e5bdf,_0x13dbc1){var _0x20176f=_0x2017();return _0x1fba=function(_0x1fba89,_0x151fe9){_0x1fba89=_0x1fba89-0x1b9;var _0x14ad3b=_0x20176f[_0x1fba89];return _0x14ad3b;},_0x1fba(_0x1e5bdf,_0x13dbc1);}query=args[_0x4d7863(0x1be)]('\x20'),reply(mess[_0x4d7863(0x1cb)]),ini_url=await fetchJson('http://api.lolhuman.xyz/api/pinterest?apikey=PunyaIkyAds&query='+query),ini_url=ini_url[_0x4d7863(0x1c6)],buff=await getBuffer(ini_url),buttons=[{'buttonId':prefix+command+'\x20'+query,'buttonText':{'displayText':_0x4d7863(0x1c8)},'type':0x1}],imageMsg=(await rimuru[_0x4d7863(0x1c3)](buff,_0x4d7863(0x1c7),{'thumbnail':buff}))[_0x4d7863(0x1c7)],buttonsMessage={'footerText':_0x4d7863(0x1c2),'imageMessage':imageMsg,'contentText':_0x4d7863(0x1bf),'buttons':buttons,'headerType':0x4},prep=await rimuru['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),rimuru['relayWAMessage'](prep);
        break
        case 'shopee':
               const _0x363fe1=_0x3e60;(function(_0x5677b7,_0x31ae06){const _0x5144b0=_0x3e60,_0x1f7f24=_0x5677b7();while(!![]){try{const _0x1b7b43=-parseInt(_0x5144b0(0x192))/0x1*(-parseInt(_0x5144b0(0x184))/0x2)+-parseInt(_0x5144b0(0x196))/0x3*(parseInt(_0x5144b0(0x189))/0x4)+-parseInt(_0x5144b0(0x18b))/0x5+parseInt(_0x5144b0(0x19c))/0x6+parseInt(_0x5144b0(0x194))/0x7+parseInt(_0x5144b0(0x197))/0x8*(parseInt(_0x5144b0(0x195))/0x9)+-parseInt(_0x5144b0(0x190))/0xa*(-parseInt(_0x5144b0(0x17b))/0xb);if(_0x1b7b43===_0x31ae06)break;else _0x1f7f24['push'](_0x1f7f24['shift']());}catch(_0x38d196){_0x1f7f24['push'](_0x1f7f24['shift']());}}}(_0x1343,0xbf5eb));try{if(args['length']==0x0)return reply(_0x363fe1(0x19f)+prefix+_0x363fe1(0x198)+prefix+_0x363fe1(0x18d));query=args['join']('\x20'),reply(mess[_0x363fe1(0x191)]),get_data=await fetchJson(_0x363fe1(0x193)+setting[_0x363fe1(0x18c)]+_0x363fe1(0x17c)+query),get_data=get_data[_0x363fe1(0x183)],teks=_0x363fe1(0x180);for(let i=0x0;i<get_data[_0x363fe1(0x185)];i++){teks+=_0x363fe1(0x181)+get_data[i][_0x363fe1(0x17d)]+_0x363fe1(0x187)+get_data[i]['harga']+_0x363fe1(0x186)+get_data[i]['terjual']+_0x363fe1(0x17e)+get_data[i][_0x363fe1(0x19e)]+_0x363fe1(0x19b)+get_data[i][_0x363fe1(0x182)]+_0x363fe1(0x18a)+get_data[i][_0x363fe1(0x199)]+_0x363fe1(0x19a)+get_data[i][_0x363fe1(0x18f)]+'```\x0a```🐥\x20Link\x20:\x20'+get_data[i][_0x363fe1(0x19d)]+'```';}ini_buffer=await getBuffer(get_data[0x0][_0x363fe1(0x188)][0x0]),rimuru['sendMessage'](from,ini_buffer,image,{'quoted':freply,'caption':teks});}catch{reply(_0x363fe1(0x17f)+query+_0x363fe1(0x18e));}function _0x3e60(_0x2dbeb7,_0x10ab56){const _0x134326=_0x1343();return _0x3e60=function(_0x3e6025,_0xf27e33){_0x3e6025=_0x3e6025-0x17b;let _0x46baf4=_0x134326[_0x3e6025];return _0x46baf4;},_0x3e60(_0x2dbeb7,_0x10ab56);}function _0x1343(){const _0x664136=['Maaf\x20produk\x20','┏┉⌣\x20┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓\x0a┆\x20*SHOPEE*\x20\x0a└┈┈┈┈┈┈┈┈┈┈┈⌣\x20┈̥-̶̯͡..̷̴✽̶⌣\x20✽̶\x0a\x0a*Data\x20Berhasil\x20Didapatkan!*\x0a','```🐥\x20Nama\x20:\x20','desc','data','2ovOjcp','length','```\x0a```🐥\x20Terjual\x20:\x20','```\x0a```🐥\x20Harga\x20:\x20','img_detail','4fjvHPu','```\x0a```??\x20Stok\x20:\x20','4423995RWCmlc','zekskey','shopee\x20sepatu','\x20tidak\x20ditemukan','information','70960GoDWSg','wait','1087419Jytbfu','https://api.zeks.xyz/api/shopee?apikey=','1661037ScPhGA','9galeWm','4530051uhwTmY','978704fyYqIW','shopee\x20[\x20query\x20]*\x0aContoh\x20:\x20','stock','```\x0a```🐥\x20Informasi\x20:\x20','```\x0a```🐥\x20Deskripsi*:\x20','9240162VCZqaK','url','location','Kirim\x20perintah\x20*','297rGlxlU','&q=','name','```\x0a```🐥\x20Lokasi\x20:\x20'];_0x1343=function(){return _0x664136;};return _0x1343();}
              break
       case 'playstore':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`🐥 Title : ${get_result[i].title}\`\`\`
\`\`\`🐥 Harga : ${get_result[i].price}\`\`\`
\`\`\`🐥 Rate : ${get_result[i].rating}\`\`\`
\`\`\`🐥 Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':
       case 'ytsearch':
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`🐣 Title : ${i.title}\`\`\`
\`\`\`🐤 Views : ${i.views}\`\`\`
\`\`\`🐣 Upload : ${i.ago}\`\`\`
\`\`\`🐥 Durasi : ${i.timestamp}\`\`\`
\`\`\`🐤 Channel : ${i.author.name}\`\`\`
\`\`\`🔗 Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
               if ((isMedia && !editz.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
               owgi = await rimuru.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
               
       case 'imgtourl':
       case 'img2url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
               var media = await  rimuru.downloadAndSaveMediaMessage(encmedia)       
               imgbb('67bb63bdcb5c234b7aba60c618a2b903', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               rimuru.sendMessage(from, ibb, image, { quoted: freply, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai
               if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               rimuru.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level': 
             const _0x457c9b=_0x9671;(function(_0x3479b3,_0x220cf5){const _0x1b4f67=_0x9671,_0x4d9329=_0x3479b3();while(!![]){try{const _0x35a30e=-parseInt(_0x1b4f67(0x1a9))/0x1*(parseInt(_0x1b4f67(0x1b4))/0x2)+-parseInt(_0x1b4f67(0x1ad))/0x3+parseInt(_0x1b4f67(0x1b1))/0x4+-parseInt(_0x1b4f67(0x1a5))/0x5*(parseInt(_0x1b4f67(0x1b8))/0x6)+parseInt(_0x1b4f67(0x1af))/0x7+-parseInt(_0x1b4f67(0x1ae))/0x8+parseInt(_0x1b4f67(0x1a2))/0x9;if(_0x35a30e===_0x220cf5)break;else _0x4d9329['push'](_0x4d9329['shift']());}catch(_0x357a29){_0x4d9329['push'](_0x4d9329['shift']());}}}(_0x2965,0x659f0));if(!isGroup)return reply(mess[_0x457c9b(0x1b2)][_0x457c9b(0x1ab)]);if(!isLevelingOn)return await reply(_0x457c9b(0x1a0));function _0x9671(_0x41dd0a,_0x567527){const _0x296597=_0x2965();return _0x9671=function(_0x96717,_0x461068){_0x96717=_0x96717-0x19b;let _0x304dde=_0x296597[_0x96717];return _0x304dde;},_0x9671(_0x41dd0a,_0x567527);}let userLevel=level[_0x457c9b(0x1b3)](sender,_level),userXp=level[_0x457c9b(0x1b5)](sender,_level),requiredXp=0xa*Math['pow'](userLevel,0x2)+0x32*userLevel+0x64,userRank=level[_0x457c9b(0x1a8)](sender,_level);function _0x2965(){const _0x502ec3=['MINING','819960CRrQnN','only','getLevelingLevel','13796oUWZtR','getLevelingXp','leaderboard','prepareMessageMedia','6mCSnMi','*\x0a\x0a*Note\x20:\x20Kumpulin\x20Xp\x20Jika\x20Ingin\x20Menaikkan\x20Level*','&ranking=','\x0a➸\x20*Level\x20:*\x20','\x20/\x20','relayWAMessage','https://lolhuman.herokuapp.com/api/rank?apikey=PunyaIkyAds&img=','&currxp=','Fitur\x20leveling\x20belum\x20diaktifkan!','&xpneed=','15857730dMLUqD','imageMessage','\x0a➸\x20*Xp\x20:*\x20','3698555hCYiEv','\x0a➸\x20*Role*:\x20*','mining','getUserRank','91QNhBsx','*「\x20LEVEL\x20」*\x0a\x0a➸\x20*Nama\x20:*\x20','group','LEADEBOARD','308826IBbrwQ','2835552aJWxwQ','1918665tTKCrU'];_0x2965=function(){return _0x502ec3;};return _0x2965();}try{profilePic=await ieditz['getProfilePicture'](sender);}catch{profilePic=errorImg;}buffer=await getBuffer(_0x457c9b(0x19e)+profilePic+'&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username='+encodeURI(pushname)+'&level='+userLevel+_0x457c9b(0x1ba)+Number(userRank)+_0x457c9b(0x19f)+userXp+_0x457c9b(0x1a1)+requiredXp),teks=_0x457c9b(0x1aa)+pushname+_0x457c9b(0x1a4)+userXp+_0x457c9b(0x19c)+requiredXp+_0x457c9b(0x19b)+userLevel+_0x457c9b(0x1a6)+role+_0x457c9b(0x1b9),buttons=[{'buttonId':prefix+_0x457c9b(0x1a7),'buttonText':{'displayText':_0x457c9b(0x1b0)},'type':0x1},{'buttonId':prefix+_0x457c9b(0x1b6),'buttonText':{'displayText':_0x457c9b(0x1ac)},'type':0x1}],imageMsg=(await ieditz[_0x457c9b(0x1b7)](buffer,_0x457c9b(0x1a3),{'thumbnail':buffer}))['imageMessage'],buttonsMessage={'footerText':'ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','imageMessage':imageMsg,'contentText':''+teks,'buttons':buttons,'headerType':0x4},prep=await ieditz['prepareMessageFromContent'](from,{'buttonsMessage':buttonsMessage},{'quoted':freply}),ieditz[_0x457c9b(0x19d)](prep);
              break
       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
              if (args.length == 0) return reply(`Example: ${prefix + command} rimuruchan`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=PunyaIkyAds`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${ini_result.name}\`\`\`
\`\`\`🐥 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`🐥 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🐥 Following : ${ini_result.following}\`\`\`
\`\`\`🐥 Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`🐥 Link : ${ini_result.url}\`\`\`
`
             rimuru.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} rimuru.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=PunyaIkyAds`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${ini_result.username}\`\`\`
\`\`\`🐥 Nama : ${ini_result.fullname}\`\`\`
\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`🐥 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`🐥 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`🐥 Link : https://instagram.com/${ini_result.username}\`\`\`
`
             rimuru.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=PunyaIkyAds`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Username : ${get_result.username}\`\`\`
\`\`\`🐥 Nama : ${get_result.nickname}\`\`\`
\`\`\`🐥 Pengikut : ${get_result.followers}\`\`\`
\`\`\`🐥 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`🐥 Likes : ${get_result.likes}\`\`\`
\`\`\`🐥 Video : ${get_result.video}\`\`\`
\`\`\`🐥 Deskripsi : ${get_result.bio}\`\`\`
`
              rimuru.sendMessage(from, pp_tt, image, { quoted: freply, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              rimuru.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
              case 'linkgc':
              case 'link':
              case 'linkgroup':
              linkgc = await rimuru.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
         case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=PunyaIkyAds&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              rimuru.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':
       case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=PunyaIkyAds`)
              await rimuru.sendMessage(from, ini_buffer, sticker, { quoted: freply })
              break
                  case 'semoji2':
       case 'emoji2':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=PunyaIkyAds`)
              await rimuru.sendMessage(from, ini_buffer, sticker, { quoted: freply })
 case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)
                    await rimuru.sendMessage(from, ini_buffer, sticker, { quoted: freply })
                    break

     case 'stikertahta':
     case 'stt': 
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
ajgg = args.join(" ")
reply('wait....')
meki = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURI(q)}&apikey=IkyOgiwara`
sendStickerUrl(from, meki, { quoted: freply})
break
    case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} rimuru`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              rimuru.sendMessage(from, buffer, sticker, { quoted: freply })
              break
              
             case 'sfire2': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
media = await rimuru.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = await getBuffer (`https://api.zeks.xyz/api/burning-image?apikey=PunyaIkyAds&image=${tolink}`)
sendStickerUrl(from, `${anu1}`)

break
case 'tgg': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
media = await rimuru.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
sendStickerUrl(from, `${anu1}`)

break
case 'sf':
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
media = await rimuru.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
              reply(mess.wait)
              
              pjr = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=PunyaIkyAds&image${encodeURI(tolink)}`)
              rimuru.sendMedsage(from , pjr , sticker, {quoted: rimuru})


              break
case 'tggg': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
media = await rimuru.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.lolhuman.xyz/api/editor/triggered?apikey=PunyaIkyAds&img=${tolink}`
sendStickerUrl(from, `${anu1}`)

break
      case 'triggered3':
                    ini_url = args[0]
               
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/triggered?apikey=PunyaIkyAds&img=${ini_url}`)

rimuru.sendMessage(from, ini_buffer, image, { quoted: freply })
                    break
       case 'sfiree':
       if (isImage || isQuotedImage) {
    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
    let media = await rimuru.downloadAndSaveMediaMessage(encmedia)
    var tolink = await uptotele(media)
let ane = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=PunyaIkyAds&image=${tolink}`)
fs.writeFileSync('./sticker/triggered.webp', ane)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
    if (error) return reply(mess.error.api)
    rimuru.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})
    
    fs.unlinkSync(`./sticker/triggered.webp`)	
})
}
            
break 
   case "triggered":
   case 'tiger':
     if (isImage || isQuotedImage) {
     var lin = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
     var dow = await rimuru.downloadAndSaveMediaMessage(rimuru)
     var tolink = await uptotele(dow)
     ranp = getRandom('.gif')
     rano = getRandom('.webp')
     var ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=PunyaIkyAds&img=${tolink}`
     exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        fs.unlinkSync(ranp)
        rimuru.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: rimuru }).then(() => {
        fs.unlinkSync(rano)
        })
      })
     } else {
       reply("only foto")
     }
      break
      case 'stickernobg': case 'stikernobg': case 'snobg': case 'removebg': case 'nobg':
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: rimuru
                    let media = await rimuru.downloadAndSaveMediaMessage(encmedia)
                        var file_name = getRandom('.png')
                         var file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(media)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(media)
                            fs.writeFileSync(file_name, body, "binary")
                            await ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('start', function (cmd) {
							    	console.log(`Started : ${cmd}`)
				    			})
                                .on('error', function(err) {
                                    console.log(err)
                                    reply(mess.error.api)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
                                    if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: rimuru})
									
                                    fs.unlinkSync(file_name)
									fs.unlinkSync(file_name2)
                                })
							})
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await rimuru.downloadAndSaveMediaMessage(encmedia)
                  var ran = getRandom('.png')
				  exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						fs.unlinkSync(media)
                       if (err) return reply('Gagal :V')   
                        var file_name = getRandom('.png')
                         var file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.olkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(ran)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(ran)
                            fs.writeFileSync(file_name, body, "binary")
                            await ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('start', function (cmd) {
							    	console.log(`Started : ${cmd}`)
				    			})
                                .on('error', function(err) {
                                    console.log(err)
                                    reply(mess.error.api)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
                                    if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: rimuru})
									
                                    fs.unlinkSync(file_name)
									fs.unlinkSync(file_name2)
                                })
							})
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}snobg atau tag gambar yang sudah dikirim`)
                    }
                    

                    break
                case "triggered2":
   case 'tiger2':
     if (isImage || isQuotedImage) {
     var lin = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
     var dow = await rimuru.downloadAndSaveMediaMessage(lin)
     var tolink = await uptotele(dow)
     ranp = getRandom('.gif')
     rano = getRandom('.webp')
     var ini_buffer = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
     exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        fs.unlinkSync(ranp)
        rimuru.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: rimuru }).then(() => {
        fs.unlinkSync(rano)
        })
      })
     } else {
       reply("only foto")
     }
      break
           case 'ttg':
           teks = args.join(' ')
mek = encodeURIComponent(teks)
if (args.length < 2) return 
let ane = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=PunyaIkyAds&text=${mek}`)
fs.writeFileSync('./sticker/ttg.webp', ane)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttg.webp -o ./sticker/ttg.webp`, async (error) => {
    if (error) return reply(mess.error.api)
    rimuru.sendSticker(from, fs.readFileSync(`./sticker/ttg.webp`), sticker, {quoted: freply})
    
    fs.unlinkSync(`./sticker/ttg.webp`)	
})
            
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
           case 's2':{
                
                
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await rimuru.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: rimuru})
									
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await rimuru.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									rimuru.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: rimuru})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					     if ((isMedia && !editz.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(editz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : editz
            const media = await rimuru.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
     console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
 console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
rimuru.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
 fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && editz.message.videoMessage.seconds < 11 || isQuotedVideo && editz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(editz).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : editz
const media = await rimuru.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            rimuru.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
            } else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break    
   case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(editz).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              rimuru.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih kak, jgn lupa sub YT : RIMURU EDITZ\n\nhttps://youtu.be/AWPbZqqijbM'})
              fs.unlinkSync(ran)
})
              break
       case 'take':
       case 'colong':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.strngify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, rimuru, editz, from)
              break
       case 'delwm':
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, rimuru, editz, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !editz.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
              media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              rimuru.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              rimuru.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && editz.message.videoMessage.seconds < 11 || isQuotedVideo && editz.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
              const media = await rimuru.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              rimuru.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              rimuru.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      
           case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !editz.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru 
owgi = await  rimuru.downloadAndSaveMediaMessage(ger)
anu = await imgbb("bf0832d1bbee804ec793d4a830a26238", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':
       case 'memegen':    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !editz.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru 
              owgi = await rimuru.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("f643a4d2fb9ea99221cb4a3432d6a4ba", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
         
}
               break
        case 'togif':
               if ((isMedia && !editz.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo : rimuru
               mediaaa = await rimuru.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               rimuru.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: freply, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if ((isMedia && !editz.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await rimuru.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               rimuru.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: freply, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
rimuru.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Itu bukan video')
encmedia = JSON.parse(JSON.stringify(rimuru).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await rimuru.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error)
buffer = fs.readFileSync(ran)
rimuru.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4'})
fs.unlinkSync(ran)
})
break

//------------------< Ingfo Bot >-------------------
      case 'runtime':
y = `
█████████
█▄█████▄█
█▼▼▼▼▼
█${runtime(process.uptime())}
█▲▲▲▲▲
█████████
 ██ ██\n`

             reply (y)
              break
        case 'donate': 
       case 'donasi':
              textImg(setting.txtDonasi)
              break
       case 'sourcecode': 
       case 'sc': 
       case 'src':
              textImg(`ʙᴏᴛ ɪɴɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ sᴄ ᴅᴀʀɪ ᴍᴇᴅɪᴀғɪʀᴇ : https://bit.ly/3DEiOMv `)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();

              latensie = speed() - timestampe 

y = `
█████████
█▄█████▄█
█▼▼▼▼▼
█${latensie.toFixed(4)} Sec
█▲▲▲▲▲
█████████

 ██ ██\n`

             reply (y)
             break
             
          case 'botstat':
              groups = rimuru.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = rimuru.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await rimuru.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`🐥 Group Chats : ${groups.length}\`\`\`
\`\`\`🐥 Private Chats : ${privat.length}\`\`\`
\`\`\`🐥 Total Chats : ${totalChat.length}\`\`\`
\`\`\`🐥 Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`🐥 Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`🐥 Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`🐥 Ram Usage : ${ram2}\`\`\`
\`\`\`?? Platform : ${os.platform()}\`\`\`
\`\`\`🐥 Hostname : ${os.hostname()}\`\`\`
\`\`\`🐥 Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`🐥 Wa Version: ${rimuru.user.phone.wa_version}\`\`\`
\`\`\`🐥 Os Version: ${rimuru.user.phone.os_version}\`\`\`
\`\`\`🐥 Device Manufacturer: ${rimuru.user.phone.device_manufacturer}\`\`\`
\`\`\`🐥 Device Model: ${rimuru.user.phone.device_model}\`\`\`
\`\`\`🐥 Os Build Number: ${rimuru.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = rimuru.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
             reply(JSON.stringify(editz.message.extendedTextMessage.contextInfo, null, 3))
             break
        case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await rimuru.chats.all()
             rimuru.setMaxListeners(25)
             for (let _ of anu) {
             rimuru.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = rimuru.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             rimuru.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick':
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
             if (editz.message.extendedTextMessage === null || editz.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             rimuru.groupAdd(from, [entah])
             } else {
             entah = editz.message.extendedTextMessage.contextInfo.participant
             rimuru.groupAdd(from, [entah])
}
             break
             case 'promote':
             reply ('sukses promote admin')
             mentioned = editz.message.extendedTextMessage.contextInfo.participant
     
       if (mentioned.length !== 0){
    rimuru.groupMakeAdmin(from, mentioned)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (isQuotedMsg) {
    rimuru.groupMakeAdmin(from, [quotedMsg.sender])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (!isNaN(args[1])) {
    rimuru.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else {
	
    reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
}
             break
      case 'demote': case 'odemote':
reply('sukses demote admin')
if (!isGroup) return reply('GROUP ONLY')
if (command.split(prefix)[1] === 'odemote' && !isPremium) return reply('ONLY PREMIUM')
if (!isGroupAdmins && !isPremium)return reply('ONLY ADMIN')
mentioned = editz.message.extendedTextMessage.contextInfo.participant
     
if (mentioned.length !== 0){
    rimuru.groupDemoteAdmin(from, mentioned)
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (isQuotedMsg) {
    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa kick Owner`)
    rimuru.groupDemoteAdmin(from, [quotedMsg.sender])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else if (!isNaN(args[1])) {
    rimuru.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
    .then((res) => reply(jsonformat(res)))
    .catch((err) => reply(jsonformat(err)))
} else {
	
    reply(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)
}
break
            case 'linkgc': case 'linkgrup': case 'linkgroup':
if (!isGroup) return reply('ONLY GRUP')
if (!isBotGroupAdmins) return reply('ONLY OWNER')
rimuru.groupInviteCode(from)
.then((res) => reply('https://chat.whatsapp.com/' + res))
break
       case 'setgrupname':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              rimuru.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              rimuru.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case "prefix":
        if (!args.length) return reply(`Opsi prefix\n\n- noprefix\n- multi\n\n- oneprefix\n\nExample : ${prefix}prefix noprefix`)
        if (args[0] === "multi") {
          multipref = true;
          noprefix = false;
          oneprefix = false;
          reply("berhasil mengubah ke multi prefix")
        } else if (args[0] === "noprefix") {
          multipref = false;
          noprefix = true;
          oneprefix = false;
          reply("berhasil mengubah ke no prefix")
        } else if (q === "oneprefix") {
          multipref = false;
          noprefix = false;
          oneprefix = true;
          reply(`One prefix untuk saat ini adalah ( ${prefix} ) untuk mengganti prefix ketik ${prefix}setprefix`)
        } else {
          reply("pilih multi, noprefix, atau one prefix")
        }
        
        break
        case "setprefix":
          if (!q) return reply("Prefix nya mau apa?")
          multipref = false;
          noprefix = false;
          oneprefix = true;
          preff = q
          break
       case 'setppgrup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(rimuru).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : rimuru
              let media = await rimuru.downloadMediaMessage(encmedia)
              rimuru.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
              
              rimuru.updatePresence(from, Presence.composing)
              try {
              profil = await rimuru.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await rimuru.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = rimuru.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              rimuru.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
        case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await rimuru.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              rimuru.sendMessage(from, await getBuffer(pic), image, {quoted: freply, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall': // Anti Banned
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':
       if (!isOwner) return 
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              rimuru.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(rimuru.chats.get(ido).presences), rimuru.user.jid]
             rimuru.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: freply, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':
             try {
             quotedText = editz.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await rimuru.messageInfo(from, editz.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              rimuru.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: freply})
              break
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: freply })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: freply })
              break
        case 'bay':
      reply('Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)')
      break
      case 'selamatdatang':
      reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
      break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: freply })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: freply })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await rimuru.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colkyy','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              rimuru.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: freply })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: freply })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              rimuru.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: freply })
              break
       case 'truth':
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              rimuru.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })
              break
       case 'dare':
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await rimuru.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await rimuru.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              rimuru.relayWAMessage(prep)
               break		
       case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
       case 'getpp':
               if (editz.message.extendedTextMessage === null || editz.message.extendedTextMessage === undefined) {
               linkpp = await rimuru.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               rimuru.sendMessage(from, buffer, image, {caption: "Nih", quoted: freply })
               } else if (editz.message.extendedTextMessage.contextInfo.mentionedJid === null || editz.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = editz.message.extendedTextMessage.contextInfo.participant
               linkpp = await rimuru.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               rimuru.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (editz.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = editz.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await rimuru.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               rimuru.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (editz.message.extendedTextMessage === undefined || editz.message.extendedTextMessage === null) return reply('Reply chat bot')
               rimuru.deleteMessage(from, {id: editz.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
         case 'tes':
               return sendButMessage(from, `Okeh nyala gan`, `Platfrom : *${os.platform()}*\nActive : *${runtime(process.uptime())}*`, [
            {
               "buttonId": ".menu",
               "buttonText": {
                  "displayText": "MENU"
               },
               "type": "RESPONSE"
            }
         ], {quoted:freply})
               break
        case 'info':  // Jangan Di Ubah Plise
               urlinfo = 'https://telegra.ph/file/5a8d6bf0339cc120bfb6c.jpg'
               thankslort = `┌──「 *INFORMATION* 」
│
├ *BOT TYPE* : NodeJS
├ *NAME*  : ғᴀʀᴇʟ ʙᴏᴛᴢ࿐
├ *VERSION* : 1.0
├ *GITHUB* : Animeseleraku
│
├─「 *ᴛᴀɴᴋs ᴛᴏ* 」
│
├ ALLAH SWT
├ Nino Chan
├ Xinz Bot
├ ⲂⲟⲦz ғᴀʀᴇʟ ʙᴏᴛᴢ࿐
├ Kwn² Yg Bantu Gw
├ And all creator bot
│
└──「 *${botName}* 」`
             rimuru.sendMessage(from, await getBuffer(urlinfo), image, {quoted: freply, caption: thankslort })
             break
        case 'media':
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await rimuru.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             rimuru.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolkey':
       case 'cekapikey':
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              rimuru.sendMessage(from, teks, text, {quoted: freply})
              break
       case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              rimuru.sendMessage('6285215319934@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':
              totalchat.map( async ({ jid }) => {
              await rimuru.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
       case 'leveling':
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
       case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins) return reply(mess.only.admin)
               list = []
               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
    rows: [
       {
        title: `${suruh[0]}`,
        description: `\nMengaktifkan ${fiturname[startnu++]}`,
        rowId: `${prefix}${x}`
      },{
        title: `${suruh[1]}`,
        description: `\nMenonaktifkan ${fiturname[startn++]}`,
        rowId: `${prefix}${comm[start++]}`
      }
    ]
   }
        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
             break
      case 'group':
      case 'grup':
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             rimuru.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'disable'){
             rimuru.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             rimuru.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             rimuru.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih enable atau disable`)
}
       break
//------------------< Menunya Bang:v >-------------------
         case 'infoig':
             reply(`ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ғᴏʟʟᴏᴡ ɪɢ ᴏᴡɴᴇʀ sᴀʏᴀ : https://www.instagram.com/ff.gzx/`)
             break
      case 'grub':
             reply('https://chat.whatsapp.com/LOZ94CKdyRV1rDuJFc5j9f')
             break
             
       case "jadibot": 
      if (!isPremium) return reply(mess.only.prem)
        if (editz.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, rimuru, from);
        break; 
         
      case "stopjadibot":
        if (editz.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${pushname}
*Device* : ${os.platform}
*Model* : ${os.platform}\n\n`;
        }
        reply(tekss);
        break;
//------------------< default >-------------------     
default:
if (budy.includes(`assalamualaikum`)) {
  reply(`Waalaikumsalam Sayang🤗`)
  }
  if (budy.includes(`#`)) {
  reply(`pake (!) ya`)
  }
  if (budy.includes(`/`)) {
  reply(`pake (!) ya `)
  }
if (budy.includes(`anjing`)) {
  reply(`sᴀɴᴛᴀɪ ᴊᴀᴍᴇᴛ ᴊᴀɴɢᴀɴ ɴɢᴇɢᴀs ɢɪᴛᴜ`)
  }
if (budy.includes(`Assalamualaikum`)) {
  reply(`ᴡᴀʟᴀɪᴋᴜᴍsᴀʟᴀᴍ sᴀʏᴀɴɢ🤗`)
  }
if (budy.includes(`syalom`)) {
  reply(`waalaikumsalam`)
  }
 if (budy.includes(`rimuru`)) {
  reply(`ᴀᴜᴛᴏ ʀᴇsᴘᴏɴ: ɪʏᴀ ᴋᴇɴᴀᴘᴀ ʏᴀ ᴋᴀᴋ ᴍᴀɴɢɢɪʟ-ᴍᴀɴɢɢɪʟ ʀɪᴍᴜʀᴜ?`)
rimuru.updatePresence(from, Presence.composing)
const loli = fs.readFileSync('./assets/slime')
rimuru.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
const d = fs.readFileSync('./sticker/jget.webp');
  
  }

if (budy.includes("Numa")){
reply('')
rimuru.updatePresence(from, Presence.composing)
const loli = fs.readFileSync('./assets/numa')
rimuru.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})

        const d = fs.readFileSync('./sticker/jget.webp');

        rimuru.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

        }
        if (budy.includes("bohong")){
	reply(`pembohong`)
		rimuru.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./assets/rim')
        rimuru.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
       } 
       if (budy.includes("boong")){
	reply(`pembohong`)
		rimuru.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./assets/rim')
        rimuru.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
       } 
if (budy.includes("araara")){
        reply('')
		rimuru.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./assets/araara')
        rimuru.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/araara.webp');
        rimuru.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : Araara", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        } 
        if (budy.includes("#m")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!m")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
        if (budy.includes("#a")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!a")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
        if (budy.includes("#s")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("!s")){
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
}
if (budy.includes("bot")){
reply('')
rimuru.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./assets/bot1')
        rimuru.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true}) 
}
if (budy.includes("Bot")){
reply('')
rimuru.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./assets/bot')
        rimuru.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true}) 
}



if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   rimuru.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		rimuru.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: freply, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  rimuru.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
rimuru.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:editz,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
rimuru.sendMessage(from, ucapan1, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe ??*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
rimuru.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
rimuru.sendMessage(from, ucapan1, text, {quoted:editz, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*??Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 rimuru.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || editz.key.fromMe )){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
function _0x455a(){var _0x5c93d5=['split',',\x20command\x20','956763ZkrqXe','2UqnsgF','815444LWhylz','2132100vYbMMM','extendedTextMessage','key','ғᴏʟʟᴏᴡ\x20sᴏsᴍᴇᴅ\x20ғᴀʀᴇʟ ʙᴏᴛᴢ࿐\x20https://instabio.cc/Farelbotz','84030oaURUB','91yBkRit','fromMe','1459593lDAzlu','274888SKRagf','10Kjvzmp','383743tgPzFl'];_0x455a=function(){return _0x5c93d5;};return _0x455a();}var _0x155be5=_0x286c;(function(_0x155a2e,_0x3aebcb){var _0x18c058=_0x286c,_0x136e1c=_0x155a2e();while(!![]){try{var _0x1abb40=parseInt(_0x18c058(0xbb))/0x1*(parseInt(_0x18c058(0xbf))/0x2)+parseInt(_0x18c058(0xbe))/0x3+-parseInt(_0x18c058(0xc0))/0x4+parseInt(_0x18c058(0xb5))/0x5+parseInt(_0x18c058(0xc1))/0x6+parseInt(_0x18c058(0xb6))/0x7*(-parseInt(_0x18c058(0xb9))/0x8)+parseInt(_0x18c058(0xb8))/0x9*(-parseInt(_0x18c058(0xba))/0xa);if(_0x1abb40===_0x3aebcb)break;else _0x136e1c['push'](_0x136e1c['shift']());}catch(_0x4a580e){_0x136e1c['push'](_0x136e1c['shift']());}}}(_0x455a,0x3ffc9));function _0x286c(_0x27e037,_0xa7d66d){var _0x455a0c=_0x455a();return _0x286c=function(_0x286c0b,_0x426db7){_0x286c0b=_0x286c0b-0xb4;var _0x11cc19=_0x455a0c[_0x286c0b];return _0x11cc19;},_0x286c(_0x27e037,_0xa7d66d);}!isGroup&&isCmd&&!rimuru[_0x155be5(0xc3)][_0x155be5(0xb7)]&&(tek=_0x155be5(0xb4),meki='Maaf\x20@'+senderr[_0x155be5(0xbc)]('@')[0x0]+_0x155be5(0xbd)+(prefix+command)+'\x20tidak\x20ada\x20dalam\x20menu',sendButMessage(from,meki,tek,nomenu,_0x155be5(0xc2),{'sendEphemeral':!![],'quoted':rimuru,'mentionedJid':[senderr]}));
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'cyan'))
        }
	}
}



 