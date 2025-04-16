const mobile = {
    brand: 'samsung',
    price: 25000,
    color:'red',
    camera: '12mp'
}
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys)
const values = Object.values(mobile);
console.log(values);
for(const key of keys){
    console.log(key,mobile[key])
    console.log(key,mobile[key])
}