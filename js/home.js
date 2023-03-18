import { UI } from './UI.js';
import { Details } from './details.js';
import { Search } from './search.js';
import { Categories } from './Categories.js';
import { Area } from './Area.js';
import { Ingredients } from './Ingredients.js';
import { Contact } from './contact.js';
export class Home{
    constructor(){
        $(document).ready( ()=> {
            $(".loading").fadeOut(500,()=>{
                $('body').css('overflow', 'visible');
                $('.loading').addClass('d-none').removeClass('d-flex');
                this.getMeal();
                document.querySelector('.nav-side').classList.replace("d-none","d-flex");
                $('.open-close-icon').click(()=> { 
                    let leftWidth=$('.nav-side').innerWidth()-$('.nav-header').innerWidth();
                    if($('.nav-side').css('left')=='0px'){
                        $('.nav-side').animate({left:-leftWidth},500);
                        $('.open-close-icon').removeClass('fa-x');
                        $(".links li").animate({
                            top: 300
                        }, 500)
        
                    }else{
                        $('.nav-side').animate({left:'0px'},500);
                        $('.open-close-icon').addClass('fa-x');
                        $(".links").find("li").each(function(i) {
                            $(this).animate({top:0},(i+5)*100)
                        });
                    }
                });
                new Search();
                new Categories();
                new Area();
                new Ingredients();
                new Contact();
            })
            
        });
        
    }
async getMeal(){
            let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
            let result=await response.json();
            new UI().displayData(result.meals)
            this.currentelement();
    }
    currentelement(){
            const item=document.querySelectorAll('.col-md-3');
            for(let i=0;i<item.length;i++){
                item[i].addEventListener(('click'),()=>{
                        const id=item[i].id;
                        // console.log(id);
                        this.showDetails(id);
                })
            }
    }
    showDetails(id){
        new Details(id)
    }
}