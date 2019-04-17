/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","172.16.100.133", "::ffff:172.16.100.133", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		//0
		{
			module: 'MMM-iFrame',
			position: "bottom_center",	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["https://comic.naver.com/webtoon/weekday.nhn"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2000", // width of iframe
					height: "1800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
				}
		},
		//1
		{
			module: "MMM-EmbedYoutube1", 
			position: "bottom_bar",	
			config: {
				video_id: "w3jLJU7DT5E",
				searchlist1: "쯔위",
				loop: true
			}
		},
		//2	
        {
            module: "MMM-Modulebar1",
            position: "lower_third", 
			classes: "default everyone", 
			header:"원하는 메뉴를 선택해주세요",
            config: {
						
                
            }
		},
		//3
		{
            module: "MMM-Modulebar",
            position: "center_middle",
            classes: "default everyone", 
            config: {
						

            
            }
        },
        
        {
            module: "MMM-Dynamic-Modules",
        },
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_right"
		},
		
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},

		{
			module: "MMM-Testpython",
			position: "top_right",
			config:{
				foo:"yellow"
			}
			
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}