import React, { useEffect, useState } from "react";
import { useParameter } from "@storybook/api";
import { PARAM_KEY } from "./constants";
import { TabContent } from "./components/TabContent";
import { useStorybookApi } from "@storybook/api";

interface TabProps {
  active: boolean;
}

export const Tab: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const paramData = useParameter<string>(PARAM_KEY, "");
  const { getCurrentStoryData } = useStorybookApi();
  console.log(getCurrentStoryData());
  const [data, setData] = useState("test");
  useEffect(() => {
    if (active) {
      fetch("http://localhost:6007/getFile/stories/Button.stories.tsx").then(
        (res) => {
          res.text().then((text) => {
            setData(text);
          });
        }
      );
    }
  }, [active]);

  return active ? <TabContent code={data} /> : null;
};
