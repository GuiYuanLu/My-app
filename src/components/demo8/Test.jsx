function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

function Avatar(person, size) {
  return (
    <div>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}

function Card({ children }) {
  return <>{children}</>;
}

export function Clock({ time }) {
  let hours = time.getHours();
  let className = time.getHours() <= 6 ? 'night' : 'day';
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}

export default function Home() {
  return (
    <div>
      <Card>
        <Avatar
          size={100}
          person={{ imageId: "YfeOqp2", name: "Katsuko Saruhashi" }}
        />
      </Card>
    </div>
  );
}
