import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repository = process.env.GITHUB_REPOSITORY || ''
const repoName = repository.includes('/') ? repository.split('/')[1] : ''
const isUserSite = repoName.endsWith('.github.io')
const base = process.env.GITHUB_ACTIONS
  ? isUserSite
    ? '/'
    : /${repoName}/
  : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
