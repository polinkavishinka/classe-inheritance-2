export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (types.indexOf(type) === -1) {
      throw new Error('такого класса нет');
    } else {
      this.type = type;
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error(
        'Ошибка:должна быть больше двух и не более десяти символов включительно'
      );
    } else {
      this.name = name;
    }
  }
  // levelUp() {
  //   if (this.health < 0) {
  //     throw new Error('нельзя повысить левел умершего');
  //   } else {
  //     this.level += 1;
  //     this.attack += (this.attack / 100) * 20;
  //     this.defence += (this.defence / 100) * 20;
  //     this.health = 100;
  //   }
  // }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

   // damage(points) {
  //   if (this.health <= 0) {
  //     this.health = 0;
  //   }
  //   this.health -= points * (1 - this.defence / 100);
  // }
  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
