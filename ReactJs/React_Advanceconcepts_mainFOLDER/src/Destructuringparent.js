/*
Overall concept:-
•	Using prop de-structuring, we can smoothly send the props and receive them in the component.
•	When we send any object data using props, we can generally send individual information; if we need to send entire object information using props, we have to prefer the spread operator in the parent component.
•	Ex: <Component {…product} />
•	Generally, we can receive the props in the child component using any one standard variable, and then we have to show the information using props. property, but which data we have to offer we can pass as an argument in the component, either functional or class.
•	Ex: function childComponent ({id,name,email}) {}
•	We can maintain it easily, which improves readability using this concept.

*/
import Destructuringchild from "./Destructuringchild"

function Destructuringparent(){

    let product={
        name:'laptop',
        price:25000,
        generation:'8th',
        company:'Dell'
    }

    return(
            <Destructuringchild   {...product}/>   //its easy apporoach
    )

}

export default Destructuringparent