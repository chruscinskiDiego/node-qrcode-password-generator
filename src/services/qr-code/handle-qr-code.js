import qr from "qrcode-terminal"
import chalk from "chalk";

async function handleQRCode (err, result) {

    if(err){
        console.log("Erro!");
        return;
    }

    //boolean
    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.bgGreen("QR Code gerado com SU-CES-SO!\n"));
        console.log(qrcode);
    })
}

export default handleQRCode;