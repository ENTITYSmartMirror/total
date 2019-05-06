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
	address: "127.0.0.1", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 9000,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "MMM-Modulebar",
			position: "center", // This can be any of the regions.
			header: "헤어스타일", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See 'Configuration options' for more information.
			}
		},
		{
			module: "MMM-Modulebar1",
			position: "center", // This can be any of the regions.
			header: "남자헤어", // Optional
			
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See 'Configuration options' for more information.
			}
		},
		{
			module: "MMM-Modulebar2",
			position: "center", // This can be any of the regions.
			header: "여자헤어", // Optional
			
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See 'Configuration options' for more information.
			}
		},
		{
			module: 'MMM-iFrame3',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷댄디.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame4',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷리젠트.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame5',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷투블럭.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame6',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷포마드.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame7',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌가르마.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame8',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌리젠트.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame9',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌아이롱.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame10',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷레이어드.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame11',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷보브.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame12',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷숏.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame13',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷히메.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame14',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame15',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame16',
			position: 'middle_center',	// This can be any of the regions.
			hide : "true",
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame17',
			position: 'middle_center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame18',
			position: 'middle_center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame19',
			position: 'middle_center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame20',
			position: 'middle_center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame21',
			position: 'middle_center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: 'MMM-iFrame22',
			position: 'middle_center',	// This can be any of the regions.
			visible : 'false',
			config: {
				// See 'Configuration options' for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/index.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2800", // width of iframe
					height: "2800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
					hidden : "true",
			}
		},
		{ 
			module: "MMM-Modulebar3", //23
			position: "top_left", // This can be any of the regions.
			header: "메뉴선택", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See 'Configuration options' for more information.
			}
		},
		{
			module: 'MMM-iFrame40', //24
			position: "bottom_center",	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["https://comic.naver.com/webtoon/weekday.nhn"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "2000", // width of iframe
					height: "1800", // height of iframe
					frameWidth: "950", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
					hide: "true",
				}
		},
		//1
		{
			module: "MMM-EmbedYoutube1",  //25
			position: "bottom_bar",	
			config: {
				video_id: "w3jLJU7DT5E",
				searchlist1: "쯔위",
				loop: true
			}
		},
		//2	
        {
            module: "MMM-Modulebar5", //26
            position: "top_left", 
			classes: "default everyone",
            config: {
						
                
            }
		},
		//3
		{
            module: "MMM-Modulebar4", //27
            position: "top_left",
            classes: "default everyone", 
            config: {
						

            
            }
        },


		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
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
		{
			module: "MMM-Dynamic-Modules",
		},

		{
			module: 'MMM-Carousel',
			position: 'bottom_bar', // Required only for navigation controls
			config: {
				ignoreModules: ['alert'],
				mode: 'slides',
				showPageIndicators: true,
				showPageControls: true,
				slides: {
					main: ['compliments'],
					"Slide 2": ['MMM-Modulebar4','MMM-Modulebar5','MMM-EmbedYoutube1','MMM-EmbedYoutube2','MMM-iFrame40'],
					"Slide 3": ['MMM-Modulebar', 'MMM-Modulebar1', 'MMM-Modulebar2', 'MMM-Modulebar3'],
					"Slide 4": ['MMM-Testpython','MMM-iFrame17','MMM-iFrame18','MMM-iFrame19','MMM-iFrame20','MMM-iFrame21','MMM-iFrame22','MMM-Dynamic-Modules']
				},
				keyBindings: { 
					enabled: true,
					map: {
						NextSlide: "ArrowRight", 
						PrevSlide: "ArrowLeft", 
						Slide0:    "Home"
					},
					mode: "DEFAULT"
				}
			}
			
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
