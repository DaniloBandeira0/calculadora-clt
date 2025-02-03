// horasextras.test.js
const fnHorasExtras = require('./horasextras');

test('salario por hora 10, horas trabalhadas 50, carga horaria 40, resultado esperado 100', () => {
    expect(fnHorasExtras(10, 50, 40)).toBe(100);
});

test('salario por hora 10, horas trabalhadas 30, carga horaria 36, resultado esperado 0', () => {
    expect(fnHorasExtras(10, 30, 36)).toBe(0);
});

test('salario por hora -10, horas trabalhadas 50, carga horaria 40, resultado esperado "todos os valores devem ser positivos"', () => {
    expect(fnHorasExtras(-10, 50, 40)).toBe('todos os valores devem ser positivos');
});

test('salario por hora 10, horas trabalhadas -50, carga horaria 40, resultado esperado "todos os valores devem ser positivos"', () => {
    expect(fnHorasExtras(-10, 50, 40)).toBe('todos os valores devem ser positivos');
});

test('salario por hora "10", horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem ser positivos"', () => {
    expect(fnHorasExtras(10, 50, -40)).toBe('todos os valores devem ser positivos');
});

test('salario por hora "A", horas trabalhadas 50, carga horaria -40, resultado esperado "todos os valores devem ser numeros"', () => {
    expect(fnHorasExtras("A", 50, -40)).toBe('todos os valores devem ser numeros');
});

test('salario por hora 10, horas trabalhadas "A", carga horaria -40, resultado esperado "todos os valores devem ser numeros"', () => {
    expect(fnHorasExtras(10, "A", -40)).toBe('todos os valores devem ser numeros');
});

test('salario por hora 10, horas trabalhadas 50, carga horaria "A", resultado esperado', () => {
    expect(fnHorasExtras(10, 50, "A")).toBe('todos os valores devem ser numeros');
});




