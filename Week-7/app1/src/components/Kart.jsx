function Kart({baslik, foto}) {
    return(
        <>
        <div className="col-sm-3 mb-4">
            <div className="card" style={{width : "100%"}}>
                <img src={`https://lipsum.app/id/${foto}/300x200`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{baslik}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum?</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </>
    )
}

export {Kart}