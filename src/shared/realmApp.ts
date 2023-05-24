import { App } from 'realm-web'

export const production = false
export const REALM_APP_ID = production
  ? 'soundstorm-wdkhs'
  : 'soundstorm-dev-udikj'
export const RealmApp = new App({ id: REALM_APP_ID })
export default RealmApp
