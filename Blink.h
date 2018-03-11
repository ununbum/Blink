#ifndef Blinck_h
#define Blinck_h

#include "Arduino.h"

class Blink
{
  public:
    Blink(int pin);
    void on(int d_time);
	void off(int d_time);
    private:
      int _pin;
};
#endif
