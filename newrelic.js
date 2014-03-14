/*jslint node: true*/
'use strict';

exports.config = {
    /**
    * Array of application names.
    */
    app_name : ['servejob-client-web'],
    /**
    * Your New Relic license key.
    */
    license_key : '808f3be32842fea709464266d7416dfc3ab7c797',
    logging : {
        /**
        * Level at which to log. 'trace' is most useful to New Relic when diagnosing
        * issues with the agent, 'info' and higher will impose the least overhead on
        * production applications.
        */
        level : 'trace'
    }
};

exports.start = function start() {
    if (process.env.NEWRELIC === 'true') {
        require('newrelic');
    }
};
