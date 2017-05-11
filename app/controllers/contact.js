import Ember from 'ember';

export default Ember.Controller.extend({

  isEmailValid: Ember.computed.match("emailAddress",  /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte("message.length", 7),
  isFormValid: Ember.computed.and("isEmailValid", "isMessageValid"),
  isDisabled: Ember.computed.not("isFormValid"),

});
