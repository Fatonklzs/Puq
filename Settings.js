global.prefa = ['','!','.','#','/'] 
const fs = require('fs')
//-------------------------------
//-------- Bot Settings
global.autoEval = false
global.connect = true
global.publicX = true
global.welcome = false
global.autoAiStatus = false
global.owner = '𝗗𝗮𝗳𝗳𝗮 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿'
global.botname = `ʀᴀᴠᴀɢᴇ ᴠ𝟺 ɢᴇɴ 𝟸 ғʀᴇᴇ`
global.name = "Daffa"
global.version = "Version 4 Gen 2"
global.title = "ʀᴀᴠᴀɢᴇ ᴠ𝟺 ɢᴇɴ 𝟸 ғʀᴇᴇ"
global.footer = `© — ᴅᴀғғᴀ ᴅᴇᴠ`
//-------- End


//-------- Sticker Function
global.packname = "DaffaDev" 
global.author = ""

//-------- End

//---------- Apikey Gemini
global.gemini = 'AIzaSyA4Gty8MCqF3b70U49A-J-EKv2MgwkFj7E'

//-------- Message
global.chat = {
    owner: `\`[ ! ]\` Only Special User.`,
    admin: `\`[ ! ]\` Bot Are Not Admin.`,
    group: `\`[ ! ]\` This Feature Can Only Be Accessed In Groups`,
    process: `\`[ # ]\` Processing. . .`
}
//-------- End


//-------- AutoReload Function
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
//-------- End