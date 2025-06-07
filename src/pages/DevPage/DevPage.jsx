import { HealthBar } from "../../components/health/health";
import { HomeIcon } from "../../components/HomeIcon/HomeIcon";

import { SoundOffIcon } from "../../components/SoundOffIcon/SoundOffIcon";
import { SoundOnIcon } from "../../components/SoundOnIcon/SoundOnIcon";
import { Soundtrack } from "../../components/soundtrack.jsx/soundtrack";
import { TypewriterText } from "../../components/TypewriterText/TypewriterText";

export const DevPage = () => {
  return (
    <div className="container" style={{padding: "20px"}}>
      <Soundtrack />
      <header>
        <h1>Výprava Batoně</h1>
      </header>
      <main>
       {/*  <HomeIcon/>
        <SoundOffIcon/>
        <SoundOnIcon/>
        
        <HealthBar />
        <TypewriterText /> */}
     
      </main>
      <footer></footer>
    </div>
  );
};