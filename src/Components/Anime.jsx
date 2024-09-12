import {Link} from "react-router-dom"

export default function Anime({anime}) {

  const {id,name,description} = anime
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
}

