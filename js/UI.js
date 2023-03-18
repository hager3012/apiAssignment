export class UI{
    constructor(params) {
        
    }
displayData(dataAPI){
    let cartona=``;
    for(let i=0;i<dataAPI.length&&i<20;i++){
        cartona+=`
        <div  class="col-md-3" id="${dataAPI[i].idMeal}">
        <div  class="meal position-relative overflow-hidden rounded-2 item-meal">
            <img class="w-100" src="${dataAPI[i].strMealThumb}" alt="image meal" >
            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                <h3>${dataAPI[i].strMeal}</h3>
            </div>
        </div>
</div>`;
    }
    document.getElementById('Data').innerHTML=cartona;
}
displayDataContact(){
    let cartona=`
    <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" data-click="false" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed 
                </div>
                <div id="nameAlertLength" class="alert alert-danger w-100 mt-2 d-none">
                    the max length 50 word
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" data-click="false" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" data-click="false" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" data-click="false"  type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" data-click="false" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input id="repasswordInput" data-click="false" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn"  class="btn btn-outline-danger px-2 mt-3 disabled">Submit</button>
    </div>
</div>`;
    document.getElementById('Data').innerHTML=cartona;
}
displayDataArea(dataAPI){
    let cartona=``;
    for(let i=0;i<dataAPI.length;i++){
        cartona+=`
        <div class="col-md-3 Area">
                <div id="itemArea" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${dataAPI[i].strArea}</h3>
                </div>
        </div>`;
    }
    document.getElementById('Data').innerHTML=cartona;
}
displayDataIngredients(dataAPI,Description){
    let cartona=``;
    for(let i=0;i<dataAPI.length;i++){
        let Description= `${dataAPI[i].strDescription}`.split(" ").slice(0, 20).join(" ");
        cartona+=`

 
        <div class="col-md-3 Ingredient">
                <div id="itemIngredient" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${dataAPI[i].strIngredient}</h3>
                        <p>${Description}</p>
                        
                </div>
        </div>
        `;
    }
    document.getElementById('Data').innerHTML=cartona;
}
displayDataCategories(dataAPI){
    let cartona=``;
    for(let i=0;i<dataAPI.length;i++){
        cartona+=`
        <div  class="col-md-3 Category" id="${dataAPI[i].idCategory}">
        <div  class="meal position-relative overflow-hidden rounded-2 item-meal">
            <img class="w-100" src="${dataAPI[i].strCategoryThumb}" alt="image meal" >
            <div class="meal-layer position-absolute d-flex flex-wrap justify-content-center align-items-center text-black p-2 text-center">
                <h3>${dataAPI[i].strCategory}</h3>
                <p>${dataAPI[i].strCategoryDescription.split(/\s+/).slice(0, 15).join(" ")}</p>
            </div>
        </div>
</div>`;
    }
    document.getElementById('Data').innerHTML=cartona;
}
displayDetails(dataAPI) {
    let ingredients = ``

    for (let i = 1; i <= 20; i++) {
        if (dataAPI.meals[0][`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${dataAPI.meals[0][`strMeasure${i}`]} ${dataAPI.meals[0][`strIngredient${i}`]}</li>`
        }
        // console.log(dataAPI.meals[0][`strIngredient${i}`]);
    }
    let tags=dataAPI.meals[0].strTags;
    let tagesword=``;
    if(tags){
        let tagessplit=tags.split(",");
        for(let i=0;i<tagessplit.length;i++){
            tagesword+=`
            <li class="alert alert-danger m-2 p-1">${tagessplit[i]}</li>
            `
        }
    }else{
            tags=[];
    }
    // console.log(tags);
    const cartona = `
    <div class="col-md-4">
                    <img class="w-100 rounded-3" src="${dataAPI.meals[0].strMealThumb}" alt="image meal">
                        <h2>${dataAPI.meals[0].strMeal}</h2>
                </div>
                <div class="col-md-8">
                <h2>Instructions</h2>
                
                <p>${dataAPI.meals[0].strInstructions}</p>
                                    <h3><span class="fw-bolder">Area : </span>${dataAPI.meals[0].strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${dataAPI.meals[0].strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${ingredients}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagesword}
        
                </ul>

                <a target="_blank" href="${dataAPI.meals[0].strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${dataAPI.meals[0].strYoutube}" class="btn btn-danger">Youtube</a>
            </div>
    
    `;
    document.getElementById('Data').innerHTML=cartona;
    // console.log(dataAPI);
}
}