//% blockId=k210_models block="k210_models"
//%color="#228B22" weight=25
namespace k210_models {


    //% block="init_SerialPort"
    export function initialization () {
        serial.redirect(
        SerialPin.P1,
        SerialPin.P2,
        BaudRate.BaudRate115200
        )
        basic.showIcon(IconNames.Happy)
    }

    //% blockId=k210_models_color_reg_X block="reg_X return"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function color_reg_X(): number{
	   let  x= 0
       let length = 0
    let class_num = ""
    let opo = ""
    opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (opo[0] == "$") {
        class_num = "" + opo[1] + opo[2]
        if (class_num == "01"|| class_num == "05" || class_num == "06") {
            length = opo.length
            x = parseFloat(opo.substr(3, 3))
        } else {
            x = 0
        }
    } else {
        x = 0
    }
    opo = ""
    return x

    }

    //% blockId=k210_models_color_reg_Y block="reg_Y return"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function color_reg_Y(): number{
	   let  y= 0
       let length = 0
    let class_num = ""
    let opo = ""
    opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (opo[0] == "$") {
        class_num = "" + opo[1] + opo[2]
        if (class_num == "01"|| class_num == "05" || class_num == "06") {
            length = opo.length
            y = parseFloat(opo.substr(7, 3))
        } else {
            y = 0
        }
    } else {
        y = 0
    }
    opo = ""
    return y

    }

    //% blockId=k210_models_color_reg_W block="reg_W return"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function color_reg_W(): number{
	   let  w= 0
       let length = 0
    let class_num = ""
    let opo = ""
    opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (opo[0] == "$") {
        class_num = "" + opo[1] + opo[2]
        if (class_num == "01"|| class_num == "05" || class_num == "06") {
            length = opo.length
            w = parseFloat(opo.substr(11, 3))
        } else {
            w = 0
        }
    } else {
        w = 0
    }
    opo = ""

    return w

    }    

    //% blockId=k210_models_color_reg_H block="reg_H return"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function color_reg_H(): number{
	   let  h= 0
       let length = 0
    let class_num = ""
    let opo = ""
    opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (opo[0] == "$") {
        class_num = "" + opo[1] + opo[2]
        if (class_num == "01"|| class_num == "05" || class_num == "06") {
            length = opo.length
            h = parseFloat(opo.substr(15, 3))
        } else {
            h = 0
        }
    } else {
        h = 0
    }
    opo = ""
    return h

    }



    //% blockId=k210_models_Barcode_Sensor block="Barcode scan return"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Barcode_Sensor(): string {
        let rev = ""
        let Barcode = ""
        let len = 0
        let length = 0
        if (("" + serial.readString()).includes("$")) {
            basic.pause(200)
            length = ("" + serial.readString()).length
            len = length - 5
            basic.pause(200)
            if (("" + serial.readString()).substr(1, 2) == "02") {
                basic.pause(200)
                Barcode = ("" + serial.readString()).substr(3, len)
                rev = Barcode
            } else {
                rev = ""
            }
        }
        return rev

    }

    //% blockId=k210_models_QRcode_Sensor block="QRcode scan return"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function QRcode_Sensor(): string {
	   let _this = ""
       let length = 0
    if (("" + serial.readString()).includes("$")) {
        basic.pause(200)
        length = parseFloat(("" + serial.readString()).substr(3, 2))
        basic.pause(200)
        if (("" + serial.readString()).substr(1, 2) == "03") {
            basic.pause(500)
            _this = ("" + serial.readString()).substr(5, length)
        }
    }
    return _this

    }
    
    //% blockId=k210_models_Apriltag block="Apriltag Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function Apriltag_Sensor(): string {
        let apriltag = ""
    let class_num = ""
    let L = 0
    let length = 0
    let opo = ""
     opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (opo[0] == "$") {
        class_num = "" + opo[1] + opo[2]
        if (class_num == "04") {
            length = opo.length
            L = length - 5
            apriltag = opo.substr(3, L)
        } else {
            apriltag = ""
        }
    } else {
        apriltag = ""
    }
    opo = ""
    return apriltag

    }





    //% blockId=k210_models_face_mask_detect block="face_mask Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function face_mask_detect():string{
        let REV=""
         if (("" + serial.readString()).includes("$")) {
            basic.pause(200)
        if (("" + serial.readString()).substr(1, 2) == "07") {
            basic.pause(200)
            if (("" + serial.readString()).substr(3, 1) == "0") {
                REV = "N"
            } else {
                REV = "Y"
            }
        }
    }
    return REV

    }
        //% blockId=k210_models_face_reg block="face_reg Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function face_reg(): number{
        let face_reg = -2
        if (("" + serial.readString()).includes("$")) {
            basic.pause(200)
            if (("" + serial.readString()).substr(1, 2) == "08") {
                basic.pause(200)
                if (("" + serial.readString()).substr(3, 1) == "Y") {
                    basic.pause(200)
                    face_reg = parseFloat(("" + serial.readString()).substr(4, 2))
                } else {
                    face_reg = -1
                }
            }
        }
        return face_reg

    }

let len = 0
let object = ""
    //% blockId=k210_models_object_detect block="object_detct Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function object_detect():string{
    if (("" + serial.readString()).includes("$")) {
        basic.pause(200)
        if (("" + serial.readString()).substr(1, 2) == "09") {
            basic.pause(200)
            object = ("" + serial.readString()).substr(3, len)
            basic.pause(200)
            len = ("" + serial.readString()).length - 5
        } else {
            len = 0
            object = ""
        }
    }
    return object
    }

    //% blockId=k210_models_self_learning block="self_learning Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function self_learning():string{
        let Object=""
    if (("" + serial.readString()).includes("#")) {
        basic.pause(200)
        if (("" + serial.readString()).substr(1, 2) == "10") {
            basic.pause(200)
            Object = ("" + serial.readString()).substr(3, 1)
        }
    }
    return Object
    }


    //% blockId=k210_models_handwriting_number block="handwriting_number return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function handwriting_number():number{
        let number=-1
        if (("" + serial.readString()).includes("$")) {
        basic.pause(200)
    }
    if (("" + serial.readString()).substr(1, 2) == "11") {
        basic.pause(200)
        number =  parseFloat(("" + serial.readString()).substr(3, 1))
    }
    return number
    }

    //% blockId=k210_models_Color_Sensor block="Color scan return"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function Color_Sensor(): string {
        let Color = ""
        let class_num = ""
        let opo = ""
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            if (class_num == "01") {
                Color = opo.substr(3, 1)
            } else {
                Color = ""
            }
        } else {
            Color = ""
        }
        opo = ""
        return Color

    }     

    //% blockId=k210_models_Apriltag_id block="Apriltag_id return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function Apriltag_id(): string {
	   let apriltag = ""
       if (("" + serial.readString()).includes("$")) {
        basic.pause(200)
    }
    if (("" + serial.readString()).substr(1, 2) == "04") {
        basic.pause(200)
        apriltag = ("" + serial.readString()).substr(3, 2)
    }
    return apriltag 

    }    



    //% blockId=k210_models_face_detect block="face_detect Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function face_detect():string{
        let REV=""
         if (("" + serial.readString()).includes("$")) {
            basic.pause(200)
        if (("" + serial.readString()).substr(1, 2) == "14") {
            basic.pause(200)
            if (("" + serial.readString()).substr(3, 1) == "0") {
                REV = "N"
            } else {
                REV = "Y"
            }
        }
    }
    return REV

    }    


}