const { getPeople } = require("./service");


async function main() {
    try {
        const { results } = await getPeople('a');
        const height = results.map(item => parseInt(item.height))
        console.log(height)
        const total = height.reduce((previous, next) => {
            return previous + next;
        })

        console.log(`Soma das alturas é: ${total}`)
    }
    catch (error) {
        console.error('Ocorreu um erro ao buscar a altura', error);
    }
}

main()