export default function Details({ friend = {} }) {
  console.log(friend);
  const { name, email } = friend;

  return (
    <div className="post">
      <h4>Name:{name}</h4>

      <p>Email:{email}</p>
    </div>
  );
}
