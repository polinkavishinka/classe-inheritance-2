import Character from '../Character';

test('Создание нового персонажа,ошибок нет', () => {
  const person = new Character('Вася', 'Magician');

  const result = {
    name: 'Вася',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(person).toMatchObject(result);
});

test('Имя от 2 до 10 включительно символов ', () => {
  const person = new Character('Вася', 'Magician');
  expect(person.name).toBe('Вася');
});

test('Имя не входит в интервал от 2 до 10 символов включительно, выдается ошибка', () => {
  const person = () => new Character('Я', 'Magician');
  expect(person).toThrowError(
    new Error(
      'Ошибка:должна быть больше двух и не более десяти символов включительно'
    )
  );
});

test('Имя не входит в интервал от 2 до 10 символов включительно, выдается ошибка', () => {
  const person = () => new Character('Даздраберман', 'Magician');
  expect(person).toThrowError(
    new Error(
      'Ошибка:должна быть больше двух и не более десяти символов включительно'
    )
  );
});

test('Данный тип присутсвует ', () => {
  const person = new Character('Вася', 'Magician');
  expect(person.type).toBe('Magician');
});

test('Данный тип отсутсвует ', () => {
  const person = () => new Character('Вася', 'Ogr');
  expect(person).toThrowError(new Error('такого класса нет'));
});

// 2 задание

test('Уровень здоровья 0,ошибка, нельзя повысить уровень ', () => {
  const person = new Character('Вася', 'Magician');
  person.health = 0;
  const result = () => person.levelUp();
  expect(result).toThrow();
});

test('Уровень здоровья в норме левел повышается', () => {
  const person = new Character('Вася', 'Magician');
  person.attack = 10;
  person.defence = 10;
  person.levelUp();
  //console.log(10 + (10 / 100) * 20);
  expect(person.health).toBe(100);
  expect(person.attack).toBe(12);
  expect(person.defence).toBe(12);
  expect(person.level).toBe(2);
});

test('Cтандартный урон', () => {
  const person = new Character('Noah', 'Magician');
  person.defence = 10;
  person.damage(40);
  expect(person.health).toBe(64);
});

test('Повышенный урон', () => {
  const person = new Character('Noah', 'Magician');
  person.defence = 10;
  person.damage(700);
  expect(person.health).toBe(0);
});