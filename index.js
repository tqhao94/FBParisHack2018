"use strict";
const request = require('request-promise');
const user = require('./config.js');

const options = {
    method: 'GET',
    uri: 'https://graph.facebook.com/545189548932708/feed',
    qs: {
      access_token: user.hao.access_token,
      fiels:"feed.limit(3)"      
    }
};
request(options).then(fbRes => {
    let result = JSON.parse(fbRes);
    let message =  [];
    for(let i in result.data){
        message.push(result.data[i].message);
    }
    console.log(message);
})



const execSync = require('child_process').execSync;
//var response = execSync('matlab -nodisplay -nojvm -nosplash -nodesktop -r "try, run (\'my_script.m\'), catch, exit(1), end, exit(0);"');
