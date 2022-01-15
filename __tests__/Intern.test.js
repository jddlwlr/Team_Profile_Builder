const Intern = require('../lib/Intern');


test('creates an engineer object', () => {
    const employee = new Intern('Jesse', 1, 'jedd.lawler@gmail.com', 'UGA');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const employee = new Intern('Jesse', 1, 'jedd.lawler@gmail.com', 'UGA');

    expect(employee.getName()).toEqual(expect.any(String));
});

 
test('gets employee ID', () => {
    const employee = new Intern('Jesse', 1, 'jedd.lawler@gmail.com', 'UGA');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Intern('Jesse', 1, 'jedd.lawler@gmail.com', 'UGA');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets engineer github username', () => {
    const employee = new Intern('Jesse', 1, 'jedd.lawler@gmail.com', 'UGA');

    expect(employee.getSchool()).toEqual(expect.stringContaining(employee.school.toString()));
});

test('gets role of employee', () => {
    const employee = new Intern('Jesse', 1, 'jedd.lawler@gmail.com', 'UGA');

    expect(employee.getRole()).toEqual("Intern");
}); 