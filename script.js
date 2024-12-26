document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".About");
    const resumeSection = document.querySelector(".Resume");
    const projectsSection = document.querySelector(".Projects");
    const projectTextColor = document.getElementById("colorChangingText");
    const cardBackgroundColor = document.querySelectorAll(".card");

    const homeNameColor = document.querySelector(".Home_name");

    homeNameColor.addEventListener('mousemove', (event) => {
        const boundingBox = homeNameColor.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const width = boundingBox.width;
        const height = boundingBox.height;
        console.log(`bot: ${boundingBox.bottom}px, Width: ${boundingBox.width}px, Height: ${boundingBox.height}px`);
        console.log(`MouseX,MouseY ${mouseX},${mouseY}`);

        // Calculate the percentage of mouse position within the text container
        const percentage = Math.round((mouseX / width) * 100);
        // console.log(`percentage: ${percentage}`);

        // if (mouseY >= height - 100) {
        // }

        homeNameColor.style.cssText =`    background: rgb(249,245,255) linear-gradient(90deg, rgba(249,245,255,1) 0%, rgba(233,217,255,1) ${percentage}%, rgba(211,177,255,1) 100%);
` +
            "    -webkit-background-clip: text;\n" +
            "    background-clip: text;\n" +
            "    color: transparent;\n";
        // console.log(homeNameColor.style.background);


    });
        const windowHeight = window.innerHeight;

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const aboutOffset = aboutSection.offsetTop;
        const resumeOffset = resumeSection.offsetTop;

        const desiredScrollRange = 10000;
        const aboutFactor = Math.max(7,35-((scrollPosition - aboutOffset + windowHeight) / (desiredScrollRange))*230);
        const resumeFactor = Math.max(7,(scrollPosition*0.75 - resumeOffset + windowHeight) / (desiredScrollRange)*250);

        console.log(`scroll: ${scrollPosition}`)
        console.log(`about/resume factors: ${aboutFactor}/${resumeFactor}`)

        if (400 <= scrollPosition <= 1600){
            const aboutColor = `hsl(0,0%,${aboutFactor}%)`;
            aboutSection.style.backgroundColor = aboutColor;
        }
        if (resumeFactor<=100 && (2600 <= scrollPosition <= 3200)){
            const resumeColor = `hsl(0,0%,${resumeFactor}%)`;
            const textColor = `hsl(0,0%,${Math.max(40,70-resumeFactor)}%)`;
            const cardColor = `hsl(0,0%,${Math.max(40,70-resumeFactor)}%)`;
            projectTextColor.style.color = textColor;
            cardBackgroundColor.forEach(function(card){
                card.style.backgroundColor = cardColor;
            });
            resumeSection.style.backgroundColor = resumeColor;
            projectsSection.style.backgroundColor = resumeColor;
        }
        if (3200 <= scrollPosition){
            const resumeColor = `hsl(0,0%,${Math.min(80.5,resumeFactor*2.3)}%)`;
            const textColor = `hsl(0,0%,${Math.max(12,60-resumeFactor*1.6)}%)`;
            const cardColor = `hsl(0,0%,${Math.max(30,60-resumeFactor*1.6)}%)`;
            cardBackgroundColor.forEach(function(card){
                card.style.backgroundColor = cardColor;
            });
            projectTextColor.style.color = textColor;
            resumeSection.style.backgroundColor = resumeColor;
            projectsSection.style.backgroundColor = resumeColor;
        }




    });
});