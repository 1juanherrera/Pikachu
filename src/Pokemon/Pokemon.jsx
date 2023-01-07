



const Pokemon = ({ data }) => {
    return (
        <article>
            <div className="avatar">
                <img src={data.sprites?.other['official-artwork'].front_default} />
            </div>
            <div>
                <h2>{data.name}</h2>
                <h2><span>Type:</span> {data.types?.[0].type.name}</h2>
                <h2><span>Exp:</span> {data.base_experience}</h2>
            </div>
        </article>
    )
}

export default Pokemon