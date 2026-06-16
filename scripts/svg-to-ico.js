/**
 * Converts app/icon.svg → public/favicon.ico
 * Embeds three sizes: 16×16, 32×32, 48×48
 */

const sharp = require('sharp')
const toIco = require('to-ico')
const fs = require('fs')
const path = require('path')

const SVG_PATH = path.join(__dirname, '..', 'app', 'icon.svg')
const ICO_PATH = path.join(__dirname, '..', 'public', 'favicon.ico')

async function main() {
  const svgBuffer = fs.readFileSync(SVG_PATH)

  const sizes = [16, 32, 48]

  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  )

  const icoBuffer = await toIco(pngBuffers)
  fs.writeFileSync(ICO_PATH, icoBuffer)

  const kb = (icoBuffer.length / 1024).toFixed(1)
  console.log(`✓ favicon.ico written to public/ (${kb} KB, sizes: ${sizes.join(', ')}px)`)
}

main().catch((err) => {
  console.error('✗ Conversion failed:', err.message)
  process.exit(1)
})
