/**
* ServiceStatus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      name: 'STRING',
      api: 'STRING',
      serviceid: 'STRING',
      containerid: 'STRING',
      status: 'STRING',
      // Container ID


    group:{
        model: 'group'
    }
  }
};

