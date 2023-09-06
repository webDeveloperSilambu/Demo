var skills_Items = document.querySelector('.skills_Items');
var about_Items = document.querySelector('.listItems');
var experiance_Items = document.querySelector('.experiance_Items');
var service_Items = document.querySelector('.service_Contents');
var contact_Items = document.querySelector('.contact_Items');


const skillsItemsList = [
    {
        programName  :"HTML",
        percent : "100%"
    },
    {
        programName  :"CSS",
        percent : "90%"
    },
    {
        programName  :"JAVASCRIPT",
        percent : "80%"
    },
    {
        programName  :"NODE JS",
        percent : "60%"
    },
    {
        programName  :"MONGO DB",
        percent : "50%"
    }

];

const aboutItemsList = [
    {
        date:"2021-2024",
        degree : "Master of B.Tech-IT",
        para : `Lorem, ipsum dolor sit amet consectetur adipisicing elit,
        Cumque quam sequi aliquid officia autem tempore aperiam necessitatibus rerum eligendi
         omnis tenetur nisi illum minima dolores exercitationem amet, saepe, est expedita?`
    },
    {
        date:"2021-2024",
        degree : "Master of B.Tech-IT",
        para : `Lorem, ipsum dolor sit amet consectetur adipisicing elit,
        Cumque quam sequi aliquid officia autem tempore aperiam necessitatibus rerum eligendi
         omnis tenetur nisi illum minima dolores exercitationem amet, saepe, est expedita?`
    },
    {
        date:"2021-2024",
        degree : "Master of B.Tech-IT",
        para : `Lorem, ipsum dolor sit amet consectetur adipisicing elit,
        Cumque quam sequi aliquid officia autem tempore aperiam necessitatibus rerum eligendi
         omnis tenetur nisi illum minima dolores exercitationem amet, saepe, est expedita?`
    },
    {
        date:" 2021-2024",
        degree : "Master of B.Tech-IT",
        para : `Lorem, ipsum dolor sit amet consectetur adipisicing elit,
        Cumque quam sequi aliquid officia autem tempore aperiam necessitatibus rerum eligendi
         omnis tenetur nisi illum minima dolores exercitationem amet, saepe, est expedita?`
    }
];


const serviceItemsList = [
    {
        icon:`<i class="fa-solid fa-mobile-screen-button"></i>`,
        service : "web design",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo animi?"
    },
    {
        icon:`<i class="fa-solid fa-laptop-code"></i>`,
        service : "web design",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo animi?"
    },
    {
        icon:`<i class="fa-solid fa-palette"></i>`,
        service : "web design",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo animi?"
    },
    {
        icon:`<i class="fa-solid fa-code"></i>`,
        service : "web design",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo animi?"
    },
    {
        icon:`<i class="fa-solid fa-magnifying-glass"></i>`,
        service : "web design",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo animi?"
    },
    {
        icon:`<i class="fa-solid fa-mobile-screen-button"></i>`,
        service : "web design",
        para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo animi?"
    }
];


const contactItemsList = [
    {
        icon:`<i class="fa-solid fa-phone-flip"></i>`,
        title:"call us on",
        location:"+91 123-456-7890"
    },
    {
        icon:`<i class="fa-solid fa-location-dot"></i>`,
        title:"Office",
        location:"Tollgate,Nattrampalli"
    },
    {
        icon:`<i class="fa-solid fa-envelope"></i>`,
        title:"Email",
        location:"silambu@gmail.com"
    },
    {
        icon:`<i class="fa-solid fa-compact-disc"></i>`,
        title:"Website",
        location:"portfolio.netlify.app"
    }
]


for(let i=0;i<skillsItemsList.length;i++){
    skills_Items.innerHTML += `
    <li>
    <p><label for="">${skillsItemsList[i].programName}</label><label for="">${skillsItemsList[i].percent}</label></p>
    <div class="skill_Range"><div class="skill" style="width:${skillsItemsList[i].percent}"></div></div>
    </li>
    `
};


for(let i=0;i<aboutItemsList.length;i++){
    about_Items.innerHTML += `
    <li>
        <div class="dateInfo">
            <p>
                <i class="fa-solid fa-briefcase"></i>  ${aboutItemsList[i].date}
            </p>
        </div>
        <div>
            <h4>${aboutItemsList[i].degree}</h4>
             <p>${aboutItemsList[i].para}</p>
        </div>
    </li>
    `
};

for(let j=0;j<aboutItemsList.length;j++){
    experiance_Items.innerHTML += `
    <li>
    <div class="dateInfo">
        <p>
            <i class="fa-solid fa-briefcase"></i> ${aboutItemsList[j].date}
        </p>
    </div>
    <div>
        <h4>${aboutItemsList[j].degree}</h4>
         <p>${aboutItemsList[j].para}</p>
    </div>
</li>
     `
};


for(let i=0;i<serviceItemsList.length;i++){
    service_Items.innerHTML += `
    <div class="service_item">
        <button>${serviceItemsList[i].icon}</button>
        <h4>${serviceItemsList[i].service}</h4>
        <p>${serviceItemsList[i].para}</p>
    </div>
    `
};

for(let i=0;i<contactItemsList.length;i++){
    contact_Items.innerHTML += `
    <div class="item">
        ${contactItemsList[i].icon}
        <h4>${contactItemsList[i].title}</h4>
        <p>${contactItemsList[i].location}</p>
    </div>
    `
};

