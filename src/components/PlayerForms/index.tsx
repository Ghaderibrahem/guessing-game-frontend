import Welcome from "./Welcome";
import PlayerInputs from "./PlayerInputs";
import { useAppContext } from "@/utils/contextProviders";

const PlayerForms = () => {
  const { playerName }: any = useAppContext();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      {playerName ? <PlayerInputs /> : <Welcome />}
    </div>
  );
};

export default PlayerForms;
