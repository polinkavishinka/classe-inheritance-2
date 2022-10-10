
export default class Character {
    constructor(name,type){
        this.health = 100;
        this.level = 1;
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie'
        ];

        if (types.indexOf(type) === -1){
            throw new Error ('такого класса нет');
        } else{
            this.type = type;
        }

        if(name.length < 2 || name.length > 10 ){
            throw new Error ('Ошибка:должна быть больше двух и не более десяти символов включительно');
        } else{
            this.name = name;
        }
    }

}

