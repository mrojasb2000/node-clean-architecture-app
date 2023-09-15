import { Server } from "./presentation/server"

(() => {
    main()
})()

async function main (){
    // todo: await database

    // todo: start server
    console.log("Application is running...")
    new Server().start()

}