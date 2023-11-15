export default function logError(message: string) {
    console.error( new Error(message) );
}