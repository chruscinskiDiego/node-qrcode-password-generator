import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.blue.bold("ESCOLHA A FERRAMENTA\n\n") + chalk.green("1 - QRCODE\n") + chalk.yellow("2 - RANDOM PASSWORD\n"),
        pattern: /[1-2]+$/,
        message: chalk.cyan("Escola apenas entre 1 e 2!"),
        required: true,
    },
]

export default mainPrompt;