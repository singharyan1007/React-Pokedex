import React from "react";
function About({pokemon}){
    const types=pokemon.types.map(({type})=>type.name).join(', ')
    console.log(types);

    const abilities=pokemon.abilities.map(({ability})=>{
        return ability.name.replace('-',' ');
    }).join(', ');
    console.log(abilities);

    const height=pokemon.height*10;
    console.log(height);

    const weight=pokemon.weight/10;
    console.log(weight);
    return(
        <div className="tab mh-[45vh] overflow-y-auto">
            <table className="w-full">
                <tr>
                    <td>Species</td>
                    <td>{types}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>{height} cm</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>{weight} kg</td>

                </tr>
                <tr>
                    <td>Abilities</td>
                    <td>{abilities}</td>
                </tr>
            </table>
        </div>
    )
}

export default About