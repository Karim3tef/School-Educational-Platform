
$(document).ready(function() {
    $('.g-but').mouseenter(function(){
        $(".bxl-google").css({
            "color":"#Fff",
        })
            $('.l-g_but').css({
            "color": "#fff",
            })
    })
    
    $('.g-but').mouseleave(function(){
    $(".bxl-google , .l-g_but").css({
        "color":"var(--accentColor)",
    })
    })
    
    $('.f-but').mouseenter(function(){
    $(".bxl-facebook-circle").css({
        "color":"var(--accentColor)",
    })
    $(this).css({
        "border": "2px solid var(--accentColor)",
    })
    $('.l-f_but').css({
        "color": "var(--accentColor)",
    })
    })

    $('.f-but').mouseleave(function(){
        $(".bxl-facebook-circle , .l-f_but").css({
            "color":"#fff",
        })
    })

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#id_password');

    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye');
    });

    const _togglePassword = document.querySelector('#_togglePassword');
    const conf_id_password = document.querySelector('#con_id_password');

    _togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = conf_id_password.getAttribute('type') === 'password' ? 'text' : 'password';
        conf_id_password.setAttribute('type', type);                                                                    
        // toggle the eye slash icon
        this.classList.toggle('fa-eye');
    });

   
    $('.sign_up_but').click(function(){
        if($('input').val() == '') {
            $(this).css({'border':'2px solid red',});
        }
        else {
            if ($('.password').val() == $('.confirm_password').val() ) {
                alert("عسسسل")
            } else {
            }
        }
        event.preventDefault();            
    
    })

});