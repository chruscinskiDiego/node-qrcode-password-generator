import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js"
import createQRCode from "./services/qr-code/create-qr-code.js";
import createPassword from "./services/password/create-password.js";

async function main(){
    prompt.get(mainPrompt, async (err, choice) => {

        if(err) console.log(err);
        
        if( choice.select == 1){

            await createQRCode();
        }

        if(choice.select == 2){
            
            await createPassword();
            
        }
    });

    prompt.start();

}

main();