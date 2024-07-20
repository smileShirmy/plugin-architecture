import Core from './core'
import Refresh from './plugins/refresh'

Core.use(Refresh)

const core = new Core({
  refresh: true
})

core.start()

console.log(core)
