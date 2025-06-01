import "./GameLevel.css"
import "/global.css"


export const GameLevel = () => {
    return (
        <div className="background gamelevel-background">

            <div className="content gamelevel-content">


                <header className="header gamelevel-header">
                    <div className="score-container">
                        <img src="#" />
                        <span>100</span>
                    </div>

                    <div className="header-buttons">
                        <button className="header-btn sound-toggle">
                            zvuk     {/* bude doplněna ikona */}
                        </button>
                        <button className="header-btn btn-home">
                            domů     {/* bude doplněna ikona */}
                        </button>
                    </div>
                </header>

                <main className="gamelevel-main">

                    <div className="targets-container">
                        <div className="panel-wrapper">
                        <div className="field-value">3</div>
                        </div>
                        <div className="panel-wrapper">
                        <div className="field-value">2</div>
                        </div>
                    </div>

                    

                    <div className="challenge-container">
                        <div className="examples-panel">

                                <div className="examples-container">
                            <button className="example-btn">1 + 1</button>
                            <button className="example-btn">2 + 0</button>
                            <button className="example-btn">3 - 1</button>
                            </div>
                        </div>

                        <div className="obstacle-panel">

                        </div>
                    </div>

<div className="story-container">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt voluptatem sed saepe corrupti placeat expedita omnis nobis quidem eum, earum maiores cumque non, neque explicabo, obcaecati tempora! Rerum, quia repudiandae.</p>
</div>


                </main>
            </div>
        </div>

    );
};