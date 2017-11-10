module.exports = Log2Server;

/**
 * PMDB Extension to console.log that 
 */
function Log2Server() {
    console.log('Constructor');
    
    /**
     * Pad number if necessary
     * @param {*} number 
     */
    function pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

    /**
     * Simple timestamp prototype...seconds resolution is good enough
     */
    Date.prototype.timeStamp = function () {
        return this.getUTCFullYear() +
            '-' + pad(this.getUTCMonth() + 1) +
            '-' + pad(this.getUTCDate()) +
            'T' + pad(this.getUTCHours()) +
            ':' + pad(this.getUTCMinutes()) +
            ':' + pad(this.getUTCSeconds());
    };

    /**
     * Save original log... Might need it sometime?
     */
    this.originalLog = console.log;

    /**
     * Override standard console.log.
     * 
     * Note: Using ES6 Syntax to preserve 'THIS'
     * 
     * @param sev.  Seeverity of the message.  DEBUG | INFO | WARN | ERROR 
     * @param msg. Text of the error
     */
    this.log = ((sev, msg) => {
        if ( undefined === msg ) {
            msg = '';
        }
        console.info(this._getTimeStamp() + ' ' + sev + ' ' + msg);
    });

    /**
     * Timestamp helper... use our timeStamp override
     */
    this._getTimeStamp = function () {
        return new Date().timeStamp();
    }

    // Replace console.log with ours
    console.log = this.log;

}

