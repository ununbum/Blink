#include "Blink.h"
#include "Arduino.h"

Blink::Blink(int pin)
{
  pinMode(pin,OUTPUT);
  _pin=pin;
}
void Blink::Blink_start()
{
  digitalWrite(_pin, HIGH);   
  delay(1000);                      
  digitalWrite(_pin, LOW);
  delay(1000);
}

