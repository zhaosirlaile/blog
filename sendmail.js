const nodeemailer = require('nodemailer');
const transporter = nodeemailer.createTransport({
    host: "smtp.qq.com",// 阿里云的邮件地址
    port: 465,// 端口
    auth: {
        "user": '**********************', // 邮箱账号
        "pass": '***************'         // 其他邮箱为授权码，在阿里云是SMTP密码，需要设置一下
    }
});
module.exports.send =  (mailOptions) => {
    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            return console.log(error);
        }
    });
}
