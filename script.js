


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

        let flags = 'g';


        //Display the 'flags ul' as none if it was visible when the input was used
        document.querySelector('#flags ul').style.display = "none"; 

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

    checkFlags() {
        
        let input = document.getElementsByClassName('checkbox_flags');
    
        

    }

    flagsNodes() {

       
        let li = this.flags_ul.getElementsByTagName('li');
        let c = li.length;

        for (let i = 0; i < c; i++) {

            let x = li[i].querySelector('input').getAttribute('checked');
          

        }
       

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

let teste = new Flags();
teste.checkFlags();



function funcRegex() {

    let test = new TestRegex();
    test.appendResultTest();

    let replace = new ReplaceRegex();
    replace.run();

}

function funcFlags() {
    let flags = new Flags();
    flags.visibilityFlags();

}

function checkboxFlags(x) {
    alert(x.getAttribute('name'));

    let flag = new Flags();
    flag.checkFlags();
}



var typeInput = document.querySelector("#input_regex");
typeInput.addEventListener('input', funcRegex);

var btn_flags = document.querySelector("#flags");
    btn_flags.querySelector('span').addEventListener('click', funcFlags);

   
   


 





