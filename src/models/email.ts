export interface IEmail {
    firstName?: string;
    lastName?: string;
    from?: string;
    to: string;
    subject?: string;
    text?: string;
    html?: string;
}