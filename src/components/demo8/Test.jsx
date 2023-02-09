 function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar(person,size){
    return(
        <div>
            <img src={getImageUrl(person)} alt={person.name} width={size} height={size} />
        </div>
    )
}

function Card({children}){
    return(
        <>
            {children}
        </>
    )
}


export default function Home(){
    return(
        <div>
            <Card>
                <Avatar size={100} person={{imageId: 'YfeOqp2',name:"Katsuko Saruhashi"}}/>
            </Card>
        </div>
    )
}