import { ErrorHandler } from "@angular/core";

export class GlobalHttpErrorHandlerService implements ErrorHandler{
    handleError(error: any): void {
        console.log("Global Error handler works!!");
        console.log(error);
    }
    
}