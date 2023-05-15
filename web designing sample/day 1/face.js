$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            first:{
                required:true,
                minlength:4,
                maxlength:8
            },
            last:{
                required:true
            },
            mailorphone:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
            dayss:{
                required:true
            },
            monthh:{
                required:true
            },
            yearr:{
                required:true
            },
            genderr:{
                required:true
            }

        },
        messages:{
            first:{
                required:"why this",
                minlength:"but y"

            }
        }
        
    })


}) 