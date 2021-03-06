import React from "react";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import { VscChromeClose } from "react-icons/vsc";
import { openInNewTab } from "@sections/utils";

type PropsPopup = {
  eventData: EventType;
  dayNo: number;
  date: string;
  setShowPopup: (arg: boolean) => void;
  idx: number;
};

const rand_imgs = [
  "img/dots-1.png",
  "img/dots-2.png",
  "img/dots-3.png",
  "img/dots-4.png",
  "img/dots-5.png",
  "img/dots-6.png",
  "img/dots-7.png",
  "img/dots-8.png",
];

const Popup = ({ eventData, dayNo, date, setShowPopup, idx }: PropsPopup) => {
  const { isMobile, isTablet } = useViewPort();
  const TokenidFormatter = (tokenId: number) => {
    return tokenId < 10
      ? "#000" + tokenId.toString()
      : tokenId < 100
      ? "#00" + tokenId.toString()
      : tokenId < 1000
      ? "#0" + tokenId.toString()
      : "#" + tokenId.toString();
  };
  return isMobile ? (
    <div>
      <div className="absolute -mt-50% z-20 w-screen90% min-h-screen90% bg-white left-5% flex flex-row px-7% py-10%	">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowPopup(false)}
        >
          <VscChromeClose size={25} />
        </button>
        <div className="w-100%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {dayNo}, {eventData.Time}
            </p>
            <p className="font-rlight text-24px">
              {TokenidFormatter(eventData.Tokenid)}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between pt-30px ">
            <div>
              <p className="font-rlight text-16px">Artist</p>
              <p className="pt-5px font-rnarrow text-18px">
                {eventData.ArtistName}
              </p>
            </div>
            <div className="pr-10%">
              <p className="font-rlight text-16px ">Owner</p>
              <p className="pt-5px font-rnarrow text-18px">Unreleased</p>
            </div>
          </div>
          <img
            alt="Logo"
            src={rand_imgs[idx % 8]}
            className="w-100% mt-10%"
            // max-w-400px max-h-400px
          />
          <div className="bg-beige px-3% py-2% mt-8%">
            <p className="font-rnarrow pt-15px"> {eventData.Headline}</p>
            <div className="flex flex-row items-center justify-between pt-15px">
              <p className="font-rlight ">@{eventData.TwitterUsername}</p>
              <button
                onClick={() => {
                  openInNewTab(eventData.TwitterUrl);
                }}
              >
                <img
                  alt="Logo"
                  src={"img/warline-TwitterLogo.png"}
                  className="w-50px"
                />
              </button>
            </div>
          </div>
          <p className="font-rlight text-24px mt-8%">Description</p>
          <p className="pt-2% font-rnarrow text-18px">
            To preserve the memory of the real events of that time, to spread
            truthful information among the digital community and in the world
            and to collect donations for the support of Ukraine.
          </p>
          <p className="pt-5% font-rnarrow text-18px">
            {
              "???????????????? ??????'?????? ?????? ?????????????? ?????????? ?????????? ????????, ???????????????????????? ???????????????? ???????????????????? ?????????? ????????????????-?????????????????? ???? ?? ?? ?????????? ???????????????????? ???????????????????? ???????????? ???? ?????????????????? ??????????????."
            }
          </p>
        </div>
      </div>

      <div className="fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70	"></div>
    </div>
  ) : isTablet ? (
    <div>
      <div className="absolute z-20 -mt-20% w-screen90% min-h-screen90% bg-white  left-5% flex flex-row px-7% py-10%	">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowPopup(false)}
        >
          <VscChromeClose size={25} />
        </button>
        <div className="w-100%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {dayNo}, {eventData.Time}
            </p>
            <p className="font-rlight text-24px">
              {TokenidFormatter(eventData.Tokenid)}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between pt-30px ">
            <div>
              <p className="font-rlight text-16px">Artist</p>
              <p className="pt-5px font-rnarrow text-18px">
                {eventData.ArtistName}
              </p>
            </div>
            <div className="pr-10%">
              <p className="font-rlight text-16px ">Owner</p>
              <p className="pt-5px font-rnarrow text-18px">Unreleased</p>
            </div>
          </div>
          <img
            alt="Logo"
            src={rand_imgs[idx % 8]}
            className="w-100% mt-10%"
            // max-w-400px max-h-400px
          />
          <div className="bg-beige px-3% py-2% mt-8%">
            <p className="font-rnarrow pt-15px"> {eventData.Headline}</p>
            <div className="flex flex-row items-center justify-between pt-15px">
              <p className="font-rlight ">@{eventData.TwitterUsername}</p>
              <button
                onClick={() => {
                  openInNewTab(eventData.TwitterUrl);
                }}
              >
                <img
                  alt="Logo"
                  src={"img/warline-TwitterLogo.png"}
                  className="w-50px"
                />
              </button>
            </div>
          </div>
          <p className="font-rlight text-24px mt-8%">Description</p>
          <p className="pt-2% font-rnarrow text-18px">
            To preserve the memory of the real events of that time, to spread
            truthful information among the digital community and in the world
            and to collect donations for the support of Ukraine.
          </p>
          <p className="pt-2% font-rnarrow text-18px">
            {
              "???????????????? ??????'?????? ?????? ?????????????? ?????????? ?????????? ????????, ???????????????????????? ???????????????? ???????????????????? ?????????? ????????????????-?????????????????? ???? ?? ?? ?????????? ???????????????????? ???????????????????? ???????????? ???? ?????????????????? ??????????????."
            }
          </p>
        </div>
      </div>

      <div className="fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70	"></div>
    </div>
  ) : (
    <div>
      <div className="  absolute z-20 w-screen90% min-h-screen90% bg-white left-5%  flex flex-row px-5% py-3%	">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowPopup(false)}
        >
          <VscChromeClose size={25} />
        </button>
        <div className="w-35%">
          <img
            alt="Logo"
            src={rand_imgs[idx % 8]}
            className="w-90% pr-5%"
            // max-w-400px max-h-400px
          />
        </div>
        <div className="w-65%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {dayNo}, {eventData.Time}
            </p>
            <p className="font-rlight text-24px">
              {TokenidFormatter(eventData.Tokenid)}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between pt-30px ">
            <div>
              <p className="font-rlight text-16px">Artist</p>
              <p className="pt-5px font-rnarrow text-18px">
                {eventData.ArtistName}
              </p>
            </div>
            <div className="pr-10%">
              <p className="font-rlight text-16px ">Owner</p>
              <p className="pt-5px font-rnarrow text-18px">Unreleased</p>
            </div>
          </div>

          <div className="bg-beige px-3% py-2% mt-5%">
            <p className="font-rnarrow pt-15px"> {eventData.Headline}</p>
            <div className="flex flex-row items-center justify-between pt-15px">
              <p className="font-rlight ">@{eventData.TwitterUsername}</p>
              <button
                onClick={() => {
                  openInNewTab(eventData.TwitterUrl);
                }}
              >
                <img
                  alt="Logo"
                  src={"img/warline-TwitterLogo.png"}
                  className="w-50px"
                />
              </button>
            </div>
          </div>
          <p className="font-rlight text-24px mt-5%">Description</p>
          <p className="pt-2% font-rnarrow text-18px">
            To preserve the memory of the real events of that time, to spread
            truthful information among the digital community and in the world
            and to collect donations for the support of Ukraine.
          </p>
          <p className="pt-2% font-rnarrow text-18px">
            {
              "???????????????? ??????'?????? ?????? ?????????????? ?????????? ?????????? ????????, ???????????????????????? ???????????????? ???????????????????? ?????????? ????????????????-?????????????????? ???? ?? ?? ?????????? ???????????????????? ???????????????????? ???????????? ???? ?????????????????? ??????????????."
            }
          </p>
        </div>
      </div>

      <div className=" fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70"></div>
    </div>
  );
};

export default Popup;
