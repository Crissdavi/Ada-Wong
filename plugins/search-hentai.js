// *[ HENTAITV - SEARCH CARRUSEL ]*
import axios from 'axios'
const { proto, generateWAMessageFromContent, generateWAMessageContent } = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn, text }) => {
if (!text) return m.reply('Ingresa el texto de lo que quieres buscar')


async function createImage(url) {
const { imageMessage } = await generateWAMessageContent({ image: { url } }, { upload: conn.waUploadToServer })
return imageMessage
}

try {
let { data } = await axios.get(`https://deliriussapi-oficial.vercel.app/anime/hentaitv?query=${encodeURIComponent(text)}`)
let res = data.data

let ult = res.sort(() => 0.5 - Math.random()).slice(0, 7)

let HasumiBotFreeCodes = [];
for (let result of ult) {
HasumiBotFreeCodes.push({
header: proto.Message.InteractiveMessage.Header.fromObject({title: `${result.title}`,
hasMediaAttachment: true,imageMessage: await createImage(result.image)
}),
body: proto.Message.InteractiveMessage.Body.fromObject({text: `*Resultado de :* ${text}
*👀 Vistas:* ${result.views}
`}),
footer: proto.Message.InteractiveMessage.Footer.fromObject({text: `${result.url}`}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({buttons: []})
})
}

let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.create({ text: '' }),
footer: proto.Message.InteractiveMessage.Footer.create({ text: 'HENTAITV SLIDE' }),
header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...HasumiBotFreeCodes] })
})
}}}, { quoted: m })

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
} catch (error) {
console.error(error)
}}
handler.tags = ['search', 'nsfw'] 
handler.help = ['hentaitv']
handler.command = ['hentaitv']

export default handler
