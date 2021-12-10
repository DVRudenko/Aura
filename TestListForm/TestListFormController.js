({
  getAccounts : function(component, event) {
    var action = component.get("c.getListAccounts");
    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        //  var stringItems = response.getReturnValue();
        component.set("v.accounts", response.getReturnValue());
      }
    });
    $A.enqueueAction(action);
  }

})