import { ConfigEnv } from "./config/env"
import { Server } from "./presentation/server"

(() => {
    main()
})()

async function main (){
    // todo: await database

    // todo: start server
    const configEnv = new ConfigEnv()
    const webServerPort = configEnv.GetAsNumber("WEB_PORT", 5000)
    console.log("Application is running...")
    new Server({
        port: webServerPort
    }).start()

}