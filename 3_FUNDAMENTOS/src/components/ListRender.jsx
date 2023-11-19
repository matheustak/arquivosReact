import {useStates} from "react";

const ListRender = () => {
 const[list] = useStates(["Matheus","Pedro","Josias","Maria"]);
 
    return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  );
};

export default ListRender;