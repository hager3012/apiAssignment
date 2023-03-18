import { UI } from "./UI.js";
export class Contact{
    constructor(params) {
        this.getContact();
    }
    getContact(){

        $('#ContactBtn').click(() =>{ 
            let letWidth = $(".nav-side .nav-tab").outerWidth()
    $(".nav-side ").animate({
        left: -letWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500);
    $('.loading').addClass('d-flex').removeClass('d-none');
            new UI().displayDataContact()
            // console.log('hi');
            this.validForm();
            // this.nameValue;
            setTimeout(() => {
                $('.loading').addClass('d-none').removeClass('d-flex');
            }, 500);
            
        });
    }
    disableBtn(){
        let name=$('#nameInput').attr('data-click');
        let email=$('#emailInput').attr('data-click');
        let phone=$('#phoneInput').attr('data-click');
        let Age=$('#ageInput').attr('data-click');
        let password=$('#passwordInput').attr('data-click');
        let repassword=$('#repasswordInput').attr('data-click');

        if(email=="true"&&name=="true"&&phone=="true"&&Age=="true"&&password=="true"&&repassword=="true"){
            // $('#submitBtn').prop('disabled', true);
            $('#submitBtn').removeClass('disabled');
            // console.log('hi');
        }else{
            $('#submitBtn').addClass('disabled');
        }
        // console.log(value);
    }
    validForm(){
        $('#nameInput').click(() =>{ 
            this.checkName()
        });
        $('#emailInput').click(() =>{ 
            this.checkEmail()
        });
        $('#phoneInput').click(() =>{ 
            this.checkPhone()
        });
        $('#ageInput').click(() =>{ 
            this.checkAge()
        });
        $('#passwordInput').click(() =>{ 
            this.checkPassword()
        });
        $('#repasswordInput').click(() =>{ 
            this.checkrepassword()
        });
    }
    checkName(){
        let validName=false;
        $('#nameInput').keyup((event)=> { 
            
                    if(this.checkVaildRegexName(event.target.value)||event.target.value.length==0){
                        if(event.target.value.length>50){
                            $('#nameAlertLength').addClass('d-block').removeClass('d-none');
                        }else{
                            $('#nameAlertLength').addClass('d-none').removeClass('d-block');
                        }
                        validName=true;
                        $('#nameInput').attr('data-click', `${validName}`);
                        this.disableBtn();
                        // console.log(event.target.value);
                        $('#nameAlert').addClass('d-none').removeClass('d-block');
                    }else{
                        validName=false;
                        $('#nameAlert').addClass('d-block').removeClass('d-none');
                        $('#nameInput').attr('data-click', `${validName}`);
                        this.disableBtn();
                    }
        });
    }
    checkVaildRegexName(name){
        let regex=/^[A-z a-z]{1,}$/gm;
        return regex.test(name);
    }
    checkEmail(){
        let validEmail=true;
        $('#emailInput').keyup((event)=> { 
                    if(this.checkVaildRegexEmail(event.target.value)){
                        validEmail=true;
                        $('#emailInput').attr('data-click', `${validEmail}`);
                        this.disableBtn();
                        $('#emailAlert').addClass('d-none').removeClass('d-block');
                    }else{
                        validEmail=false;
                        $('#emailAlert').addClass('d-block').removeClass('d-none');
                        $('#emailInput').attr('data-click', `${validEmail}`);
                        this.disableBtn();
                    }
        });
    }
    checkVaildRegexEmail(Email){
        let regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
        return regex.test(Email);
    }

    checkPhone(){
        let validPhone=true;
        $('#phoneInput').keyup((event)=> { 
                    if(this.checkVaildRegexPhone(event.target.value)){
                        validPhone=true;
                        $('#phoneInput').attr('data-click', `${validPhone}`);
                        this.disableBtn();
                        $('#phoneAlert').addClass('d-none').removeClass('d-block');
                    }else{
                        validPhone=false;
                        $('#phoneAlert').addClass('d-block').removeClass('d-none');
                        $('#phoneInput').attr('data-click', `${validPhone}`);
                        this.disableBtn();
                    }
        });
    }
    checkVaildRegexPhone(phone){
        let regex=/^01[0-2,5]{1}[0-9]{8}$/gm;
        return regex.test(phone);
    }
    checkAge(){
        let validAge=true;
        $('#ageInput').keyup((event)=> { 
                    if(this.checkVaildRegexAge(event.target.value)){
                        validAge=true;
                        $('#ageInput').attr('data-click', `${validAge}`);
                        this.disableBtn();
                        $('#ageAlert').addClass('d-none').removeClass('d-block');
                    }else{
                        validAge=false;
                        $('#ageAlert').addClass('d-block').removeClass('d-none');
                        $('#ageInput').attr('data-click', `${validAge}`);
                        this.disableBtn();
                    }
        });
    }
    checkVaildRegexAge(Age){
        let regex=/^(1[5-9]|[2-9]\d)$/gm;
        return regex.test(Age);
    }

    checkPassword(){
        let validPassword=true;
        $('#passwordInput').keyup((event)=> { 
                    if(this.checkVaildRegexPassword(event.target.value)){
                        validPassword=true;
                        $('#passwordInput').attr('data-click', `${validPassword}`);
                        this.disableBtn();
                        $('#passwordAlert').addClass('d-none').removeClass('d-block');
                        // console.log('jsd');
                    }else{
                        validPassword=false;
                        $('#passwordAlert').addClass('d-block').removeClass('d-none');
                        $('#passwordInput').attr('data-click', `${validPassword}`);
                        this.disableBtn();
                        // console.log('ho');
                    }
        });
    }
    checkVaildRegexPassword(Password){
        let regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm;
        return regex.test(Password);
    }
    checkrepassword(){
        let validrepassword=true;
        $('#repasswordInput').keyup((event)=> { 
                    if(document.getElementById('passwordInput').value==event.target.value){
                        validrepassword=true;
                        $('#repasswordInput').attr('data-click', `${validrepassword}`);
                        this.disableBtn();
                        $('#repasswordAlert').addClass('d-none').removeClass('d-block');
                        // console.log('jsd');
                    }else{
                        validrepassword=false;
                        $('#repasswordAlert').addClass('d-block').removeClass('d-none');
                        $('#repasswordInput').attr('data-click', `${validrepassword}`);
                        this.disableBtn();
                        // console.log('ho');
                    }
        });
    }
}