import React from "react";
import { TWITTER_LINK, INSTAGRAM_LINK } from "../sections/Constants";
import { openInNewTab } from "../sections/utils";

type SocialMediaButtonProps = {
  twitter?: boolean;
  instagram?: boolean;
};

const SocialMediaButton = ({ twitter, instagram }: SocialMediaButtonProps) => {
  return (
    <div className="mobile:w-20% tablet:w-4% mobile:mr-6% tablet:mr-2% tablet:min-w-50px">
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
