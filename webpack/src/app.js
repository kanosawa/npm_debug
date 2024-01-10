import { add, sub } from './math';

const a = 400;
const b = 600;
const coupon = 300;
const total = add(a, b);
const final = sub(total, coupon);

document.body.textContent = `Your final total is $${final}`;
