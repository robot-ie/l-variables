//% color=190 weight=100 icon="\uf1ec" block="Variables Lesson"
namespace l_variables {



  

    //% block="on object detected on pin 1"
    //% group="Basic"
    export function onObjectDetected(handler: () => void) {
        pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
        let lastState = 1
        let currentState = 1
        pins.setAudioPinEnabled(false)
        basic.forever(function () {
            currentState = pins.digitalReadPin(DigitalPin.P1)
            if (lastState != currentState && currentState == 0) {
                handler()
            }
            lastState = currentState
        })
    }

    let strip:neopixel.Strip = null
    //% block="turn on $lightsNumber lights on pin 0"
    //% group="Basic"
    export function turnOnLights(lightsNumber:number) {
        if (strip==null){
            strip = neopixel.create(DigitalPin.P0, 9, NeoPixelMode.RGB)
        }
        let range = strip.range(0, lightsNumber)
        strip.clear()
        strip.show()
        range.showColor(NeoPixelColors.Red)
        
    }
    //% block="turn off all lights on pin 0"
    //% group="Basic"
    export function turnOffAllLights(lightsNumber: number) {
        if (strip == null) {
            strip = neopixel.create(DigitalPin.P0, 9, NeoPixelMode.RGB)
        }
        strip.clear()
        strip.show()
    }


  
    //% block="blink $lightsNumber lights on pin $pin"
    //% group="Basic"
    export function blinkLights(lightsNumber: number) {
        if (strip == null) {
            strip = neopixel.create(DigitalPin.P0, 9, NeoPixelMode.RGB)
        }
        let range = strip.range(0, lightsNumber)
        strip.clear()
        strip.show()
        for (let i = 0; i < 5; i++) {
            range.showColor(NeoPixelColors.Red)
            basic.pause(50)
            range.clear()
            range.show()
            basic.pause(50)
        }
        strip.clear()
        strip.show()
        

    }




}



