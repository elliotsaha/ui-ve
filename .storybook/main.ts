import type { StorybookConfig } from "@storybook/react-vite";
import * as path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const storybookConfig: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config: any) => {
    config.plugins.push(
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      })
    );

    return config;
  },
};

export default storybookConfig;
