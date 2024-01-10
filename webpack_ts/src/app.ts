import { add, sub } from './math';

const a: number = 400;
const b: number = 600;
const coupon: number = 300;
const total: number = add(a, b);
const final: number = sub(total, coupon);

document.body.textContent = `Your final total is $${final}`;
