var TimeLimitedCache = function () {

};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const cache = new map();
    
    set(key, value, duration) {
        
        if (cache.has(key)) {
            cache.set(key, value);
            return true;
        } else {
            cache.set(key, value);
            return false;
        };

        const timeoutID = setTimeout(() => {
            clearTimeout(timeoutID);
            cache.delete(key);
        }, duration);

    };

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {

};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {

};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */