# SIT210_ServerRoomMonitorProject
Equipment Required
-	Particle Argon
-	Raspberry Pi (2,3,3b+ or 4. Greater than 3 would be best)
-	DHT11,21 or 22 temp and humidity sensor
-	PIR motion sensor ( HC-SR501 or similar)
-	Various jumpers and wires
-	(Optional) Motion sensor for Ras Pi Magic Mirror

Particle Argon Setup
 
 
 
The Particle argon is wired as per the picture above.
-	All Power is taken from the 3.3V output on the Argon, this is wired to the bottom rail in the picture.
-	Ground is connected the ground rail and then distributed from there to the individual components.
-	Pin D3 on the Argon is connected directly to the middle pin (signal) on the PIR sensor.
-	Pin D6 on the Argon is connected directly to the Digital out PIN (right) on the DHT11 mini board.
-	V and G are applied to the 2 sensors from the distribution rail on the bread board.

*Your PIN config on your sensors may be different, so you need to read the documentation on your specific sensor.  


The only other requirement is the connection to the Wi-fi module and a USB power source.
The setup of the Argon assumes you have paired the argon with your account and are familiar with flashing the firmware of your device and connecting it to the Wifi network.
Code for the Argon can be found here – 
https://github.com/DanJeffs/SIT210_ServerRoomMonitorProject

Once the code is up and running on your Argon, you should start to see temp readings coming through in the Particle Console. You will also notice Motion_Sensor function sending MOTION whenever it detects motion from the PIR. It will only send this once every 60 seconds and will not send again until it has passed a NO_MOTION test.



Raspberry Pi Setup

The Raspberry Pi component of this project uses an open source project called Magic Mirror for displaying the dashboard. 
The first step is to get Raspbian setup and installed on the Pi and then follow through the documentation from the magic mirror site https://magicmirror.builders/ to get it installed and up and running. 

Below I will provide the code for the config and the modules used to enable the monitoring component to use. Addon modules can be obtained from the following list -
https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules

MMM-ParticleStatus is the main module required to display the items on your dashboard from the Particle. See the link below for the module which includes instructions for setup and installation your Magic Mirror. Instruction include how to call the status of a function from the Particle to get the reading into your Magic Mirror
https://github.com/NickEngmann/MMM-ParticleStatus

Optional Steps -
I Have used a HTML snippet generated from a ThingSpeak channel https://thingspeak.com/
For this you will need an account and setup the monitoring of the function from within ThingSpeak. 
You will then need MMM-HTML-Snippet installed on the Magic Mirror and can copy and paste the snippet from ThingSpeak into your config. 
https://github.com/ulrichwisser/MMM-HTMLSnippet 

I also have several other components running on my Magic Mirror including a Motion Sensor to turn the screen off when someone is not around. It is enabled by the following addon module – 
https://github.com/paviro/MMM-PIR-Sensor

There is plenty of documentation about this setup in various places and especially in the Magi Mirror community forum. 
My config for my Magic Mirror is in the GITHUB repository – 
https://github.com/DanJeffs/SIT210_ServerRoomMonitorProject/blob/master/config.js
