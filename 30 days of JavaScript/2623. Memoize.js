/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const values = JSON.stringify(...args);
        if (values in cache){
            return cache[values];
        } else {
            result = fn(...args);
            cache[values] = result;
            return result;
        };
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */