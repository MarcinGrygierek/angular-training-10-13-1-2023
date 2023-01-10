let foo = 'string';
foo = 1000 as any;

const bar = (a: number): string | number => {
   if(a > 10) {
    return 'Lorem';
   } else {
    return a * a;
   }
}

const result: number = <number>bar(200);