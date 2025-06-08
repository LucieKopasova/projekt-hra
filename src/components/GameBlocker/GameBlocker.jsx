import './GameBlocker.css';

export const GameBlocker = ({blockerTarget}) => {
    return (
        <div className= {blockerTarget < 0 
            ? "result-blocker result-blocker--negative"
            : "result-blocker result-blocker"
        }
        >{blockerTarget}</div>
    )
}