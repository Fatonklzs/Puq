const fs = require('fs')
const path = require('path')

const cooldownFolder = path.join(__dirname)
const cooldownFile = path.join(cooldownFolder, 'Cooldowns.json')

fs.mkdirSync(cooldownFolder, { recursive: true })

if (!fs.existsSync(cooldownFile)) {
  fs.writeFileSync(cooldownFile, JSON.stringify({ globalCooldown: 0 }, null, 2))
  fs.chmodSync(cooldownFile, 0o777)
}

const loadCooldowns = () => JSON.parse(fs.readFileSync(cooldownFile))
const saveCooldowns = (data) => fs.writeFileSync(cooldownFile, JSON.stringify(data, null, 2))

module.exports = { loadCooldowns, saveCooldowns }