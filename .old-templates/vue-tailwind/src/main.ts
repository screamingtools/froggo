import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './css/tailwind.css'
import './css/ub-prompt.css'

export const createApp = ViteSSG(App)
