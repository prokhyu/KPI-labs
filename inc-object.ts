type Num = {
  n: number;
};

function inc(num: Num): void {
  num.n += 1;
}

const obj: Num = { n: 5 };

inc(obj);

console.dir(obj);
