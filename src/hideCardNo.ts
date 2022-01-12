// A function to hide card no.

const card = str => str.replace(

    /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm, '#### #### ####'
);

card('1212 5678 0987 4521');