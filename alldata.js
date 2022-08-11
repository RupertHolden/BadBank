function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      {ctx.users.map((ctx, i) => (
        <Card
          key={i}
          bgcolor="secondary"
          txtcolor="black"
          header={'Account information for: ' +  ctx.name}
          title={"Balance: $" + ctx.balance}
          text={"Email: " + ctx.email}
          body={"Password: " + ctx.password}
        />
      ))}
    </>
  );
}
