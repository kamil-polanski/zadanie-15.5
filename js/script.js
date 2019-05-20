function Button(text) {
    this.text = text;
}
Button.prototype = {
    create: function() {
        this.ele = document.createElement(`button`);
        this.ele.innerText = this.text;
        this.ele.addEventListener(`click`, function() {
            alert(this.text);
        }.bind(this));
        document.body.appendChild(this.ele);
    }
}
const btn1 = new Button(`Hello!`);
console.log(btn1);
btn1.create();