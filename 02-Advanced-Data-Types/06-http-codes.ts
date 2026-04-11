type SuccessResponse = {
    text: string,
    code: 200 | 201 | 301
};

type FailedResponse = {
    text: string,
    code: 400 | 404 | 500,
    printChars?: number
};

function printsTextInformation(responseObj: SuccessResponse | FailedResponse): void {
    if ('printChars' in responseObj) {
        console.log(responseObj.text.slice(0, responseObj.printChars));
    } else {
        console.log(responseObj.text);
    }
}

printsTextInformation({ code: 200, text: 'OK' });
printsTextInformation({ code: 201, text: 'Created' });
printsTextInformation({ code: 400, text: 'Bad Request', printChars: 4 });
printsTextInformation({ code: 404, text: 'Not Found' });
printsTextInformation({ code: 404, text: 'Not Found', printChars: 3 });
printsTextInformation({ code: 500, text: 'Internal Server Error', printChars: 1 });