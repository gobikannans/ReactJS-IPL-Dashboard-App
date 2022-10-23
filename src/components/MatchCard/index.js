import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details

  const matchCardStatus = () => {
    if (matchStatus === 'Won') {
      return 'match-status-won'
    }
    return 'match-status-lost'
  }

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-logo"
      />
      <p className="match-title">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={matchCardStatus()}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
