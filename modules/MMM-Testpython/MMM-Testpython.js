var Testpythons;
Module.register("MMM-Testpython", {

    defaults: {},
    start: function (){
        Testpythons = this;
    },
  
  getDom: function() {
    var element = document.createElement("div")
    element.className = "myContent"
    element.id="divid"
    element.innerHTML = "Hello, World!!! " + this.config.foo
    var subElement = document.createElement("p")
    subElement.innerHTML = "Click" 
    subElement.id = "clickid"
    element.appendChild(subElement)
    return element
  },
  
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
      var elem = document.getElementById("clickid")
      elem.addEventListener("click", () => {
        //
        Testpythons.sendSocketNotification("TEST")
        //
        console.log(" click success !")
        elem.innerHTML = "click success"       
      }) 
        break
    }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "AFTERCLICK":
        console.log("Socket recevied payload : "+payload)
        var elemk = document.getElementById("clickid")
        //
        Testpythons.sendNotification('SHOWCHANGEDIMAGE');
        //
        elemk.innerHTML = payload
        break
    }
  }

})

