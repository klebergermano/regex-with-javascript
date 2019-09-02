var regex1 = RegExp('foo*', 'g');
var str1 = 'table football, foosball, foo, asdf';
var array1;

while ((array1 = regex1.exec(str1)) !== null) {
    console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);

}

class ExecRegex extends AppRegex {
    input = this.input;
    text = this.text;
    htmlText = this.htmlText;

    run() {

        let regex1 = RegExp(this.input, 'g');
        let teste;
        let replace = this.text.replace(regex1, "<span class='highlight'>"+this.input+"</span>");
        this.htmlText.innerHTML = replace;
        
       

    }
    




};

x = new ExecRegex();
x.run();