import Character from "../Zombie";
test ('проверяем главнный класс Character',()=>{
    const person = new Character ('Вася', 'Zombie');
    const result ={
        name: 'Вася',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(person).toMatchObject(result);
});