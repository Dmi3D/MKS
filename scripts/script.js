// Whatsapp Toast
window.onload = function () {
    setTimeout(function () {
        document.getElementById("myToast").classList.remove('hide');
        $("#myToast").toast('show');
    }, 10000);
};

// Submit form to AWS API Gateway
function submitToAPI(event) {
    var form = document.querySelector('.needs-validation');

    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setTimeout(function () {
            alert("Please input all the required fields.");
        }, 10)
    }
    else {
        event.preventDefault();
        var subject = $("#subject-input").val();
        var message = $("#message-input").val();
        var name = $("#name-input").val();
        var email = $("#email-input").val();
        var phone = $("#phone-input").val();
        var preference = $('input[name="pref-contact"]:checked').val();
        var address = $("#address-input").val();
        var address2 = $("#address2-input").val();
        var city = $("#city-input").val();
        var county = $("#county-input").val();
        var eircode = $("#eircode-input").val();
        var recaptcha = new FormData(document.getElementById('contact-form')).get('g-recaptcha-response');
        // var file = document.getElementById('file-input').files[0];

        var data = {
            subject: subject,
            message: message,
            name: name,
            email: email,
            phone: phone,
            preference: preference,
            address: address,
            address2: address2,
            city: city,
            county: county,
            eircode: eircode,
            recaptcha: recaptcha
        };

        $.ajax({
            type: "POST",
            url: "https://2pfcxxjfof.execute-api.eu-west-1.amazonaws.com/live",
            dataType: "json",
            crossDomain: "true",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),

            success: function () {
                // clear form and show a success message
                alert("Email sent succesfully");
                form.classList.remove('was-validated');
                document.getElementById("contact-form").reset();
            },
            error: function () {
                // show an error message
                alert("Please verify your input and try again");
            }
        });
    }
    form.classList.add('was-validated');
}

// Google reCAPTCHA unlocking submit button
function recaptchaCallback() {
    var submit = document.querySelector("#submit-button");
    submit.removeAttribute('disabled');
    submit.style.cursor = 'pointer';
  }