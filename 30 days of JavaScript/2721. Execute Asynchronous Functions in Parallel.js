/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = Array(functions.length); //create an array to keep the results of promises
        let amountOfFunctions = functions.length; //the number of promises we need to wait for

        //iterate through resolving promises. In each run, another promise resolves with a result 
        //that is saved in results array until all of them are resolved or a rejection happens.
        for(let i = 0; i < functions.length; i++) {
            functions[i]().then((result) => {
                results[i] = result;
                amountOfFunctions -= 1;
                if(amountOfFunctions === 0) resolve(results);
            }).catch(error => reject(error));
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */