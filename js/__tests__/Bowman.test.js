import Character from "../Bowman";
test ('проверяем дочерний класс Bowman',()=>{
    const person = new Character ('Вася', 'Bowman');
    const result ={
        name: 'Вася',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(person).toMatchObject(result);
});