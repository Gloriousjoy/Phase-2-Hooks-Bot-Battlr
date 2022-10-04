import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addBot, dischargeBot}) {

  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard
          key={bot.id}
            bot={bot}
            botCard={addBot}
            handleDischargeBot= {dischargeBot}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
