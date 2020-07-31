 const phoneNumber = '123-123-1234';

function removeHyphens(str) {
    // while (str.indexOf('-') !== -1){
    //     str = str.replace('-','');
    // }
    // return str;
    

    // co -g de duyet het chuoi neu khong co chi ra 123123-1234 vi no chi duyet toi - dau tien.
    return str.replace(/-/g, '');
}

result = removeHyphens(phoneNumber);

console.log(result);