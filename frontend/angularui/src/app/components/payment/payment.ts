export class Payment {
    error: Error;
    results: Result;
}

export class Result {
    applicationID: string;
    sessionID: string;
    posID: string;
    returnCode: number;
    returnDesc: string;
}

export class PaymentBody{
    Qrdata:string;
}