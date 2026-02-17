export function menuPage(){
    const content = document.querySelector("#content");

    const list = document.createElement("ul");

    const items = ['chicken biryani - ₹119','mutton-biryani - ₹149','aloo-dum biryani - ₹80','chicken-leg - ₹ 60', 'raita - ₹20 ', 'water - as per MRP'];

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent= item;
        list.appendChild(listItem);
    });

    content.appendChild(list);
}