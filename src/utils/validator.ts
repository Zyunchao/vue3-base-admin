/*是否合法IP地址*/
export const validateIP = (rule, value, callback) => {
    if (value === '' || value === undefined || value === null) {
        callback()
    } else {
        const reg =
            /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
        if (!reg.test(value) && value !== '') {
            callback(new Error('请输入正确的IP地址'))
        } else {
            callback()
        }
    }
}

/* 是否手机号码或者固话*/
export const validatePhoneTwo = (rule, value, callback) => {
    const reg = /^((0\d{2,3}-?\d{7,9})|(\d{11}))$/
    if (value === '' || value === undefined || value === null) {
        callback()
    } else {
        if (!reg.test(value) && value !== '') {
            callback(new Error('请输入正确的电话号码或者固话号码'))
        } else {
            callback()
        }
    }
}
/* 是否固话*/
export const validateTelphone = (rule, value, callback) => {
    const reg = /0\d{2}-\d{7,8}/
    if (value === '' || value === undefined || value === null) {
        callback()
    } else if (!reg.test(value) && value !== '') {
        callback(new Error('请输入正确的固话（格式：区号+号码,如010-1234567）'))
    } else {
        callback()
    }
}
/* 是否手机号码*/
export const validatePhone = (rule, value, callback) => {
    const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
    if (value === '' || value === undefined || value === null) {
        callback()
    } else if (!reg.test(value) && value !== '') {
        callback(new Error('请输入正确的手机格式'))
    } else {
        callback()
    }
}
/* 是否身份证号码*/
export const validateIdNo = (rule, value, callback) => {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (value === '' || value === undefined || value === null) {
        callback()
    } else if (!reg.test(value) && value !== '') {
        callback(new Error('请输入正确的身份证格式'))
    } else {
        callback()
    }
}
/* 是否邮箱*/
export const validateEMail = (rule, value, callback) => {
    const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/
    if (value === '' || value === undefined || value === null) {
        callback()
    } else if (!reg.test(value)) {
        callback(new Error('请输入正确的邮箱地址'))
    } else {
        callback()
    }
}
/* 合法uri*/
export const validateURL = (textval) => {
    const urlregex =
        /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
}

/*验证内容是否英文数字以及下划线*/
export const isPassword = (rule, value, callback) => {
    const reg = /^[_a-zA-Z0-9]+$/
    if (value === '' || value === undefined || value === null) {
        callback()
    } else if (!reg.test(value)) {
        callback(new Error('密码仅由英文字母，数字以及下划线组成'))
    } else {
        callback()
    }
}

/*自动检验数值的范围*/
export const checkMax = (rule, value, maxValue, callback) => {
    if (value === '' || value === undefined || value === null) {
        callback()
    } else if (!Number(value)) {
        callback(new Error('请输入数字'))
    } else if (value < 1 || value > maxValue) {
        callback(new Error('请输入[1,' + maxValue + ']之间的数字'))
    } else {
        callback()
    }
}
export const checkMin = (rule, value, minValue, callback) => {
    if (value === '' || value === undefined || value === null) {
        callback()
    } else if (!Number(value)) {
        callback(new Error('请输入数字'))
    } else if (value < minValue) {
        callback(new Error('请输入大于' + minValue + '的数字'))
    } else {
        callback()
    }
}

//验证是否1-99之间
export const isOneToNinetyNine = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('输入不可以为空'))
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正整数'))
        } else {
            const re = /^[1-9][0-9]{0,1}$/
            const rsCheck = re.test(value)
            if (!rsCheck) {
                callback(new Error('请输入正整数，值为【1,99】'))
            } else {
                callback()
            }
        }
    }, 0)
}

// 验证是否整数
export const isInteger = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('输入不可以为空'))
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正整数'))
        } else {
            const re = /^[0-9]*[1-9][0-9]*$/
            const rsCheck = re.test(value)
            if (!rsCheck) {
                callback(new Error('请输入正整数'))
            } else {
                callback()
            }
        }
    }, 0)
}

// 验证是否整数,非必填
export function isIntegerNotMust(rule, value, callback) {
    if (!value) {
        callback()
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正整数'))
        } else {
            const re = /^[0-9]*[1-9][0-9]*$/
            const rsCheck = re.test(value)
            if (!rsCheck) {
                callback(new Error('请输入正整数'))
            } else {
                callback()
            }
        }
    }, 1000)
}

// 验证是否是[0-1]的小数
export const isDecimal = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('输入不可以为空'))
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入[0,1]之间的数字'))
        } else {
            if (value < 0 || value > 1) {
                callback(new Error('请输入[0,1]之间的数字'))
            } else {
                callback()
            }
        }
    }, 100)
}

