import chalk from "chalk";
import handlePassword from "./handle-password.js";

async function createPassword(){
    const password = await handlePassword();
    console.log(chalk.bgCyan( "SENHA GERADA: " + chalk.bgMagentaBright(password)));
}


export default createPassword;