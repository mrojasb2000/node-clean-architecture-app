require('dotenv').config();


export class ConfigEnv {
    GetAsString(key: string, defaultValue: string): string {
        if (key in process.env && process.env.hasOwnProperty(key)) {
            return String(process.env[key])
        } else {
            return defaultValue
        }
    }

    GetAsNumber(key: string, defaultValue: number): number {
        let envValue: any = defaultValue
        if (key in process.env && process.env.hasOwnProperty(key)) {
            envValue =  process.env[key]
        } 
        return envValue
    }
}
