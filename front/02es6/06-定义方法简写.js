let person={
    say:function (){
        console.log('hi')
    },
    sing:function (){
        console.log('一闪一闪')
    },
}

person.say()
person.sing()

let person1={
    say(){
        console.log(`hihi`)
    },
    sing(){
        console.log(`满天都是小星星`)
    }
}
person1.say()
person1.sing()