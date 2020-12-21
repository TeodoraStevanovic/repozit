function sviNaslovi(){
    const naslovi=[...document.getElementsByClassName('item')]

    naslovi.forEach(element => {
        console.log(element.textContent);
        
    });
}