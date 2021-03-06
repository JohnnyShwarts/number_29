Method - Post
http://162.55.220.72:5005/get_test_user

- body request -
  Form-data

age - 30
salary - 1500
name - Alex
auth_token - "/s34lfgbj/Alex/jjd909/31113kjkWpqc1100479184evny"

- body response - 
  
  
{
    "age": "30",
    "family": {
        "children": [
            [
                "Alex",
                24
            ],
            [
                "Kate",
                12
            ]
        ],
        "u_salary_1_5_year": 6000
    },
    "name": "Alex",
    "salary": 1500
}

- TESTS - 
  
  pm.test("Status code is 200", function () { // snippets: status code 200 
    pm.response.to.have.status(200);
});

let item_1 = "Alex"

pm.test("Item_1 Test", function () { // сравнение переменной и массива to.deep.equal("Alex")
 pm.expect(item_1).to.deep.equal("Alex")

});

// body - pretty
let person = {

    "age": "30",
    "family": {
        "children": [
            [
                "Alex",
                24
            ],
            [
                "Kate",
                12
            ]
        ],
        "u_salary_1_5_year": 6000
    },
    "name": "Alex",
    "salary": 1500
}


pm.test("Item_2 Test person", function () {  // сравнение параметра (person.age) и значения ("30")
 pm.expect(person.age).to.deep.equal("30")

});


pm.test("Item_3 Person", function () { // проверить первый элемент первого массива (добираемся до данных [1][1]...(12))
pm.expect(person.family.children[1][1]).to.deep.equal(12)
});

pm.test("Item_4 Person", function () { // тест на наличие property (параметра нашего JSON - "name")
pm.expect(person).to.have.property("name")
});

pm.test("Item_5 Person", function () { // проверка на наличие всего элемента - представлен salary": 1500
pm.expect(person).to.deep.include({ "salary": 1500})
});

pm.test("Item_5_5 Person", function () { // проверка наличия числа в массиве (в данном случае елемент 1 (из 0) число 12)
pm.expect(person.family.children[1]).to.deep.include(12)
});

pm.test("Item_6 Person", function () { // проверка наличия стринга в массиве (в данном случае елемент 1 (из 0) стринга "Kate")
pm.expect(person.family.children[1]).to.deep.include("Kate")
});

pm.test("Item_7 Person", function () { // проверка на тип данных - array (всего массивы 0 и 1)
pm.expect(person.family.children[1]).to.be.a("array")
});

pm.test("Item_7_1 Person", function () { // проверка на конкретный элемент (число) в массиве
pm.expect(person.family.children[1][1]).to.be.a("number")
});

pm.test("Item_7_2 Person", function () { // проверка что нулевой элемент равен стрингу
pm.expect(person.family.children[1][0]).to.be.a("String")
});

pm.test("Item_7_3 Person", function () { // проверка что в параменте name есть стринг, а именно (Value ("Alex"))
pm.expect(person.name).to.be.a("String")
});

pm.test("Item_8 Person", function () { // проверка является елемент ли массивом и по номеру значения
pm.expect(person.family.children[1]).to.be.an("Array").that.include(12)
});

pm.test("Item_9 Person", function () {
pm.expect(person.family.children[0]).to.eql(["Alex",24]) // проверка равен ли елемент "children[0] массиву "Alex",24"
});
