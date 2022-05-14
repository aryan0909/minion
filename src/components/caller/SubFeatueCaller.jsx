import React from "react";
import SubFeatures from "./components/SubFeatures";

function SubFeatueCaller(props) {
  return (
    <>
      <SubFeatures
        iconNumber={1}
        text={"55+ Hrs. of on demand video Content"}
      />
      <SubFeatures iconNumber={2} text={"25+ Assessments"} />
      <SubFeatures iconNumber={3} text={"Self Paced"} />
      <SubFeatures iconNumber={4} text={"Community Support"} />
    </>
  );
}

export default SubFeatueCaller;
