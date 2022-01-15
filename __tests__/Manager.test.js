const Manager = require('../lib/Manager');


test('creates an engineer object', () => {
    const employee = new Manager('Jesse', 1, 'jedd.lawler@gmail.com', 10);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const employee = new Manager('Jesse', 1, 'jedd.lawler@gmail.com', 10);

    expect(employee.getName()).toEqual(expect.any(String));
});

 
test('gets employee ID', () => {
    const employee = new Manager('Jesse', 1, 'jedd.lawler@gmail.com', 10);

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Manager('Jesse', 1, 'jedd.lawler@gmail.com', 10);

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets Managers office Number', () => {
    const employee = new Manager('Jesse', 1, 'jedd.lawler@gmail.com', 10);

    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const employee = new Manager('Jesse', 1, 'jedd.lawler@gmail.com', 10);;

    expect(employee.getRole()).toEqual("Manager");
}); 