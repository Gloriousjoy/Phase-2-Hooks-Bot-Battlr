import React from "react";
import BotCard from "./BotCard"

function BotCollection({allBots, setAllBots }) {

  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard
          key={bot.id}
            bot={bot}
            allBots={allBots}
            setAllBots={setAllBots} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
