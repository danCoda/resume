"use client";

import { useState } from "react";
import {
  danDescriptionStyleLabelCopyText,
  homepageCopyText,
} from "@/app/constants";
import { Switch } from "@/app/components/ui/switch";

export const DanDescriptionOld = () => {
  const [isPassionate, setIsPassionate] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleType = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsPassionate(!isPassionate);
      setIsTransitioning(false);
    }, 150); // NOTE: Switch content halfway through duration during fade.
  };

  return (
    <section className="space-y-3">
      <div className="flex justify-end items-center">
        <h2 className="text-xl font-semibold sr-only">About Me</h2>
        <label className={`cursor-pointer flex items-center text-blue-800`}>
          <Switch checked={isPassionate} onCheckedChange={toggleType} />
          <span className="pl-3 italic">
            {isPassionate
              ? danDescriptionStyleLabelCopyText.relax
              : danDescriptionStyleLabelCopyText.showPassion}
          </span>
        </label>
      </div>
      <div
        className={`space-y-3 transition-all duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {homepageCopyText.description[
          isPassionate ? "passionate" : "default"
        ].map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
  );
};

export const DanDescription = () => {
  return (
    <section className="space-y-3">
      <div className="flex justify-end items-center">
        <h2 className="text-xl font-semibold sr-only">About Me</h2>
      </div>
      <div className={`space-y-3`}>
        {homepageCopyText.description["default"].map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
  );
};
