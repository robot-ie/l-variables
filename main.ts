//% color=190 weight=100 icon="\f4d3" block="Variables Lesson"
namespace l_variables {



  

    //% block="object detected on pin $pin"
    //% group="Basic"
    export function onObjectDetected(pin:DigitalPin, handler: () => void) {
        pins.setPull(pin, PinPullMode.PullUp)
        let lastState = 1
        let currentState = 1
        pins.setAudioPinEnabled(false)
        basic.forever(function () {
            currentState = pins.digitalReadPin(pin)
            if (lastState != currentState && currentState == 0) {
                handler()
            }
            lastState = currentState
        })
    }

    let strip:neopixel.Strip = null
    //% block="turn on $lightsNumber lights on pin $pin"
    //% group="Basic"
    export function turnLights(pin: DigitalPin, lightsNumber:number) {
        if (strip==null){
            strip = neopixel.create(pin, 9, NeoPixelMode.RGB)
        }
        let range = strip.range(0, lightsNumber)
        strip.clear()
        strip.show()
        range.showColor(NeoPixelColors.Red)
        
    }


  
    //% block="animate lights on pin $pin"
    //% group="Basic"
    export function animateLights(pin: DigitalPin) {
        if (strip == null) {
            strip = neopixel.create(pin, 9, NeoPixelMode.RGB)
        }
        for (let i = 0; i < 5; i++) {
            strip.showColor(NeoPixelColors.Red)
            basic.pause(50)
            strip.clear()
            strip.show()
            basic.pause(50)
        }
        

    }




}



