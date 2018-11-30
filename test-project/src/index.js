const add = (num1, num2) => {
  return eval('num1 + num2', {
    num1: num1,
    num2: num2
  });
};

const result = add(1, 2);