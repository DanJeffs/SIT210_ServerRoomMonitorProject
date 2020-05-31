
var config = 
{
  address: '0.0.0.0',
  electronOptions: {},
  ipWhitelist: [
    '127.0.0.1',
    '::ffff:127.0.0.1',
    '10.0.1.0/24',
    '10.0.2.0/24',
    '::1'
  ],
  modules: [
    {
      module: 'alert',
      config: {}
    },
    {
      module: 'updatenotification',
      position: 'top_bar',
      config: {}
    },
    {
      module: 'clock',
      position: 'top_left',
      config: {}
    },
    {
      module: 'MMM-Remote-Control',
      config: {
        apiKey: '',
        customCommand: {}
      }
    },
    /*{
      module: 'MMM-Wallpaper',
      position: 'fullscreen_below',
      config: {
        source: 'chromecast',
        updateInterval: 60*1000,
        maximumEntries: 50,
        slideInterval: 60000
      }
    },*/
    {
      module: 'MMM-MyCalendar',
      position: 'top_left',
      config: {
        colored: true,
	      maximumEntries: 4,
        calendars: [
          {
            symbol: 'calendar-check',
            color: '#0726d9',
            url: 'webcal://www.calendarlabs.com/ical-calendar/ics/35/Australia_Holidays.ics'
          },
          {
            symbol: 'calendar',
            color: '#c242f5',
            url: 'webcal://****'
          }
        ]
      },
    },
    
    {
      module: 'MMM-NewPIR',
      position: 'bottom_right',
      header: '',
      config: {}
    },
    {
      module: 'MMM-DarkSkyForecast',
      header: 'Weather',
      position: 'top_right',
      classes: 'default everyone',
      disabled: false,
      config: {
        apikey: '****',
        latitude: '-**.****',
        longitude: '*******',
        iconset: '4c',
        concise: false,
        forecastLayout: 'table',
        label_days: [
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thur',
          'Fri',
          'Sat'
        ],
        label_ordinals: [
          'N',
          'NNE',
          'NE',
          'ENE',
          'E',
          'ESE',
          'SE',
          'SSE',
          'S',
          'SSW',
          'SW',
          'WSW',
          'W',
          'WNW',
          'NW',
          'NNW'
        ]
      }
    },
    {
      module: 'MMM-NowPlayingOnSpotify',
      position: 'top_right',
      config: {
        showCoverArt: false,
	      clientID: '****',
        clientSecret: '****',
        accessToken: '*****',
        refreshToken: '****'
      }
    },
    /*{
      module: 'newsfeed',
      position: 'bottom_bar',
      config: {
        feeds: [
          {
            title: 'The Age',
            url: 'http://feeds.theage.com.au/rssheadlines/top.xml'
          },
          {
            title: 'ABC News',
            url: 'http://www.abc.net.au/news/feed/2942460/rss.xml'
          },
          {
            title: 'SMH',
            url: 'http://feeds.smh.com.au/rssheadlines/top.xml'
          }
        ],
        showDescription: true,
        startTags: [],
        endTags: [],
        prohibitedWords: []
      }
    },*/
    {
		module: 'MMM-Screencast',
		position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
		config: {
			position: 'center',
			height: 600,
			width: 1000,
		}
    },
    {   
      module: "MMM-ParticleStatus",
      position: "top_center",
      header: "Server Room", 
      config: {
          particleUsername: "Nope",
          particlePassword: "More Nope",
          //clientId: "notrealclientId",
          //clientSecret: "notrealclientSecret",
          debug: false,
          events:
              [
                  {
                      deviceId: "*******",
                      name: "Temperature",
                      nickname: "Room Temp",
                      icon: "fa-thermometer-half",
                      states: [20,30],
                      show_data: true
                  },
                  {
                      deviceId: "*******",
                      name: "Motion_Sensor",
                      icon: "leaf",
                      nickname: "Movement",
                      states: ["MOTION", "NO_MOTION"]
                  },
              ]
          }
    },
    {
 	  module: "MMM-HTMLSnippet",
  	position: "top_left",
	  config: {
	        html:`<iframe width="450" height="260" style="border: 1px solid #000;" src="https://thingspeak.com/channels/*****</iframe>`, //insert your script or html codes here.
	        width: "465px",
	        height: "275px",
	        backgroundColor: "#000",
	        updateInterval: 3600000,
      },
    }, 
],
  paths: {
    modules: 'modules',
    vendor: 'vendor'
  }
}