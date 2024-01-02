let btn = document.querySelector('#new-quote');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');

const quotes = [
{ quote:'"That\'s one small step for a man, one giant leap for mankind."', 
  person:'Neil Armstrong'
},
{ quote: '"Early to bed and early to rise makes a man healthy, wealthy, and wise."',
  person:'Benjamin Franklin'
},
{ quote: '"The future belongs to those who believe in the beauty of their dreams."',
  person:'Eleanor Roosevelt'
},
{ quote: '"Wise men talk because they have something to say; fools, because they have to say something."',
person:'Plato'
},
{ quote: '"What lies behind us and what lies before us are tiny matters compared to what lies within us."',
person:'Ralph Warldo Emerson'
},
{ quote: '"A man who dares to waste one hour of time has not discovered the value of life."',
person:'Charles Darwin'
},
{ quote: '"Continuous effort - not strength or intelligence - is the key to unlocking our potential."',
person:'Winston Churchill'
},
{ quote: '"Sing like no one\'s listening, love like you’ve never been hurt, dance like nobody\'s watching, and live like it\'s heaven on earth."',
person:'Mark Twain'
},
{ quote: '"Once you’ve accepted your flaws, no one can use them against you."',
person:'George R. R. Martin'
},
{ quote: '"Our deepest fear is not that we are inadequate, Our deepest fear is that we are powerful beyond measure"',
person:'Dr. LaraBee'
},
{ quote: '"Your world is a living expression of how you are using and have used your mind."',
person:'Earl Nightingale'
},
{ quote: '"Go confidently in the direction of your dreams. Live the life you have imagined."',
person:'Henry David Thoroeau'
},
{ quote: '"I have not failed. I\'ve just found 10,000 ways that won\'t work."',
person:'Thomas Edison'
},
{ quote: '"Motivation is what gets you started. Habit is what keeps you going"',
person:'Jim Rohn'
},
]

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}
)






