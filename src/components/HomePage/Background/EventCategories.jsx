export default function EventCategories({types}) {
    console.log('hi');
    return (
        <>
        <div className="setLi">
            {types.map((e) => <li>{e}</li>)}
        </div>
        </>
    );
}