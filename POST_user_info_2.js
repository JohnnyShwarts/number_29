Method - Post
http://162.55.220.72:5005/user_info_2
body
form-data

Key ---- Value (Значения Value привязаны к Environment quick look)
age - {{age}}
salary - {{salary}}
name - {{name}}
auth_token - {{token}}

RESPONSE

{
    "person": {
        "u_age": 35,
        "u_name": [
            "john",
            2000,
            35
        ],
        "u_salary_5_years": 8400.0
    },
    "qa_salary_after_1.5_year": 6600.0,
    "qa_salary_after_12_months": 5400.0,
    "qa_salary_after_3.5_years": 7600.0,
    "qa_salary_after_6_months": 4000,
    "start_qa_salary": 2000
}

TESTS ()

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();  //Спарсить response body в json
var req = request.Data              // Спарсить request


// Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("json response имеет параметр qa_salary_after_6_months", () => {
pm.expect(jsonData).to.have.property("qa_salary_after_6_months")
});


// Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.
pm.test("start_qa_salary равен salary из request", function () {
    pm.expect(request.start_qa_salary).to.eql(jsonData.salary);
});
console.log(+request.data.salary)
console.log(jsonData.start_qa_salary)

// Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.
pm.test("параметр qa_salary_after_3.5_years равен salary из request", function () {
pm.expect(+request['qa_salary_after_3.5_years']).to.eql(jsonData.salary*3.8);
});

// Написать цикл который выведет в консоль по порядку элементы списка из параметра person
for (let i in jsonData.person){
console.log("Property", i, "property value:", jsonData.person[i]);
}
