const Region = ({ setRegion }) => {
  return (
    <>
      <div onClick={() => setRegion("")}>all</div>
      <div onClick={() => setRegion("africa")}>africa</div>
      <div onClick={() => setRegion("americas")}>america</div>
      <div onClick={() => setRegion("asia")}>asia</div>
      <div onClick={() => setRegion("europe")}>europe</div>
      <div onClick={() => setRegion("oceania")}>oceania</div>
    </>
  );
};

export default Region;
