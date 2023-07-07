import React from "react";

const News = () => {
  return (
    <div className="px-4 w-full">
      <div className="w-full px-8 mt-1 mb-4 rounded h-screen flex flex-col bg-[#c4dfc4] justify-center items-center">
        <h1 className="text-3xl underline text-black">Latest ECZ News</h1>
        <div className="flex flex-wrap w-full">
        <div>
        <h2 className="pt-8 text-2xl flex">
          More female candidates have registered for 2023 exams compared to
          males – ECZ
        </h2>
          <p>
            THE Examinations Council of Zambia (ECZ) has disclosed that more
            female candidates have registered for the 2023 examinations compared
            to male candidates. And Chilala says 24 names of teachers who were
            suspected to have been involved in examination malpractice during
            the 2022 GCE and Grade 9 External examinations have been submitted
            to the Ministry of Education for the disciplinary process. Speaking
            during a media briefing, Wednesday, ECZ Executive Director Dr
            Michael Chilala said over 500,000 females registered for the
            examinations compared to the 471,790 male candidates. “There are
            significantly more female candidates for all the 2023 examinations
            than male candidates. A total of 260, 367 Grade 7; 165,116 Grade 9;
            and 84,085 Grade 12 female candidates registered for the
            examinations…....{" "}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default News;
