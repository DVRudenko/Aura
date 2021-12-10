({
  getAccounts : function(component, event) {
    let action = component.get("c.getListAccounts");
    action.setCallback(this, function(response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        //  var stringItems = response.getReturnValue();
        component.set("v.accounts", response.getReturnValue());
      }
    });
    $A.enqueueAction(action);
  }

})
