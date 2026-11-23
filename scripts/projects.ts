// Regenerates the projects block in README.md from ~/dev-personal/projects.json.
// No file, no change. Only the projects in SHOW are listed (tradingje dashboard is private).
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'

const src = `${homedir()}/dev-personal/projects.json`
if (!existsSync(src)) {
  console.log(`no ${src}; README projects block left as is`)
  process.exit(0)
}
const SHOW = ['inviteje', 'resumeje', 'travelje', 'portfolio']
const data = JSON.parse(readFileSync(src, 'utf8'))
const list: any[] = Array.isArray(data) ? data : data.projects
const rows = list
  .filter((p) => SHOW.includes(p.name) && p.status === 'live' && p.urls?.prod)
  .map((p) => {
    const repo = p.public_repo ? ` · [source](https://github.com/${p.public_repo})` : ''
    return `- **${p.name}** — [${p.urls.prod.replace('https://', '')}](${p.urls.prod})${repo}`
  })
const block = `<!-- projects:start -->\n${rows.join('\n')}\n<!-- projects:end -->`
const readme = readFileSync('README.md', 'utf8')
const out = readme.replace(/<!-- projects:start -->[\s\S]*<!-- projects:end -->/, block)
writeFileSync('README.md', out)
console.log(`${rows.length} projects written`)
