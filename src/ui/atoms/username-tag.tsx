const UsernameTag = ({ username }: { username: string }) => {
  return (
    <a href={`https://instagram.com/${username}`} className="hover:underline">
      {`@${username}`}
    </a>
  );
};

export default UsernameTag;
