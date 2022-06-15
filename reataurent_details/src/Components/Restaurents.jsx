
export default function Restaurent({res}){
    return(
        <div>
            <div>
                <div>
                    <img src={res.url}/>
                </div>
                <div>
                    <h1>{res.name}</h1>
                    <h3>{cate(res.categories)}</h3>
                    <h3>{`Rs ${res.cost_of_one}`}</h3>
                    <h3>{`Accepts ${res.payment_methods.cash??"cash"}, ${res.payment_methods.card??"card"}, ${res.payment_methods.cash??"cash"} only`}</h3>
                </div>
            </div>
            <div></div>
        </div>
    )
}