import gameData from '../../data/gameData.json'
import "./HomePage.css"


export const HomePage = () => {
    return (
        <div className="background homepage-background">  
   
            <div className="content homepage-content">


                <header className="header homepage-header">
                        <div className="header-buttons">
                        <button className="header-btn sound-toggle">
                            zvuk     {/* bude doplněna ikona */}
                        </button>
                    </div>
                </header>

                <main className="homepage-main">
                    <h1 className="game-title">Výprava Batoně</h1>

                    <div className="buttons">
                        <button className="btn btn-start">start</button>
                        <button className="btn btn-rules">pravidla</button>
                    </div>
                </main>
            </div>
        </div>

    );
};