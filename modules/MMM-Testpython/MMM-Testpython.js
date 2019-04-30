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
    var subElement2 = document.createElement("p")
    subElement2.innerHTML = "Click2" 
    subElement2.id = "clickid2"
    element.appendChild(subElement)
    element.appendChild(subElement2)
    return element
  },
  
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
      var elem = document.getElementById("clickid")
      elem.addEventListener("click", () => {
        //
        Testpythons.sendSocketNotification("BEFORECAPTURE")
        Testpythons.sendNotification("LOADINGBEFORE")
        //
        console.log(" click success !")
        elem.innerHTML = "click success"       
      }) 
      var elem2 = document.getElementById("clickid2")
      elem2.addEventListener("click", () => {
        //
        Testpythons.sendSocketNotification("AFTERCAPTURE")
        Testpythons.sendNotification("LOADINGAFTER")
        
        //
        console.log(" click2 success !")
        elem2.innerHTML = "click2 success"       
      }) 
        break
    }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "BEFORECAPTURESUCCESS":
        console.log("Socket recevied payload : "+payload)
        var elemk = document.getElementById("clickid")
        Testpythons.sendNotification("BEFOREIMAGE")
        //
        Testpythons.sendNotification('SHOWCHANGEDIMAGE');
        //
        elemk.innerHTML = payload
        break
      case "AFTERCAPTURESUCCESS":
        console.log("Socket recevied payload : "+payload)
        var elemk = document.getElementById("clickid")
        Testpythons.sendNotification("AFTERIMAGE")
        //
        Testpythons.sendNotification('SHOWCHANGEDIMAGE');
        //
        elemk.innerHTML = payload
      break
    }
  }

})

