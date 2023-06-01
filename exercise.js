function printName() {
    const helloName = "Hello John";

    function inner() {
        return helloName;   
        setTimeout(inner,4000);
    }
    
    console.log(inner());
    
}

printName();
