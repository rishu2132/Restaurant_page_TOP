export function aboutPage(){
    const content = document.querySelector("#content");

    const para1 = document.createElement('p');
    para1.textContent="Email: abc@123.xyz";
    content.appendChild(para1);

    const para2 = document.createElement('p');
    para2.textContent="Phone NO: 9876012345";
    content.appendChild(para2);

    const para3 = document.createElement('p');
    para3.textContent="Address: Tullu Campus, Club Road, Above PNB Bank, beside Big Bazaar, Mithanpura, Muzaffarpur, Bihar 842002, India. ";
    content.appendChild(para3);
}