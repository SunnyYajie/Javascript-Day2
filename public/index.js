// DOM Manipulation and Event Handling

/** 1. QUERY SELECTOR */
    // query selector
    const elementByQuery = document.querySelector("#element-id");
    // console.log(`From Query Selector: ${elementByQuery.textContent}`);
    
    // getElementByID
    const elementByID = document.getElementById("element-id");
    // console.log(elementByID.innerText);
    // console.log(elementByID.textContent);
    
    // getElementsByClass
    const elemByClass = document.getElementsByClassName('text-bg-warning');
    // console.log(elemByClass);
    
    const elemClassQ = document.querySelector(".text-bg-warning");
    // console.log(`Only gets the first element not all: ${elemClassQ}`);
    
    // getElementsByTag
    const elemTag = document.getElementsByTagName('p');
    // console.log(elemTag);

    // query selector All
    const elemClassQS = document.querySelector("p");
    // console.log(elemClassQAll.innerText);
    const elemClassQAll = document.querySelectorAll(".fw-medium");
    // elemClassQAll.forEach(element => {
    //     console.log(element.innerText);    
    // });
    // console.log(elemClassQAll[0].innerText);

/** 2. ACCESSING HTML CONTENT */
    //innerHTML
    const inTextSelector = document.querySelector("#text-selector");
    // console.log(inTextSelector.innerHTML);

    //innerText
    // console.log(inTextSelector.innerText);

    //textContent
    // console.log(inTextSelector.textContent);
    inTextSelector.innerHTML = '<p class="text-success">Hello World</p>'

    // function clickBtn(){
    //     console.log("BTN Clicked");
    // }

    const btnAssign = document.querySelector("#btn-add-fix-name");
    const textField = document.querySelector("#fix-name");
    const randText = document.querySelector(".text-bg-primary.fs-3");
    
    btnAssign.addEventListener("click", function(){
        console.log("BTN Click1");
        textField.value = "THIS IS A FIXED VALUE";
        randText.innerHTML = '<strong>THIS IS A FIX VALUE</strong>';
    }); // double-click, mouse-hover

    const btnGetInput = document.querySelector("#btn-get-input");
    const inputField = document.querySelector("#input-text");
    const yourText = document.querySelector("#your-text");
    const fixedText = "Your Text Input: "
    btnGetInput.addEventListener("click", function(){
        yourText.innerText = fixedText + inputField.value;
    });

/** 3. ATTRIBUTE MANIPULATION */
    //getAttribute
    const linkText = document.querySelector("#link-tag");
    // console.log(linkText.getAttribute('target'));
    // if(linkText.getAttribute('href') == "#accessors"){
    //     // linkText.setAttribute('target', '');
    //     linkText.setAttribute('href', "https://www.facebook.com/");
    // };

    if(linkText.href.value == "#accessors"){
        // linkText.setAttribute('target', '');
        linkText.setAttribute('href', "https://www.facebook.com/");
    };

    //setAttribute
    const imgElem = document.querySelector("#empty-img");
    imgElem.setAttribute('src', "public\\img\\js-logo.png");
    
    //removeAttribute
    // imgElem.removeAttribute('src');

    //property attribute
    const randBtn = document.querySelector("#btn-random");
    // console.log(randBtn.dataset.logIn);

    //dataset property
    const switchButton = document.querySelector("#switch-btn");
    switchButton.addEventListener("click", function(){
        // console.log("Switch BTN is Clicked");
        const successModal = document.querySelector("#success-modal");
        const warningModal = document.querySelector("#warning-modal");
        
        if(successModal.dataset.bsTarget == "#successModal"){
            successModal.setAttribute('data-bs-target', "#warningModal");
            warningModal.setAttribute('data-bs-target', "#successModal");
            switchButton.setAttribute('class', "btn btn-primary");
        } else {
            successModal.setAttribute('data-bs-target', "#successModal");
            warningModal.setAttribute('data-bs-target', "#warningModal");
            switchButton.setAttribute('class', "btn btn-danger");
        }
        
    });

/** 4. CLASS MANIPULATION */
    //classList vs className
    //.add()
    //.remove()
    //.toggle()
    //.contains

/** 5. ELEMENT MANIPULATION */
    //Literal syntax
    //createElement
    
/** 6. EVENT HANDLING */