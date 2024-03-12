const nodemailer=require('nodemailer');

async function sendMail(){
    
     const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: 'dashipsita60@gmail.com',
            pass: 'vuzm rzwf xwry oeds'
        }

     })
     
     const mailOptions ={
        from:'dashipsita60@gmail.com',
        to:'dashsouradeep@gmail.com',
        subject:'Welcome to NodeJS App',
        text:'This is an email using nodemail in nodejs',
        html:'<img src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/testimonial.png">',
        attachments: [
            {
              filename: 'ch1- INTRODUCTION.pdf',
              path: 'ch1- INTRODUCTION.pdf',
              encoding: 'base64'
            }
          ]
     }
     try{
        const result= await transporter.sendMail(mailOptions);
        console.log('Email sent succesfully')
     }catch(error){

        console.log('Email send failed with error:',error)
     }
}
sendMail()