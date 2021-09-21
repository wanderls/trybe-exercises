const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const atkDragon = (dragon) => {
  const danoMinimo = 15;
  const danoBaseDragon = dragon.strength;
  const danoDragon = Math.floor(Math.random() * (danoBaseDragon - danoMinimo + 1)) + danoMinimo;
  
  return danoDragon;
}

const atkWarrior = (warrior) => {
  const danoBaseWarrior = warrior.strength;
  const danoArmaWarrior = warrior.weaponDmg;
  const danoWarrior = Math.floor(Math.random() * ((danoBaseWarrior * danoArmaWarrior) - 1)) + danoBaseWarrior;
  
  return danoWarrior;
}

const atkMago = () => {
  const int = mage.intelligence;
  const danoBaseMago = int * 2;
  const mana =  mage.mana;
  const statusMana = {
    manaRestante: 0,
    msgMana: 'Não possui mana suficiente'
  };

  if ( mana > 15) {
    const danoMago = Math.floor(Math.random() * ((int * danoBaseMago) - 1)) + int;
    statusMana.manaRestante = 15;
    statusMana.msgMana = danoMago;
    
    return statusMana;
  }
  return statusMana;
}

console.log(`Dano calsado pelo Dragão: ${atkDragon(dragon)}`);
console.log(`Dano causado pelo Warrior: ${atkWarrior(warrior)}`);
