#include <Blink.h>

Blink Blink_class(LED_BUILTIN);

// the setup function runs once when you press reset or power the board
void setup() {
}

// the loop function runs over and over again forever
void loop() {
    Blink_class.Blink_start();                 
}
