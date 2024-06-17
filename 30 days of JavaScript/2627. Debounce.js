/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timeoutID; // save the timeoutID in the closure, if it exists

    return function (...args) {
        clearTimeout(timeoutID); //clear the timeoutID if the function is called again, before 't' happens
        timeoutID = setTimeout(() => fn(...args), t); //set the timeout for the function to execute after 't'
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */