// ClueCard Component - voorbeeld van toggle met useState
// de rest van het component maak je zelf
const [showDetail, setShowDetail] = useState(false);

<div className="clue" onClick={() => setShowDetail(!showDetail)}>
  <div className="clue-label">{clue.naam}</div>
  {showDetail && <div className="clue-detail">{clue.detail}</div>}
</div>
