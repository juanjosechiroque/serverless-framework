'use strict';

var counter = 0;

module.exports.hello = async event => {  
  
    const result = {    
    message: "Hello from Serverless Framework", 
    input: event
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(result, null, 2),
  };

};

module.exports.getMyIpAddress = async event => {  
  
  const ipAddress = event.requestContext.identity.sourceIp;
  const dateNow = new Date();
  
  const result = {    
    ipAddress: ipAddress, 
    dateTime: dateNow
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(result, null, 2),
  };

};

module.exports.counter = async event => {  
  
  counter++;
  
  const result = {
    counter
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(result, null, 2),
  };

};