import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    sendMessage: function(){

      const message = this.controller.get("message");
      const email = this.controller.get("emailAddress");
      const newMessage = this.store.createRecord("contact", {email: email, message: message});
      newMessage.save().then((response) => {
        var responseMessage = `The message: ${this.get("message")} has been sent to ${this.get('emailAddress')} with an id ${response.get('id')}.`;
        this.controller.set("emailAddress", "");
        this.controller.set("message", "");
        this.controller.set("responseMessage", responseMessage);
      })

    }
  }

});
