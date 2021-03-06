# Блок вопросов и ответов на тему **JavaScript**

## Вопросы по уровням сложности

1. [⬇️ Базовый уровень](#JavaScript---базовый-уровень) 👼🏽
2. Продвинутый уровень 👦🏼
3. Экспертный уровень 🧔🏻

## JavaScript - базовый уровень

№   |	Список вопросов
--- | -----------------------
1   | [Какие есть типы данных в js](#Какие-есть-типы-данных-в-js)
2   | [В чем разница между операторами ```=```, ```==```, ```===```](#в-чем-разница-между-операторами---)
3	| [Методы сравнения в js ```==```, ```===```, ```Object.is```](#методы-сравнения-в-js---objectis)
4	| [Операторы сравнения ```>```, ```<```, ```>=```, ```<=```](#Операторы-сравнения----)
5	| [Какие ключевые слова используются для создания переменных](#Какие-ключевые-слова-используются-для-создания-переменных)
6	| [В чем разница между ключевыми словами для создания переменных](#В-чем-разница-между-ключевыми-словами-для-создания-переменных)
7	| [Преобразование типов в js](#Преобразование-типов-в-js)

1. ### Какие есть типы данных в js

	1. Примитивные типы данных:

		1. Number - ```10```
		2. String - ```'hi'```
		3. Boolean - ```true```
		4. Null - ```null```
		5. Undefined - ```undefined```
		6. BigInt - ```123n```
		7. Symbol - ```Symbol('a')```

	2. Ссылочные типы данных:

		1. Object - ```{}```

	Отличие примитивных данных от ссылочных заключается в том, что примитивный тип хранит в себе значение, а ссылочный хранит ссылку на место в памяти, где хранится объект.

[⬆️ Вернуться в начало](#JavaScript---базовый-уровень)

2. ### В чем разница между операторами "=" "==" "==="

   * "=" - оператор присваивания какого-либо значения в переменную или к полю объекта

   ```
   var x = 10              // 10

   var y = {name: '123'}   // 123
   y.name = '321'          // 321
   ```

	* "==" - оператор не строгого сравнения

	сравнивает 2 значения по обе стороны оператора, возвращая ```true или false```

	Перед сравнением, если это возможно, происходит автоматическое приведение типов к одному, затем происходит сравнение

	```
	console.log(1 == '1')		// true
	console.log(1 == '2')		// false
	console.log(null == undefined)	// true
	console.log(true == 'qwer')	// true
	console.log({} == {})		// false
	```

	* "===" - оператор строгого сравнения

	Сравнивает и тип данных и значение по обе стороны оператора, если тип данных не совпадает, возвращает ```false```

	```
	console.log(1 === '1')		// false
	console.log(1 === '2')		// false
	console.log(null === undefined)	// false
	console.log(true === 'qwer')	// false
	console.log({} === {})		// false
	```

	[⬆️ Вернуться в начало](#JavaScript---базовый-уровень)

3. ### Методы сравнения в js ```==```, ```===```, ```Object.is```

	Метод сравнения ```Object.is``` работает почти также как строгое сравнение за исключением сравнений ```-0 +0``` и ```NaN NaN```

	Полная таблица сравнений:

	x         |y          |==        |===       |Object.is
	----------|-----------|----------|----------|----------
	undefined |undefined  |true      |true      |true
	null	  |null	      |true	     |true	    |true
	true	  |true       |true	     |true	    |true
	false	  |false	  |true	     |true	    |true
	"foo"	  |"foo"	  |true	     |true	    |true
	{ x: 10 } |x	      |true	     |true	    |true
	0	      |0	      |true	     |true  	|true
	+0	      |-0	      |true	     |true	    |false
	0	      |false	  |true	     |false	    |false
	""        |false      |true	     |false	    |false
	""	      |0	      |true	     |false	    |false
	"0"	      |0	      |true	     |false	    |false
	"17"	  |17	      |true	     |false	    |false
	[1,2]	  |"1,2"	  |true	     |false	    |false
	new String("foo")|"foo"|true     |false	    |false
	null	  |undefined  |true	     |false	    |false
	null	  |false	  |false	 |false	    |false
	undefined |false	  |false	 |false	    |false
	{ x: 10 } |	{ x: 10 } |false	 |false	    |false
	new String("foo")|	new String("foo")|	false|	false|	false
	0	      |null	      |false	 |false	    |false
	0	      |NaN	      |false	 |false	    |false
	"foo"	  |NaN	      |false	 |false	    |false
	NaN	      |NaN	      |false	 |false	    |true

	[⬆️ Вернуться в начало](#JavaScript---базовый-уровень)

4. ### Операторы сравнения ```>```, ```<```, ```>=```, ```<=```

	x         |y          |>         |>=        |<         | <=       | ==
	----------|-----------|----------|----------|----------|----------|--------
	10        |10         |false     |true      |false     |true
	10   	  |5n	      |true	     |true	    |false     |false
	'F'       |'Q'        |false     |false     |true      |true
	'ab'      |'a'        |true      |true      |false     |false
	'10'      |5          |true      |true      |false     |false
	'abc'     |10         |false     |false     |false     |false
	null      |5          |false     |false     |true      |true
	null      |0          |false     |true      |false     |true      |false
	undefined |0          |false     |false     |false     |false     |false

	[⬆️ Вернуться в начало](#JavaScript---базовый-уровень)

5. ### Какие ключевые слова используются для создания переменных

	1. ```var```
	2. ```let```
	3. ```const```
	4. Объявление переменной без ключевого слова, если скрипт находится не в режиме [⬇️ use strict](#empty) (так делать крайне не рекомендуется)

	```
	var num = 10

	let str = 'hello'

	const PI = 3.14

	badPractice = {}
	```

	[⬆️ Вернуться в начало](#JavaScript---базовый-уровень)

6. ### В чем разница между ключевыми словами для создания переменных

	1. Область видимости переменной

	```var``` - имеет область видимости ограниченную функцией

	```let, const``` - имеют блочную область видимости

	```
	function x() {
		var num = 10

		for(var i = 0; i < 5; i++) {
			num += 1
		}

		console.log(i) // 5
		console.log(num) // 15
	}

	x()

	console.log(i) // ReferenceError: Can't find variable: i
	console.log(num) // ReferenceError: Can't find variable: num
	```

	```
	function x() {
		let num = 10

		for(let i = 0; i < 5; i++) {
			num += 1
		}

		console.log(i) // ReferenceError: Can't find variable: i
		console.log(num) // 15
	}
	```

	Во втором примере используется ключевое слово ```let```, которое не существует за пределами блока ```for```, поэтому даже внутри функции мы получим ошибку

	2. Hoisting

	Отличие заключается в том, в какой момент выполнения скрипта переменная инициализируется.

	```
	console.log(x)	// undefined
	var x = 10
	console.log(x)	// 10

	console.log(z)	// ReferenceError: Cannot access uninitialized variable.
	let z = 10
	console.log(z)	// 10
	```

	Переменные созданные через ключевое слово ```var``` инициализируются до начала выполнения скрипта, поэтому, когда происходит обращение к переменной, до ее объявления, мы получим значение ```undefined ```

	Переменные созданные через ключевые слова ```let, const``` инициализируется в момент, когда скрипт доходит до строки с ее объявлением, поэтому если попытаться обратиться к ней до объявления мы получим ошибку

	3. var vs const

	Помимо перечисленных выше различий, переменную, объявленную через ключевое слово const нельзя перезаписать, однако если это объект, то мы можем вызывать его методы и менять свойства

	```
	const x = 10

	x = 5	// TypeError: Attempted to assign to readonly property.

	const y = {}

	y.name = 10

	console.log(y.name)	// 10

	const z = []

	z.push(x)

	console.log(z)	// [10]
	```

	p.s. Существует также объявление переменной без ключевых слов, в таком случае, где бы не произошло объявление переменной, она будет доступна глобально по всему скрипту. **Так делать крайне не рекомендуется**

	[⬆️ Вернуться в начало](#JavaScript---базовый-уровень)

7. ### Преобразование типов в js

	```
	console.log(String(123)) // '123'
	console.log(String(123n)) // '123'
	console.log(String(true)) // 'true'
	console.log(String(null)) // 'null'
	console.log(String(undefined)) // 'undefined'
	console.log(String(NaN)) // 'NaN'
	console.log(String(Symbol('a'))) // 'Symbol(a)'
	console.log(String([])) // ''
	console.log(String(['abc', 123])) // 'abc,123'
	console.log(String([{}])) // [object Object]
	console.log(String({})) // [object Object]

	console.log(Number('123')) // 123
	console.log(Number('qwe')) // NaN
	console.log(Number(123n)) //123
	console.log(Number(true)) // 1
	console.log(Number(null)) // 0
	console.log(Number(undefined)) // NaN
	console.log(Number(NaN)) // NaN
	console.log(Number(Symbol(1))) // TypeError: Cannot convert a symbol to a number
	console.log(Number([])) // 0
	console.log(Number([123])) // 123
	console.log(Number(['123'])) // 123
	console.log(Number(['qwe'])) // NaN
	console.log(Number({})) // NaN

	console.log(Boolean(123)) // true
	console.log(Boolean(0)) // false
	console.log(Boolean(123n)) // true
	console.log(Boolean(0n)) // false
	console.log(Boolean('qwe')) // true
	console.log(Boolean('0')) // true
	console.log(Boolean('')) // false
	console.log(Boolean(null)) // false
	console.log(Boolean(undefined)) // false
	console.log(Boolean(NaN)) // false
	console.log(Boolean(Symbol('a'))) // true
	console.log(Boolean([]) // true
	console.log(Boolean({}) // true
	```

	[⬆️ Вернуться в начало](#JavaScript---базовый-уровень)

	[⬇️ Преобразование объектов в примитивы](#empty)
