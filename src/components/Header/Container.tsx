import React from "react";

const Container = ({ child }: { child: React.ReactNode }) => {
  return <div className="w-full p-2">{child}</div>;
};

export default Container;
