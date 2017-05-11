import Ember from 'ember';

export default Ember.Controller.extend({

  // isDisabled: Ember.computed("emailAddress", function(){
  //   return this.get("emailAddress") === "";
  // }),
  isValid: Ember.computed.match("emailAddress", /^.+@.+\..+$/),

  isDisabled: Ember.computed.not("isValid"),

  actions: {
    sendInvitation() {
      const email = this.get("emailAddress");
      const newInvitation = this.store.createRecord("invitation", {email: email});
      newInvitation.save().then((response) => {
        this.set("responseMessage", `Thank you! Invitation saved with id: ${response.get("id")}`);
        this.set('emailAddress', '');
      });
    }
  }
});
