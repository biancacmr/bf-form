/************** Global variables ****************/

const requiredFields = ['full-name', 'age', 'height', 'weight',
    'eye-color', 'hair-color', 'cellphone', 'hobbies', 'fav-movie',
    'fav-book', 'games', 'cats-or-dogs', 'pets', 'describe-yourself',
    'passion'];

const requiredCheckboxes = ['smoking', 'drinking', 'personality', 'permission'];

/************** Form execution ****************/

$(function () {
    eventsForm();
    submitForm();
});

// events listeners
function eventsForm() {
    $("#age").on("keydown", function (event) {
        const age = $(this).val();
        const key = event.originalEvent.key;

        if (key == "-" || key == "e") {
            event.preventDefault();
        }

        if (isNaN(age) || (age > 100) || (age < 0)) {
            $(this).val("");
            event.preventDefault();
            addInvalidClass("age");
            showInvalidMessage("age");
        } else {
            hideInvalidMessage("age");
            removeInvalidClass("age");
        }
    });

    $("#age").on("change", function (event) {
        const age = $(this).val();

        if (isNaN(age) || (age > 100) || (age < 0)) {
            $(this).val("");
            event.preventDefault();
            addInvalidClass("age");
            showInvalidMessage("age");
        } else {
            hideInvalidMessage("age");
            removeInvalidClass("age");
        }
    });

    $("#height").on("keydown", function (event) {
        const age = $(this).val();
        const key = event.originalEvent.key;

        if (key == "-" || key == "e") {
            event.preventDefault();
        }

        if (isNaN(age) || (age > 280)) {
            $(this).val("");
            event.preventDefault();
            addInvalidClass("height");
            showInvalidMessage("height");
        } else {
            hideInvalidMessage("height");
            removeInvalidClass("height");
        }
    });

    $("#height").on("change", function (event) {
        const age = $(this).val();

        if (isNaN(age) || (age > 280) || (age < 100)) {
            $(this).val("");
            event.preventDefault();
            addInvalidClass("height");
            showInvalidMessage("height");
        } else {
            hideInvalidMessage("height");
            removeInvalidClass("height");
        }
    });

    $("#weight").on("keydown", function (event) {
        const age = $(this).val();
        const key = event.originalEvent.key;

        if (key == "-" || key == "e") {
            event.preventDefault();
        }

        if (isNaN(age) || (age > 300)) {
            $(this).val("");
            event.preventDefault();
            addInvalidClass("weight");
            showInvalidMessage("weight");
        } else {
            hideInvalidMessage("weight");
            removeInvalidClass("weight");
        }
    });

    $("#weight").on("change", function (event) {
        const age = $(this).val();

        if (isNaN(age) || (age > 300) || (age < 0)) {
            $(this).val("");
            event.preventDefault();
            addInvalidClass("weight");
            showInvalidMessage("weight");
        } else {
            hideInvalidMessage("weight");
            removeInvalidClass("weight");
        }
    });
}

// when the form is submitted
function submitForm() {
    $("#form").on("submit", function (event) {
        event.preventDefault();

        if (checkFields()) {
            this.submit();
            requiredFields.forEach((field) => {
                hideRequiredMessage(field);
                removeInvalidClass(field);
            });

        } else {
            console.info("Form submission failed.");
        }
    });
}

function checkFields() {
    let valid = true;

    // validating required fields (input number, input text)
    requiredFields.forEach(function (field) {
        let value = $(`#${field}`).val();
        if (!value.trim().length) {
            valid = false;
            addInvalidClass(field);
            showRequiredMessage(field);
        }
    });

    requiredCheckboxes.forEach(function (ckName) {
        let cks = $(`input[name='${ckName}']:checked`).val();

        if (cks == undefined || !cks.trim().length) {
            valid = false;
            addInvalidClass(ckName);
            showRequiredMessage(ckName);
        }

    });

    return valid;
}

/************** Auxiliar functions ****************/

function addInvalidClass(field) {
    $(`#${field}`).addClass("invalid");
}

function removeInvalidClass(field) {
    $(`#${field}`).removeClass("invalid");
}

function showRequiredMessage(field) {
    $(`#${field}-error`).show();
}

function hideRequiredMessage(field) {
    $(`#${field}-error`).hide();
}

function showInvalidMessage(field) {
    $(`#${field}-error-invalid`).show();
}

function hideInvalidMessage(field) {
    $(`#${field}-error-invalid`).hide();
}