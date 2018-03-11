#include "Blink.h"
#include "Arduino.h"

Blink::Blink(int pin)
{
  pinMode(pin,OUTPUT);
  _pin=pin;
}
void Blink::on(int d_time)
{
	digitalWrite(_pin, HIGH);
	delay(d_time);
}
void Blink::off(int d_time)
{
	digitalWrite(_pin, LOW);
	delay(d_time);
}


