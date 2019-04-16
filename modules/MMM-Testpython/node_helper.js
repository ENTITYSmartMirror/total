var NodeHelper = require("node_helper");
var {PythonShell} = require('python-shell');
var socketTestpython;
module.exports = NodeHelper.create({
  start: function() {
    socketTestpython=this;
    console.log(this.name+"node_helper started")
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "TEST":
        console.log("notification : " + notification)
	    PythonShell.run('/home/pi/mirrorTest/modules/MMM-Testpython/sample.py', null, function (err, result) {
            if (err) throw err;
            console.log(result);          
            socketTestpython.sendSocketNotification("I_DID",result);
          });
	       
        break
    }
  }
}) 
