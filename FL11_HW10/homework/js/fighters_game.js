function Fighter (fighter) {
  fighter.wins = 0;
  fighter.losses = 0;
  const maxHp = fighter.hp;

    this.attack = function (defender) {
        let fullAgility = 100;
        let isAttack = false;
        let attackSuccessСhance = Math.random() * fullAgility;
        let defendersAgility = defender.getAgility();
        if(attackSuccessСhance > defendersAgility) {
            isAttack = true;  
        }   

        if(isAttack){
            let figterDamage = this.getDamage();
            defender.dealDamage(figterDamage);
            console.log(this.getName() + ' make ' + figterDamage + ' damage to ' + defender.getName());

        }else{
            console.log(this.getName() + ' attack missed')
        }
    }

    this.logCombatHistory = function () {
        return 'Name: ' + fighter.name + ', Wins: ' + fighter.wins + ', Loses: ' + fighter.losses;
    }

    this.getName = function () {
        return fighter.name;
    }       
    this.getDamage = function () {
        return fighter.damage;
    }       
    this.getAgility = function () {
        return fighter.agility;
    }       
    this.getHealt = function () {
        return fighter.hp;
    }   
    this.addWin = function () {
      fighter.wins += 1;
        return fighter.wins;
    }   
    this.addLose = function () {
      fighter.losses += 1;
        return fighter.losses;
    }   
    this.dealDamage = function (healthPoints) {
        fighter.hp -= healthPoints;

        if(fighter.hp < 0) {
            fighter.hp = 0;
        }
        return fighter.hp;
    }

    this.heal = function (healthPoints) {
        fighter.hp += healthPoints;

        if(fighter.hp > maxHp) {
            fighter.hp = maxHp;
        }
        return fighter.hp;
    }
}

function battle(fighter1, fighter2){
    let firstHp = fighter1.getHealt();
    let secondHp = fighter2.getHealt();

  if(firstHp > 0 && secondHp > 0){
    while(firstHp > 0 && secondHp > 0){

      if(firstHp > 0){
        fighter1.attack(fighter2);
        secondHp = fighter2.getHealt();
      }

      if(secondHp > 0){
        fighter2.attack(fighter1);
        firstHp = fighter1.getHealt();
      }
    }

    if(firstHp > 0) {
      fighter1.addWin();
      fighter2.addLose();

      console.log(fighter1.getName() + ' won ' + fighter2.getName());
    } else{
      fighter2.addWin();
      fighter1.addLose();

      console.log(fighter2.getName() + ' won ' + fighter1.getName());
    }

} else{
        if(firstHp === 0){
            console.log(fighter1.getName() + ' is dead and can`t fight');
        }else{
            console.log(fighter2.getName() + ' is dead and can`t fight');
        }
    }
}

const fighter1 = new Fighter({
    name: 'John',
    damage: 20,
    hp: 100,
    agility: 25
});

const fighter2 = new Fighter({
    name: 'Tom',
    damage: 10,
    hp: 120,
    agility: 40
});