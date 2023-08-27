led.enable(false)
let temp = 0
let x = 130
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, x)
basic.forever(function () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, x)
    if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Up)) {
        x = x - 4
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Down)) {
        x = x + 4
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Left)) {
        x = x + 4
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP2P3, ModuleWorld_Analog.enRocker.Right)) {
        x = x - 4
    }
    if (x < 30) {
        x = 30
    } else if (x > 130) {
        x = 130
    }
    if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P10P11, ModuleWorld_Digital.enButton.Press)) {
        basic.pause(500)
        if (ModuleWorld_Digital.Button(ModuleWorld_Digital.mwDigitalNum.P10P11, ModuleWorld_Digital.enButton.Press)) {
            for (let index = 0; index < 2; index++) {
                ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 30)
                basic.pause(500)
                ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
                basic.pause(500)
            }
            control.reset()
        }
        for (let index = 0; index < 2; index++) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 30)
            basic.pause(300)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
            basic.pause(300)
        }
    }
})
