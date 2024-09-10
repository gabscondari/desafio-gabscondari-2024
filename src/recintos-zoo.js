class RecintosZoo {
    analisaRecintos(animal, quantidade) {
        // Lista de animais permitidos e seus requisitos de espaço e biomas
        const animaisValidos = {
            LEAO: { tamanho: 3, biomas: ['savana'] },
            LEOPARDO: { tamanho: 2, biomas: ['savana'] },
            CROCODILO: { tamanho: 3, biomas: ['rio'] },
            MACACO: { tamanho: 1, biomas: ['savana', 'floresta'] },
            GAZELA: { tamanho: 2, biomas: ['savana'] },
            HIPOPOTAMO: { tamanho: 4, biomas: ['savana', 'rio'] },
        };

        // Recintos disponíveis no zoológico com espaço livre e bioma
        const recintos = [
            { nome: "Recinto 1", bioma: "savana", espacoLivre: 5, totalEspaco: 10 },
            { nome: "Recinto 2", bioma: "savana", espacoLivre: 3, totalEspaco: 5 },
            { nome: "Recinto 3", bioma: "floresta", espacoLivre: 2, totalEspaco: 7 },
            { nome: "Recinto 4", bioma: "rio", espacoLivre: 5, totalEspaco: 8 },
        ];

        // Validação de animal
        if (!animaisValidos[animal]) {
            return { erro: "Animal inválido", recintosViaveis: null };
        }

        // Validação de quantidade
        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: null };
        }

        const requisitosAnimal = animaisValidos[animal];
        const recintosViaveis = [];

        // Verifica cada recinto para ver se é viável
        for (let recinto of recintos) {
            if (recinto.bioma === requisitosAnimal.biomas[0] && recinto.espacoLivre >= quantidade * requisitosAnimal.tamanho) {
                recintosViaveis.push(`${recinto.nome} (espaço livre: ${recinto.espacoLivre} total: ${recinto.totalEspaco})`);
            }
        }

        // Se não há recintos viáveis, retorna erro
        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: null };
        }

        // Retorna os recintos viáveis
        return { erro: null, recintosViaveis };
    }
}

export { RecintosZoo as RecintosZoo };
