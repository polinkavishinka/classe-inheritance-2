import Character from "../Magician";
test ('проверяем дочерний класс Magician',()=>{
    const person = new Character ('Вася', 'Magician');
    const result ={
        name: 'Вася',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(person).toMatchObject(result);
});