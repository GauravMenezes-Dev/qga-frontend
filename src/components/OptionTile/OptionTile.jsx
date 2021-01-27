import './OptionTile.css';

const OptionTile = ({text, subtext}) => (
    <div className="tile is-ancestor p-3">
        <div className="tile is-parent">
            <div className="tile is-child grow box has-background-dark">
                <p className="title has-text-white">{text}</p>
                <p className="subtitle has-text-white">{subtext}</p>
            </div>
        </div>
    </div>
)

export default OptionTile;