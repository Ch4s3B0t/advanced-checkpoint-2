import React from "react";

function ListOfSwords(props) {
    /* const props = {swords:[{
        name: "Feder",
        length: 40,
        origin: "German"
    }]}
    */
    const swordDivs = props.swords.map(function(swords){
        return <div>{swords.name} - {swords.length} - {swords.origin}</div>
    });

    return (<div>
        {swordDivs}
    </div>);
}

export default ListOfSwords;