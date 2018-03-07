#ifndef Blinck_h
#define Blinck_h

#include "Arduino.h"

class Blink
{
  public:
    Blink(int pin);
    void Blink_start();
    private:
      int _pin;
};
#endif
