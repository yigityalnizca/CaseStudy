export class Qr {
    error: Error;
    result: Result;
}
export class Result {
    QRdata: string;
    returnCode: number;
    returnDesc: string;
}