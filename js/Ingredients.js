import { UI } from "./UI.js";
import { Details } from "./details.js";
export class Ingredients{
    constructor(params) {
        $('#IngredientBtn').click(()=> { 
            $('.search').remove();
            this.getIngredient();
        });
    }
    async getIngredient(){
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
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let result=await response.json();
        new UI().displayDataIngredients(result.meals)
        // console.log(result);
        this.currentIngredient();
        $('.loading').addClass('d-none').removeClass('d-flex');
    }
    currentIngredient(){
        const item=document.querySelectorAll('.Ingredient');
        for(let i=0;i<item.length;i++){
            item[i].addEventListener(('click'),()=>{
                    const IngredientName=item[i].querySelector('#itemIngredient h3').textContent;
                    // console.log(IngredientName);
                    this.getApiIngredient(IngredientName);
            })
        }
}
currentelement(){
    const item=document.querySelectorAll('.col-md-3');
    for(let i=0;i<item.length;i++){
        item[i].addEventListener(('click'),()=>{
                const categoryId=item[i].id;
                // console.log(categoryId);
                this.showDetails(categoryId);
        })    
    }
}
async getApiIngredient(Ingredient){
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
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`);
        let result=await response.json();
        new UI().displayData(result.meals);
        this.currentelement();
        $('.loading').addClass('d-none').removeClass('d-flex');
        // console.log(result);
}
showDetails(id){
    new Details(id)
}
}