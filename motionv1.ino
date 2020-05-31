// This #include statement was automatically added by the Particle IDE.



#include <Adafruit_DHT.h>

#define DHTPIN 3    // what pin we're connected to

#define DHTTYPE DHT11		// DHT 11 
//define DHTTYPE DHT22      // DHT 22(AM2302)
//#define DHTTYPE DHT21		// DHT 21 (AM2301)

#define MOTION_PIN D6

DHT dht(DHTPIN, DHTTYPE);
int counter = 0;
unsigned long lastNotify = 0;
bool notified = true;


void setup() {
	Serial.begin(9600); 
	Serial.println("DHT and Motion!");
    pinMode(MOTION_PIN, INPUT);
	dht.begin();
}

void loop() {
    
    unsigned long now = millis();
    
    if(digitalRead(MOTION_PIN)==HIGH) {
        Serial.println("Movement detected.");
        if((now - lastNotify) >= 60000){
            Particle.publish("Motion_Sensor","MOTION",PRIVATE);
            lastNotify = now;
            notified = false;
            Serial.printlnf("%lu", now);
            }
      } else {
        Serial.println("Did not detect movement.");
      }
    
    if((now-lastNotify) >= 60000 && notified == false){
        Particle.publish("Motion_Sensor","NO_MOTION",PRIVATE);
        notified = true;
    }
    // Wait a few seconds between measurements.
	delay(1000);
    counter += 1;
    Serial.println(millis());
    if(counter > 9){
        GetTemp();
        counter = 0;
    }
    
    
    
}




void GetTemp() {
// Reading temperature or humidity takes about 250 milliseconds!
// Sensor readings may also be up to 2 seconds 'old' (its a 
// very slow sensor)
	float h = dht.getHumidity();
// Read temperature as Celsius
	float t = dht.getTempCelcius();
// Read temperature as Farenheit
	float f = dht.getTempFarenheit();
  
// Check if any reads failed and exit early (to try again).
	if (isnan(h) || isnan(t) || isnan(f)) {
		Serial.println("Failed to read from DHT sensor!");
		return;
	}

// Compute heat index
// Must send in temp in Fahrenheit!
	float hi = dht.getHeatIndex();
	float dp = dht.getDewPoint();
	float k = dht.getTempKelvin();

	Serial.print("Humid: "); 
	Serial.print(h);
	Serial.print("% - ");
	Serial.print("Temp: "); 
	Serial.print(t);
	Serial.print("*C ");
	Serial.print(f);
	Serial.print("*F ");
	Serial.print(k);
	Serial.print("*K - ");
	Serial.print("DewP: ");
	Serial.print(dp);
	Serial.print("*C - ");
	Serial.print("HeatI: ");
	Serial.print(hi);
	Serial.println("*C");
	Serial.println(Time.timeStr());
	
    //Publish to Particle console for use by API
    Particle.publish("readings", String::format("{\"Hum(\%)\": %4.2f, \"Temp(°C)\": %4.2f, \"DP(°C)\": %4.2f}", h, t, dp));
    Particle.publish("Temperature", String::format("%4.2f",t),PRIVATE);
}