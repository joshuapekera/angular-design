/**
 * Line
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
    text: {
      type: 'string',
      required: true
    },
    user: {
      type: 'string',
      required: true
    },
    createdAt: 'date'
  },
  beforeCreate: function (values, next) {
    values.createdAt = new Date();
    next();
  }

};
