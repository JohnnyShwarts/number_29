// Статус код 200
pm.test("Status code is 200", function () {
pm.response.to.have.status(200);
});

// Проверить, что name в ответе равно name s request
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("johnn");
});

// Проверить, что name в ответе равно name s request (name забрать из request.)
let Your_test_name = "johnn"
pm.test("2Your_test_name", function () {
 pm.expect(Your_test_name).to.deep.equal("johnn")
});

// Проверить, что age в ответе равно age s request
pm.test("Your test age", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.age).to.eql("30");
});

// Проверить, что age в ответе равно age s request (age забрать из request
// let Your_test_age = 30
var req = request.data
var jsonData = pm.response.json();
pm.test("2Your_test_age", function () {
pm.expect(jsonData.age).to.eql(req.age);

});


// Проверить, что salary в ответе равно salary s request(salary вбить руками)
pm.test("Your test salary", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.salary).to.eql(1000);
});

var req = request.data  // Спарсить request
// console.log(req)


// Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test("проверить_что_name_в_ответе_равно_name_request", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql(req.name);
});


// Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request
pm.test("12_пров_u_salary_1_5_year_в_ответе_равно_salary*4", function () {
    var jsonData = pm.response.json();
    let ss = jsonData.salary * 4
    pm.expect(jsonData.u_salary_1_5_year).to.eql(jsonData.ss);
});
