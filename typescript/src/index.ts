function sendSPaceship(name : string, captain:string) {
    const spaceship = {
        name,
        captain,
        speeed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão.`)
    return spaceship
}

function accelerate(targetSpeed:number, spaceship: {name: string, speed:number}) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.speed} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed){
        alert(`Aumentando a velociiade da ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada.')
const spaceshipCapitain = prompt('Insira o nome do capitão da nave.')

sendSPaceship(spaceshipName, spaceshipCapitain)