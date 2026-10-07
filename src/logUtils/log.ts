export default class Logger {

    static info(message: string): void {
        console.log(`[INFO] [API LOGGER] ${new Date().toISOString()} ${message}`);
    }

    static warn(message: string): void {
        console.log(`[WARN] [API LOGGER] ${new Date().toISOString()} ${message}`);
    }

    static error(message: string): void {
        console.log(`[ERROR] [API LOGGER] ${new Date().toISOString()} ${message}`);
    }

    static debug(message: string): void {
        console.log(`[DEBUG] [API LOGGER] ${new Date().toISOString()} ${message}`);
    }

}
