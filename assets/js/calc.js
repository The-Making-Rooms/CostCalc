//TMR Calculator engine. Uzair wuz here. 2021.


//constants for material costs
// Fixed Costs --- <100g --- 100g< <200g --- >200g
var material = "";
var volume = 0;
const FortusMaterials = ["nylon12","pc10","asanatural","absm30","1010cg"] ;  
const FortusMaterialsCost = {"nylon12":[29,1.20,0.90,0.60],"pc10":[27,1.20,0.90,0.60],"asanatural":[27,1.09,0.82,0.55],"absm30":[27,1.09,0.82,0.55],"1010cg":[32,1.91,1.43,0.96]}
const UltimakerMaterials = ["pla","abs"] ;  
const UltimakerMaterialsCost = {"abs":[20,0.12,0.09,0.06],"pla":[20,0.12,0.09,0.06]}
const FormlabsMaterials = ["draft","special","Dental-SG", "DentalLTClear", "Castable", "strong", "flexible"] ;  
const FormlabsMaterialsCost = {"draft":[25,0.71,0.53,0.36],"special":[25,0.98,0.73,0.49],"Dental SG":[25,1.35,1.01,0.68], "Dental LT Clear":[25,1.78,1.33,0.89],"castable":[25,1.25,0.93,0.62],"strong":[25,0.87,0.65,0.44],"flexible":[25,0.93,0.69,0.46]}

function CalculateFortus() {
    //Get Material
    material = "";
    cost = 0;
    var volume = document.getElementById("FortusvolumeInput").value;
    FortusMaterials.forEach(function (item, index) {
        selected = document.getElementById("pills-"+item+"-tab").getAttribute('aria-selected')
        if (selected == "true"){
            material = item;
        }
      });
    
    //Calculate cost
    if (volume <= 100) {
        cost = (FortusMaterialsCost[material][1] * volume) + FortusMaterialsCost[material][0]; //uses base rate for >100g * volume
        cost = cost.toFixed(2);
    }
    if (volume >= 100 && volume <= 200) {
        cost = (FortusMaterialsCost[material][1] * 100) + FortusMaterialsCost[material][0];//uses base rate for >100g * volume
        cost = (FortusMaterialsCost[material][2] * (volume-100)) + cost; //add rate for differance after 100 * volume
        console.log(cost);
        console.log("volume >= 100 && volume <= 200");
    }
    if (volume > 200) {
        cost = (FortusMaterialsCost[material][1] * 100) + FortusMaterialsCost[material][0]; //add rate for 100g * base rate
        cost = (FortusMaterialsCost[material][2] * 100) + cost;//add rate for 100g * mid rate
        cost = (FortusMaterialsCost[material][3] * (volume-200)) + cost; //add rate for differance after 200 * volume
        cost = cost.toFixed(2);
    }
    document.getElementById("fortus_finalcost").innerHTML = "£"+cost;
}

function CalculateUltimaker() {
    //Get Material
    material = "";
    cost = 0;
    
    UltimakerMaterials.forEach(function (item, index) {
        selected = document.getElementById("pills-"+item+"-tab").getAttribute('aria-selected')
        if (selected == "true"){
            material = item;
            console.log(volume);
        }
      });

    //Calculate cost
    var volume = document.getElementById("UltimakervolumeInput").value;
    if (volume <= 100) {
        cost = (UltimakerMaterialsCost[material][1] * volume) + UltimakerMaterialsCost[material][0]; 
        cost = cost.toFixed(2);
    }
    if (volume >= 100 && volume <= 200) {
        cost = (UltimakerMaterialsCost[material][1] * 100) + UltimakerMaterialsCost[material][0];
        cost = (UltimakerMaterialsCost[material][2] * (volume-100)) + cost;//add rate for differance after 100 * volume
        cost = cost.toFixed(2);
    }
    if (volume > 200) {
        cost = (UltimakerMaterialsCost[material][1] * 100) + UltimakerMaterialsCost[material][0]; 
        cost = (UltimakerMaterialsCost[material][2] * 100) + cost;//add rate for differance after 100 * volume
        cost = (UltimakerMaterialsCost[material][3] * (volume-200)) + cost; //add rate for differance after 200 * volume 
        cost = cost.toFixed(2);
    }
    document.getElementById("ultimaker_finalcost").innerHTML = "£"+cost;
}

function CalculateFormlabs() {
    //Get Material
    material = "";
    cost = 0;
    
    FormlabsMaterials.forEach(function (item, index) {
        console.log(item);
        selected = document.getElementById("pills-"+item+"-tab").getAttribute('aria-selected')
        console.log("pills-"+item+"-tab");
        if (selected == "true"){
            material = item;
            console.log(volume);
        }
        console.log('DONE')
      });

    //Calculate cost
    var volume = document.getElementById("FormlabsVolumeInput").value;
    if (volume <= 100) {
        cost = (FormlabsMaterialsCost[material][1] * volume) + FormlabsMaterialsCost[material][0]; 
        cost = cost.toFixed(2);
    }
    if (volume >= 100 && volume <= 200) {
        cost = (FormlabsMaterialsCost[material][1] * 100) + FormlabsMaterialsCost[material][0];
        cost = (FormlabsMaterialsCost[material][2] * (volume-100)) + cost;//add rate for differance after 100 * volume
        cost = cost.toFixed(2);
    }
    if (volume > 200) {
        cost = (FormlabsMaterialsCost[material][1] * 100) + FormlabsMaterialsCost[material][0]; 
        cost = (FormlabsMaterialsCost[material][2] * 100) + cost;//add rate for differance after 100 * volume
        cost = (FormlabsMaterialsCost[material][3] * (volume-200)) + cost; //add rate for differance after 200 * volume 
        cost = cost.toFixed(2);
    }
    document.getElementById("formlabs_finalcost").innerHTML = "£"+cost;
}
