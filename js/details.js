import { UI } from "./UI.js";
export class Details{
constructor(id) {
    // $("#btnClose").click( ()=> { 
    //     $(".game").removeClass("d-none");
    //     $("#details").addClass("d-none");
        
    // });
    this.getDataWithDetails(id)
}
getDataWithDetails(id){
    $( ()=> {
        $('.loadingInner').fadeOut(1000,()=>{
            $('body').css('overflow', 'visible');
            $('.loading').addClass('d-flex').removeClass('d-none');
                        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(response => response.json())
                .then(response => {new UI().displayDetails(response)
                document.querySelector('.loading').classList.replace("d-flex","d-none")
})
                .catch(err => console.error(err));
        });
    });


}
}