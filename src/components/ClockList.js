import Clock from "./Clock";

function ClockList( {quantities = []} ){ // props
    return (
        <div>
            {quantities.map((key) => (<Clock key={key} />))}
        </div>
    );
}

export default ClockList;