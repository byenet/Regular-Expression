
// ^ bat dau chuoi
// $ ket thuc chuoi
// dat bat dau ket thuc de chan so chi duoc dung 10 so va bat dau boi so 0, neu khong chan thi no se match ra ngoai pham vi 10 so
// {9} Lap lai 9 lan
const phoneNumberRegex = /^0[0-9]{9}$/g; 

const phoneNumberRegex2 = new RegExp('^0[0-9]{9}$','g'); 

phoneNumberRegex.test('0123456789');


console.log(phoneNumberRegex.test("1123456789"));
console.log(phoneNumberRegex.test("0123456789"));
console.log(phoneNumberRegex.test("012345678910"));
console.log(phoneNumberRegex2.test("012345678910"));
console.log(phoneNumberRegex2.test("0123456789"));