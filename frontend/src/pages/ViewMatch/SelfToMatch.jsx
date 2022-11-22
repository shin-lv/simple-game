import { AdminInfos, BlankInfos } from "../../data/PlayersInfos";
import MatchCardsInfos from "../../data/MatchCardsInfos";

export function AddSelf({
  close,
  onMatch,
  addToMatch,
  matchId,
  team,
  playerPosition,
}) {
  const handleClick = () => {
    const match = MatchCardsInfos.find((e) => e.id === matchId);

    if (onMatch) {
      match[team][playerPosition] = BlankInfos;
      match.playersLeft += 1;
      addToMatch({ onMatch: false, open: false });
    }
    if (!onMatch) {
      match[team][playerPosition] = AdminInfos;
      match.playersLeft -= 1;
      addToMatch({ onMatch: true, open: false });
    }
  };

  return (
    <div className="modal-background">
      <div
        className="modal-container background-container"
        style={{ padding: "1.5rem" }}
      >
        {!onMatch ? (
          <p>Do you want to join the match</p>
        ) : (
          <p>Do you want to leave the match</p>
        )}
        <div className="inline">
          <button
            style={{ margin: "0" }}
            type="button"
            className="button next"
            variant="contained"
            onClick={handleClick}
          >
            YES
          </button>
          <button
            style={{ margin: "0" }}
            type="button"
            className="button back"
            onClick={close}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSelf;
