/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
               clearTimeout(timeout);
               reject("Time Limit Exceeded");
            }, t);

            fn(...args).then((result) => {
                clearTimeout(timeout);
                resolve(result);
            }).catch((error) => {
                clearTimeout(timeout);
                reject(error);
            });
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */