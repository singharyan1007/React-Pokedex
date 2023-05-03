import generations from './data/generation'


export const normaliseEvolutionChain=(evolution)=>{
    if(evolution.evolves_to.length){
        return [];
        //checks if the evolves_to property of the evolution object is an empty array. If it is then the function immediately returns an empty array
    }
    const triggersDisplayName={
        'level-up':'Lv1',
        trade:'Trade',
        'use-item':'Use',
    };
    const extractId=(url)=>url.match(/\/(\d+)\//)[1];
    //helper function which extracts id from the url string


    //This uses the reduce() method to iterate over each evolution in the evolves_to array of the evolution object. For each evolution, it creates an object that contains information about the current and next Pokémon, including their IDs, names, and images.
    return evolution.evolves_to.reduce((carry,nextEvolution)=>{
        const details=nextEvolution.evolution_details[0];
        console.log(details);
        currentId=extractId(evolution.species.url);
        console.log(currentId);
        nextId=extractId(nextEvolution.species.url);
        console.log(nextId);
        carry.push({
            currentId,
            nextId,
            currentName:evolution.species.name,
            nextName:nextEvolution.species.name,
            currentImage:getImageURL(currentId),
            nextImage:getImageUrl(nextId),
            trigger: triggersDisplayName[ details.trigger.name ],
			triggerValue: details.min_level || details.min_happiness || details.item?.name.replace( '-', ' ' ) || '',
        })
        console.log(carry);
        console.log(trigger);
        console.log(triggerValue);

        carry.push(...normaliseEvolutionChain(nextEvolution));
        console.log(carry);

        return carry;


    },[]);
}


//Pokemon Image by Id

export const getImageUrl=(pokemonId)=>{
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other';

    // Has only PNG.
    // For 6th generation the ID is more than and equal to 650, and the images are in PNG format
	if ( parseInt( pokemonId ) >= 650 ) {
		return `${ baseURL }/official-artwork/${ pokemonId }.png`;
	}

	// Has SVG.
    // For the generation lesser te images are in SVG format

	return `${ baseURL }/dream-world/${ pokemonId }.svg`;
}

export const getGenerationByPokemonId = ( id ) => {
	return generations.find( ( { offset, limit } ) => {
		const firstId = offset + 1;
		const lastId = firstId + limit;

		return id >= firstId && id <= lastId;
	} );
};