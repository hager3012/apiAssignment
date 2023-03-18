import { UI } from "./UI.js";
import { Details } from './details.js';
export class Search{
    constructor() {
        $('#SearchBtn').click(()=> { 
        
            let cartona=`
            <div class="row py-4 search">
                <div class="col-md-6 ">
                    <input id="inputNameSearch" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
                </div>
                <div class="col-md-6">
                    <input id="inputLetterSearch" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
                </div>
            </div>`;
            document.getElementById('searchContainer').innerHTML=cartona;
            document.getElementById('Data').innerHTML="";
            this.getTermSearch();
                })
            
        
        }
        getTermSearch(){
            $('#inputNameSearch').click(() =>{ 
                if(document.getElementById("inputNameSearch")){
                    document.getElementById("inputNameSearch").addEventListener('keyup',targetInfo=>{
                        this.getApiSearchByName(targetInfo.target.value)
                        
                    });
            }
            });
            $('#inputLetterSearch').click(()=> { 
                if(document.getElementById("inputLetterSearch")){
                    document.getElementById("inputLetterSearch").addEventListener('keyup',targetInfo=>{
                        this.getApiSearchByLetter(targetInfo.target.value)
                        
                    });
            }
            });
            
    }
    async getApiSearchByName(term){
        let letWidth = $(".nav-side .nav-tab").outerWidth()
    $(".nav-side ").animate({
        left: -letWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
    document.getElementById('Data').innerHTML="";
        $('.loadingInner').addClass('d-flex').removeClass('d-none');
                let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
                let result=await response.json();
                if(result.meals){
                    new UI().displayData(result.meals)

                }else{
                    new UI().displayData([])
                }
                this.currentelement();
            $('.loadingInner').addClass('d-none').removeClass('d-flex');
            // console.log(result);
    }
    async getApiSearchByLetter(term){
        let letWidth = $(".nav-side .nav-tab").outerWidth()
    $(".nav-side ").animate({
        left: -letWidth
    }, 500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 300
    }, 500)
    document.getElementById('Data').innerHTML="";
        $('.loadingInner').addClass('d-flex').removeClass('d-none');
                if(term==''){
                    term='a';
                }
                let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`);
                let result=await response.json();
                if(result.meals){
                    new UI().displayData(result.meals)

                }else{
                    new UI().displayData([])
                }
                this.currentelement();
            $('.loadingInner').addClass('d-none').removeClass('d-flex');
            // console.log(result);
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

