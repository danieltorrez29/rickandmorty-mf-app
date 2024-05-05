import React from "react";

import Counter from "mf_counter/Counter";

const HomePage = () => {
  return (
    <div className="container text-center mt-10">
      <Counter initialCounter={0} />
    </div>
  );
};

export default HomePage;
