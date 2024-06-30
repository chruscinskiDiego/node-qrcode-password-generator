import prompt from "prompt";
import qrCodePrompt from "../../prompts/prompt-qrcode.js";
import handleQRCode from "./handle-qr-code.js";

async function createQRCode(){

    prompt.get(qrCodePrompt, handleQRCode);

    prompt.start();
}

export default createQRCode;