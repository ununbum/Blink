#include <Blink.h>

Blink blink(D4);

// the setup function runs once when you press reset or power the board
void setup() {
  Serial.begin(115200);
  Serial.println("\nBlinkVersion 1.0 SeungHyeun Kim");
}

// the loop function runs over and over again forever
void loop() {
   blink.on(2000);
   blink.off(300);            
}
