class creatingHero{
    constructor(name, age, typeHero){
        this.name = name
        this.age = age
        this.typeHero = typeHero
    } 
    attack(){
        let attack = " "
         if( this.typeHero === "guerreiro"){
            attack = "espada"
        } else if (this.typeHero === "mago"){
            attack = "magia"
        } else if (this.typeHero === "monge"){
           attack = "artes marciais"
        } else if (this.typeHero === "ninja"){
           attack = "Shuriken"
        }
        console.log(`O ${this.typeHero} atacou usando ${attack}`)
    }

}

let primeiroHeroi = new creatingHero("Merlin", 99, "mago")

primeiroHeroi.attack()