const landingPage = document.getElementById("landingPage");
const formPage = document.getElementById("formPage");
const startBtn = document.getElementById("startBtn");

const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".nextBtn");
const prevBtns = document.querySelectorAll(".prevBtn");

const progressBar = document.getElementById("progressBar");
const stepNumber = document.getElementById("stepNumber");

let currentStep = 0;

if(startBtn){

    startBtn.addEventListener("click",()=>{

        landingPage.style.display="none";

        formPage.classList.remove("hidden");

        showStep(0);

    });

}

function showStep(index){

    steps.forEach(step=>step.classList.remove("active"));

    steps[index].classList.add("active");

    stepNumber.textContent=index+1;

    progressBar.style.width=((index+1)/steps.length)*100+"%";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

nextBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(validateStep(currentStep)){

            currentStep++;

            showStep(currentStep);

        }

    });

});

prevBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentStep>0){

            currentStep--;

            showStep(currentStep);

        }

    });

});

function validateStep(stepIndex){

    const current=steps[stepIndex];

    const fields=current.querySelectorAll("input, select");

    let valid=true;

    fields.forEach(field=>{

        if(field.value===""){

            field.style.border="2px solid red";

            valid=false;

        }
        else{

            field.style.border="1px solid #ccc";

        }

    });

    if(!valid){

        alert("Please complete all required fields.");

    }

    return valid;

}
const age=document.getElementById("age");
const under30=document.getElementById("under30");
const seniorCitizen=document.getElementById("seniorCitizen");

if(age){

    age.addEventListener("input",()=>{

        const value=parseInt(age.value);

        if(isNaN(value)){

            under30.value="";
            seniorCitizen.value="";
            return;

        }

        under30.value=value<30?"Yes":"No";

        seniorCitizen.value=value>=65?"Yes":"No";

    });

}

const dependents=document.getElementById("dependents");
const dependentsCount=document.getElementById("dependentsCount");

if(dependents){

    dependents.addEventListener("change",()=>{

        if(dependents.value==="Yes"){

    if(dependentsCount.value==="0"){

        dependentsCount.value="1";

    }

    dependentsCount.removeAttribute("readonly");

}else{

    dependentsCount.value="0";

    dependentsCount.setAttribute("readonly",true);

}

    });

}

const referredFriend=document.getElementById("referredFriend");
const referralCount=document.getElementById("referralCount");

if(referredFriend){

    referredFriend.addEventListener("change",()=>{

        if(referredFriend.value==="Yes"){

    if(referralCount.value==="0"){

        referralCount.value="1";

    }

    referralCount.removeAttribute("readonly");

}else{

    referralCount.value="0";

    referralCount.setAttribute("readonly",true);

}

    });

}
const phoneService=document.getElementById("phoneService");
const multipleLines=document.getElementById("multipleLines");

if(phoneService){

    phoneService.addEventListener("change",()=>{

        if(phoneService.value==="No"){

            multipleLines.value="No Phone Service";

        }else{

            if(multipleLines.value==="No Phone Service"){

                multipleLines.value="";

            }

        }

    });

}

const internetService=document.getElementById("internetService");
const internetType=document.getElementById("internetType");
const gbDownload=document.getElementById("gbDownload");

const onlineSecurity=document.getElementById("onlineSecurity");
const onlineBackup=document.getElementById("onlineBackup");
const deviceProtection=document.getElementById("deviceProtection");
const premiumSupport=document.getElementById("premiumSupport");
const streamingTV=document.getElementById("streamingTV");
const streamingMovies=document.getElementById("streamingMovies");
const streamingMusic=document.getElementById("streamingMusic");

if(internetService){

    internetService.addEventListener("change",()=>{

        if(internetService.value==="No"){

            internetType.value="No Internet";

            gbDownload.value="0";

            onlineSecurity.value="No Internet Service";
            onlineBackup.value="No Internet Service";
            deviceProtection.value="No Internet Service";
            premiumSupport.value="No Internet Service";
            streamingTV.value="No Internet Service";
            streamingMovies.value="No Internet Service";
            streamingMusic.value="No Internet Service";

        }else{

            if(internetType.value==="No Internet")
                internetType.value="";

            if(onlineSecurity.value==="No Internet Service")
                onlineSecurity.value="";

            if(onlineBackup.value==="No Internet Service")
                onlineBackup.value="";

            if(deviceProtection.value==="No Internet Service")
                deviceProtection.value="";

            if(premiumSupport.value==="No Internet Service")
                premiumSupport.value="";

            if(streamingTV.value==="No Internet Service")
                streamingTV.value="";

            if(streamingMovies.value==="No Internet Service")
                streamingMovies.value="";

            if(streamingMusic.value==="No Internet Service")
                streamingMusic.value="";
        }

    });

}

document.querySelectorAll("input,select").forEach(field=>{

    field.addEventListener("input",()=>{

        field.style.border="1px solid #ccc";

    });

    field.addEventListener("change",()=>{

        field.style.border="1px solid #ccc";

    });

});

const predictionForm=document.getElementById("predictionForm");

if(predictionForm){

    predictionForm.addEventListener("submit",()=>{

        const btn=document.querySelector(".predictBtn");

        if(btn){

            btn.disabled=true;

            btn.innerHTML="Predicting...";

        }

    });

}

const resetBtn=document.getElementById("resetBtn");

if(resetBtn){

    resetBtn.addEventListener("click",()=>{

        window.location.href="/";

    });

}
