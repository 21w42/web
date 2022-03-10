import React from "react";

const Media = (summary: string, outlet: string, url: string) => {
  return (
    <div className="tablet:pr-10%">
      <p className="font-rnarrow text-18px">{summary}</p>
      <p className="font-rlight text-16px mt-20px">{outlet}</p>
      <p className="font-rblack tablet:mt-30px mobile:mt-10px mb-50px">
        READ ARTICLE
      </p>
    </div>
  );
};
const ContentMedia = () => {
  return (
    <div className="pl-10% pr-10%   ">
      <p className="font-rblack text-5vw uppercase">MEDIA</p>
      <div className="h-5px w-100% bg-carbon"></div>
      <div className="mt-20px relative tablet:flex tablet:flex-row font-rlight justify-between">
        <div className="mr-3%	">
          {Media(
            "To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of U...",
            "New Your Times",
            "dkddk"
          )}
        </div>
        <div className="mr-3%	">
          {Media(
            "To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of U...",
            "New Your Times",
            "dkddk"
          )}
        </div>
        <div className=" mr-3%	">
          {Media(
            "To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of U...",
            "New Your Times",
            "dkddk"
          )}
        </div>
        <div className="	">
          {Media(
            "To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of U...",
            "New Your Times",
            "dkddk"
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentMedia;