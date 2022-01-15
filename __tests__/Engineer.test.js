const Engineer = require('../lib/Engineer');


test('creates an engineer object', () => {
    const employee = new Engineer('Jesse', 1, 'jedd.lawler@gmail.com', 'jddlwlr');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const employee = new Engineer('Jesse', 1, 'jedd.lawler@gmail.com', 'jddlwlr');;

    expect(employee.getName()).toEqual(expect.any(String));
});

 
test('gets employee ID', () => {
    const employee = new Engineer('Jesse', 1, 'jedd.lawler@gmail.com', 'jddlwlr');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Engineer('Jesse', 1, 'jedd.lawler@gmail.com', 'jddlwlr');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets engineer github username', () => {
    const employee = new Engineer('Jesse', 1, 'jedd.lawler@gmail.com', 'jddlwlr');

    expect(employee.getGithub()).toEqual(expect.stringContaining(employee.username.toString()));
});

test('gets role of employee', () => {
    const employee = new Engineer('Jesse', 1, 'jedd.lawler@gmail.com', 'jddlwlr');

    expect(employee.getRole()).toEqual("Engineer");
}); 