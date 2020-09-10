function price(lang) {
    const from = document.getElementById(`from`).value;
    const where = document.getElementById(`where`).value;
    if (lang == `en`) {
        if (from != where) {
            if ((from == `tbilisi` && where == `kutaisi`) || (from == `kutaisi` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "Price : 14 Gel";

            if ((from == `tbilisi` && where == `batumi`) || (from == `batumi` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "Price : 24 Gel";

            if ((from == `tbilisi` && where == `kobuleti`) || (from == `kobuleti` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "Price : 20 Gel";

            if ((from == `kutaisi` && where == `batumi`) || (from == `batumi` && where == `kutaisi`))
                document.getElementById(`price`).innerText = "Price : 14 Gel";

            if ((from == `kutaisi` && where == `kobuleti`) || (from == `kobuleti` && where == `kutaisi`))
                document.getElementById(`price`).innerText = "Price : 10 Gel";

            if ((from == `batumi` && where == `kobuleti`) || (from == `kobuleti` && where == `batumi`))
                document.getElementById(`price`).innerText = "Price : 4 Gel";
        } else {
            document.getElementById(`price`).innerText = "You chose same cities";
        }
    }

    if(lang==`rus`){
        if (from != where) {
            if ((from == `tbilisi` && where == `kutaisi`) || (from == `kutaisi` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "цена : 14 Гель";
    
            if ((from == `tbilisi` && where == `batumi`) || (from == `batumi` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "цена : 24 Гель";
    
            if ((from == `tbilisi` && where == `kobuleti`) || (from == `kobuleti` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "цена : 20 Гель";
    
            if ((from == `kutaisi` && where == `batumi`) || (from == `batumi` && where == `kutaisi`))
                document.getElementById(`price`).innerText = "цена : 14 Гель";
    
            if ((from == `kutaisi` && where == `kobuleti`) || (from == `kobuleti` && where == `kutaisi`))
                document.getElementById(`price`).innerText = "цена : 10 Гель";
    
            if ((from == `batumi` && where == `kobuleti`) || (from == `kobuleti` && where == `batumi`))
                document.getElementById(`price`).innerText = "цена : 4 Гель";
        } else {
            document.getElementById(`price`).innerText = "Выберите другой город";
        }
    }
    if(lang==`ge`){
        if (from != where) {
            if ((from == `tbilisi` && where == `kutaisi`) || (from == `kutaisi` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "ფასი : 14 ლარი";
    
            if ((from == `tbilisi` && where == `batumi`) || (from == `batumi` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "ფასი : 24 ლარი";
    
            if ((from == `tbilisi` && where == `kobuleti`) || (from == `kobuleti` && where == `tbilisi`))
                document.getElementById(`price`).innerText = "ფასი : 20 ლარი";
    
            if ((from == `kutaisi` && where == `batumi`) || (from == `batumi` && where == `kutaisi`))
                document.getElementById(`price`).innerText = "ფასი : 14 ლარი";
    
            if ((from == `kutaisi` && where == `kobuleti`) || (from == `kobuleti` && where == `kutaisi`))
                document.getElementById(`price`).innerText = "ფასი : 10 ლარი";
    
            if ((from == `batumi` && where == `kobuleti`) || (from == `kobuleti` && where == `batumi`))
                document.getElementById(`price`).innerText = "ფასი : 4 ლარი";
        } else {
            document.getElementById(`price`).innerText = "აირჩიეთ სხვადასხვა ქალაქი";
        }
    }
}