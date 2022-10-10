
import Character from "../Character";
test ('Создание нового персонажа,ошибок нет',()=>{

    const person = new Character ('Вася', 'Magician');

    const result ={
        name: 'Вася',
        type: 'Magician',
        health: 100,
        level: 1,
        
    };
    expect(person).toMatchObject(result);  
});



test ('Имя от 2 до 10 включительно символов ',()=>{
    const person =  new Character ('Вася','Magician');
    expect(person.name).toBe("Вася");
    
});

test ('Имя не входит в интервал от 2 до 10 символов включительно, выдается ошибка',()=>{
    const person = () => new Character ('Я','Magician');
    expect(person).toThrowError(new Error('Ошибка:должна быть больше двух и не более десяти символов включительно'));
    
});

test ('Имя не входит в интервал от 2 до 10 символов включительно, выдается ошибка',()=>{
    const person = () => new Character ('Даздраберман','Magician');
    expect(person).toThrowError(new Error('Ошибка:должна быть больше двух и не более десяти символов включительно'));
    
});
test ('Данный тип присутсвует ',()=>{
    const person = new Character ('Вася','Magician');
    expect(person.type).toBe('Magician');
    
});
test ('Данный тип отсутсвует ',()=>{
    const person = () => new Character ('Вася','Ogr');
    expect(person).toThrowError(new Error('такого класса нет'));
    
});