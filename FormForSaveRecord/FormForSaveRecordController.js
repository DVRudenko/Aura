({
  saveAcc : function(component, event) {
    let newAcc = component.get("v.acc");
    let action = component.get("c.saveAccount");
    action.setParams({
      "acc":newAcc
    });
    action.setCallback(this, function(response) {
      let state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.accId", response.getReturnValue().Id);
        component.set("v.acc", response.getReturnValue());
      }
    });
    $A.enqueueAction(action);
  }
})
