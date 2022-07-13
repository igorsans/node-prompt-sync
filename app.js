import prompt from "prompt-sync"
import chalk from "chalk"

const log = console.log;
const cmd = prompt()

const store = () => {
    log("Bem vindo ao ajudande de Front-End")
    let res;
    let output = []
    return armazenar(output, res)
}

function armazenar(output, res) {
    (output.length == 0) ? res = cmd(`Digite uma propriedade de CSS: `).toLowerCase() : res = cmd(`Digite uma nova propriedade de CSS: `).toLowerCase()
    if (res.toLowerCase() == "sair") return output.sort().join(" ")
    else if (!res) {
        log(chalk.blue.bgRed.bold("Erro: Vazio"))
    } else {
        log(`Atualmente você armazenou: ${output.length + 1} propriedades`)
        !output.includes(res) ? output.push(res.toLowerCase()) : log(chalk.blue.bgRed.bold("Erro: Essa propriedade ja foi incluida"))
    }
    return armazenar(output, res)
}

log(store())