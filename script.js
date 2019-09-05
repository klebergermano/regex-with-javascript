class AppRegex {

    htmlText = document.querySelector("#text p");

    get text() {

        let mainText = this.htmlText.textContent;
        return mainText;
    }

    get input() {

        let input = document.querySelector("#input_regex").value;
        return input;

    }

}

class TestRegex extends AppRegex {

    inputValue = this.input
    text = this.text;

    get resultTest() {
        let regex = RegExp(this.inputValue);
        let result = regex.test(this.text);
        return result;
    }

    appendResultTest() {

        let res = document.querySelector('#res_test');
        let test = this.resultTest;
        let result;
        let regex = RegExp(this.inputValue, 'g');

        let countRegex = this.text.match(regex);
    

        if (test) {

            result = `<p>${this.input}: <span class='true'>True</span> <span>${countRegex.length}</span> results find</p>`;

        } else {

            result = `<p>${this.input}: <span class='false'>False</span></p>`;

        }

        res.innerHTML = result;

    }





}


class ReplaceRegex extends AppRegex {
    input = this.input;
    text = this.text;
    htmlText = this.htmlText;

    run() {

        let regex1 = RegExp(this.input, 'g');
        let replace = this.text.replace(regex1, function (x) {
           let r =  "<span class='highlight'>" + x + "</span>"
            return r;
        });
        this.htmlText.innerHTML = replace;

    }

};

function execTest() {

  

}



function replaceRegex() {
    let test = new TestRegex();
    test.appendResultTest();

    let replace = new ReplaceRegex();
    replace.run();
 
}



var btn_test = document.querySelector("#btn_test");
var typeInput = document.querySelector("#input_regex");

btn_test.addEventListener('click', execTest);
typeInput = addEventListener('input', replaceRegex);