/* 小写字母*/
export const validateLowerCase = (str) => {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

/* 大写字母*/
export const validateUpperCase = (str) => {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/* 大小写字母*/
export const validatAlphabets = (str) => {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}

// 校验个人证件类型
/* eslint-disable indent */
export const validCredNum = (type, credNum) => {
    let validFlag = true
    let msg = '证件号码格式有误'

    switch (type) {
        case '10': {
            // 身份证
            validFlag = validateSecIdCard(credNum)
            msg = '身份证格式有误'
            break
        }
        case '1': {
            // 户口簿
            validFlag = /^\d{9}$/.test(credNum)
            msg = '户口簿格式有误'
            break
        }
        case '2': {
            // 护照
            validFlag = /(^(14|15)\d{7})|(^[DEGPS]\d{7,8}$)/gi.test(credNum)
            msg = '护照格式有误'
            break
        }
        case '5': {
            /**
             * 港澳居民来往内地通行证，证件号的正则规则兼容以下三种类型：
             *  1）H/M + 10位阿拉伯数字
             *  2）C/M + 8位阿拉伯数字
             *  3）C + 1位英文字母 + 7位阿拉伯数字。第二位英文字母不能是I或O
             */
            validFlag = /^[HM][0-9]{10}$|^[CM][0-9]{8}$|^[C][A-HJ-NP-Z][0-9]{7}$/.test(credNum)
            msg = '港澳居民来往内地通行证格式有误'
            break
        }
        case '6': {
            /**
             * 台湾居民来往大陆通行证
             *  1）9位:L+8位阿拉伯数字
             */
            validFlag = /^\d{8}$/.test(credNum)
            msg = '台湾同胞来往内地通行证格式有误'
            break
        }
        case '8': {
            // 外国人居留证
            validFlag = /^[A-Z]{3}\d{6}(?:0[1-9]|1[021])(?:0[1-9]|[21]\d|3[10])\d{2}$/.test(credNum)
            msg = '外国人居留证格式有误'
            break
        }
        case '9': {
            // 警官证
            validFlag = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(credNum)
            msg = '警官证格式有误'
            break
        }
        case 'A': {
            // 香港身份证
            validFlag =
                /^8[123]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(
                    credNum
                )
            msg = '香港身份证格式有误'
            break
        }
        case 'B': {
            // 澳门身份证
            validFlag =
                /^8[123]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(
                    credNum
                )
            msg = '澳门身份证格式有误'
            break
        }
        case 'C': {
            // 台湾身份证
            validFlag =
                /^8[123]0000(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(
                    credNum
                )
            msg = '台湾身份证格式有误'
            break
        }
        case 'X': {
            // 其他证件
            validFlag = true
            break
        }
        case '20': {
            // 军人身份证
            validFlag = /^[a-zA-Z0-9]{7,21}$/.test(credNum)
            msg = '军人身份证格式有误'
            break
        }
        default: {
            validFlag = true
        }
    }
    return {
        res: validFlag,
        msg
    }
}

/**
 * 充分考虑的情况下 校验身份证号
 * @param value
 * @returns
 */
export function validateSecIdCard(value) {
    if (!value) return true
    var iSum = 0
    var sId = value
    var aCity = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙',
        21: '辽宁',
        22: '吉林',
        23: '黑龙',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        83: '台湾',
        91: '国外'
    }

    if (
        !/^[1-8][1-7]\d{4}(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(
            sId
        )
    ) {
        return false
    }

    sId = sId.replace(/x$/i, 'a')
    // 非法地区
    if (aCity[parseInt(sId.substr(0, 2))] === null) {
        return false
    }
    var sBirthday =
        sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))
    var d = new Date(sBirthday.replace(/-/g, '/'))
    // 非法生日
    if (sBirthday !== d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()) {
        return false
    }
    for (let i = 17; i >= 0; i--) {
        iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)
    }
    if (iSum % 11 !== 1) {
        return false
    }
    return true
}

// 获取字节长度，英文字符占1个字节，中文字符占2个字节
export const getStrLen = (str) => {
    let len = 0
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i)
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++
        } else {
            len += 2
        }
    }
    return len
}

// 限制字符长度
export const limitMaxLen = (value, callback, l) => {
    if (value === '' || value === undefined || value === null) return callback()
    const len = getStrLen(value)
    if (len > l) return callback(new Error(`最长为${l}个字符`))
    callback()
}
