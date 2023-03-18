import { UI } from "./UI.js";
import { Details } from "./details.js";
export class Categories{
    constructor(params) {
        $('#CategoriesBtn').click(()=> { 
            $('.search').remove();
            this.getCategories();
        });
    }
    async getCategories(){
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
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let result=await response.json();
        new UI().displayDataCategories(result.categories)
        // console.log(result);
        this.currentCategoryt();
        $('.loading').addClass('d-none').removeClass('d-flex');
    }
    currentCategoryt(){
        const item=document.querySelectorAll('.Category');
        for(let i=0;i<item.length;i++){
            item[i].addEventListener(('click'),()=>{
                    const categoryName=item[i].querySelector('.meal-layer h3').textContent;
                    // console.log(categoryName);
                    this.getApicategory(categoryName);
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
async getApicategory(category){
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
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
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