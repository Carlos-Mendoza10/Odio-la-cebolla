import React from "react";
function OnionHater () {

    const handleChange = (evn) => {
        let texto = evn.target.value.toLowerCase();
        texto.includes('cebolla') ? alert ('ODIO LA CEBOLLA') :texto.includes('cebolla');
    }

    return(
        <div>
            <input type="textarea"  onChange = {handleChange} />       
        </div>
    );
}
    
export default OnionHater;