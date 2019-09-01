class AppRegex {

    get text() {

        let mainText = document.querySelector("#text p").textContent;
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

        if (test) {

            result = `<p>${this.input}: <span class='true'>True</span></p>`;

        } else {

            result = `<p>${this.input}: <span class='false'>False</span></p>`;

        }

        res.innerHTML = result;

    }


}

function execTest() {
    let test = new TestRegex();
    test.appendResultTest();
}




btn_test = document.querySelector("#btn_test");
btn_test.addEventListener('click', execTest);





