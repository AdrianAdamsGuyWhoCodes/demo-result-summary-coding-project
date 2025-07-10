const ratingsBtn = document.querySelectorAll('button[type=button]');
const submitBtn = document.querySelector('button[type=submit]');
const submitForm = document.querySelector('form');
let popUpContainer;
let selectedRating = null;

// forEach to gather the value of the 1-5 button
ratingsBtn.forEach(button => {
    button.addEventListener('click', () => {

        selectedRating = Number(button.textContent);
        console.log(selectedRating);

    });
});

// Used to change the color of the 1-5 buttons
// from white to orange when clicked
ratingsBtn.forEach(button => {
    button.addEventListener('click', () => {

        ratingsBtn.forEach(btn => btn.classList.remove('ratingBtnClicked'));

        button.classList.add('ratingBtnClicked');

    });
});

function initializeRatingsListeners() {
    ratingsBtn.forEach(button => {
        button.addEventListener('click', () => {
            selectedRating = Number(button.textContent);
            console.log(selectedRating);

            // Change the button's style on click
            ratingsBtn.forEach(btn => btn.classList.remove('ratingBtnClicked'));
            button.classList.add('ratingBtnClicked');
        });
    });
}

// Initialize the event listeners for the first time
submitBtn.addEventListener('click', event => {

    event.preventDefault();

    if (selectedRating) {

        submitForm.style.display = 'none';

        const message = getSubmitMessage(selectedRating);

        showPopUp(selectedRating, message);

        if (popUpContainer) {
            setTimeout(() => {
                window.addEventListener('click', () => {
                    popUpContainer.remove();
                    submitForm.style.display = 'block';
                    submitForm.reset();
                    ratingsBtn.forEach(btn => btn.classList.remove('ratingBtnClicked'));
                    selectedRating = null;

                    initializeRatingsListeners();
                }, { once: true });
            }, 1500);
        }} else {
            window.alert('Please select a rating.');
    }
});


// Unique message thats appended based on the rating from 1-5
function getSubmitMessage(rating) {
    switch (rating) {
        case 5:
            return `We appreciate the amazing rating!
                    If you ever need more support, 
                    don’t hesitate to get in touch!`;
            break;
        case 4:
            return `Thank you for revewing our service!
                    If you ever need more support, 
                    don’t hesitate to get in touch!`;
            break;
        case 3:
            return `Thanks for your submission!
                    If you ever need more support, 
                    don’t hesitate to get in touch!`;
            break;
        case 2:
            return `We hope to see you again with more 
                    support for your needs!
                    If you ever need more support, 
                    don’t hesitate to get in touch!`;
            break;
        case 1:
            return `We're sorry that our service did not 
                    meet your requirements. We will be avaialbe 
                    should you need to
                    If you ever need more support, get in touch!`;
            break;
        default:
            return "Thank you for your feedback!";
    }
}

// Displays pop up after user succesfully submits review
function showPopUp(rating, message) {
    popUpContainer = document.createElement("div");
    const popUpImg = document.createElement("img");
    const ratingsResult = document.createElement("p");
    const ratingsHeader = document.createElement("h2");
    const ratingsMessage = document.createElement("p");

    // Set up the container
    popUpContainer.classList.add('ratingsContainer', 'container');

    // Set up the image
    popUpImg.src = "images/illustration-thank-you.svg";
    popUpImg.alt = "Thank You Illustration";
    popUpImg.classList.add('ratingsImg');

    // Set up the rating result text
    ratingsResult.textContent = `You selected ${rating} out of 5`;
    ratingsResult.classList.add('ratingsResult');

    // Set up the header
    ratingsHeader.textContent = "Thank You!";
    ratingsHeader.classList.add('ratingsHeader');

    // Set up the message
    ratingsMessage.textContent = message;
    ratingsMessage.classList.add('ratingsMessage');

    // ratingsMessage = getResultMessage;
    ratingsMessage.classList.add('ratingsMessage');

    document.body.appendChild(popUpContainer);

    popUpContainer.appendChild(popUpImg);
    popUpContainer.appendChild(ratingsResult);
    popUpContainer.appendChild(ratingsHeader);
    popUpContainer.appendChild(ratingsMessage);
}

