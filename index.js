class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
let heroi1 = new Heroi("Gandalf", 1500, "mago");
let heroi2 = new Heroi("Aragorn", 35, "guerreiro");
let heroi3 = new Heroi("Bruce Lee", 33, "monge");
let heroi4 = new Heroi("Hattori Hanzo", 40, "ninja");

heroi1.atacar(); // Saída: O mago atacou usando magia
heroi2.atacar(); // Saída: O guerreiro atacou usando espada
heroi3.atacar(); // Saída: O monge atacou usando artes marciais
heroi4.atacar(); // Saída: O ninja atacou usando shuriken
