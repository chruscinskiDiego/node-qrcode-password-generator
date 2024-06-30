import chalk from "chalk";

const qrCodePrompt = [
    {
        name: "link",
        description: chalk.cyanBright("Digite o link para gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.magenta("Escolha o tipo do QR Code:\n") + chalk.gray.bold("1 - Normal\n") + chalk.cyan.bold("2 - Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.bgRed("Escolha apenas entre 1 e 2"),
        required: true
    }
];

export default qrCodePrompt;