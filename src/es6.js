{
    const obj = {
        name:'1111',
        age:'222'
    }
    console.log(Object.keys(obj)) //['name','age']
    console.log(Object.values(obj))// ['111','222']
    console.log(Object.entries(obj))// [['name','111'],['age','222']]
}

{
    const name = 'imooc';
    const obj = {
        [name]:'hello'
    }
    console.log(obj)
}

{
    const obj1 = {
        a:'1',
        b:'2'
    }

    const obj2 = {
        c:'3'
    }
    console.log({...obj1,...obj2}) //{a: "1", b: "2", c: "3"}
}


{
    let arr = ['aaaa','bbbb'];
    let [a,b] = arr;

    console.log(a,b) //aaaa,bbbb
}
