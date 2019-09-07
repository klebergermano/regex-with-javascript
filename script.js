


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

    run(x = 'gi') {

        let flags = x;
        //Add highlight in the text replacing the found val to the same val with a span tag with the class 'highlight'
        let regex1 = RegExp(this.input, flags);
        let replace = this.text.replace(regex1, function (x) {
        let r =  "<span class='highlight'>" + x + "</span>"
        return r;
        });
        this.htmlText.innerHTML = replace;
    }   
};



class Flags extends AppRegex {

   
    flags_ul = document.querySelector('#flags ul');

    clickCheckbox(x) {
        let data = x.getAttribute('data-checked');
        let name = x.getAttribute('name');
        let input = document.getElementsByName(name);

        if (data == 'unchecked') {
           
            input[0].setAttribute('data-checked', 'checked');
            
        } else {
            input[0].setAttribute('data-checked', 'unchecked');
            


        }

    }


    checkFlags(x) {

        this.clickCheckbox(x);
        let input = document.getElementsByClassName('checkbox_flags');
        let c = input.length;
        let txtFlags = '';
        for (let i = 0; i < c; i++) {

            if (input[i].getAttribute('data-checked') == 'checked') {
                txtFlags += input[i].getAttribute('name');
               
            };

           
        }
        let regex = new ReplaceRegex();
        regex.run(txtFlags);

       

    }


    visibilityFlags() {

        // Add the funciont visibily to flag when push the Flags button
        let visibility = document.querySelector('#flags ul').style.display;

        if (visibility != 'block') {
            document.querySelector('#flags ul').style.display = "block";

        } else {
            document.querySelector('#flags ul').style.display = "none";
        }
    }
    
}





function funcRegex() {
    //Display the 'flags ul' as none if it was visible when the input was used
    document.querySelector('#flags ul').style.display = "none"; 

    let test = new TestRegex();
    test.appendResultTest();

    let replace = new ReplaceRegex();
    replace.run();

}

function visibilityFlags() {

    let flags = new Flags();
    flags.visibilityFlags();

}

function checkboxFlags(x) {
     
    let checkbox = new Flags();
    checkbox.checkFlags(x);


}



var typeInput = document.querySelector("#input_regex");
typeInput.addEventListener('input', funcRegex);

var btn_flags = document.querySelector("#flags");
    btn_flags.querySelector('span').addEventListener('click', visibilityFlags);

function clickout(e) {
    let box = document.getElementById('regex_box');
   
    if (!box.contains(e.target)) {

            document.querySelector('#flags ul').style.display = "none";
        } 
  

}
   
window.addEventListener('click', clickout)


 





