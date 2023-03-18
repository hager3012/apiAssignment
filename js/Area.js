import { UI } from "./UI.js";
import { Details } from "./details.js";
export class Area{
    constructor(params) {
        $('#AreaBtn').click(()=> { 
            $('.search').remove();
            this.getArea();
        });
    }
    async getArea(){
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
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        let result=await response.json();
        new UI().displayDataArea(result.meals)
        // console.log(result);
        this.currentArea();
        $('.loading').addClass('d-none').removeClass('d-flex');
    }
    currentArea(){
        const item=document.querySelectorAll('.Area');
        for(let i=0;i<item.length;i++){
            item[i].addEventListener(('click'),()=>{
                    const categoryName=item[i].querySelector('#itemArea h3').textContent;
                    // console.log(categoryName);
                    this.getApiArea(categoryName);
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
async getApiArea(Area){
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
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`);
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