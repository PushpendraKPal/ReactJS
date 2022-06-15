
export default function Restaurent({res}){
    const cate= (cat)=>{
        let s = "";
        cat.forEach(e=>{
            s = s+" "+e;
        })
        return s
    };

    const ratings=(x)=>{
        return x/5
    }
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
                    <h3>{`Accepts ${res.payment_methods.cash?"cash":""}, ${res.payment_methods.card?"card":""}, ${res.payment_methods.cash?"online":""} payments only`}</h3>
                </div>
                <div>
                    <h2>{res.ratig}</h2>
                    <h4>{`${res.total_votes} votes`}</h4>
                </div>
            </div>
            <div></div>
        </div>
    )
}