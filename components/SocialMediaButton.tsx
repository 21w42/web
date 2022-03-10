import React from "react";
import { TWITTER_LINK, INSTAGRAM_LINK } from "../sections/Constants";
import { openInNewTab } from "../sections/utils";

type SocialMediaButtonProps = {
  twitter?: boolean;
  instagram?: boolean;
};

const SocialMediaButton = ({ twitter, instagram }: SocialMediaButtonProps) => {
  return (
    <div className="w-4% mr-2%">
      <button
        onClick={
          twitter
            ? () => openInNewTab(TWITTER_LINK)
            : instagram
            ? () => openInNewTab(INSTAGRAM_LINK)
            : undefined
        }
      >
        {twitter && <img alt="Twitterlogo" src={"/img/pd-TwitterLogo.png"} />}
        {instagram && <img alt="IGlogo" src={"/img/pd-IGLogo.png"} />}
      </button>
    </div>
  );
};

export default SocialMediaButton;