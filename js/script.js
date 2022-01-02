
//Email Subscription
$("#subscribe").click(function(e){
    e.preventDefault();
    var subscribeEmail = $("#subscribe_email").val();
    if(subscribe_email == null || subscribeEmail == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email is required to subscribe!'
           })
    }
    else{
      
        filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(subscribeEmail)) {
          // Yay! valid
          Swal.fire('Thanks for subscribing');
          $("#subscribe_email").hide();
          $("#subscribe").hide();
        }
        else
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not a valid email Id!'
           })
    }
});

$("#send_message").click(function(e){
e.preventDefault();
var name = $("#name").val();
var email = $("#email").val();
var phone = $("#phone").val();
var message = $("#message").val();
if(name == "" || email=="" || message == "" || phone == "" || name == null || email==null|| message == null || phone == null){
    Swal.fire({
        icon: 'error',
        title: 'All fields are required to send message ',
        text: 'Please fill Name, Email, Phone & Message.'
       })
}

else{
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#message").val("");
    Swal.fire('Thanks for contacting us. We will get back to you soon');
}
});
$("#login").click(function(e){
e.preventDefault();
    Swal.fire({
        title: 'Coming Soon!',
        text: 'This feature is under construction.',
        imageUrl: './images/underconstruction.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    })

    $("#register").click(function(e){
        e.preventDefault();
            Swal.fire({
                title: 'Coming Soon!',
                text: 'This feature is under construction.',
                imageUrl: './images/underconstruction.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            })
