function Item({name, isTrue}) {
  return (
    <li style={{listStyle:"inherit"}}>
      {name}
      {isTrue && "🪝"}
    </li>
  );
}

function PackingList() {
  return (
    <>
      <h1>Sally Ride's Packing List</h1>
      <section>
        <ul>
            <Item name="Space suit" isTrue={true} />
            <Item name="Gelmet with a golde leaf" isTrue={true} />
            <Item name="Photo of Tam" isTrue={false} />
        </ul>
      </section>
    </>
  );
}

export default PackingList;