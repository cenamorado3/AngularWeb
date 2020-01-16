import { Observable } from 'rxjs';

export class AppError
{
    constructor(public originalError?: Response) {
    }
}