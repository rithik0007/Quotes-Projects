let quotes = [{
        text: "Talk is Cheap, Show me the Code",
        author: "Linus Torvalds",
    },
    {
        text: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
        author: "Bill Gates",
    },
    {
        text: "Try not to become a man of success, but rather try to become a man of value",
        author: "Albert Einstein",
    },
    {
        text: "A Computer is like air condition - it becomes useless when you open Windows.",
        author: "Linus Torvalds",
    },
    {
        text: "Your Time is Limited. Don't Waste it Living Someone Else's Life.",
        author: "Steve Jobs",
    },
    {
        text: "When something is important enough, you do it even if the odds are not in your favor.",
        author: "Elon Musk",
    },
    {
        text: "Some people dreams of success... while others wake up and work hard at it.",
        author: "Linus Torvalds",
    },
    {
        text: "Success Consist of Going from many Failure to Failure without Loss of Enthusian.",
        author: "Winston Churchill",
    },
    {
        text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
        author: "Bill Gates"
    }
]

 let colors = ["#EA7773", "#E74292", "#1287A5", "#BB2CD9", "#8B78E6", "#2B2B52", "#6A89CC", "#30336B"];


// Variables

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quote_index;
let color_index;


// Run Event on Page Load --
window.addEventListener('load', function () {
      let random_quote_index = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random_quote_index].text;
    author.innerHTML = "- " + quotes[random_quote_index].author;
    quote_index = random_quote_index;
    let random_color_index = Math.floor(Math.random() * colors.length);
    document.documentElement.style.setProperty('--main-color', colors[random_color_index]);
    color_index = random_color_index;

    Animation();

});


let changeBtnClick = true;

function Change() {

    if (changeBtnClick) {
        quote_index++;
        color_index++;
        if (quote_index >= quotes.length)
            quote_index = 0;
        if (color_index >= colors.length)
            color_index = 0;
        quote.innerHTML = quotes[quote_index].text;
        author.innerHTML = "- " + quotes[quote_index].author;
        document.documentElement.style.setProperty('--main-color', colors[color_index]);

        Animation();
    }
}
function Animation() {
    changeBtnClick = false;
    $('.anim').fadeOut(1);
    $('.anim').removeClass('hidden');
    $('.anim').fadeIn(1000);
    setTimeout(function () {
        changeBtnClick = true;
    }, 1000);
}
