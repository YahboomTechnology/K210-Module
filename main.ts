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
        let apriltag = ""
        let L = 0
        let length = 0
        let class_num = ""
        let opo = ""
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            if (class_num == "02") {
                length = opo.length
                L = length - 4
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

    //% blockId=k210_models_QRcode_Sensor block="QRcode scan return"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function QRcode_Sensor(): string {
        let apriltag = ""
        let L = 0
        let length = 0
        let class_num = ""
        let opo = ""
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            if (class_num == "03") {
                length = opo.length
                L = length - 4
                apriltag = opo.substr(3, L)
            } else {
                apriltag = " "
            }
        } else {
            apriltag = " "
        }
        opo = ""
        return apriltag

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
        let face = ""
        let class_num = ""
        let _22 = ""
        let opo = ""
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            _22 = opo[3]
            if (class_num == "07") {
                if (_22 == "1" || _22 == "Y" ) {
                    face = "Y"
                } else {
                    face = "N"
                }
            } else {
                face = ""
            }
        } else {
            face = ""
        }
        opo = ""
        return face

    }


        //% blockId=k210_models_face_reg block="face_reg Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function face_reg(): number{
        let face = 0
        let _22 = ""
        let class_num = ""
        let opo = ""
        let face_Reg = 0
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            _22 = opo[3]
            face_Reg = parseFloat("" + opo[4] + opo[5])
            if (class_num == "08") {
                if (_22 == "Y") {
                    face = face_Reg
                } else {
                    face = -1
                }
            } else {
                face = -2
            }
        } else {
            face = -2
        }
        opo = ""
        return face

    }

let len = 0
let object = ""
    //% blockId=k210_models_object_detect block="object_detct Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function object_detect():string{
        let object = ""
        let L = 0
        let length = 0
        let class_num = ""
        let opo = ""
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            if (class_num == "09") {
                length = opo.length
                L = length - 4
                object = opo.substr(3, L)
            } else {
                object = ""
            }
        } else {
            object = ""
        }
        opo = ""
        return object
    }

    //% blockId=k210_models_self_learning block="self_learning Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function self_learning():number{
        let Learning = -1
        let opo = ""
        let class_num = ""
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            if (class_num == "10") {
                Learning = parseFloat(opo[3])
            } else {
                Learning = -1
            }
        } else {
            Learning = -1
        }
        opo = ""
        return Learning
    }


    //% blockId=k210_models_handwriting_number block="handwriting_number return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function handwriting_number():number{
        let number = -1
        let opo = ""
        let class_num = ""
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            if (class_num == "11") {
                number = parseFloat(opo[3])
            } else {
                number = -1
            }
        } else {
            number = -1
        }
        opo = ""
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
        let Apriltag_id = ""
        let class_num = "" 
        let opo = ""        
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            if (class_num == "04") {
                Apriltag_id = "" + opo[3] + opo[4]
            } else {
                Apriltag_id = ""
            }
        } else {
            Apriltag_id = ""
        }
        opo = ""
        return Apriltag_id

    }    



    //% blockId=k210_models_face_detect block="face_detect Scan return"
    //% weight=100
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=30
    export function face_detect():string{
        let face = ""
        let class_num = ""
        let _22 = ""
        let opo = ""
        opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
        if (opo[0] == "$") {
            class_num = "" + opo[1] + opo[2]
            _22 = opo[3]
            if (class_num == "14") {
                if (_22 == "1") {
                    face = "Y"
                } else {
                    face = "N"
                }
            } else {
                face = ""
            }
        } else {
            face = ""
        }
        opo = ""
        return face
    }   
    

    let  speed_L= 0
    let  speed_R= 0

    //% blockId=k210_models_get_speed block="analysis speed"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function get_motor_speed(){
        
     let class_num = ""
     let opo = ""
     opo = serial.readUntil(serial.delimiters(Delimiters.Hash))
     if (opo[0] == "$") 
     {
        class_num = "" + opo[1] + opo[2]
        if (class_num == "20") 
        {
            //左电机
            if(opo[3]=="+")//速度为正
            {
                speed_L = parseFloat(opo.substr(4, 3))
            }
            else if(opo[3]=="-")
            {
                speed_L = -(parseFloat(opo.substr(4, 3)))
            }

            //右电机
            if(opo[7]=="+")//速度为正
            {
                speed_R = parseFloat(opo.substr(8, 3))
            }
            else if(opo[7]=="-")
            {
                speed_R = -(parseFloat(opo.substr(8, 3)))
            }
        } 
         else 
        {
            speed_L = 0
            speed_R = 0
        }
     } 
     else 
     {
        speed_L = 0
        speed_R = 0
     }
     opo = ""
     }


    //% blockId=k210_models_speed_L block="get left motor"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function get_motor_L(): number
    {  
        return speed_L
    }

     //% blockId=k210_models_speed_R block="get right motor"
    //% weight=88
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function get_motor_R(): number
    {
        return speed_R
    }


}